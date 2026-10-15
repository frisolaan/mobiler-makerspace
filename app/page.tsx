import Link from 'next/link';
import { CHALLENGES, SCHRITTE, BOXEN } from '@/lib/inhalte';

export default function Start() {
  return (
    <>
      <section className="band band-navy">
        <div className="wrap stack">
          <p className="eyebrow">Pädagogische Hochschule Thurgau</p>
          <h1>
            Sieben Halbtage.
            <br />
            Vier Kisten.
            <br />
            <span style={{ color: 'var(--mint)' }}>Keine Steckdose.</span>
          </h1>
          <p className="lead" style={{ color: '#dfe0ec', marginTop: '.6rem' }}>
            Der Mobile MakerSpace bringt eine Making-Woche ins Klassenzimmer – als Materialset, das tageweise gemietet
            wird. Die Lehrperson führt die Woche selbst durch. Es kommt niemand von aussen.
          </p>
          <p style={{ marginTop: '1.2rem', display: 'flex', gap: '.7rem', flexWrap: 'wrap' }}>
            <Link className="knopf" href="/spiel">
              Kettenreaktion spielen
            </Link>
            <Link className="knopf rand" href="/making">
              Was ist schulisches Making?
            </Link>
          </p>
        </div>
      </section>

      <section className="band band-sand">
        <div className="wrap stack-l">
          <div className="stack">
            <p className="eyebrow">Worum es geht</p>
            <h2>Drei Teile, die zusammenwirken</h2>
            <p className="lead weich">
              Das Boxensystem liefert das Material, die Challenge gibt der Woche eine Aufgabe, und die Karten führen
              Klasse und Lehrperson durch die Tage. Am Ende der Mietdauer geht das Material vollständig zurück – was
              bleibt, sind die Kompetenzen der Kinder und deren Belege.
            </p>
          </div>
          <div className="grid g3">
            <article className="karte">
              <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem' }}>
                <div className="okt">1</div>
                <span className="eyebrow">Material</span>
              </div>
              <h3>Modulares Boxensystem</h3>
              <p className="weich">
                Grundlagenboxen für jede Ausleihe, Themenboxen je nach Challenge. Ein Einlagensystem hält Ordnung und
                macht die Vollständigkeitskontrolle zur Sache der Kinder.
              </p>
            </article>
            <article className="karte">
              <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem' }}>
                <div className="okt">2</div>
                <span className="eyebrow">Aufgabe</span>
              </div>
              <h3>Challenge und Karten</h3>
              <p className="weich">
                Eine offene Problemstellung füllt die Woche. Pro Halbtag liegt eine Karte bereit – mit Auftrag,
                Vorgehen, Fertig-Kriterium und dreistufiger Hilfe.
              </p>
            </article>
            <article className="karte">
              <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem' }}>
                <div className="okt">3</div>
                <span className="eyebrow">Nachweis</span>
              </div>
              <h3>Lernspur statt Werkstück</h3>
              <p className="weich">
                Fotos, Skizzen, Messwerte und Reflexionen landen in einer digitalen Lerndokumentation. Daraus entsteht
                pro Kind ein Kompetenznachweis.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="band band-weiss">
        <div className="wrap stack-l">
          <div className="stack">
            <p className="eyebrow">Die Aufgaben</p>
            <h2>Vier Challenges zur Auswahl</h2>
            <p className="lead weich">
              Alle mit demselben Boxensystem durchführbar und gleich aufgebaut. Drei davon können in einer Klasse
              parallel laufen – die Kettenreaktion braucht die ganze Klasse.
            </p>
          </div>
          <div className="grid g2">
            {CHALLENGES.map((c) => (
              <article key={c.titel} className="karte">
                <h3>{c.titel}</h3>
                <p className="weich">{c.aufgabe}</p>
                <p style={{ fontSize: '.9rem' }}>
                  <strong>Schwerpunkt:</strong> {c.schwerpunkt}
                </p>
              </article>
            ))}
          </div>
          <div
            style={{
              background: 'var(--navy)',
              color: '#fff',
              borderRadius: 16,
              padding: '1.5rem 1.4rem',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--display)',
                fontWeight: 800,
                fontSize: 'clamp(1.15rem,3.4vw,1.6rem)',
                lineHeight: 1.25,
              }}
            >
              «Sie funktioniert nur mit Energie, die ihr selbst erzeugt habt.»
            </p>
            <p style={{ color: '#b9bad6', marginTop: '.8rem', fontSize: '.9rem', lineHeight: 1.5 }}>
              Die Bedingung, die in allen vier Challenges gilt. Solarzelle, Windrad, Handkurbel und Speicher statt
              Steckdose – damit wird Energie zum Konstruktionsproblem statt zur Selbstverständlichkeit.
            </p>
          </div>
        </div>
      </section>

      <section className="band band-sand">
        <div className="wrap stack-l">
          <div className="stack">
            <p className="eyebrow">Der Ablauf</p>
            <h2>Acht Schritte, sieben Halbtage</h2>
            <p className="lead weich">
              Der Ablauf ist in allen Challenges derselbe. Eine Schulwoche bietet in der Regel sieben nutzbare
              Halbtage, das Kartenset umfasst acht Schritte. Diese Differenz ist beabsichtigt: Ein Schritt kann
              weggelassen, zwei können zusammengelegt werden.
            </p>
          </div>
          <div className="grid g4">
            {SCHRITTE.map((x) => (
              <div key={x.nr} className="karte" style={{ flexDirection: 'row', gap: '.7rem', alignItems: 'flex-start' }}>
                <div className={x.nr === 8 ? 'okt gruen' : 'okt'} style={{ width: '1.8rem', height: '1.8rem', fontSize: '.82rem' }}>
                  {x.nr}
                </div>
                <div>
                  <h3 style={{ fontSize: '.98rem' }}>{x.name}</h3>
                  <p className="weich" style={{ fontSize: '.85rem', lineHeight: 1.35 }}>
                    {x.was}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band band-weiss">
        <div className="wrap stack-l">
          <div className="stack">
            <p className="eyebrow">Das Material</p>
            <h2>Vier Boxen</h2>
          </div>
          <div className="grid g4">
            {BOXEN.map((b) => (
              <article key={b.name} className="karte">
                <span className="eyebrow">{b.art}</span>
                <h3>{b.name}</h3>
                <p className="weich" style={{ fontSize: '.88rem' }}>
                  {b.inhalt}
                </p>
              </article>
            ))}
          </div>
          <p>
            <Link className="knopf" href="/spiel">
              Jetzt eine Kettenreaktion bauen
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
