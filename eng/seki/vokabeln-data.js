/* ===================================================================
   VOKABELN — gemeinsamer Wortschatz für Bingo, Memory, Spielbrett
   und Bombenspiel (Klasse 5, Access 1).

   Jeder Eintrag: { en, de, thema, alt?, unit? }
   alt  = weitere akzeptierte deutsche Übersetzungen (für Word Pop)
   unit = 1 für die Wörter aus Unit 1 (At home with friends / The postman)
   thema steuert die Themenauswahl im Bombenspiel und kann in den
   anderen Spielen zum Filtern genutzt werden.

   Neue Wörter einfach unten ergänzen — alle vier Spiele nutzen
   automatisch die aktuelle Liste.
   =================================================================== */
const VOKABELN = [
  // Schule und Klassenzimmer
  { en:"class",      de:"die Klasse",        thema:"schule", unit:1 },
  { en:"chair",      de:"der Stuhl",         thema:"schule" },
  { en:"table",      de:"der Tisch",         thema:"schule" },
  { en:"pupil",      de:"der Schüler",       thema:"schule" },
  { en:"teacher",    de:"der Lehrer",        thema:"schule" },
  { en:"friend",     de:"der Freund",        thema:"schule" },
  { en:"school",     de:"die Schule",        thema:"schule" },
  { en:"lesson",     de:"die Stunde",        thema:"schule" },
  { en:"subject",    de:"das Fach",          thema:"schule" },
  { en:"worksheet",  de:"das Arbeitsblatt",  thema:"schule" },
  { en:"page",       de:"die Seite",         thema:"schule" },
  { en:"classmate",  de:"der Klassenkamerad",thema:"schule" },
  { en:"neighbour",  de:"der Nachbar",       thema:"schule" },

  // Federmäppchen
  { en:"pencil",     de:"der Bleistift",     thema:"federmaeppchen" },
  { en:"pen",        de:"der Kugelschreiber",thema:"federmaeppchen" },
  { en:"ruler",      de:"das Lineal",        thema:"federmaeppchen" },
  { en:"eraser",     de:"der Radiergummi",   thema:"federmaeppchen" },
  { en:"sharpener",  de:"der Spitzer",       thema:"federmaeppchen" },
  { en:"scissors",   de:"die Schere",        thema:"federmaeppchen" },
  { en:"glue",       de:"der Klebstoff",     thema:"federmaeppchen" },
  { en:"marker",     de:"der Filzstift",     thema:"federmaeppchen" },
  { en:"crayon",     de:"der Buntstift",     thema:"federmaeppchen" },
  { en:"notebook",   de:"das Heft",          thema:"federmaeppchen" },
  { en:"bag",        de:"die Tasche",        thema:"federmaeppchen" },

  // Familie
  { en:"brother",    de:"der Bruder",        thema:"familie" },
  { en:"sister",     de:"die Schwester",     thema:"familie" },
  { en:"mother",     de:"die Mutter",        thema:"familie" },
  { en:"father",     de:"der Vater",         thema:"familie" },
  { en:"family",     de:"die Familie",       thema:"familie" },
  { en:"everyone",   de:"alle",              thema:"familie", unit:1 },

  // Tiere
  { en:"animal",     de:"das Tier",          thema:"tiere" },
  { en:"horse",      de:"das Pferd",         thema:"tiere" },
  { en:"sheep",      de:"das Schaf",         thema:"tiere" },
  { en:"mouse",      de:"die Maus",          thema:"tiere" },
  { en:"rabbit",     de:"das Kaninchen",     thema:"tiere" },
  { en:"spider",     de:"die Spinne",        thema:"tiere" },
  { en:"snake",      de:"die Schlange",      thema:"tiere" },
  { en:"dog",        de:"der Hund",          thema:"tiere" },
  { en:"cat",        de:"die Katze",         thema:"tiere" },
  { en:"bird",       de:"der Vogel",         thema:"tiere" },
  { en:"fish",       de:"der Fisch",         thema:"tiere" },
  { en:"lion",       de:"der Löwe",          thema:"tiere" },
  { en:"tiger",      de:"der Tiger",         thema:"tiere" },
  { en:"elephant",   de:"der Elefant",       thema:"tiere" },
  { en:"monkey",     de:"der Affe",          thema:"tiere" },
  { en:"bear",       de:"der Bär",           thema:"tiere" },
  { en:"cow",        de:"die Kuh",           thema:"tiere" },
  { en:"pig",        de:"das Schwein",       thema:"tiere" },
  { en:"duck",       de:"die Ente",          thema:"tiere" },
  { en:"frog",       de:"der Frosch",        thema:"tiere" },
  { en:"fox",        de:"der Fuchs",         thema:"tiere" },

  // Zu Hause
  { en:"house",      de:"das Haus",          thema:"zuhause", unit:1 },
  { en:"doorbell",   de:"die Türklingel",    thema:"zuhause", unit:1 },
  { en:"kitchen",    de:"die Küche",         thema:"zuhause" },
  { en:"bedroom",    de:"das Schlafzimmer",  thema:"zuhause" },
  { en:"window",     de:"das Fenster",       thema:"zuhause" },
  { en:"dinner",     de:"das Abendessen",    thema:"zuhause" },
  { en:"breakfast",  de:"das Frühstück",     thema:"zuhause" },

  // Orte und Umgebung
  { en:"garden",     de:"der Garten",        thema:"orte" },
  { en:"forest",     de:"der Wald",          thema:"orte" },
  { en:"street",     de:"die Straße",        thema:"orte" },
  { en:"corner",     de:"die Ecke",          thema:"orte" },
  { en:"market",     de:"der Markt",         thema:"orte" },
  { en:"castle",     de:"das Schloss",       thema:"orte" },
  { en:"museum",     de:"das Museum",        thema:"orte" },
  { en:"library",    de:"die Bücherei",      thema:"orte" },
  { en:"country",    de:"das Land",          thema:"orte" },
  { en:"island",     de:"die Insel",         thema:"orte" },
  { en:"village",    de:"das Dorf",          thema:"orte" },
  { en:"beach",      de:"der Strand",        thema:"orte" },

  // Farben
  { en:"purple",     de:"lila",              thema:"farben" },
  { en:"orange",     de:"orange",            thema:"farben" },
  { en:"yellow",     de:"gelb",              thema:"farben" },
  { en:"brown",      de:"braun",             thema:"farben" },
  { en:"black",      de:"schwarz",           thema:"farben" },
  { en:"white",      de:"weiß",              thema:"farben" },
  { en:"pink",       de:"rosa",              thema:"farben" },
  { en:"grey",       de:"grau",              thema:"farben" },
  { en:"red",        de:"rot",               thema:"farben" },
  { en:"green",      de:"grün",              thema:"farben" },

  // Zeit
  { en:"summer",     de:"der Sommer",        thema:"zeit" },
  { en:"winter",     de:"der Winter",        thema:"zeit" },
  { en:"autumn",     de:"der Herbst",        thema:"zeit" },
  { en:"spring",     de:"der Frühling",      thema:"zeit" },
  { en:"morning",    de:"der Morgen",        thema:"zeit" },
  { en:"evening",    de:"der Abend",         thema:"zeit" },
  { en:"weekend",    de:"das Wochenende",    thema:"zeit" },

  // Verben
  { en:"write",      de:"schreiben",         thema:"verben" },
  { en:"check",      de:"prüfen",            thema:"verben" },
  { en:"open",       de:"öffnen",            thema:"verben" },
  { en:"close",      de:"schließen",         thema:"verben" },
  { en:"speak",      de:"sprechen",          thema:"verben" },
  { en:"think",      de:"denken",            thema:"verben" },
  { en:"read",       de:"lesen",             thema:"verben" },
  { en:"describe",   de:"beschreiben",       thema:"verben", unit:1 },
  { en:"spell",      de:"buchstabieren",     thema:"verben" },

  // Zahlen
  { en:"one", de:"eins", thema:"zahlen", alt:["ein", "eine"] },
  { en:"two", de:"zwei", thema:"zahlen" },
  { en:"three", de:"drei", thema:"zahlen" },
  { en:"four", de:"vier", thema:"zahlen" },
  { en:"five", de:"fünf", thema:"zahlen" },
  { en:"six", de:"sechs", thema:"zahlen" },
  { en:"seven", de:"sieben", thema:"zahlen" },
  { en:"eight", de:"acht", thema:"zahlen" },
  { en:"nine", de:"neun", thema:"zahlen" },
  { en:"ten", de:"zehn", thema:"zahlen" },
  { en:"eleven", de:"elf", thema:"zahlen" },
  { en:"twelve", de:"zwölf", thema:"zahlen" },
  { en:"thirteen", de:"dreizehn", thema:"zahlen" },
  { en:"fourteen", de:"vierzehn", thema:"zahlen" },
  { en:"fifteen", de:"fünfzehn", thema:"zahlen" },
  { en:"sixteen", de:"sechzehn", thema:"zahlen" },
  { en:"seventeen", de:"siebzehn", thema:"zahlen" },
  { en:"eighteen", de:"achtzehn", thema:"zahlen" },
  { en:"nineteen", de:"neunzehn", thema:"zahlen" },
  { en:"twenty", de:"zwanzig", thema:"zahlen" },
  { en:"thirty", de:"dreißig", thema:"zahlen" },
  { en:"forty", de:"vierzig", thema:"zahlen" },
  { en:"fifty", de:"fünfzig", thema:"zahlen" },
  { en:"hundred", de:"hundert", thema:"zahlen" },

  // Wochentage
  { en:"monday", de:"Montag", thema:"wochentage" },
  { en:"tuesday", de:"Dienstag", thema:"wochentage" },
  { en:"wednesday", de:"Mittwoch", thema:"wochentage" },
  { en:"thursday", de:"Donnerstag", thema:"wochentage" },
  { en:"friday", de:"Freitag", thema:"wochentage" },
  { en:"saturday", de:"Samstag", thema:"wochentage" },
  { en:"sunday", de:"Sonntag", thema:"wochentage" },

  // Monate
  { en:"january", de:"Januar", thema:"monate" },
  { en:"february", de:"Februar", thema:"monate" },
  { en:"march", de:"März", thema:"monate" },
  { en:"april", de:"April", thema:"monate" },
  { en:"may", de:"Mai", thema:"monate" },
  { en:"june", de:"Juni", thema:"monate" },
  { en:"july", de:"Juli", thema:"monate" },
  { en:"august", de:"August", thema:"monate" },
  { en:"september", de:"September", thema:"monate" },
  { en:"october", de:"Oktober", thema:"monate" },
  { en:"november", de:"November", thema:"monate" },
  { en:"december", de:"Dezember", thema:"monate" },

  // Weitere Farben, Tiere, Federmäppchen
  { en:"blue", de:"blau", thema:"farben" },
  { en:"hamster", de:"der Hamster", thema:"tiere" },
  { en:"parrot", de:"der Papagei", thema:"tiere" },
  { en:"goat", de:"die Ziege", thema:"tiere" },
  { en:"chicken", de:"das Huhn", thema:"tiere" },
  { en:"giraffe", de:"die Giraffe", thema:"tiere" },
  { en:"zebra", de:"das Zebra", thema:"tiere" },
  { en:"turtle", de:"die Schildkröte", thema:"tiere" },
  { en:"penguin", de:"der Pinguin", thema:"tiere" },
  { en:"book", de:"das Buch", thema:"federmaeppchen" },
  { en:"paper", de:"das Papier", thema:"federmaeppchen" },
  { en:"calculator", de:"der Taschenrechner", thema:"federmaeppchen" },

  // Unit 1: At home with friends / The postman
  { en:"home", de:"zu Hause", thema:"zuhause", alt:["daheim", "zuhause", "das Zuhause"], unit:1 },
  { en:"houses", de:"die Häuser", thema:"zuhause", unit:1 },
  { en:"maybe", de:"vielleicht", thema:"unit1", unit:1 },
  { en:"upstairs", de:"nach oben", thema:"unit1", alt:["oben"], unit:1 },
  { en:"downstairs", de:"nach unten", thema:"unit1", alt:["unten"], unit:1 },
  { en:"hour", de:"die Stunde (60 Minuten)", thema:"unit1", alt:["Stunde"], unit:1 },
  { en:"divorced", de:"geschieden / getrennt", thema:"unit1", unit:1 },
  { en:"postman", de:"der Postbote", thema:"unit1", alt:["Briefträger"], unit:1 },
  { en:"picture", de:"das Bild", thema:"unit1", unit:1 },
  { en:"please", de:"bitte", thema:"unit1", unit:1 },
  { en:"come", de:"kommen", thema:"unit1", alt:["komm"], unit:1 }
];

const THEMEN = {
  schule:        "Schule",
  federmaeppchen:"Federmäppchen",
  familie:       "Familie",
  tiere:         "Tiere",
  zuhause:       "Zu Hause",
  orte:          "Orte",
  farben:        "Farben",
  zeit:          "Zeit",
  verben:        "Verben",
  zahlen:        "Zahlen",
  wochentage:    "Wochentage",
  monate:        "Monate",
  unit1:         "Unit 1: At home with friends"
};
