export type Zeile = {
  id: string;
  wer: string;
  /** true = Lehrperson, nur diese Zeilen sind antippbar */
  lp?: boolean;
  text: string;
  /** Gesetzt, wenn diese Zeile eine Falle ist. */
  falle?: { titel: string; warum: string; besser: string };
  /** Rückmeldung, wenn eine unbedenkliche Zeile angetippt wird. */
  inOrdnung?: string;
};

export type Szene = {
  id: string;
  titel: string;
  halbtag: string;
  challenge: string;
  lage: string;
  zeilen: Zeile[];
};

export const SZENEN: Szene[] = [
  {
    id: 'bauen-bruecke',
    titel: 'Mittwochnachmittag, erste Fassung',
    halbtag: 'Schritt 6 · Bauen',
    challenge: 'Die bewegliche Brücke',
    lage:
      'Eine 5. Klasse, vierte Gruppe von links. Mia, Jan und Lina bauen an ihrer Drehbrücke, die 200 g tragen und dreimal den Weg freigeben soll. Noch vierzig Minuten bis zum Aufräumen. Die Lehrperson kommt an den Tisch.',
    zeilen: [
      {
        id: 'z1',
        wer: 'Lehrperson',
        lp: true,
        text: 'So, ihr habt noch vierzig Minuten. Zeigt mir kurz, woran ihr gerade seid.',
        inOrdnung: 'In Ordnung. Sie fragt nach dem Stand, ohne zu bewerten – und erfährt dabei selbst etwas.',
      },
      { id: 'z2', wer: 'Mia', text: 'Unsere Brücke kippt immer nach vorne, wenn sie sich dreht.' },
      {
        id: 'z3',
        wer: 'Lehrperson',
        lp: true,
        text: 'Ihr müsst hinten ein Gegengewicht dranmachen, dann kippt sie nicht mehr.',
        falle: {
          titel: 'Liefert die Lösung',
          warum:
            'Die Gruppe hat das Problem gerade selbst benannt – sie war einen Schritt vom eigenen Einfall entfernt. Der ist jetzt verbraucht, und was danach gebaut wird, gehört der Lehrperson.',
          besser: '«Was habt ihr bis jetzt probiert?»',
        },
      },
      { id: 'z4', wer: 'Jan', text: 'Wir hätten auch noch die Idee mit dem Scharnier weiter unten …' },
      {
        id: 'z5',
        wer: 'Lehrperson',
        lp: true,
        text: 'Schaut mal rüber zur Gruppe am Fenster, die haben das schon gelöst.',
        falle: {
          titel: 'Vergleicht Gruppen',
          warum:
            'Der Blick zur Nachbargruppe beendet die eigene Suche und macht aus einem Problem einen Rückstand. Jans Idee war unterwegs und ist jetzt weg.',
          besser: 'Nichts sagen und Jan ausreden lassen.',
        },
      },
      { id: 'z6', wer: 'Lina', text: 'Aber unsere soll sich ja drehen und nicht aufklappen.' },
      {
        id: 'z7',
        wer: 'Lehrperson',
        lp: true,
        text: 'Wo treffen eure beiden Teile aufeinander? Habt ihr das schon abgesprochen?',
        inOrdnung:
          'In Ordnung – und wahrscheinlich der wichtigste Satz der Szene. Prototypen scheitern an den Schnittstellen, nicht in der Mitte eines Bauteils.',
      },
      { id: 'z8', wer: 'Jan', text: 'Noch nicht. Ich mache den Antrieb, Mia das Tragwerk.' },
      {
        id: 'z9',
        wer: 'Lehrperson',
        lp: true,
        text: 'Das hält so nie. Nehmt lieber den dicken Karton.',
        falle: {
          titel: 'Urteilt und entscheidet',
          warum:
            'Zwei Dinge auf einmal: ein Urteil über den Entwurf und eine Materialentscheidung. Beides gehört der Gruppe – und das Urteil kann falsch sein, das zeigt sich zwei Zeilen später.',
          besser: '«Was spricht für den dünnen, was für den dicken?»',
        },
      },
      { id: 'z10', wer: 'Mia', text: 'Der ist aber zu schwer für unseren Motor.' },
      {
        id: 'z11',
        wer: 'Lehrperson',
        lp: true,
        text: 'Wartet, ich klebe das schnell, sonst wird das nichts bis Freitag.',
        falle: {
          titel: 'Baut mit',
          warum:
            'Sobald die Lehrperson klebt, ist es ihr Prototyp. Dazu kommt ein Zeitdruck, den es nicht gibt: Schritt 7 am Donnerstag ist genau dafür da, dass noch etwas geändert wird.',
          besser: 'Die Hände in den Hosentaschen lassen.',
        },
      },
      { id: 'z12', wer: 'Lina', text: 'Dürfen wir zuerst ausprobieren, ob es auch ohne hält?' },
      {
        id: 'z13',
        wer: 'Lehrperson',
        lp: true,
        text: 'Probiert es aus. Haltet fest, was passiert – das kommt in eure Dokumentation.',
        inOrdnung:
          'In Ordnung. Das Ausprobieren wird erlaubt und die Beobachtung gleich in die Lerndokumentation gelenkt.',
      },
      {
        id: 'z14',
        wer: 'Lehrperson',
        lp: true,
        text: 'In zehn Minuten räumt ihr ein.',
        inOrdnung: 'In Ordnung. Den Ablauf zu organisieren ist nicht dasselbe wie sich einzumischen.',
      },
    ],
  },
];

export function fallenAnzahl(s: Szene) {
  return s.zeilen.filter((z) => z.falle).length;
}
