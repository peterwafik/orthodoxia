# Holy Mass scenes in line art

Five stills (2048 x 1360) generated with Higgsfield `gpt_image_2` (3:2, 2k, high), with the two saint drawings (`St. Gregor and St. Cyril.png`, `gregory.jpeg`) attached as the style reference. Prompts are in `prompts/` (`style.txt` plus `scene-N.txt`); `run.sh` regenerates them. Faces are left blank on purpose. Not yet reviewed by clergy.

| Scene | Job |
|---|---|
| 1 The sanctuary screen | `62837e79-1ec7-49b7-8d3c-d7e084574a2b` |
| 2 The choir and the Word | `77d9b7fe-e3a6-4665-ab87-3031be62d7c0` |
| 3 The nave at the kiss of peace | `4dcf05b5-e3d3-41cd-8912-14d5b6e730c4` |
| 4 The haikal and the altar | `af884355-8391-4dca-86ad-aadf8f8ff9e2` |
| 5 Communion and heaven | `97720cb7-d2b5-415f-911b-ecb4ef7307ea` |

They are not yet used by the site (the page still plays the clay-diorama film).

## Second round: colour and Coptic accuracy

The same scenes again in colour (`prompts2/`, `run2.sh`, `stills-color/`), with the saint drawings as the style reference and the first round's line art as the composition reference. Corrections from the Malaty chapter on the iconostasis (ml.coptic-treasures.com) and St-Takla: three doors with the Royal Door in a high arch and a curtain, Christ to the viewer's right of it and the Virgin to the left, the Last Supper directly above it and the Crucifixion at the top, a lamp before each icon (not Christ's) with ostrich eggs between them, small windows beside the doors, one free-standing altar under a ciborium on four columns, the priest at the altar and deacons around it, a standing congregation with no pews. Who stands exactly where at the altar is not confirmed by those sources: the prompt puts the officiating priest on the west side facing east, two priests beside him and deacons on the north and south sides.

| Scene | Job |
|---|---|
| 1 The sanctuary screen | `51dcb50a-d1db-4c00-854f-68e5e385e66f` |
| 2 The choir and the Word | `595dd65a-0528-489a-9827-334e0403bf2a` |
| 3 The nave at the kiss of peace | `067edd80-7f7f-4f34-878b-b483306a2a80` |
| 4 The haikal and the altar | `52b0e984-1548-40e1-951a-b765995f5a3c` |
| 5 Communion and heaven | refused three times (`NSFW content detected`, a false positive); the line-art still in `stills/scene-5.png` stands in |
