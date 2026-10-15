import type { Metadata } from 'next';
import Link from 'next/link';
import Moderationsfalle from '@/components/Moderationsfalle';
import { SZENEN } from '@/lib/szenen';
import k from '@/components/Kartenblatt.module.css';

export const metadata: Metadata = {
  title: 'Moderationsfalle',
  description:
    'Eine Szene aus dem Schulzimmer: Finden Sie die Stellen, an denen die Lehrperson der Gruppe die Arbeit abnimmt.',
};

export default function FallenSeite() {
  const szene = SZENEN[0];

  return (
    <div className={k.blatt}>
      <div className="wrap">
        <header className={k.kopf}>
          <div className={k.kopfLinks}>
            <div className="okt" style={{ width: '2.8rem', height: '2.8rem', fontSize: '1.3rem' }}>
              !
            </div>
            <div style={{ minWidth: 0 }}>
              <p className={k.marke}>Mobiler MakerSpace · Sidequest</p>
              <h1 className={k.titel}>Die Moderationsfalle</h1>
            </div>
          </div>
          <div className={k.kopfRechts}>
            <span className={k.pille}>{szene.challenge}</span>
            <span className={k.zeile}>
              {szene.halbtag} · {szene.titel}
            </span>
          </div>
        </header>

        <section className={k.auftrag}>
          <p className={k.auftragLabel}>Ihr Auftrag jetzt</p>
          <p className={k.auftragSatz}>Finden Sie die Stellen, an denen die Lehrperson zu viel hilft.</p>
          <p className={k.auftragUnter}>
            Auf der Wochenseite steht neben jedem Halbtag, was die Lehrperson tut und was sie unterlässt. Hier
            steht nichts dabei. Vier Sätze in dieser Szene nehmen der Gruppe die Arbeit ab – die übrigen sind
            richtig, auch wenn sie ähnlich klingen.
          </p>
        </section>

        <section className={k.kachel} style={{ marginTop: '.9rem' }}>
          <h2>Erst die vier Muster, dann die Szene</h2>
          <p style={{ fontSize: '.95rem', lineHeight: 1.55, maxWidth: '58em' }}>
            Zu viel Hilfe sieht im Moment aus wie gute Betreuung. Darum lohnt es sich, die Muster zu kennen,
            bevor man sie sucht. Es sind vier, und sie kommen in der Szene unten je genau einmal vor.
          </p>
          <ol className={k.schritte} style={{ marginTop: '.8rem' }}>
            <li>
              <span className={k.nr}>1</span>
              <span>
                <strong>Liefern.</strong> Die Lösung nennen, bevor die Gruppe sie gesucht hat. Der Einfall ist
                danach verbraucht, und das Werkstück gehört der Lehrperson.
              </span>
            </li>
            <li>
              <span className={k.nr}>2</span>
              <span>
                <strong>Vergleichen.</strong> Auf eine andere Gruppe zeigen. Das beendet die eigene Suche und
                macht aus einem Problem einen Rückstand.
              </span>
            </li>
            <li>
              <span className={k.nr}>3</span>
              <span>
                <strong>Urteilen.</strong> Den Entwurf bewerten oder das Material bestimmen. Beides gehört der
                Gruppe – und das Urteil kann falsch sein.
              </span>
            </li>
            <li>
              <span className={k.nr}>4</span>
              <span>
                <strong>Mitbauen.</strong> Selbst Hand anlegen, meist aus Zeitdruck. Ab dem ersten Klebepunkt ist
                es nicht mehr ihr Prototyp.
              </span>
            </li>
          </ol>
          <p style={{ fontSize: '.92rem', lineHeight: 1.5, marginTop: '.8rem', color: '#4a4d6b' }}>
            Was alle vier gemeinsam haben: Sie entstehen aus dem Wunsch zu helfen. Deshalb fühlen sie sich im
            Moment richtig an – und deshalb lassen sie sich nur erkennen, wenn man sie vorher benannt hat.
          </p>
        </section>

        <div style={{ marginTop: '.9rem' }}>
          <Moderationsfalle szene={szene} />
        </div>

        <section className={k.offen} style={{ marginTop: '.9rem' }}>
          <b>Warum das die schwierigste Übung ist</b>
          <p>
            Die Woche funktioniert ohne Making-Vorwissen, weil die Karten den Inhalt tragen. Sie funktioniert
            aber nur, wenn die Lehrperson das Material arbeiten lässt. Fachlich falsch kann in dieser Woche wenig
            laufen – pädagogisch dagegen schon, und zwar immer an derselben Stelle: beim Helfen.
          </p>
        </section>

        <p style={{ marginTop: '1rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          <Link className={k.weiter} href="/wochenplan">
            → Passt der Plan?
          </Link>
          <Link className={k.weiter} href="/woche">
            → Zurück zur Woche
          </Link>
          <Link className={k.weiter} href="/">
            → Zur Projektkarte
          </Link>
        </p>

        <p className={k.kartenfuss}>
          <span>I+D Campus × PHTG · Mobiler MakerSpace · Moderationsfalle</span>
          <span>CC BY-SA 4.0 · Musterszene · Oktober 2026</span>
        </p>
      </div>
    </div>
  );
}
