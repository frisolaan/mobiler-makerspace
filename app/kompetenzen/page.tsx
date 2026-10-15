import type { Metadata } from 'next';
import { KOMPETENZEN } from '@/lib/inhalte';

export const metadata: Metadata = {
  title: 'Kompetenzen',
  description:
    'Der Mobile MakerSpace arbeitet mit MakeComp4School – 24 Making-Kompetenzen in vier Bereichen, verankert in den Challenge Cards und im Kompetenznachweis.',
};

export default function KompetenzSeite() {
  return (
    <>
      <section className="band band-sand" style={{ paddingBottom: '1.8rem' }}>
        <div className="wrap stack">
          <p className="eyebrow">Begutachtung</p>
          <h1 style={{ fontSize: 'clamp(1.9rem,5.5vw,3rem)' }}>24 Making-Kompetenzen</h1>
          <p className="lead weich">
            Der Mobile MakerSpace arbeitet mit dem Kompetenzrahmen MakeComp4School. Die Kompetenzen bleiben nicht auf
            der Konzeptebene: Jede Schrittkarte weist aus, was an diesem Halbtag im Mittelpunkt steht – und am Ende
            der Woche entsteht pro Kind ein Nachweis.
          </p>
        </div>
      </section>

      <section className="band band-weiss">
        <div className="wrap stack-l">
          <div className="grid g2">
            {KOMPETENZEN.map((k) => (
              <div key={k.bereich} style={{ borderRadius: 14, overflow: 'hidden', border: '1px solid var(--linie)' }}>
                <h2
                  style={{
                    background: k.farbe,
                    color: '#fff',
                    fontSize: '.84rem',
                    letterSpacing: '.09em',
                    textTransform: 'uppercase',
                    padding: '.65rem .95rem',
                  }}
                >
                  {k.bereich}
                </h2>
                <ol style={{ margin: 0, padding: '.85rem .95rem', listStyle: 'none', background: '#fff' }}>
                  {k.liste.map((name, i) => (
                    <li key={name} style={{ color: k.farbe, padding: '.12rem 0' }}>
                      <span
                        style={{
                          fontVariantNumeric: 'tabular-nums',
                          fontWeight: 800,
                          opacity: 0.65,
                          marginRight: '.45rem',
                        }}
                      >
                        {k.ab + i}
                      </span>
                      {name}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>

          <div style={{ background: 'var(--lavendel)', borderRadius: 14, padding: '1.2rem 1.3rem' }}>
            <h3>Drei Ebenen greifen ineinander</h3>
            <p style={{ marginTop: '.5rem', lineHeight: 1.55 }}>
              Die Karte nennt den Schwerpunkt des Halbtags. Die Lerndokumentation sammelt die Belege – Fotos, Skizzen,
              Messwerte, Reflexionen. Das Dashboard verdichtet beides zu einem Kompetenznachweis pro Kind, zeitlich
              unabhängig von der Woche.
            </p>
          </div>

          <p className="quelle">
            Kompetenzrahmen: Maurer, B. (2024). MakeComp4School – Kompetenzrahmen Making in der Schule. Pädagogische
            Hochschule Thurgau.
          </p>
        </div>
      </section>
    </>
  );
}
