import type { Metadata } from 'next';
import Link from 'next/link';
import Planpruefung from '@/components/Planpruefung';
import { FEHLER_GESAMT } from '@/lib/wochenplan';
import k from '@/components/Kartenblatt.module.css';

export const metadata: Metadata = {
  title: 'Passt der Plan?',
  description:
    'Drei Challenges parallel in einer Klasse: Finden Sie die Stellen im Wochenplan, an denen die Abstimmung der Karten bricht.',
};

export default function WochenplanSeite() {
  return (
    <div className={k.blatt}>
      <div className="wrap">
        <header className={k.kopf}>
          <div className={k.kopfLinks}>
            <div className="okt" style={{ width: '2.8rem', height: '2.8rem', fontSize: '1.3rem' }}>
              ▦
            </div>
            <div style={{ minWidth: 0 }}>
              <p className={k.marke}>Mobiler MakerSpace · Sidequest</p>
              <h1 className={k.titel}>Passt der Plan?</h1>
            </div>
          </div>
          <div className={k.kopfRechts}>
            <span className={k.pille}>Für Lehrpersonen</span>
            <span className={k.zeile}>Eine Klasse · drei Challenges · acht Gruppen</span>
          </div>
        </header>

        <section className={k.auftrag}>
          <p className={k.auftragLabel}>Ihr Auftrag jetzt</p>
          <p className={k.auftragSatz}>Finden Sie die {FEHLER_GESAMT} Stellen, an denen dieser Wochenplan bricht.</p>
          <p className={k.auftragUnter}>
            Eine 5. Klasse bearbeitet in derselben Woche mehrere Challenges nebeneinander. Das geht, weil die
            Karten aller Challenges gleich getaktet sind – und es geht schief, sobald eine Spur aus dem Takt
            fällt. Lesen Sie zuerst die drei Regeln, dann prüfen Sie den Plan.
          </p>
        </section>

        <section className={k.kachel} style={{ marginTop: '.9rem' }}>
          <h2>Drei Regeln halten die Woche zusammen</h2>
          <ol className={k.schritte} style={{ marginTop: '.7rem' }}>
            <li>
              <span className={k.nr}>1</span>
              <span>
                <strong>Gleicher Takt.</strong> Alle Gruppen stehen am selben Halbtag beim selben Schritt – egal,
                welche Challenge sie bearbeiten. Nur so kann eine Lehrperson acht Gruppen gleichzeitig
                begleiten, statt vier verschiedene Unterrichtsstunden parallel zu halten.
              </span>
            </li>
            <li>
              <span className={k.nr}>2</span>
              <span>
                <strong>Ein Tausch mit Absicht.</strong> Beim Lernhelfer sind Schritt 3 und 4 vertauscht: zuerst
                Ideen, dann Bauteile prüfen. Bei den übrigen drei Challenges umgekehrt. Das ist kein Versehen –
                dadurch steht nie die ganze Klasse gleichzeitig an der Energie-Werkstatt.
              </span>
            </li>
            <li>
              <span className={k.nr}>3</span>
              <span>
                <strong>Sieben Halbtage, acht Schritte.</strong> Ein Schritt darf wegfallen oder mit einem
                anderen zusammengelegt werden – aber für alle Gruppen gleichzeitig, und nie der achte.
              </span>
            </li>
          </ol>
          <p style={{ fontSize: '.92rem', lineHeight: 1.5, marginTop: '.8rem', color: '#4a4d6b' }}>
            Dazu eine Ausnahme: <strong>Die Kettenreaktion</strong> lässt sich nicht neben anderen Challenges
            bearbeiten. Jede Gruppe baut dort eine Station, die den Anstoss der vorherigen annimmt und
            weitergibt – das braucht die ganze Klasse.
          </p>
        </section>

        <div style={{ marginTop: '.9rem' }}>
          <Planpruefung />
        </div>

        <section className={k.offen} style={{ marginTop: '.9rem' }}>
          <b>Warum das für die Schulleitung zählt</b>
          <p>
            Eine Klasse muss sich nicht auf eine Challenge einigen. Gruppen, die ein Lernproblem lösen wollen,
            arbeiten neben Gruppen, die eine Brücke bewegen – im selben Zimmer, in derselben Woche, mit einer
            Lehrperson. Das ist keine Nebensache des Materials, sondern der Grund, warum eine Woche für eine
            ganze Klasse reicht.
          </p>
        </section>

        <p style={{ marginTop: '1rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          <Link className={k.weiter} href="/moderationsfalle">
            → Die Moderationsfalle
          </Link>
          <Link className={k.weiter} href="/woche">
            → Die Woche
          </Link>
          <Link className={k.weiter} href="/">
            → Zur Projektkarte
          </Link>
        </p>

        <p className={k.kartenfuss}>
          <span>I+D Campus × PHTG · Mobiler MakerSpace · Passt der Plan?</span>
          <span>CC BY-SA 4.0 · Prototyp · Oktober 2026</span>
        </p>
      </div>
    </div>
  );
}
