# Prompt for converting the 31 "Holy Mass steps" slides into the site's line-art style

The 31 files in `Holy Mass/Holy Mass steps/` (1.jpg to 31.jpg, 720 × 541) are Arabic explanation slides: a coloured frame, a title ribbon, a number badge, a text box in Arabic, and one or two **photos** of a priest or deacons doing that step at the altar. The goal is to turn **the photo part** into an illustration in the style of the line-art scenes made for the site, so it can sit on the page without the colourful slide around it.

## How to use it

1. In the image generator, choose **image-to-image / edit with references**. Attach, in this order:
   1. the slide you are converting (for example `7.jpg`) as the **content / composition** image;
   2. `St. Gregor and St. Cyril.png` and `gregory.jpeg` (the two saint drawings in the project folder) as **style references**;
   3. optionally one finished scene, `content/art/holy-mass-lineart/stills/scene-4.png`, as a second style reference for how an altar scene is drawn.
2. Paste the **master prompt** below, and replace the last line `STEP:` with the step's line from the list at the bottom (or write your own).
3. Output: **4:3 landscape**, the highest resolution available, one image per slide. Generate one slide at a time so the references stay clear.
4. Check each result against the checklist at the end before keeping it.

## Master prompt (black line art, the site's style) — paste this

```
Redraw the attached photograph as a hand-drawn ink illustration in exactly the drawing style of the two attached reference drawings (the saints), and of the third attached altar scene. Use the photograph only as the guide for the composition: keep the same people, the same poses, the same hands and gestures, the same objects on the altar, the same camera angle and the same framing, and draw them faithfully.

DRAWING STYLE (copy the references): a clean black ink outline drawing, like an Orthodox icon coloring-book page. Bold, even, smooth black outlines of one consistent weight on a pure white background. No shading, no gray tones, no hatching gradients, no color, no photographic or 3D look. Rich in detail: every garment has flowing drapery folds and embroidered borders and small crosses; the white tunics, hoods, stoles and cloths have many fold lines; the altar cloths show their folds and embroidery; objects (chalice, paten, spoon, censer, candles, cross, Gospel book, cloths, basins, bread) are drawn with all their small details. Small solid black accents are allowed for the red crosses on the vestments. Hair and beards are drawn as many flowing lines. If a halo is needed it is a thin circle.

FACES: every person's face is left completely blank: a smooth empty oval with no eyes, no eyebrows, no nose and no mouth. Ears, hair, beard, hands and clothes are drawn in full detail. Nobody in the drawing may be recognisable.

CLOTHING AND SETTING (accurate to a Coptic Orthodox church): the priest and deacons wear long white tunics, white head coverings or caps marked with a cross, stoles crossing the chest, and white vestments with embroidered crosses, exactly as in the photograph; they are barefoot at the altar. The altar is a free-standing table covered with white cloths, in the sanctuary (haikal) of a Coptic church. Keep every liturgical object exactly as it appears in the photograph; do not add objects that are not there and do not replace anything with Western or Byzantine equivalents.

LEAVE OUT everything that is not the photograph: do not draw the slide's colored frame or border, the title ribbon, the number circle, the text box, any Arabic or other writing, any logo, any watermark. No text, no letters, no numbers anywhere. No background pattern: the background is plain white, except for the parts of the church that are visible in the photograph (altar, cloths, curtain, carpet, lamps, walls), which are drawn as line art too. If the slide has two photos, draw them as two separate illustrations side by side, each in its own simple rectangular outline, of equal size.

Composition: 4:3 landscape, subject large and centred, generous clean margins, nothing cut off awkwardly.

STEP:
```

## Variant: colored (like the second round of scenes)

If you want the coloured style instead of black line art, use the master prompt but **replace the sentence** "No shading, no gray tones, no hatching gradients, no color, no photographic or 3D look." with:

> Fully colored with flat, rich, slightly watercolor-like fills inside the black outlines, like an illuminated Coptic icon: pure white and cream for the vestments and cloths, crimson and gold for the crosses and borders, warm gold for lamps, candlesticks, crosses and the censer, dark brown wood, cream stone, soft terracotta floor. The black outlines stay strong and clear. No photographic or 3D look.

and **replace** "pure white background" with "a plain warm ivory background".

For the website's identity, the **black line art** version is the better match (the site is line drawing in gold and ink); the coloured one matches the five big scenes in `stills-color/`.

## Step lines to put after `STEP:`

