/* ===================================================================
   kurse.js — der gesamte Inhalt dieser Seite.

   Hier pflegst du. An index.html musst du nichts ändern.

   Drei Blöcke:
     SEITE     – Kopfzeile, Schulname, Hinweis für Schüler
     LEHRPLAN  – die Themenbereiche je Fach und Klasse (Gliederung)
     MATERIAL  – die einzelnen Einträge (eine Zeile pro Material)

   Neues Material hinzufügen: unten in MATERIAL eine Zeile ergänzen.
   Der Wert bei "bereich" muss einer id aus LEHRPLAN entsprechen –
   passt er nicht, erscheint der Eintrag auf der Startseite in einem
   Kasten "Nicht zugeordnet", damit Tippfehler auffallen.
   =================================================================== */

const SEITE = {
  titel:     "Unterrichtsmaterial",
  schule:    "Karl-Schmidt-Rottluff-Gymnasium Chemnitz",
  lehrer:    "D. Müller",
  hinweis:   "Alles, was du für den Unterricht brauchst — nach Fach und Klassenstufe sortiert.",
  impressum: ""   // optional: Link oder Text für die Fußzeile
};

const FAECHER = [
  { id:"informatik", name:"Informatik", akzent:"#2FB3A0",
    info:"Programmieren, Rechner und Netze, Daten und Sicherheit" },
  { id:"englisch",   name:"Englisch",   akzent:"#E0A458",
    info:"Wortschatz, Grammatik, Texte und Prüfungsformate" }
];

/* -------------------------------------------------------------------
   LEHRPLAN — die Gliederung. Reihenfolge hier = Reihenfolge auf der Seite.
   Jeder Bereich: { id, name, info }
   ------------------------------------------------------------------- */
