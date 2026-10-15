export const CHALLENGES = [
  {
    titel: 'Der Lernhelfer',
    aufgabe: 'Ein selbst beobachtetes Problem beim Lernen finden und ein Gerät bauen, das es löst.',
    schwerpunkt: 'Problemfindung und Ideenvielfalt',
  },
  {
    titel: 'Die bewegliche Brücke',
    aufgabe: 'Eine Brücke bauen, die aufklappt, wegdreht oder sich anhebt und dabei 200 g trägt.',
    schwerpunkt: 'Mechanik, Kraft und Übersetzung',
  },
  {
    titel: 'Der Wächter',
    aufgabe: 'Etwas bauen, das von selbst meldet, wenn ein Ereignis eintritt.',
    schwerpunkt: 'Wenn-Dann-Regel, Fühler und Signal',
  },
  {
    titel: 'Die Kettenreaktion',
    aufgabe: 'Vier Gruppen bauen je eine Station, die einen Anstoss annimmt und weitergibt.',
    schwerpunkt: 'Schnittstelle und Zusammenarbeit über Gruppen hinweg',
  },
];

export const SCHRITTE = [
  { nr: 1, name: 'Erfahren', was: 'Beobachten und sammeln, ohne zu lösen' },
  { nr: 2, name: 'Festlegen', was: 'Gemeinsam entscheiden und begründen' },
  { nr: 3, name: 'Entwerfen', was: 'Ideen erzeugen oder Bauteile erproben' },
  { nr: 4, name: 'Prüfen', was: 'Der jeweils andere Teil des zweiten Tages' },
  { nr: 5, name: 'Entscheiden', was: 'Auswählen und bemasst zeichnen' },
  { nr: 6, name: 'Bauen', was: 'Erste Fassung arbeitsteilig herstellen' },
  { nr: 7, name: 'Testen', was: 'Eine Sache ändern und erneut testen' },
  { nr: 8, name: 'Zeigen', was: 'Vorführen, reflektieren, Box einräumen' },
];

export const BOXEN = [
  {
    name: 'Materialbox',
    art: 'Grundlagenbox',
    inhalt: 'Wellkarton in Zuschnitten, Sperrholz- und MDF-Platten. Verbrauchsmaterial, das nach dem Einsatz ersetzt wird.',
  },
  {
    name: 'Elektrobox',
    art: 'Grundlagenbox',
    inhalt:
      'Solarzelle mit Lade- und Speichermodul, Getriebe- und Gleichstrommotoren, LEDs, Schalter und Taster, Krokodilkabel, Schaltdraht, Riemenscheiben, Holzstäbchen.',
  },
  {
    name: 'Energiebox',
    art: 'Themenbox',
    inhalt: 'Handkurbelgenerator mit Getriebe, Windrad und Messgerät. Ergänzt die Elektrobox um Erzeugung und Messung.',
  },
  {
    name: 'Konstruktionsbox',
    art: 'Themenbox',
    inhalt: 'Lochplatte, Zahnräder aus Sperrholz, Rundstäbe, Holzlatten mit Bohrungen, Kunststoffschrauben und Halterungen.',
  },
];

export const KOMPETENZEN = [
  {
    bereich: 'Personale Kompetenzen',
    farbe: '#9B2D63',
    liste: [
      'Eigeninitiative',
      'Offenheit',
      'Selbstreflexion',
      'Überzeugungskraft',
      'Resilienz',
      'Verantwortung',
      'Nachhaltigkeit',
    ],
    ab: 1,
  },
  {
    bereich: 'Soziale Kompetenzen',
    farbe: '#C96436',
    liste: ['Teamarbeit', 'Unterstützung', 'Feedback', 'Fehlerkultur'],
    ab: 8,
  },
  {
    bereich: 'Methodenkompetenzen',
    farbe: '#6A9A2B',
    liste: ['Problemlösen', 'Kreativität', 'Produktentwicklung', 'Planung und Organisation', 'Informationskompetenz'],
    ab: 12,
  },
  {
    bereich: 'Fachkompetenzen',
    farbe: '#2E7FB8',
    liste: [
      'Digitale Fabrikation',
      'Physical Computing',
      'Programmieren',
      'Elektronik',
      'Mechanik',
      'Material- und Werkzeugkunde',
      'Designkompetenz',
      'Angewandte Medienkompetenz',
    ],
    ab: 17,
  },
];

export const MERKMALE = [
  {
    titel: 'Eigene Ideen umsetzen',
    text: 'Die Maker-Bewegung verbindet den DIY-Gedanken mit traditionellem Handwerk und neuen Technologien. Massgeblich sind praktisches Lernen, Tüfteln, Kreativität und Eigenmotivation.',
  },
  {
    titel: 'Prozess vor Produkt',
    text: 'Nicht das perfekte Endprodukt zählt, sondern die Qualität der Lösung in Bezug auf Kreativität und Problemlösekompetenz.',
  },
  {
    titel: 'Lehrperson als Mentor:in',
    text: 'Making ist ein Balanceakt zwischen der Autonomie der Lernenden und dem Bildungsauftrag. Lehrpersonen begleiten, statt Wissen zu vermitteln.',
  },
  {
    titel: 'Selbstwirksamkeit als Ziel',
    text: 'Maker Education zielt auf Empowerment. Lernen gilt dabei als selbstgesteuerter, kontextbezogener und sozial-kommunikativer Prozess.',
  },
  {
    titel: 'Ein Raum – oder eine Kiste',
    text: 'Ein MakerSpace ist ein offener Werkstattraum, in dem Maker:innen aller Altersgruppen ihre Ideen umsetzen. Der Mobile MakerSpace bringt ihn dorthin, wo keiner steht.',
  },
];
