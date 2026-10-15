import type { Metadata } from 'next';
import Link from 'next/link';
import k from '@/components/Kartenblatt.module.css';

export const metadata: Metadata = {
  title: 'Die Lernspur',
  description:
    'Nach jedem Halbtag ein Eintrag: Foto, ein bis drei Sätze. Daraus entsteht pro Kind ein Kompetenznachweis – das Material geht zurück, die Lernspur bleibt.',
};

const EINTRAEGE = [
  {
    nr: 1,
    schritt: 'Erfahren',
    was: 'Foto der gesammelten Beobachtungen',
    satz: '«Uns ist aufgefallen, dass …»',
    belegt: 'Eigeninitiative · Informationskompetenz',
  },
  {
    nr: 2,
    schritt: 'Festlegen',
    was: 'Das gewählte Problem, aufgeschrieben',
    satz: '«Wir nehmen dieses Problem, weil …»',
    belegt: 'Teamarbeit · Überzeugungskraft',
  },
  {
    nr: 3,
    schritt: 'Entwerfen',
    was: 'Foto der Ideenwand mit Anzahl',
    satz: '«Wir haben 23 Ideen gesammelt, diese drei kommen weiter.»',
    belegt: 'Kreativität · Offenheit',
  },
  {
    nr: 4,
    schritt: 'Prüfen',
    was: 'Foto der ausgefüllten Messtabelle',
    satz: '«Am meisten Energie bekommen wir mit …, weil …»',
    belegt: 'Elektronik · Problemlösen',
  },
  {
    nr: 5,
    schritt: 'Entscheiden',
    was: 'Foto der bemassten Skizze',
    satz: '«Unsere Lösung ist … cm breit und besteht aus …»',
    belegt: 'Designkompetenz · Planung und Organisation',
  },
  {
    nr: 6,
    schritt: 'Bauen',
    was: 'Foto des Zwischenstands',
    satz: '«Ich habe … gebaut, … hat … gebaut. Zusammengetroffen sind wir bei …»',
    belegt: 'Material- und Werkzeugkunde · Unterstützung',
  },
  {
    nr: 7,
    schritt: 'Testen',
    was: 'Zahlen vorher und nachher',
    satz: '«Vorher 1 von 3, nachher 2 von 3. Geändert haben wir …»',
    belegt: 'Fehlerkultur · Produktentwicklung',
  },
  {
    nr: 8,
    schritt: 'Zeigen',
    was: 'Foto der Vorführung',
    satz: '«Beim nächsten Mal würden wir … anders machen.»',
    belegt: 'Selbstreflexion · Angewandte Medienkompetenz',
  },
];

const NACHWEIS = [
  { nr: 13, name: 'Kreativität', stand: 'belegt', beleg: 'Eintrag 3: 23 Ideen, davon 3 ausgewählt und begründet' },
  { nr: 11, name: 'Fehlerkultur', stand: 'belegt', beleg: 'Eintrag 7: eine Änderung, Zahlen vorher und nachher' },
  { nr: 8, name: 'Teamarbeit', stand: 'belegt', beleg: 'Eintrag 6: Arbeitsteilung und Schnittstelle beschrieben' },
  { nr: 3, name: 'Selbstreflexion', stand: 'teilweise', beleg: 'Eintrag 8: ein Satz zum nächsten Mal, ohne Begründung' },
  { nr: 19, name: 'Programmieren', stand: 'offen', beleg: 'in dieser Woche nicht vorgekommen' },
];

const FARBE: Record<string, string> = { belegt: '#3FAE86', teilweise: '#EFA52B', offen: '#9A9CB0' };

