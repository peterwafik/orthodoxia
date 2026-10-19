/**
 * Passages tied to one subtopic, beyond the starting passages of its family. Only places that are
 * unmistakable are listed: a named parable, a named miracle, a named event. Key: "<family number>:<English
 * name of the subtopic>". More are added here as they are checked; a chapter with no tagged passage simply
 * shows no marker. Chapter numbers are Hebrew/KJV numbering.
 */
export const TOPIC_PASSAGES: Readonly<Record<string, string>> = {
  // 6 Sin, repentance, and forgiveness
  '6:The prodigal son': 'Luke 15:11–32',
  '6:Zacchaeus and repentance': 'Luke 19:1–10',
  "6:Peter's repentance": 'Luke 22:54–62',
  // 9 Prayer
  "9:The Lord's Prayer": 'Matthew 6:9–13; Luke 11:1–4',
  // 15 Money
  '15:The rich young ruler': 'Matthew 19:16–30; Mark 10:17–31; Luke 18:18–30',
  "15:The widow's offering": 'Mark 12:41–44; Luke 21:1–4',
  // 16 Suffering
  '16:The suffering of Job': 'Job 1–2',
  // 17 Spiritual warfare
  '17:The armor of God': 'Ephesians 6:10–18',
  '17:Temptation in the wilderness': 'Matthew 4:1–11; Luke 4:1–13',
  // 23 Life and ministry of Jesus
  '23:Annunciation': 'Luke 1:26–38',
  '23:Birth of Jesus': 'Luke 2:1–20; Matthew 1:18–25',
  '23:Visit of the shepherds': 'Luke 2:8–20',
  '23:Visit of the Magi': 'Matthew 2:1–12',
  '23:Flight into Egypt': 'Matthew 2:13–15',
  '23:Baptism of Jesus': 'Matthew 3:13–17; Mark 1:9–11; Luke 3:21–22',
  '23:Temptation of Jesus': 'Matthew 4:1–11; Luke 4:1–13',
  '23:Sermon on the Mount': 'Matthew 5–7',
  '23:Walking on water': 'Matthew 14:22–33; John 6:16–21',
  '23:Calming the storm': 'Mark 4:35–41',
  '23:Transfiguration': 'Matthew 17:1–13; Mark 9:2–13; Luke 9:28–36',
  '23:Entry into Jerusalem': 'Matthew 21:1–11',
  "23:Washing the disciples' feet": 'John 13:1–17',
  '23:Last Supper': 'Luke 22:14–20',
  '23:Gethsemane': 'Matthew 26:36–46',
  '23:Crucifixion': 'Matthew 27:32–56',
  '23:Resurrection': 'Matthew 28:1–10',
  '23:Ascension': 'Acts 1:6–11; Luke 24:50–53',
  // 24 Miracles
  '24:Water into wine': 'John 2:1–11',
  "24:Raising Jairus's daughter": 'Mark 5:21–43',
  "24:Raising the widow's son": 'Luke 7:11–17',
  '24:Raising Lazarus': 'John 11:1–44',
  '24:Feeding the five thousand': 'Matthew 14:13–21; John 6:1–15',
  '24:Feeding the four thousand': 'Mark 8:1–10',
  '24:Walking on water': 'Matthew 14:22–33',
  '24:Miraculous catch of fish': 'Luke 5:1–11',
  '24:The withered fig tree': 'Matthew 21:18–22',
  // 34 Death and resurrection
  '34:Resurrection of Christ': 'Matthew 28; 1 Corinthians 15:1–11',
  // 36 Types
  "36:Noah's ark": 'Genesis 6–9',
  '36:Melchizedek': 'Genesis 14:18–20; Hebrews 7',
  '36:The Passover lamb': 'Exodus 12:1–14',
  '36:The Red Sea crossing': 'Exodus 14',
  '36:Manna from heaven': 'Exodus 16',
  '36:Water from the rock': 'Exodus 17:1–7',
  '36:The bronze serpent': 'Numbers 21:4–9',
  '36:The Day of Atonement': 'Leviticus 16',
  "36:Jonah's three days": 'Jonah 1:17',
  // 37 Covenants
  "37:God's covenant with Noah": 'Genesis 9:1–17',
  "37:God's covenant with Abraham": 'Genesis 15; Genesis 17',
  "37:God's covenant at Sinai": 'Exodus 19–24',
  "37:God's covenant with David": '2 Samuel 7',
  '37:The New Covenant': 'Jeremiah 31:31–34',
  // 38 Creation
  '38:Creation of humanity': 'Genesis 1:26–31; Genesis 2:7',
  '38:The Fall': 'Genesis 3',
  // 39 People (the books that are about one person)
  '39:Ruth': 'Ruth 1–4',
  '39:Esther': 'Esther 1–10',
  '39:Jonah': 'Jonah 1–4',
  '39:Job': 'Job 1–42',
  '39:Daniel': 'Daniel 1–12',
  '39:Zacchaeus': 'Luke 19:1–10',
  '39:Nicodemus': 'John 3:1–21; John 19:38–42',
  '39:The Samaritan woman': 'John 4:1–42',
  // 42 Parables
  '42:Parable of the Sower': 'Matthew 13:1–23',
  '42:Parable of the Good Samaritan': 'Luke 10:25–37',
  '42:Parable of the Prodigal Son': 'Luke 15:11–32',
  '42:Parable of the Lost Sheep': 'Luke 15:1–7',
  '42:Parable of the Talents': 'Matthew 25:14–30',
  '42:Parable of the Ten Virgins': 'Matthew 25:1–13',
  '42:Parable of the Pharisee and Tax Collector': 'Luke 18:9–14',
  '42:Parable of the Rich Fool': 'Luke 12:13–21',
  '42:Parable of the Workers in the Vineyard': 'Matthew 20:1–16',
  '42:Parable of the Wise and Foolish Builders': 'Matthew 7:24–27',
};
