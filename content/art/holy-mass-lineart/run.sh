#!/bin/bash
# Generates the five line-art scene stills with Higgsfield (gpt_image_2), using the two reference drawings for the style.
cd "$(dirname "$0")"
REF1="../../../St. Gregor and St. Cyril.png"
REF2="../../../gregory.jpeg"
for i in 1 2 3 4 5; do
  higgsfield generate create gpt_image_2 --prompt "$(cat prompts/full-$i.txt)" \
    --image-references "$REF1" --image-references "$REF2" \
    --aspect_ratio 3:2 --resolution 2k --quality high \
    --wait --wait-timeout 20m --json > jobs/scene-$i.json 2> jobs/scene-$i.err &
done
wait
echo done > jobs/ALL_DONE
