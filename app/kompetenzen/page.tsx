import type { Metadata } from 'next';
import Link from 'next/link';
import Kompetenzraster from '@/components/Kompetenzraster';
import k from '@/components/Kartenblatt.module.css';

export const metadata: Metadata = {
  title: 'Kompetenzen',
  description:
    'Die 24 Making-Kompetenzen nach MakeComp4School – mit Beschreibung und je sechs Indikatoren zum Anklicken.',
};

export default function KompetenzSeite() {
  return (
    <div className={k.blatt}>
      <div className="wrap">
        <header className={k.kopf}>
          <div className={k.kopfLinks}>
            <div className="okt" style={{ width: '2.8rem', height: '2.8rem', fontSize: '1rem' }}>
              24
            </div>
            <div style={{ minWidth: 0 }}>
              <p className={k.marke}>Mobiler MakerSpace · Begutachtung</p>
              <h1 className={k.titel}>Die 24 Making-Kompetenzen</h1>
            </div>
          </div>
          <div className={k.kopfRechts}>
            <span className={k.pille}>MakeComp4School</span>
            <span className={k.zeile}>Maurer, PHTG 2024 · vier Bereiche · je sechs Indikatoren</span>
          </div>
        </header>

        <section className={k.auftrag}>
          <p className={k.auftragLabel}>Worum es hier geht</p>
          <p className={k.auftragSatz}>Jede Kompetenz wird erst durch ihre Indikatoren überprüfbar.</p>
          <p className={k.auftragUnter}>
            «Teamarbeit» oder «Kreativität» lassen sich nicht ankreuzen. Deshalb bringt das Framework zu jeder
            Kompetenz sechs Indikatoren mit – und zwar in der Du-Form, an die Kinder selbst gerichtet. Damit
            können sie sich am Ende der Woche auch selbst einschätzen, statt nur eingeschätzt zu werden.
          </p>
        </section>

        <div style={{ marginTop: '.9rem' }}>
          <Kompetenzraster />
        </div>

        <section className={`${k.kachel} ${k.kachelMint}`} style={{ marginTop: '.9rem' }}>
          <h2>Wie die Kompetenzen in die Woche kommen</h2>
          <p style={{ fontSize: '.95rem', lineHeight: 1.55 }}>
            Nicht alle 24 sind in einer Woche zu haben, und das ist auch nicht das Ziel. Jeder Halbtag hat einen
            Schwerpunkt, und jeder Eintrag in der Lerndokumentation ist ein möglicher Beleg dafür. Am Freitag
            steht pro Kind nicht ein Zeugnis, sondern eine Sammlung: belegt, teilweise belegt, nicht
            vorgekommen.
          </p>
          <p style={{ marginTop: '.7rem' }}>
            <Link className={k.weiter} href="/lernspur">
              → Wie die Lernspur entsteht
            </Link>
          </p>
        </section>

        <p className={k.kartenfuss}>
          <span>
            Quelle: Maurer, B. (2024). 24 Making-Kompetenzen – Framework für schulische Maker Education
            (MakeComp4School). PHTG, Kreuzlingen.
          </span>
          <span>CC BY-SA 4.0 · Oktober 2026</span>
        </p>
      </div>
    </div>
  );
}
