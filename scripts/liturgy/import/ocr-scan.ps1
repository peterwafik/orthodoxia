# OCR of a scanned PDF with the Arabic (or English) recogniser that ships with Windows.
#
#   powershell -NoProfile -ExecutionPolicy Bypass -File scripts\liturgy\import\ocr-scan.ps1 -Pdf "<file.pdf>" -Out "<folder>" [-First 1] [-Last 0] [-Lang ar-SA] [-Scale 2.5]
#
# Writes <folder>\page-NNNN.txt (one line of the page per line, in the order the recogniser returns them) and
# prints the number of pages. -Last 0 means "to the last page". Pages that already have a file are skipped, so
# the script can be run again after an interruption. Nothing is sent anywhere; everything is local.
param(
  [Parameter(Mandatory = $true)][string]$Pdf,
  [Parameter(Mandatory = $true)][string]$Out,
  [int]$First = 1,
  [int]$Last = 0,
  [string]$Lang = 'ar-SA',
  [double]$Scale = 2.5
)

$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Runtime.WindowsRuntime
$null = [Windows.Storage.StorageFile, Windows.Storage, ContentType = WindowsRuntime]
$null = [Windows.Data.Pdf.PdfDocument, Windows.Data.Pdf, ContentType = WindowsRuntime]
$null = [Windows.Storage.Streams.InMemoryRandomAccessStream, Windows.Storage.Streams, ContentType = WindowsRuntime]
$null = [Windows.Graphics.Imaging.BitmapDecoder, Windows.Graphics.Imaging, ContentType = WindowsRuntime]
$null = [Windows.Media.Ocr.OcrEngine, Windows.Foundation, ContentType = WindowsRuntime]
$null = [Windows.Globalization.Language, Windows.Globalization, ContentType = WindowsRuntime]

$asTaskOp = ([System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object {
    $_.Name -eq 'AsTask' -and $_.GetParameters().Count -eq 1 -and $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncOperation`1'
  })[0]
function Await($operation, [Type]$type) {
  $task = $asTaskOp.MakeGenericMethod($type).Invoke($null, @($operation))
  $null = $task.Wait(-1)
  return $task.Result
}
$asTaskAction = ([System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object {
    $_.Name -eq 'AsTask' -and $_.GetParameters().Count -eq 1 -and $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncAction'
  })[0]
function AwaitAction($action) {
  $task = $asTaskAction.Invoke($null, @($action))
  $null = $task.Wait(-1)
}

$pdfPath = (Resolve-Path -LiteralPath $Pdf).Path
New-Item -ItemType Directory -Force -Path $Out | Out-Null
$outPath = (Resolve-Path -LiteralPath $Out).Path

$engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromLanguage([Windows.Globalization.Language]::new($Lang))
if ($null -eq $engine) { throw "No OCR recogniser for $Lang is installed (Settings > Time & language > Language & region)." }

$file = Await ([Windows.Storage.StorageFile]::GetFileFromPathAsync($pdfPath)) ([Windows.Storage.StorageFile])
$document = Await ([Windows.Data.Pdf.PdfDocument]::LoadFromFileAsync($file)) ([Windows.Data.Pdf.PdfDocument])
$count = [int]$document.PageCount
if ($Last -le 0 -or $Last -gt $count) { $Last = $count }
Write-Output "Pages in the file: $count. Reading $First to $Last."

for ($number = $First; $number -le $Last; $number++) {
  $target = Join-Path $outPath ('page-{0:D4}.txt' -f $number)
  if (Test-Path -LiteralPath $target) { continue }
  $page = $document.GetPage([uint32]($number - 1))
  $stream = [Windows.Storage.Streams.InMemoryRandomAccessStream]::new()
  $options = [Windows.Data.Pdf.PdfPageRenderOptions]::new()
  $options.DestinationWidth = [uint32]([Math]::Round($page.Size.Width * $Scale))
  AwaitAction ($page.RenderToStreamAsync($stream, $options))
  $decoder = Await ([Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($stream)) ([Windows.Graphics.Imaging.BitmapDecoder])
  $bitmap = Await ($decoder.GetSoftwareBitmapAsync()) ([Windows.Graphics.Imaging.SoftwareBitmap])
  $result = Await ($engine.RecognizeAsync($bitmap)) ([Windows.Media.Ocr.OcrResult])
  $arabicRange = '[' + [char]0x0600 + '-' + [char]0x06FF + ']'
  # The recogniser returns the words of an Arabic line from left to right: put them in reading order.
  $lines = @($result.Lines | ForEach-Object {
      $text = $_.Text
      $arabic = ([regex]::Matches($text, $arabicRange)).Count
      $latin = ([regex]::Matches($text, '[A-Za-z]')).Count
      if ($arabic -gt $latin) {
        $words = $text -split ' '
        [Array]::Reverse($words)
        $words -join ' '
      } else { $text }
    })
  [System.IO.File]::WriteAllText($target, ($lines -join "`r`n"), [System.Text.UTF8Encoding]::new($false))
  $stream.Dispose()
  $page.Dispose()
  if ($number % 10 -eq 0) { Write-Output "  page $number" }
}
Write-Output "Done. Text files are in $outPath"
