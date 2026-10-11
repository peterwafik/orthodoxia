# Translating the St. Mark commentary into English

The St. Mark Church (Heliopolis) commentary is translated from Arabic into English so that English
readers get the same interpretation as Arabic readers. The commentary is the Church's teaching:
the translation must say what the Arabic says. Nothing is added, nothing is left out, nothing is
"improved".

## Files

- Input: `content/translations/stmark-en/<BOOK>/<nnn>.ar.json`, a list of units
  `{ id, kind, hash, ar }`. Kinds: `section` (a section title), `paragraph`, `point` (a numbered
  point, "1- …"), `reflection` (a closing spiritual application).
- Output: `content/translations/stmark-en/<BOOK>/<nnn>.en.json`:

  ```json
  { "book": "JHN", "chunk": 1, "units": { "1.0.s": { "hash": "80fd413c44", "en": "(1) The Eternal Birth" } } }
  ```

  Every unit of the input appears once, with its `hash` copied unchanged.
- Check: `node scripts/commentary/translate-check.ts content/translations/stmark-en/<BOOK>/<nnn>.en.json`
  must print `ok`.

## Rules

1. **Faithful and complete.** Translate every sentence. Keep the order of ideas, the emphasis and
   the theology. Do not summarize, explain, soften or add.
2. **Plain, dignified English**, as in a church commentary. Sentence case. Prefer clear sentences
   to word-for-word syntax: split a long Arabic sentence when English needs it.
3. **Keep the structure.** A numbered point keeps its number ("1- …" → "1- …"); a section title keeps
   its number ("(2) …"); a verse quotation that opens a paragraph keeps its verse number.
4. **Bible quotations.** Translate them faithfully; when a quotation clearly corresponds to a verse,
   use the King James Version wording of that verse (modernize only *thee/thou* when the commentary
   itself speaks to the reader). Keep the quotation marks.
5. **References.** Convert Arabic book abbreviations and chapter:verse order to English:
   `(يو3: 16)` → `(Jn 3:16)`, `(1كو15: 24-28)` → `(1 Cor 15:24-28)`, `(ع5)` → `(v. 5)`,
   `(ع5-7)` → `(vv. 5-7)`, `(ص3: 4)` → `(ch. 3:4)`. Abbreviations: Gen, Ex, Lev, Num, Deut, Josh,
   Judg, Ruth, 1 Sam, 2 Sam, 1 Kgs, 2 Kgs, 1 Chr, 2 Chr, Ezra, Neh, Tob, Jdt, Esth, Job, Ps, Prov,
   Eccl, Song, Wis, Sir, Isa, Jer, Lam, Bar, Ezek, Dan, Hos, Joel, Amos, Obad, Jon, Mic, Nah, Hab,
   Zeph, Hag, Zech, Mal, 1 Macc, 2 Macc, Mt, Mk, Lk, Jn, Acts, Rom, 1 Cor, 2 Cor, Gal, Eph, Phil,
   Col, 1 Thess, 2 Thess, 1 Tim, 2 Tim, Titus, Phlm, Heb, Jas, 1 Pet, 2 Pet, 1 Jn, 2 Jn, 3 Jn, Jude,
   Rev. (مز Ps, أم Prov, جا Eccl, نش Song, إش Isa, حز Ezek, دا Dan, أع Acts, رؤ Rev, عب Heb,
   يع Jas, تك Gen, خر Ex, لا Lev, عد Num, تث Deut, يش Josh, قض Judg, را Ruth, صم Sam, مل Kgs,
   أخ Chr, نح Neh, أس Esth, أى Job, إر Jer, مرا Lam. The source sometimes has the letters of مل
   reversed: "1لم" / "2لم" before a chapter number is 1 / 2 Kgs.)
6. **Names** use the forms of the King James Version (Isaac, Elisha, Nebuchadnezzar, Holofernes);
   Coptic saints and fathers use their usual English names (St. Athanasius the Apostolic, St. Cyril
   the Great, St. John Chrysostom, St. Anthony, St. Pishoy, H.H. Pope Shenouda III).
7. **Keep the Arabic's honorifics and voice**: "the Lord Christ" (السيد المسيح), "the Holy Spirit",
   "St. Paul", "beloved" (أيها الحبيب), and the direct address of reflections ("you…").

## Glossary

| Arabic | English |
| --- | --- |
| السيد المسيح | the Lord Christ |
| الرب يسوع | the Lord Jesus |
| الله الكلمة / الأقنوم الثانى | God the Word / the Second Hypostasis |
| الأقنوم / الأقانيم | hypostasis / hypostases |
| الثالوث القدوس | the Holy Trinity |
| اللاهوت / الناسوت | (His) divinity / (His) humanity |
| التجسد / تجسد وتأنس | the Incarnation / became incarnate and became man |
| الفداء / الفادى | redemption / the Redeemer |
| الخلاص | salvation |
| الكنيسة | the Church |
| الأسرار المقدسة / سر | the Holy Sacraments (Mysteries) / sacrament |
| المعمودية | Baptism |
| الميرون | the Holy Myron (Chrismation) |
| التوبة والاعتراف | repentance and confession |
| أب الاعتراف | father of confession |
| سر الإفخارستيا / التناول / الأسرار | the Eucharist / Holy Communion / the Holy Mysteries |
| جسد الرب ودمه | the Body and Blood of the Lord |
| القداس الإلهى | the Divine Liturgy |
| الأجبية / صلوات السواعى | the Agpeya / the canonical hours |
| التسبحة | the Midnight Praise (Tasbeha) |
| الكاهن / الكهنوت | the priest / the priesthood |
| رئيس الكهنة | the high priest |
| الشماس | the deacon |
| الأب البطريرك | the Patriarch |
| الآباء / الآباء القديسون | the Fathers / the holy Fathers |
| الرهبنة / الراهب | monasticism / monk |
| الصوم / الصلاة / الميطانيات | fasting / prayer / prostrations (metanoias) |
| الجهاد الروحى | spiritual striving |
| الحياة الروحية | the spiritual life |
| الملكوت / ملكوت السموات | the Kingdom / the Kingdom of Heaven |
| الأبدية | eternity / eternal life |
| الدينونة | judgment |
| الخطية | sin |
| الشيطان / إبليس | Satan / the devil |
| الناموس | the Law |
| الأمم | the Gentiles (or the nations, by context) |
| الكتبة والفريسيون | the scribes and Pharisees |
| العشارون | the tax collectors |
| البشير / البشائر | the Evangelist / the Gospels |
| الرسول | the Apostle |
| النبوة / النبى | prophecy / the prophet |
| ترمز / رمز | signifies, is a type of / a symbol, type |
| المعنى الروحى | the spiritual meaning |
| ع | verse (v.) |
| ص / الأصحاح | chapter |
