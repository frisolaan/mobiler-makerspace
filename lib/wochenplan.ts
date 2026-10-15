export type Zelle = {
  id: string;
  text: string;
  fehler?: { titel: string; warum: string; richtig: string };
};

export type Spur = {
  id: string;
  gruppen: string;
  challenge: string;
  kopfFehler?: { titel: string; warum: string; richtig: string };
  zellen: Zelle[];
};

export const HALBTAGE = [
  { nr: 1, tag: 'Mo VM', schritt: 'Erfahren' },
  { nr: 2, tag: 'Mo NM', schritt: 'Festlegen' },
  { nr: 3, tag: 'Di VM', schritt: 'Entwerfen / Prüfen' },
  { nr: 4, tag: 'Di NM', schritt: 'Prüfen / Entwerfen' },
  { nr: 5, tag: 'Mi VM', schritt: 'Entscheiden' },
  { nr: 6, tag: 'Mi NM + Do VM', schritt: 'Bauen' },
  { nr: 7, tag: 'Do NM', schritt: 'Testen' },
  { nr: 8, tag: 'Fr VM', schritt: 'Zeigen' },
];

export const SPUREN: Spur[] = [
  {
    id: 'a',
    gruppen: 'Gruppen 1–2',
    challenge: 'Der Lernhelfer',
    zellen: [
      { id: 'a1', text: 'Stolperjagd' },
      { id: 'a2', text: 'Problem festlegen' },
      {
        id: 'a3',
        text: 'Energie-Werkstatt',
        fehler: {
          titel: 'Der Tausch fehlt',
          warum:
            'Beim Lernhelfer sind Schritt 3 und 4 vertauscht: zuerst Ideen, dann Bauteile. Hier stehen jetzt alle vier Spuren gleichzeitig an denselben Messstationen – und das Material reicht für die halbe Klasse, nicht für die ganze.',
          richtig: 'Ideen schmieden',
        },
      },
      { id: 'a4', text: 'Ideen schmieden' },
      { id: 'a5', text: 'Skizze mit Massen' },
      { id: 'a6', text: 'Bauen' },
      { id: 'a7', text: 'Testen und ändern' },
      { id: 'a8', text: 'Zeigen' },
    ],
  },
  {
    id: 'b',
    gruppen: 'Gruppen 3–4',
    challenge: 'Die bewegliche Brücke',
    zellen: [
      { id: 'b1', text: 'Kreuzungsjagd' },
      { id: 'b2', text: 'Aufgabe festlegen' },
      { id: 'b3', text: 'Energie-Werkstatt' },
      { id: 'b4', text: 'Ideen schmieden' },
      { id: 'b5', text: 'Skizze mit Massen' },
      { id: 'b6', text: 'Bauen' },
      { id: 'b7', text: 'Testen und ändern' },
      { id: 'b8', text: 'Zeigen' },
    ],
  },
  {
    id: 'c',
    gruppen: 'Gruppen 5–6',
    challenge: 'Der Wächter',
    zellen: [
      { id: 'c1', text: 'Wächterjagd' },
      { id: 'c2', text: 'Regel festlegen' },
      { id: 'c3', text: 'Energie-Werkstatt' },
      { id: 'c4', text: 'Ideen schmieden' },
      { id: 'c5', text: 'Skizze mit Massen' },
      {
        id: 'c6',
        text: 'Testen und ändern',
        fehler: {
          titel: 'Aus dem Takt',
          warum:
            'Diese Spur hat Schritt 6 weggelassen und ist den anderen einen Halbtag voraus. Ein Schritt darf wegfallen – aber für alle gleichzeitig. Sonst moderiert die Lehrperson zwei verschiedene Schritte auf einmal, und genau das soll die Abstimmung verhindern.',
          richtig: 'Bauen',
        },
      },
      { id: 'c7', text: 'Testen und ändern' },
      {
        id: 'c8',
        text: 'Bauen fertigstellen',
        fehler: {
          titel: 'Der achte Schritt fällt weg',
          warum:
            'Hier wird die Vorführung gestrichen, um länger zu bauen. Schritt 8 ist der einzige, der nicht wegfallen darf: Ohne Vorführen und Reflektieren gibt es keinen Abschluss, keinen letzten Doku-Eintrag – und damit fehlt dem Kompetenznachweis der Beleg für Kommunikation.',
          richtig: 'Zeigen',
        },
      },
    ],
  },
  {
    id: 'd',
    gruppen: 'Gruppen 7–8',
    challenge: 'Die Kettenreaktion',
    kopfFehler: {
      titel: 'Läuft nicht nebenher',
      warum:
        'Die Kettenreaktion ist die einzige Challenge, die die ganze Klasse braucht: Jede Gruppe baut eine Station, die den Anstoss der vorherigen annimmt und weitergibt. Mit zwei Gruppen neben drei anderen Challenges gibt es keine Kette, sondern zwei Einzelstücke.',
      richtig: 'Entweder alle acht Gruppen bauen die Kettenreaktion – oder keine.',
    },
    zellen: [
      { id: 'd1', text: 'Anstossjagd' },
      { id: 'd2', text: 'Übergabe festlegen' },
      { id: 'd3', text: 'Energie-Werkstatt' },
      { id: 'd4', text: 'Kettenglieder' },
      { id: 'd5', text: 'Skizze mit Massen' },
      { id: 'd6', text: 'Bauen' },
      { id: 'd7', text: 'Testen und ändern' },
      { id: 'd8', text: 'Durchlauf' },
    ],
  },
];

export const FEHLER_GESAMT =
  SPUREN.filter((s) => s.kopfFehler).length + SPUREN.flatMap((s) => s.zellen).filter((z) => z.fehler).length;