const LEHRPLAN = {

  informatik: {
    5: [
      { id:"computer-und-dateien", name:"Arbeiten am Computer", info:"Aufbau, Anmeldung, Dateien und Ordner, Speichern im Schulnetz" },
      { id:"tastschreiben",        name:"Tastschreiben",        info:"Zehnfingersystem, Schreibtraining" },
      { id:"texte-praesentieren",  name:"Texte und Präsentieren", info:"Erste Dokumente, saubere Gestaltung, vortragen" },
      { id:"internet-sicher",      name:"Sicher im Internet",   info:"Passwörter, persönliche Daten, Verhalten im Netz" },
      { id:"bild-ton-video",       name:"Bild, Ton und Video",  info:"Aufnehmen, bearbeiten, einbinden" }
    ],
    6: [
      { id:"recherche-quellen",  name:"Recherchieren und Quellen prüfen", info:"Suchen, bewerten, zitieren" },
      { id:"tabellen-einstieg",  name:"Tabellen",               info:"Daten erfassen, rechnen, Diagramme" },
      { id:"blockprogrammierung",name:"Programmieren mit Blöcken", info:"Scratch: Abläufe, Wiederholungen, Bedingungen" },
      { id:"urheberrecht-daten", name:"Urheberrecht und Datenschutz", info:"Was darf ich nutzen, was gebe ich preis" },
      { id:"medienprojekt",      name:"Medienprojekt",          info:"Fächerverbindendes Projekt im Rahmen M.I.T." }
    ],
    7: [
      { id:"informatiksysteme",  name:"Informatiksysteme",      info:"EVA-Prinzip, Hardware, Betriebssystem" },
      { id:"daten-dateien",      name:"Daten und Dateien",      info:"Dateiformate, Größen, Ordnung im Dateisystem" },
      { id:"textdokumente",      name:"Textdokumente",          info:"Formatvorlagen, Struktur, Layout" },
      { id:"bild-grafik",        name:"Bild und Grafik",        info:"Pixel und Vektor, Farbmodelle, Bearbeitung" },
      { id:"algorithmen-erste",  name:"Algorithmen — erste Schritte", info:"Abläufe beschreiben, Struktogramme" }
    ],
    8: [
      { id:"tabellenkalkulation",name:"Tabellenkalkulation",    info:"Formeln, Bezüge, Funktionen, Diagramme" },
      { id:"modellieren-daten",  name:"Daten modellieren",      info:"Strukturieren, filtern, auswerten" },
      { id:"programmierung-8",   name:"Algorithmierung und Programmierung", info:"Variablen, Verzweigungen, Schleifen" },
      { id:"netze-internet",     name:"Netze und Internet",     info:"Aufbau, Adressen, Dienste" },
      { id:"sicherheit-netz",    name:"Sicherheit im Netz",     info:"Bedrohungen, Schutzmaßnahmen, sicheres Verhalten" }
    ],
    9: [
      { id:"datenbanken",        name:"Datenbanken",            info:"Tabellen, Beziehungen, Abfragen" },
      { id:"programmierung-9",   name:"Programmierung vertiefen", info:"Funktionen, Listen, größere Aufgaben" },
      { id:"automaten-einstieg", name:"Automaten und Sprachen — Einstieg", info:"Zustände, Übergänge, Muster" },
      { id:"digitale-werkzeuge", name:"Digitale Werkzeuge",     info:"Werkzeuge sinnvoll auswählen und einsetzen" },
      { id:"projekt-9",          name:"Projekt",                info:"Eigenständige Arbeit mit Dokumentation" }
    ],
    10: [
      { id:"markdown-hefter",    name:"Markdown und digitaler Hefter", info:"Notizen strukturieren, Dokumentation aufbauen" },
      { id:"python-turtle",      name:"Python mit Turtle",      info:"Sequenzen, Funktionen, Schleifen, Parameter, Variablen" },
      { id:"python-grundlagen",  name:"Datentypen, Verzweigungen, Schleifen", info:"Textausgabe, Logik, While-Schleifen, Debugging" },
      { id:"sprachen-regex",     name:"Syntax, Semantik, reguläre Ausdrücke, Automaten", info:"Sprachen beschreiben und erkennen" },
      { id:"komplexaufgabe",     name:"Komplexaufgabe: Chatbot", info:"Planung, Umsetzung, Dokumentation, Präsentation" },
      { id:"wahlbereich-10",     name:"Wahlbereich",            info:"3D-Grafik oder Robotik" }
    ],
    11: [
      { id:"technische-informatik", name:"LB 1 — Technische Informatik", info:"Zahlsysteme, Kodierung, Boolesche Algebra, Schaltnetze, Rechnerarchitektur" },
      { id:"algorithmierung",       name:"LB 2 — Algorithmierung und Programmierung", info:"Python: Kontrollstrukturen, Datenstrukturen, Objektorientierung, Rekursion, Effizienz" },
      { id:"sprachen-automaten",    name:"LB 6 — Sprachen und Automaten", info:"Formale Sprachen, Grammatiken, endliche Automaten, Scanner und Parser" },
      { id:"rechnernetze",          name:"LB 3 — Rechnernetze", info:"Schichtenmodelle, Adressierung, Routing, Dienste, Sockets" },
      { id:"informationssicherheit",name:"LB 4 — Informationssicherheit", info:"Schutzziele, Chiffren, RSA, Signatur, Datenschutz" }
    ],
    12: [
      { id:"datenmanagement",    name:"LB 5 — Datenmanagement", info:"Datenbanken, Modellierung, SQL" },
      { id:"informatisches-projekt", name:"LB 7 — Informatisches Projekt", info:"Projektarbeit von der Planung bis zur Präsentation" },
      { id:"kuenstliche-intelligenz", name:"LB 8A — Künstliche Intelligenz", info:"Maschinelles Lernen, Anwendungen, Grenzen" },
      { id:"abitur-informatik",  name:"Abiturvorbereitung",     info:"Aufgabenformate, Wiederholung, Übungsklausuren" }
    ]
  },

  englisch: {
    5: [
      { id:"units-5",      name:"Access 1 — Units",   info:"Wortschatz und Themen der Lehrbucheinheiten" },
      { id:"grammatik-5",  name:"Grammatik",          info:"Formen üben und anwenden" },
      { id:"wortschatz-5", name:"Wortschatz",         info:"Vokabeltraining und Wortfelder" },
      { id:"hoeren-5",     name:"Hören und Aussprache", info:"Listening, Alphabet, Laute" },
      { id:"schreiben-5",  name:"Schreiben",          info:"Erste kurze Texte" },
      { id:"landeskunde-5",name:"Landeskunde",        info:"Großbritannien und englischsprachige Welt" },
      { id:"arbeiten-5",   name:"Klassenarbeiten",    info:"Formate, Übungsarbeiten, Lösungen" }
    ],
    6: [
      { id:"units-6",      name:"Access 2 — Units",   info:"Wortschatz und Themen der Lehrbucheinheiten" },
      { id:"grammatik-6",  name:"Grammatik",          info:"Zeiten, Steigerung, Satzbau" },
      { id:"wortschatz-6", name:"Wortschatz",         info:"Vokabeltraining und Wortfelder" },
      { id:"hoeren-6",     name:"Hören und Sprechen", info:"Listening und dialogisches Sprechen" },
      { id:"schreiben-6",  name:"Schreiben",          info:"Brief, Bericht, Beschreibung" },
      { id:"landeskunde-6",name:"Landeskunde",        info:"Leben in englischsprachigen Ländern" },
      { id:"arbeiten-6",   name:"Klassenarbeiten",    info:"Formate, Übungsarbeiten, Lösungen" }
    ],
    7: [
      { id:"units-7",      name:"Access 3 — Units",   info:"Wortschatz und Themen der Lehrbucheinheiten" },
      { id:"grammatik-7",  name:"Grammatik",          info:"Zeiten, Passiv, Bedingungssätze" },
      { id:"wortschatz-7", name:"Wortschatz",         info:"Vokabeltraining und Wortfelder" },
      { id:"lesen-hoeren-7",name:"Lesen und Hören",   info:"Leseverstehen und Listening" },
      { id:"schreiben-7",  name:"Schreiben",          info:"Zusammenhängende Texte verfassen" },
      { id:"landeskunde-7",name:"Landeskunde",        info:"Kultur und Alltag" },
      { id:"arbeiten-7",   name:"Klassenarbeiten",    info:"Formate, Übungsarbeiten, Lösungen" }
    ],
    8: [
      { id:"units-8",      name:"Access 4 — Units",   info:"Wortschatz und Themen der Lehrbucheinheiten" },
      { id:"grammatik-8",  name:"Grammatik",          info:"Indirekte Rede, Gerundium, Relativsätze" },
      { id:"wortschatz-8", name:"Wortschatz",         info:"Vokabeltraining und Wortfelder" },
      { id:"mediation-8",  name:"Sprachmittlung",     info:"Zwischen Deutsch und Englisch vermitteln" },
      { id:"schreiben-8",  name:"Schreiben",          info:"Textsorten und Aufbau" },
      { id:"landeskunde-8",name:"Landeskunde",        info:"USA und weitere englischsprachige Länder" },
      { id:"arbeiten-8",   name:"Klassenarbeiten",    info:"Formate, Übungsarbeiten, Lösungen" }
    ],
    9: [
      { id:"units-9",      name:"Access 5 — Units",   info:"Wortschatz und Themen der Lehrbucheinheiten" },
      { id:"grammatik-9",  name:"Grammatik",          info:"Partizipien, Satzverknüpfung, Wortbildung" },
      { id:"wortschatz-9", name:"Wortschatz",         info:"Themenwortschatz aufbauen" },
      { id:"mediation-9",  name:"Sprachmittlung",     info:"Zwischen Deutsch und Englisch vermitteln" },
      { id:"literatur-9",  name:"Literatur und Film", info:"Ganzschrift, Kurzgeschichten, Film" },
      { id:"schreiben-9",  name:"Schreiben",          info:"Argumentieren und Stellung nehmen" },
      { id:"arbeiten-9",   name:"Klassenarbeiten",    info:"Formate, Übungsarbeiten, Lösungen" }
    ],
    10: [
      { id:"units-10",     name:"Access 6 — Units",   info:"Wortschatz und Themen der Lehrbucheinheiten" },
      { id:"grammatik-10", name:"Grammatik",          info:"Wiederholung und Festigung, Register" },
      { id:"wortschatz-10",name:"Wortschatz",         info:"Themenwortschatz für die Oberstufe" },
      { id:"mediation-10", name:"Sprachmittlung",     info:"Zwischen Deutsch und Englisch vermitteln" },
      { id:"literatur-10", name:"Literatur und Film", info:"Ganzschrift und Filmanalyse" },
      { id:"uebergang-11", name:"Vorbereitung Oberstufe", info:"Methoden und Anforderungen der Kursstufe" },
      { id:"arbeiten-10",  name:"Klassenarbeiten",    info:"Formate, Übungsarbeiten, Lösungen" }
    ],
    11: [
      { id:"block-growing-up",   name:"Individual and Society I — Growing Up", info:"Generational conflict, expectations, values" },
      { id:"block-identity",     name:"Individual and Society II — Identity and Prejudice", info:"Diversity, stereotypes, belonging" },
      { id:"block-media",        name:"Individual and Society III — Media and Truth", info:"Persuasion, advertising, fake news" },
      { id:"literatur-11",       name:"Literature and Film",   info:"Ganzschrift und Film mit Analysewerkzeugen" },
      { id:"sprachmittel-11",    name:"Grammar, Register and Style", info:"Sprachliche Mittel für die Kursstufe" },
      { id:"pruefungsformate-11",name:"Prüfungsformate",       info:"Klausurformate und Bewertungsmaßstäbe" }
    ],
    12: [
      { id:"block-science",      name:"Individual and Society IV — Science and Environment", info:"Responsibility, progress, sustainability" },
      { id:"block-work",         name:"Individual and Society V — Work, Time and Values", info:"Working life, time, priorities" },
      { id:"block-global",       name:"Individual and Society VI — Globalisation", info:"Global challenges and perspectives" },
      { id:"literatur-12",       name:"Literature and Film",   info:"Ganzschrift und Film" },
      { id:"abitur-englisch",    name:"Abiturvorbereitung",    info:"Wiederholung, Methoden, Zeitplanung" },
      { id:"pruefungssimulation",name:"Prüfungssimulationen",  info:"Vollständige Übungsklausuren mit Lösungen" }
    ]
  }
};

