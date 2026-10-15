import type { Metadata } from 'next';
import { MERKMALE } from '@/lib/inhalte';

export const metadata: Metadata = {
  title: 'Schulisches Making',
  description:
    '«Schulisches Making ist Maker Education unter den Bedingungen des Schulalltags.» Was das heisst – und wo der Mobile MakerSpace dabei steht.',
};

export default function MakingSeite() {
  return (
    <>
      <section className="band band-sand" style={{ paddingBottom: '1.8rem' }}>
        <div className="wrap stack">
          <p className="eyebrow">Der Kontext</p>
          <h1 style={{ fontSize: 'clamp(1.9rem,5.5vw,3rem)' }}>Was ist schulisches Making?</h1>
        </div>
      </section>

      <section className="band band-weiss" style={{ paddingTop: '1rem' }}>
        <div className="wrap stack-l">
          <div style={{ background: 'var(--navy)', color: '#fff', borderRadius: 16, padding: '1.6rem 1.4rem' }}>
            <p
              style={{
                fontFamily: 'var(--display)',
                fontWeight: 800,
                fontSize: 'clamp(1.2rem,3.8vw,1.8rem)',
                lineHeight: 1.22,
              }}
            >
              «Schulisches Making ist Maker Education unter den Bedingungen des Schulalltags.»
            </p>
            <p style={{ color: '#b9bad6', marginTop: '.9rem', fontSize: '.88rem', lineHeight: 1.5 }}>
              Ingold, S. &amp; Maurer, B. (Hrsg., 2024): Making und Schule. Praxishandbuch für Schulentwicklung und
              Unterricht. kopaed. CC BY 4.0
            </p>
          </div>

          <div className="grid g2">
            {MERKMALE.map((m) => (
              <div key={m.titel} style={{ display: 'flex', gap: '.8rem', alignItems: 'flex-start' }}>
                <span
                  style={{
                    width: '.7rem',
                    height: '.7rem',
                    borderRadius: '50%',
                    background: 'var(--gruen)',
                    marginTop: '.5rem',
                    flex: '0 0 auto',
                  }}
                />
                <div>
                  <h3>{m.titel}</h3>
                  <p className="weich" style={{ fontSize: '.95rem', lineHeight: 1.5 }}>
                    {m.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="karte">
            <h3>Wo der Mobile MakerSpace steht</h3>
            <p className="weich">
              Die PHTG war gemeinsam mit der OST an der dreijährigen Making-Erprobung im Thurgau beteiligt und hat
              parallel einen eigenen Ausbildungs-MakerSpace aufgebaut. Der Mobile MakerSpace führt diese Erfahrung
              dorthin weiter, wo keine Werkstatt steht: in die Primarklasse, für eine Woche, ohne dass die Lehrperson
              Making-Profi sein muss.
            </p>
          </div>

          <div className="stack">
            <p className="eyebrow">Weiterlesen</p>
            <p>
              <a
                className="knopf rand"
                href="https://phtg.ch/storage/dll/dokumente/making-und-schule-2024.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--navy)' }}
              >
                Praxishandbuch «Making und Schule» (PDF)
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