The titles are the Arabic headings of the slides (read from the contact sheet; check any that look wrong). Each line says what the photo shows, so the generator does not misread a small photo.

| # | Slide heading | Line to put after `STEP:` |
|---|---|---|
| 1 | فرش المذبح | Spreading the white altar cloth over the altar. |
| 2 | غسل أيدي الكاهن | The priest washes his hands over a basin; a deacon pours water from a jug. |
| 3 | إختيار الحمل | The priest holds up and chooses one round loaf (the Lamb) from several loaves. |
| 4 | عند إختيار الحمل | The priest lays his right hand over the loaves, his hands crossed in the form of a cross. |
| 5 | تعميد الحمل | The priest wipes the loaf (the Lamb) with water in a basin; two small views of the same act. |
| 6 | لف الحمل | The priest wraps the loaf in a white cloth, then lays it on the cloth; two small views. |
| 7 | الطواف حول المذبح | The priest, wearing a white hood, carries the covered Lamb on his hands and walks around the altar. |
| 8 | صب الخمر | The priest pours wine and a little water into the chalice; two small views. |
| 9 | تغطية المذبح | The deacon and priest spread a large white cloth over the whole altar; two small views. |
| 10 | تحليل الخدام | The priest kisses the altar and bows before it, with a deacon beside him; two small views. |
| 11 | أيادي البخور | The priest holds a censer with five chains and incenses the altar; smoke rises. |
| 12 | دورة البولس | The priest walks around the church with the censer in procession; people stand along the way. |
| 13 | دورة الأبركسيس | The priest walks in procession in the choir area in front of the sanctuary with the censer. |
| 14 | قراءة السنكسار | The priest stands at a lectern and reads aloud from a large book. |
| 15 | السلام لجميعكم | The priest, facing the people, raises his hand in blessing before the Gospel; a deacon beside him. |
| 16 | إضاءة الشموع | Lighting the candles for the Gospel reading; two deacons hold candlesticks; two small views. |
| 17 | غسل اليدين | The priest washes his hands before the Gospel; a deacon holds the basin; two small views. |
| 18 | أخطات سامحونى | The priest bows toward the people, asking forgiveness, with his hand on his chest. |
| 19 | رفع الأبروسفارين | The priest lifts the white veil (the prosphorin) from over the chalice, holding it up; two small views. |
| 20 | تبديل اللفائف | The priest changes the veils: he lifts the cloth from the paten and lays another; two small views. |
| 21 | أجيوس | The priest lifts the cloth off the chalice and paten and shows them; the altar and censer in front. |
| 22 | تجسد وتأنس | The priest raises incense over the altar with the censer and lifts his hand toward the altar. |
| 23 | وقام من الأموات | The priest lifts the veil and raises the chalice slightly; the altar in front. |
| 24 | ووضع لنا | The priest and deacon at the altar: the priest raises his hands and the deacon swings the censer. |
| 25 | أخذ خبزا على يديه | The priest takes the bread in his hands, lifting it from the paten; two small views. |
| 26 | الرشومات | The priest holds the bread and makes the sign of the cross over it three times. |
| 27 | التقسيم | The priest holds a round loaf in his hand and breaks it carefully into parts. |
| 28 | خذوا أشربوا | The priest uncovers the chalice, lifts it and makes the sign of the cross with it. |
| 29 | السجود | The priest bows low with his hands raised before the altar, the altar cloth covering it. |
| 30 | السبعة أواشي | The priest raises the veils with his hands while praying; two small views. |
| 31 | المجمع | The priest holds the veils over the altar while praying; the congregation hall seen small in the background. |

## Checklist for each result

- Black outlines only (or the agreed colours), no gray or photographic look.
- Every face blank: no eyes, nose or mouth. Hands drawn clearly with five fingers.
- Same action, same objects, same pose as the slide's photo.
- No writing of any kind, no colored frame, no number badge, no ribbon.
- Vestments and cloths white with embroidered crosses; clergy barefoot; nothing Western or Byzantine added.
- If it came out wrong, add one sentence to the prompt naming the fault ("the censer must have five chains", "only one person is in this photo") and regenerate that slide alone.

## Notes

- The photographs show real people in a real church. Leaving the faces blank also keeps them from being identified. If the photos are not yours, check that you can publish drawings made from them before putting them on the site.
- The slide texts are in Arabic and credited to whoever made the slides. The drawings should replace the photos only; the website writes its own text for each stop.
- Nothing from this folder is on the site yet.