/* -------------------------------------------------------------------
   MATERIAL — ein Eintrag je Zeile.

   Pflicht:  fach, klasse, bereich, titel, url
   Optional: typ   – werkzeug | arbeitsblatt | uebung | video | link | plan | loesung
             info  – ein Satz, was das ist
             stand – "JJJJ-MM" oder "JJJJ-MM-TT", steuert die Liste "Zuletzt ergänzt"
             neu   – true blendet ein Abzeichen ein
             klasse darf auch eine Liste sein: klasse: [11, 12]
   ------------------------------------------------------------------- */
const MATERIAL = [

  { fach:"informatik", klasse:11, bereich:"technische-informatik",
    titel:"Logikwerkstatt",
    typ:"werkzeug",
    url:"inf/sekii/logikwerkstatt.html",
    info:"Schaltnetze bauen, boolesche Ausdrücke eingeben, Wahrheitstabellen erzeugen und als SVG exportieren. Mit zehn Aufgaben vom Umkehrer bis zum Volladdierer.",
    stand:"2026-09", neu:true },

   { fach:"informatik", klasse:11, bereich:"technische-informatik",
    titel:"Der Von-Neumann-Rechner — Selbstlernkurs",
    typ:"uebung",
    url:"inf/sekii/von-neumann.html",
    info:"Aufbau, Befehlszyklus und Befehlssatz mit anklickbarem Schaubild, Zuordnungsübung, Schritt-für-Schritt-Simulation und Selbsttest. Enthält die Aufgaben 1.4.2 bis 1.4.4 mit aufklappbaren Lösungen.",
    stand:"2026-09", neu:true },

   { fach:"englisch", klasse:5, bereich:"grammatik-5",
    titel:"Unit 1 — personal pronouns",
    typ:"uebung",
    url:"eng/seki/personal-pronouns-quiz.html",
    info:"Übung zum Selbstlernen.",
    stand:"2026-09" }

  /* Vorlagen zum Kopieren — Raute vor der Zeile entfernen und anpassen:

  { fach:"informatik", klasse:10, bereich:"python-turtle",
    titel:"Befehlskarte Turtle",
    typ:"arbeitsblatt",
    url:"informatik/10/python-turtle/befehlskarte.pdf",
    info:"Alle Turtle-Befehle auf einer Seite.",
    stand:"2026-09" },

  { fach:"englisch", klasse:5, bereich:"wortschatz-5",
    titel:"Unit 1 — Vokabeltraining",
    typ:"uebung",
    url:"https://...",
    info:"Übung zum Selbstlernen.",
    stand:"2026-09" },

  { fach:"englisch", klasse:[11,12], bereich:"pruefungsformate-11",
    titel:"Bewertungsraster Klausur",
    typ:"plan",
    url:"englisch/11-12/bewertungsraster.pdf" },

  */
];