export default function LernspurSeite() {
  return (
    <div className={k.blatt}>
      <div className="wrap">
        <header className={k.kopf}>
          <div className={k.kopfLinks}>
            <div className="okt gruen" style={{ width: '2.8rem', height: '2.8rem', fontSize: '1.2rem' }}>
              ✎
            </div>
            <div style={{ minWidth: 0 }}>
              <p className={k.marke}>Mobiler MakerSpace · das, was bleibt</p>
              <h1 className={k.titel}>Die Lernspur</h1>
            </div>
          </div>
          <div className={k.kopfRechts}>
            <span className={k.pille}>Acht Einträge</span>
            <span className={k.zeile}>je 5 Minuten · ein Nachweis pro Kind</span>
          </div>
        </header>

        <section className={k.auftrag}>
          <p className={k.auftragLabel}>Worum es geht</p>
          <p className={k.auftragSatz}>Am Freitag geht die Hardware zurück. Die Lernspur bleibt.</p>
          <p className={k.auftragUnter}>
            Eine Making-Woche hinterlässt normalerweise ein Werkstück und eine gute Erinnerung. Was sie nicht
            hinterlässt, ist etwas, worauf eine Lehrperson zeigen kann, wenn im Elterngespräch die Frage kommt:
            Und was hat mein Kind dabei gelernt? Genau diese Lücke schliesst die Lernspur – und sie ist der
            eigentliche Unterschied zwischen einer schönen Woche und einer, die zählt.
          </p>
        </section>

        {/* ---------- Wie ein Eintrag entsteht ---------- */}
        <div className={`${k.raster} ${k.rasterOben}`}>
          <section className={k.kachel}>
            <h2>Wie ein Eintrag entsteht</h2>
            <ol className={k.schritte} style={{ marginTop: '.7rem' }}>
              <li>
                <span className={k.nr}>1</span>
                <span>
                  Auf jeder Schrittkarte steht eine mintgrüne Kachel: <strong>Das kommt in die
                  Dokumentation.</strong> Dort ist für diesen Halbtag bereits festgelegt, was festgehalten wird –
                  die Gruppe muss sich nichts ausdenken.
                </span>
              </li>
              <li>
                <span className={k.nr}>2</span>
                <span>
                  Die Gruppe fotografiert, was auf der Karte verlangt ist, und schreibt ein bis drei Sätze dazu.
                  Meist ist ein Satzanfang vorgegeben, damit auch schreibschwache Kinder loskommen.
                </span>
              </li>
              <li>
                <span className={k.nr}>3</span>
                <span>
                  Das dauert fünf Minuten und passiert am Ende des Halbtags, nicht am Freitag rückblickend. Die
                  Dokumentation ist dadurch kein Zusatz am Schluss, sondern der rote Faden durch die Woche.
                </span>
              </li>
              <li>
                <span className={k.nr}>4</span>
                <span>
                  Festgehalten wird auf einer digitalen Lernplattform – im Prototyp LearningView, grundsätzlich
                  aber auf jeder Plattform, die Fotos und Text pro Gruppe sammelt.
                </span>
              </li>
            </ol>
          </section>

          <div className={k.saeule}>
            <section className={`${k.kachel} ${k.kachelNavy}`}>
              <div className={k.kachelKopf}>
                <span className={`${k.symbol} ${k.symbolHell}`} aria-hidden="true">
                  ✓
                </span>
                <h2>Was einen Eintrag zum Beleg macht</h2>
              </div>
              <ul className={k.haken}>
                <li>Er zeigt eine Entscheidung, eine Änderung oder eine Begründung.</li>
                <li>Er ist auf einen Halbtag und eine Gruppe zurückzuführen.</li>
                <li>Er stammt von den Kindern, nicht von der Lehrperson.</li>
              </ul>
              <p style={{ fontSize: '.92rem', lineHeight: 1.5, marginTop: '.7rem', color: '#c6c8de' }}>
                Ein Foto der fertigen Brücke ist kein Beleg. Ein Foto der Messtabelle mit dem Satz «am meisten
                bringt die Kurbel, weil wir schneller drehen können» ist einer.
              </p>
            </section>

            <section className={`${k.kachel} ${k.kachelLavendel}`}>
              <h2>Zeitunabhängig</h2>
              <p style={{ fontSize: '.95rem', lineHeight: 1.5 }}>
                Die Beurteilung muss nicht am Freitag passieren. Die Einträge bleiben, und die Lehrperson kann
                den Nachweis zwei Wochen später erstellen – oder mit dem Kind zusammen im Lerngespräch.
              </p>
            </section>
          </div>
        </div>

        {/* ---------- Die acht Einträge ---------- */}
        <section className={k.kachel} style={{ marginTop: '.9rem' }}>
          <h2>Acht Halbtage, acht Einträge</h2>
          <p className="weich" style={{ fontSize: '.95rem', lineHeight: 1.5, marginTop: '.4rem' }}>
            Was in der Woche tatsächlich entsteht – und welche Kompetenzen damit belegbar werden.
          </p>
          <div className={k.mini}>
            <table className={k.miniTab} style={{ minWidth: '46rem' }}>
              <thead>
                <tr>
                  <th scope="col" style={{ background: 'transparent' }}>
                    <span className="eyebrow">Schritt</span>
                  </th>
                  <th scope="col">Was festgehalten wird</th>
                  <th scope="col">Der Satz dazu</th>
                  <th scope="col">Wird belegbar</th>
                </tr>
              </thead>
              <tbody>
                {EINTRAEGE.map((e) => (
                  <tr key={e.nr}>
                    <td className={k.zeit}>
                      {e.nr} · {e.schritt}
                    </td>
                    <td>{e.was}</td>
                    <td style={{ fontStyle: 'italic' }}>{e.satz}</td>
                    <td className={k.takt}>{e.belegt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ---------- Der Nachweis ---------- */}
        <section className={k.kachel} style={{ marginTop: '.9rem' }}>
          <h2>Daraus wird der Kompetenznachweis</h2>
          <p className="weich" style={{ fontSize: '.95rem', lineHeight: 1.55, marginTop: '.4rem', maxWidth: '56em' }}>
            Am Ende steht pro Kind kein Zeugnis, sondern eine Sammlung: Welche der 24 Making-Kompetenzen sind
            belegt, welche nur teilweise, welche sind in dieser Woche gar nicht vorgekommen. Das Letzte ist
            keine Lücke, sondern eine Information – eine Woche kann nicht alles abdecken, und das soll sie auch
            nicht.
          </p>
          <p className="weich" style={{ fontSize: '.95rem', lineHeight: 1.55, marginTop: '.6rem', maxWidth: '56em' }}>
            Daneben steht die Selbsteinschätzung des Kindes, denn die Indikatoren des Frameworks sind in der
            Du-Form geschrieben. Wo beide auseinandergehen, beginnt das interessante Gespräch.
          </p>

          <div style={{ marginTop: '1rem', display: 'grid', gap: '.4rem' }}>
            <p className="eyebrow">Beispiel · Lina, 5b</p>
            {NACHWEIS.map((n) => (
              <div
                key={n.nr}
                style={{
                  display: 'flex',
                  gap: '.75rem',
                  alignItems: 'baseline',
                  background: 'var(--grund)',
                  borderRadius: 10,
                  padding: '.55rem .75rem',
                  borderLeft: `5px solid ${FARBE[n.stand]}`,
                  flexWrap: 'wrap',
                }}
              >
                <span style={{ fontVariantNumeric: 'tabular-nums', fontWeight: 800, color: '#8a8ca6' }}>
                  {n.nr}
                </span>
                <b style={{ fontFamily: 'var(--display)', minWidth: '9rem' }}>{n.name}</b>
                <span
                  style={{
                    fontFamily: 'var(--display)',
                    fontWeight: 700,
                    fontSize: '.78rem',
                    letterSpacing: '.08em',
                    textTransform: 'uppercase',
                    color: FARBE[n.stand],
                    minWidth: '6rem',
                  }}
                >
                  {n.stand}
                </span>
                <span style={{ fontSize: '.9rem', color: '#4a4d6b', flex: '1 1 16rem', minWidth: 0 }}>
                  {n.beleg}
                </span>
              </div>
            ))}
          </div>

          <p style={{ marginTop: '1rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <Link className={k.weiter} href="/kompetenzen">
              → Die 24 Kompetenzen im Einzelnen
            </Link>
            <Link className={k.weiter} href="/woche">
              → Die Woche, Halbtag für Halbtag
            </Link>
          </p>
        </section>

        <section className={k.offen} style={{ marginTop: '.9rem' }}>
          <b>Ehrlich gesagt</b>
          <p>
            Die Zuordnung von Einträgen zu Kompetenzen ist ein Vorschlag, kein Automatismus – welche Kompetenz
            ein Eintrag tatsächlich belegt, entscheidet die Lehrperson. Das Beispiel oben ist konstruiert: Eine
            Testklasse hat die Woche noch nicht durchlaufen. Die Dokumentationsvorlagen liegen im Prototyp vor
            und werden nach dem ersten Einsatz überarbeitet.
          </p>
        </section>

        <p className={k.kartenfuss}>
          <span>I+D Campus × PHTG · Mobiler MakerSpace · Die Lernspur</span>
          <span>CC BY-SA 4.0 · Prototyp · Oktober 2026</span>
        </p>
      </div>
    </div>
  );
}
