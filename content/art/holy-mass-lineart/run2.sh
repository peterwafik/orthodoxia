#!/bin/bash
# Second round: the same five scenes in colour, with the Coptic details corrected (haikal screen, altar and ciborium, who stands where).
# References: the two saint drawings (line style) and the first round's line-art scene (composition).
# Higgsfield allows four jobs at once, so scene 5 starts when the first four are done.
cd "$(dirname "$0")"
REF1="../../../St. Gregor and St. Cyril.png"
REF2="../../../gregory.jpeg"
gen() {
  i=$1
  higgsfield generate create gpt_image_2 --prompt "$(cat prompts2/style.txt prompts2/scene-$i.txt)" \
    --image-references "$REF1" --image-references "$REF2" --image-references "stills/scene-$i.png" \
    --aspect_ratio 3:2 --resolution 2k --quality high \
    --wait --wait-timeout 20m --json > jobs2/scene-$i.json 2> jobs2/scene-$i.err
}
for i in 1 2 3 4; do gen $i & done
wait
gen 5
echo done > jobs2/ALL_DONE
