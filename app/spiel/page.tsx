import type { Metadata } from 'next';
import Kettenspiel from '@/components/Kettenspiel';
import { BAUTEILE, WIRKUNG_FARBE, type Wirkung } from '@/lib/bauteile';

export const metadata: Metadata = {
  title: 'Die Kettenreaktion',
  description:
    'Baue eine Kette aus vier Stationen: Jedes Bauteil wandelt eine Wirkung in eine andere um, und der Anstoss muss bei der nächsten Gruppe ankommen.',
};

const ARTEN: Wirkung[] = ['Stoss', 'Druck', 'Luft', 'Drehung', 'Strom', 'Licht', 'Ton'];

export default function SpielSeite() {
  return (
    <>
      <section className="band band-sand" style={{ paddingBottom: '1.6rem' }}>
        <div className="wrap stack">
          <p className="eyebrow">Challenge 4 zum Ausprobieren</p>
          <h1 style={{ fontSize: 'clamp(1.9rem,5.5vw,3rem)' }}>Die Kettenreaktion</h1>
          <p className="lead weich">
            In der Klasse baut jede Gruppe eine Station, die einen Anstoss annimmt und weitergibt. Schwierig ist nicht
            die eigene Station, sondern die Stelle, an der sie die Station der Nachbargruppe berührt. Genau das lässt
            sich hier in zwei Minuten durchspielen.
          </p>
        </div>
      </section>

      <section style={{ paddingBottom: '3rem' }}>
        <div className="wrap">
          <Kettenspiel />
        </div>
      </section>

      <section className="band band-weiss">
        <div className="wrap stack-l">
          <div className="stack">
            <p className="eyebrow">Die Regel dahinter</p>
            <h2>Jedes Bauteil hat eine Richtung</h2>
            <p className="lead weich">
              Ein Motor nimmt Strom und gibt Drehung ab. Dreht man ihn von Hand, gibt er Strom ab. Diese Umkehrbarkeit
              steht auf den «Wie geht das?»-Karten, die zu jeder Box gehören – und sie ist der Grund, warum eine
              Kettenreaktion überhaupt planbar wird.
            </p>
          </div>

          <div className="stack">
            <p className="eyebrow">Sieben Wirkungsarten</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem' }}>
              {ARTEN.map((a) => (
                <span
                  key={a}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '.4rem',
                    fontFamily: 'var(--display)',
                    fontWeight: 700,
                    fontSize: '.88rem',
                    border: '1.5px solid var(--linie)',
                    borderRadius: 999,
                    padding: '.3rem .85rem',
                    background: '#fff',
                  }}
                >
                  <span
                    style={{ width: '.7rem', height: '.7rem', borderRadius: '50%', background: WIRKUNG_FARBE[a] }}
                  />
                  {a}
                </span>
              ))}
            </div>
          </div>

          <div className="grid g3">
            {BAUTEILE.map((b) => (
              <article key={b.id} className="karte">
                <h3>{b.name}</h3>
                <p style={{ fontSize: '.85rem', fontFamily: 'var(--display)', fontWeight: 700 }}>
                  {b.rein} <span aria-hidden="true">→</span> {b.raus}
                </p>
                <p className="weich" style={{ fontSize: '.88rem' }}>
                  {b.erklaerung}
                </p>
                <p className="quelle">{b.box}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
