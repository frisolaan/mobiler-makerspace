export type Wirkung = 'Stoss' | 'Druck' | 'Luft' | 'Drehung' | 'Strom' | 'Licht' | 'Ton';

export const WIRKUNG_FARBE: Record<Wirkung, string> = {
  Stoss: '#D42A17',
  Druck: '#C2621A',
  Luft: '#2F9BD4',
  Drehung: '#6F63B8',
  Strom: '#EFA52B',
  Licht: '#3FAE86',
  Ton: '#B0369B',
};

export type Bauteil = {
  id: string;
  name: string;
  rein: Wirkung;
  raus: Wirkung;
  /** Was im Bauteil wirklich passiert – der Satz von der Wissenskarte. */
  erklaerung: string;
  /** Liegt das Bauteil im Boxensystem? */
  box: 'Elektrobox' | 'Energiebox' | 'Konstruktionsbox' | 'Materialbox';
  /** Erzeugt dieses Bauteil Energie, statt sie zu verbrauchen? */
  erzeugt?: boolean;
};

export const BAUTEILE: Bauteil[] = [
  {
    id: 'rampe',
    name: 'Rampe',
    rein: 'Stoss',
    raus: 'Stoss',
    erklaerung: 'Die Kugel rollt weiter und wird dabei schneller. Nichts wird umgewandelt – aber die Richtung ändert sich.',
    box: 'Materialbox',
  },
  {
    id: 'hebel',
    name: 'Hebel',
    rein: 'Stoss',
    raus: 'Druck',
    erklaerung: 'Ein kurzer Stoss am langen Arm wird zu einem starken Druck am kurzen Arm.',
    box: 'Konstruktionsbox',
  },
  {
    id: 'blasebalg',
    name: 'Blasebalg',
    rein: 'Druck',
    raus: 'Luft',
    erklaerung: 'Wer ihn zusammendrückt, presst die Luft durch eine enge Düse. Aus Druck wird ein Luftstrom.',
    box: 'Materialbox',
  },
  {
    id: 'taster',
    name: 'Taster',
    rein: 'Druck',
    raus: 'Strom',
    erklaerung: 'Solange gedrückt wird, ist der Stromkreis geschlossen. Druck rein, Strom raus.',
    box: 'Elektrobox',
  },
  {
    id: 'windrad',
    name: 'Windrad',
    rein: 'Luft',
    raus: 'Drehung',
    erklaerung: 'Die Flügel stehen schräg im Luftstrom. Luft rein, Drehung raus. Umgekehrt wird daraus ein Ventilator.',
    box: 'Energiebox',
  },
  {
    id: 'solarzelle',
    name: 'Solarzelle',
    rein: 'Licht',
    raus: 'Strom',
    erklaerung: 'Licht rein, Strom raus. Je heller und je steiler das Licht auftrifft, desto mehr kommt heraus.',
    box: 'Elektrobox',
    erzeugt: true,
  },
  {
    id: 'motor',
    name: 'Motor',
    rein: 'Strom',
    raus: 'Drehung',
    erklaerung: 'Strom rein, Drehung raus. Dreht man die Welle von Hand, kommt Strom heraus – derselbe Motor, andere Richtung.',
    box: 'Elektrobox',
  },
  {
    id: 'kurbel',
    name: 'Handkurbel',
    rein: 'Drehung',
    raus: 'Strom',
    erklaerung: 'Ein Motor rückwärts betrieben. Drehung rein, Strom raus – so viel, wie der Arm hergibt.',
    box: 'Energiebox',
    erzeugt: true,
  },
  {
    id: 'getriebe',
    name: 'Getriebe',
    rein: 'Drehung',
    raus: 'Drehung',
    erklaerung: 'Klein treibt gross: langsamer, dafür kräftiger. Gross treibt klein: schneller, dafür schwächer.',
    box: 'Konstruktionsbox',
  },
  {
    id: 'nocken',
    name: 'Nockenscheibe',
    rein: 'Drehung',
    raus: 'Stoss',
    erklaerung: 'Die Scheibe hat eine Nase. Bei jeder Umdrehung kippt sie einmal den Hebel an – aus Drehung wird ein Stoss.',
    box: 'Konstruktionsbox',
  },
  {
    id: 'magnet',
    name: 'Elektromagnet',
    rein: 'Strom',
    raus: 'Stoss',
    erklaerung: 'Strom macht ihn magnetisch, er zieht den Eisenkern an. Strom weg, Feder zurück – ein Stoss.',
    box: 'Elektrobox',
  },
  {
    id: 'led',
    name: 'LED',
    rein: 'Strom',
    raus: 'Licht',
    erklaerung: 'Strom rein, Licht raus – aber nur in einer Richtung. Falsch herum bleibt sie dunkel.',
    box: 'Elektrobox',
  },
  {
    id: 'speicher',
    name: 'Kondensator',
    rein: 'Strom',
    raus: 'Strom',
    erklaerung: 'Lädt sich langsam auf und gibt alles auf einmal wieder ab. Strom rein, später Strom raus.',
    box: 'Elektrobox',
  },
  {
    id: 'summer',
    name: 'Summer',
    rein: 'Strom',
    raus: 'Ton',
    erklaerung: 'Strom rein, Ton raus. Eine Membran schwingt so schnell, dass man sie hört.',
    box: 'Elektrobox',
  },
];

export function bauteil(id: string): Bauteil | undefined {
  return BAUTEILE.find((b) => b.id === id);
}

export type Stufe = {
  nr: number;
  name: string;
  stationen: number;
  minArten: number;
  text: string;
};

export const STUFEN: Stufe[] = [
  {
    nr: 1,
    name: 'Wie in der Klasse',
    stationen: 4,
    minArten: 3,
    text: 'Vier Gruppen, vier Stationen. Die Kugel stösst an, und am Ende muss wieder ein Stoss herauskommen – sonst kann die nächste Gruppe nicht übernehmen.',
  },
  {
    nr: 2,
    name: 'Tüftelmodus',
    stationen: 6,
    minArten: 4,
    text: 'Sechs Stationen, und mindestens vier verschiedene Wirkungsarten müssen vorkommen. Jetzt lohnen sich Umwege über Licht und Luft.',
  },
];

export const START: Wirkung = 'Stoss';
export const ZIEL: Wirkung = 'Stoss';
