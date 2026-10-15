import Link from 'next/link';
import k from '@/components/Kartenblatt.module.css';

const ABSCHNITTE = [
  { nr: 'C', id: 'auftrag', titel: 'Der Auftrag' },
  { nr: '1', id: 'vorgehen', titel: 'So gehen Sie vor' },
  { nr: '2', id: 'bleibt', titel: 'Was bleibt' },
  { nr: '3', id: 'fertig', titel: 'Fertig sind Sie, wenn' },
  { nr: '4', id: 'einwaende', titel: 'Kommen Sie nicht weiter?' },
  { nr: '5', id: 'weiter', titel: 'Wenn Sie Zeit haben' },
];

export default function Start() {
  return (
    <div className={k.blatt}>
      <div className="wrap">
        {/* ---------- Kopf ---------- */}
        <header className={k.kopf}>
          <div className={k.kopfLinks}>
            <div className="okt" style={{ width: '2.8rem', height: '2.8rem', fontSize: '1.15rem' }}>
              C
            </div>
            <div style={{ minWidth: 0 }}>
              <p className={k.marke}>Mobiler MakerSpace · Pädagogische Hochschule Thurgau</p>
              <h1 className={k.titel}>Passt das an Ihre Schule?</h1>
            </div>
          </div>
          <div className={k.kopfRechts}>
            <span className={k.pille}>Eine Schulwoche</span>
            <span className={k.zeile}>4.–6. Klasse · sieben Halbtage · Lesezeit 5 Min.</span>
            <nav className={k.punkte} aria-label="Abschnitte dieser Seite">
              {ABSCHNITTE.map((a, i) => (
                <a
                  key={a.id}
                  href={`#${a.id}`}
                  className={`${k.pkt} ${i === 0 ? k.pktAktiv : ''}`}
                  title={a.titel}
                >
                  {a.nr}
                </a>
              ))}
            </nav>
          </div>
        </header>

        {/* ---------- Was Sie brauchen ---------- */}
        <section className={k.bedarf}>
          <p className={k.bedarfText}>
            <b>Was Sie brauchen</b>
            Eine Klasse der 4.–6. Klasse · sieben Halbtage in einer Woche · eine Lehrperson, die moderiert ·
            ein normales Schulzimmer mit Tischen
          </p>
          <p className={k.warnung}>
            <span className={k.warnZeichen} aria-hidden="true">
              ▲
            </span>
            Kein Making-Vorwissen. Keine Werkstatt.
          </p>
        </section>

        {/* ---------- Auftrag ---------- */}
        <section className={k.auftrag} id="auftrag">
          <p className={k.auftragLabel}>Ihr Auftrag jetzt</p>
          <p className={k.auftragSatz}>Finden Sie heraus, ob eine Making-Woche an Ihre Schule passt.</p>
          <p className={k.auftragUnter}>
            Am Ende wissen Sie, welche der vier Challenges Sie wählen würden, was die Woche kostet und was nach
            dem Freitag bei den Kindern bleibt. Es kommt niemand von aussen ins Schulzimmer – das ist die
            Bedingung, unter der das Ganze gebaut ist.
          </p>
        </section>

        {/* ---------- Drei Kacheln ---------- */}
        <div className={`${k.raster} ${k.rasterOben}`}>
          <section className={k.kachel} id="vorgehen">
            <h2>So gehen Sie vor</h2>
            <ol className={k.schritte}>
              <li>
                <span className={k.nr}>1</span>
                <span>
                  Wählen Sie unter den vier Challenges die, deren Problem Ihre Klasse interessiert: der{' '}
                  <strong>Lernhelfer</strong>, die <strong>bewegliche Brücke</strong>, der <strong>Wächter</strong>{' '}
                  oder die <strong>Kettenreaktion</strong>. Drei davon laufen in einer Klasse parallel, die
                  Kettenreaktion braucht alle.
                </span>
              </li>
              <li>
                <span className={k.nr}>2</span>
                <span>
                  Legen Sie Ihren Stundenplan daneben. Sieben Halbtage genügen – das Kartenset hat acht Schritte,
                  einer darf wegfallen oder zwei lassen sich zusammenlegen.
                </span>
              </li>
              <li>
                <span className={k.nr}>3</span>
                <span>
                  Prüfen Sie, was Ihre Schule schon hat: Scheren, Lineale, Schneidunterlagen, Papier und
                  Zeichenmaterial. Mehr setzen wir nicht voraus, alles andere kommt in den Boxen.
                </span>
              </li>
              <li>
                <span className={k.nr}>4</span>
                <span>
                  Rechnen Sie mit vier Boxen zu je rund CHF 750 pro Materialsatz. Wer sie bezahlt und wie
                  ausgeliehen wird, ist noch offen – genau darüber möchten wir mit Ihnen reden.
                </span>
              </li>
              <li>
                <span className={k.nr}>5</span>
                <span>
                  Melden Sie sich für eine Pilotwoche. Wir suchen Klassen, die das Material zum ersten Mal in die
                  Hand nehmen.
                </span>
              </li>
            </ol>
          </section>

          <div className={k.saeule}>
          <section className={`${k.kachel} ${k.kachelMint}`} id="bleibt">
            <div className={k.kachelKopf}>
              <span className={k.symbol} aria-hidden="true">
                ✎
              </span>
              <h2>Das bleibt bei den Kindern</h2>
            </div>
            <ul className={k.haken}>
              <li>
                Eine digitale Lerndokumentation: nach jedem Halbtag ein Eintrag, meist ein Foto und ein bis drei
                Sätze.
              </li>
              <li>
                Ein Kompetenznachweis pro Kind, nach den 24 Making-Kompetenzen von MakeComp4School.
              </li>
              <li>Am Freitag geht die Hardware zurück. Die Lernspur bleibt.</li>
            </ul>
            <p style={{ marginTop: '.8rem' }}>
              <Link className={k.weiter} href="/kompetenzen">
                → Die 24 Kompetenzen ansehen
              </Link>
            </p>
          </section>

          <section className={`${k.kachel} ${k.kachelNavy}`} id="fertig">
            <div className={k.kachelKopf}>
              <span className={`${k.symbol} ${k.symbolHell}`} aria-hidden="true">
                ✓
              </span>
              <h2>Fertig sind Sie, wenn</h2>
            </div>
            <ul className={k.haken}>
              <li>Sie wissen, welche der vier Challenges zu Ihrer Klasse passt.</li>
              <li>Sie sieben Halbtage im Stundenplan gefunden haben.</li>
              <li>Sie sagen können, was die Woche kostet und wer sie bezahlt.</li>
              <li>Sie wissen, was Sie Ihrem Kollegium am Montag darauf erzählen.</li>
            </ul>
          </section>
          </div>
        </div>

        {/* ---------- Einwände + Weiter ---------- */}
        <div className={`${k.raster} ${k.rasterUnten}`}>
          <section className={k.kachel} id="einwaende">
            <h2>Kommen Sie nicht weiter?</h2>

            <div className={k.einwand}>
              <p className={k.einwandFrage}>
                <span className={k.nr}>1</span>
                «Unsere Lehrpersonen können kein Making.»
              </p>
              <p className={k.einwandAntwort}>
                Dafür ist das Material gebaut. Auf jeder Karte stehen der Auftrag, das Vorgehen in vier bis fünf
                Schritten, ein Fertig-Kriterium, das die Kinder selbst prüfen können, und eine dreistufige Hilfe.
                Die Lehrperson moderiert, sie unterrichtet nicht. Eine halbtägige Weiterbildung vor dem Einsatz
                gehört dazu.
              </p>
            </div>

            <div className={k.einwand}>
              <p className={k.einwandFrage}>
                <span className={k.nr}>2</span>
                «Wir haben keinen Raum dafür.»
              </p>
              <p className={k.einwandAntwort}>
                Es braucht keinen. Das Material kommt in vier Boxen ins normale Schulzimmer, und ein
                Einlagensystem hält sie in Ordnung – die Vollständigkeitskontrolle wird damit zur Aufgabe der
                Kinder statt zur Arbeit der Lehrperson.
              </p>
            </div>

            <div className={k.einwand}>
              <p className={k.einwandFrage}>
                <span className={k.nr}>3</span>
                «Und wenn am Freitag nichts funktioniert?»
              </p>
              <p className={k.einwandAntwort}>
                Dann ist die Woche trotzdem gelungen. Beurteilt wird nicht das Werkstück, sondern der Weg dorthin:
                was beobachtet, entschieden, geändert und begründet wurde. Der Kompetenznachweis entsteht aus der
                Lerndokumentation, nicht aus dem Prototyp. Eine Brücke, die zweimal von drei Versuchen öffnet,
                liefert oft mehr Gesprächsstoff als eine, die auf Anhieb läuft.
              </p>
            </div>
          </section>

          <section className={`${k.kachel} ${k.kachelLavendel}`} id="weiter">
            <h2>Wenn Sie Zeit haben</h2>
            <p style={{ fontSize: '.95rem', lineHeight: 1.5 }}>
              Die Woche ist in allen vier Challenges gleich gebaut. Wie sie sich anfühlt, steht Halbtag für
              Halbtag auf der nächsten Seite – mitsamt dem, was die Lehrperson dabei ausdrücklich nicht tut.
            </p>
            <Link className={k.weiter} href="/woche">
              → Die Woche, Halbtag für Halbtag
            </Link>
            <span className={k.weiterZusatz}>
              Oder probieren Sie die vierte Challenge selbst aus: In der{' '}
              <Link href="/spiel" style={{ fontWeight: 700 }}>
                Kettenreaktion
              </Link>{' '}
              muss jede Station den Anstoss an die nächste Gruppe weitergeben.
            </span>
          </section>
        </div>

        {/* ---------- Offen geblieben ---------- */}
        <section className={k.offen}>
          <b>Offen geblieben</b>
          <p>
            Das Betriebs- und Finanzierungsmodell ist nicht entschieden – Miete, Trägerschaft und Betreuung stehen
            zur Diskussion. Ob Lasercutter, Tiefziehgerät und Lötstation zum Mietmaterial gehören, entscheidet
            sich nach der ersten Testklasse. Eine solche Klasse gibt es noch nicht: Was hier steht, beschreibt,
            wie das Material gebaut ist, und ist kein Erfahrungsbericht.
          </p>
        </section>

        <p className={k.kartenfuss}>
          <span>I+D Campus × PHTG · Mobiler MakerSpace · Projektkarte</span>
          <span>CC BY-SA 4.0 · Prototyp · Oktober 2026</span>
        </p>
      </div>
    </div>
  );
}
