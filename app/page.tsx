import Link from 'next/link';
import k from '@/components/Kartenblatt.module.css';
import { CHALLENGES } from '@/lib/inhalte';

const CH_DETAIL: Record<string, { bedingung: string; boxen: string; schluss: string }> = {
  'Der Lernhelfer': {
    bedingung: 'Das Problem muss selbst beobachtet sein – nicht ausgedacht und nicht von der Lehrperson gestellt.',
    boxen: 'Material-, Elektro- und Energiebox',
    schluss: 'Das Gerät läuft vor der Klasse und die Gruppe erklärt, welches Lernproblem es löst.',
  },
  'Die bewegliche Brücke': {
    bedingung: 'Sie überspannt 40 cm, trägt geschlossen 200 g und gibt den Weg dreimal hintereinander frei.',
    boxen: 'Material-, Elektro- und Energiebox',
    schluss: 'Vorgeführt wird unter denselben Bedingungen wie beim Test am Donnerstag – mit Zahlen von vorher und nachher.',
  },
  'Der Wächter': {
    bedingung: 'Er meldet von selbst, ohne dass jemand einen Knopf drückt. Die Wenn-Dann-Regel steht vorher auf Papier.',
    boxen: 'Material-, Elektro- und Energiebox',
    schluss: 'Das Ereignis wird ausgelöst, und das Signal kommt – oder es kommt nicht, und die Gruppe erklärt warum.',
  },
  'Die Kettenreaktion': {
    bedingung: 'Jede Station nimmt den Anstoss der vorherigen an und gibt ihn weiter. Die Schnittstelle wird zwischen den Gruppen ausgehandelt.',
    boxen: 'Material-, Elektro- und Konstruktionsbox',
    schluss: 'Ein Durchlauf durch alle Stationen. Diese Challenge braucht die ganze Klasse.',
  },
};

export default function Start() {
  return (
    <div className={k.blatt}>
      <div className="wrap">
        {/* ---------- 1 Kopf ---------- */}
        <header className={k.kopf}>
          <div className={k.kopfLinks}>
            <div className="okt" style={{ width: '2.8rem', height: '2.8rem', fontSize: '1.15rem' }}>
              C
            </div>
            <div style={{ minWidth: 0 }}>
              <p className={k.marke}>Pädagogische Hochschule Thurgau · Projekt</p>
              <h1 className={k.titel}>Eine Making-Woche, die ins Klassenzimmer kommt</h1>
            </div>
          </div>
          <div className={k.kopfRechts}>
            <span className={k.pille}>Mobiler MakerSpace</span>
            <span className={k.zeile}>4.–6. Klasse · sieben Halbtage · Prototyp Oktober 2026</span>
          </div>
        </header>

        {/* ---------- 2 Was Making ausmacht ---------- */}
        <div className={k.stoererZone} style={{ marginTop: '1.1rem' }}>
          <span className={k.stoererMarke} style={{ background: '#EFA52B', color: 'var(--navy)' }}>
            Die Pluspunkte
          </span>
          <section className={k.unterschiede}>
            <div className={k.unterschiedeKopf}>
              <h2>Fünf Pluspunkte von schulischem Making</h2>
              <p>Das steckt hinter dem Begriff – und das bleibt, wenn die Kisten wieder weg sind.</p>
            </div>
            <div className={k.plus}>
              <div className={k.plusKachel} style={{ color: '#EFA52B' }}>
                <span className={k.plusGegen}>Die Aufgabe</span>
                <span className={k.plusTitel}>Eigene Ideen umsetzen</span>
                <span className={k.plusText}>
                  Die Aufgabe ist offen. Was gebaut wird, entscheidet die Gruppe – an einem Problem, das sie
                  selbst beobachtet hat.
                </span>
              </div>
              <div className={k.plusKachel} style={{ color: 'var(--gruen)' }}>
                <span className={k.plusGegen}>Die Beurteilung</span>
                <span className={k.plusTitel}>Prozess vor Produkt</span>
                <span className={k.plusText}>
                  Beurteilt wird der Weg: was beobachtet, entschieden, geändert und begründet wurde.
                </span>
              </div>
              <div className={k.plusKachel} style={{ color: '#6F63B8' }}>
                <span className={k.plusGegen}>Die Rolle</span>
                <span className={k.plusTitel}>Lehrperson begleitet</span>
                <span className={k.plusText}>
                  Sie moderiert und begleitet. Making-Vorwissen braucht sie dafür keines.
                </span>
              </div>
              <div className={k.plusKachel} style={{ color: 'var(--warn)' }}>
                <span className={k.plusGegen}>Die Wirkung</span>
                <span className={k.plusTitel}>Selbstwirksamkeit</span>
                <span className={k.plusText}>
                  Am Ende weiss ein Kind: Das habe ich zum Laufen gebracht. Und es kann zeigen, wie.
                </span>
              </div>
              <div className={k.plusKachel} style={{ color: 'var(--navy)' }}>
                <span className={k.plusGegen}>Der Ertrag</span>
                <span className={k.plusTitel}>Belegte Kompetenzen</span>
                <span className={k.plusText}>
                  Jeder Halbtag hinterlässt einen Eintrag. Am Freitag steht pro Kind ein Nachweis.
                </span>
              </div>
            </div>
            <p style={{ marginTop: '.9rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <Link className={k.weiter} href="/making">
                → Was schulisches Making ist
              </Link>
              <Link className={k.weiter} href="/lernspur">
                → Wie die Lernspur entsteht
              </Link>
            </p>
          </section>
        </div>

        {/* ---------- 3 Vertrauen ---------- */}
        <div className={k.belege}>
          <div className={k.beleg}>
            <b>Herkunft</b>
            <p>
              Die PHTG war mit der OST an der dreijährigen Making-Erprobung des Kantons Thurgau beteiligt und
              hat parallel einen eigenen Ausbildungs-MakerSpace aufgebaut.
            </p>
          </div>
          <div className={k.beleg}>
            <b>Grundlage</b>
            <p>
              Das Praxishandbuch «Making und Schule» (Ingold &amp; Maurer, kopaed 2024) und der Kompetenzrahmen
              MakeComp4School mit 24 Making-Kompetenzen.
            </p>
          </div>
          <div className={k.beleg}>
            <b>Stand</b>
            <p>
              Boxen, Kartenset und Kompetenznachweis liegen als Prototyp vor. Eine Testklasse hat die Woche noch
              nicht durchlaufen.
            </p>
          </div>
          <div className={k.beleg}>
            <b>Lizenz</b>
            <p>
              Karten, Leitfaden und Dokumentationsvorlagen stehen unter CC BY-SA 4.0 – anpassbar, weitergebbar,
              ohne Lizenzkosten.
            </p>
          </div>
        </div>

        {/* ---------- 3 Absicht ---------- */}
        <section className={k.auftrag} id="absicht">
          <p className={k.auftragLabel}>Worum es geht</p>
          <p className={k.auftragSatz}>Making scheitert in der Primarschule selten am Willen.</p>
          <p className={k.auftragUnter}>
            Es scheitert an dreierlei: Es gibt keinen Raum dafür, keine Zeit im Jahresplan und niemanden im
            Kollegium, der sich zutraut, so eine Woche zu leiten. Der Mobile MakerSpace verschiebt diese drei
            Hürden, statt sie der Schule zu überlassen – das Material kommt in Boxen, die Woche ist getaktet,
            und die Karten tragen den Inhalt. Es kommt niemand von aussen ins Schulzimmer.
          </p>
        </section>

        <div className={`${k.raster} ${k.rasterOben}`}>
            <section className={`${k.kachel} ${k.kachelMint}`}>
              <div className={k.kachelKopf}>
                <span className={k.symbol} aria-hidden="true">
                  ✎
                </span>
                <h2>Was bleibt</h2>
              </div>
              <ul className={k.haken}>
                <li>Eine digitale Lerndokumentation: Fotos, Skizzen, Messwerte, Reflexionen.</li>
                <li>Ein Kompetenznachweis pro Kind nach MakeComp4School.</li>
                <li>Am Freitag geht die Hardware zurück. Die Lernspur bleibt.</li>
              </ul>
              <p style={{ marginTop: '.6rem' }}>
                <Link className={k.weiter} href="/lernspur">
                  → Wie die Lernspur entsteht
                </Link>
                <span className={k.weiterZusatz}>
                  Oder gleich{' '}
                  <Link href="/kompetenzen" style={{ fontWeight: 700 }}>
                    die 24 Kompetenzen
                  </Link>{' '}
                  im Einzelnen.
                </span>
              </p>
            </section>

            <section className={`${k.kachel} ${k.kachelNavy}`}>
              <div className={k.kachelKopf}>
                <span className={`${k.symbol} ${k.symbolHell}`} aria-hidden="true">
                  ▲
                </span>
                <h2>Die Bedingung</h2>
              </div>
              <p style={{ fontSize: '.95rem', lineHeight: 1.5 }}>
                In allen vier Challenges gilt: <strong>Sie funktioniert nur mit Energie, die ihr selbst erzeugt
                habt.</strong> Solarzelle, Windrad, Handkurbel und Speicher statt Steckdose. Damit wird Energie
                zum Konstruktionsproblem statt zur Selbstverständlichkeit.
              </p>
            </section>
        </div>

        {/* ---------- 4 Störer: schulisches Making ---------- */}
        <div className={k.stoererZone}>
          <span className={k.stoererMarke}>Woher das kommt</span>
          <section className={k.stoerer}>
            <q>Schulisches Making ist Maker Education unter den Bedingungen des Schulalltags.</q>
            <p className={k.quelle}>
              Ingold, S. &amp; Maurer, B. (Hrsg., 2024): Making und Schule. Praxishandbuch für Schulentwicklung
              und Unterricht. kopaed. CC BY 4.0
            </p>
            <p style={{ marginTop: '1rem' }}>
              <Link href="/making">→ Was schulisches Making ist und was es nicht ist</Link>
            </p>
          </section>
        </div>

        {/* ---------- 5 Die Challenges ---------- */}
        <section style={{ marginTop: '1.4rem' }}>
          <h2 style={{ fontSize: 'clamp(1.3rem,3.6vw,1.9rem)' }}>Vier Challenges zur Auswahl</h2>
          <p className="lead weich" style={{ marginTop: '.4rem' }}>
            Jede füllt eine Woche, jede ist als offene Problemstellung formuliert: einfacher Einstieg, nach oben
            offen. Aufklappen zeigt Bedingung, Material und was am Freitag vorgeführt wird.
          </p>
          <div className={k.challenges}>
            {CHALLENGES.map((c) => {
              const d = CH_DETAIL[c.titel];
              return (
                <details key={c.titel} className={k.challenge}>
                  <summary>
                    <b>{c.titel}</b>
                    <span>Ansehen</span>
                  </summary>
                  <div className={k.chInhalt}>
                    <p>{c.aufgabe}</p>
                    <p className={k.chZeile}>
                      <b>Bedingung</b>
                      <span>{d.bedingung}</span>
                    </p>
                    <p className={k.chZeile}>
                      <b>Schwerpunkt</b>
                      <span>{c.schwerpunkt}</span>
                    </p>
                    <p className={k.chZeile}>
                      <b>Boxen</b>
                      <span>{d.boxen}</span>
                    </p>
                    <p className={k.chZeile}>
                      <b>Am Freitag</b>
                      <span>{d.schluss}</span>
                    </p>
                  </div>
                </details>
              );
            })}
          </div>
        </section>

        {/* ---------- 6 Methodik: Parallelität ---------- */}
        <section className={k.kachel} style={{ marginTop: '1.4rem' }}>
          <h2>Warum mehrere Challenges gleichzeitig laufen können</h2>
          <p style={{ fontSize: '.97rem', lineHeight: 1.55, maxWidth: '56em', marginTop: '.5rem' }}>
            Eine Klasse muss sich nicht auf eine Challenge einigen. Gruppen, die ein Lernproblem lösen wollen,
            arbeiten neben Gruppen, die eine Brücke bewegen – im selben Zimmer, in derselben Woche, mit einer
            Lehrperson. Möglich ist das, weil alle Kartensätze <strong>gleich getaktet</strong> sind: Am selben
            Halbtag steht jede Gruppe beim selben Schritt, nur mit einem anderen Problem.
          </p>
          <div className={k.mini}>
            <table className={k.miniTab}>
              <thead>
                <tr>
                  <th scope="col" style={{ background: 'transparent' }}>
                    <span className="eyebrow">Halbtag</span>
                  </th>
                  <th scope="col">Der Lernhelfer</th>
                  <th scope="col">Die bewegliche Brücke</th>
                  <th scope="col">Der Wächter</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={k.zeit}>Mo VM · 1</td>
                  <td>Stolperjagd</td>
                  <td>Kreuzungsjagd</td>
                  <td>Wächterjagd</td>
                </tr>
                <tr>
                  <td className={k.zeit}>Di VM · 3</td>
                  <td className={k.takt}>Ideen schmieden</td>
                  <td>Energie-Werkstatt</td>
                  <td>Energie-Werkstatt</td>
                </tr>
                <tr>
                  <td className={k.zeit}>Di NM · 4</td>
                  <td className={k.takt}>Energie-Werkstatt</td>
                  <td>Ideen schmieden</td>
                  <td>Ideen schmieden</td>
                </tr>
                <tr>
                  <td className={k.zeit}>Fr VM · 8</td>
                  <td>Zeigen</td>
                  <td>Zeigen</td>
                  <td>Zeigen</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '.92rem', lineHeight: 1.55, marginTop: '.8rem', color: '#4a4d6b' }}>
            Die beiden grün markierten Felder sind der einzige Unterschied: Beim Lernhelfer sind Schritt 3 und 4
            vertauscht – zuerst Ideen, dann Bauteile. Das ist kein Sonderfall, sondern Absicht. Dadurch steht nie
            die ganze Klasse gleichzeitig an der Energie-Werkstatt, und das Material reicht.
          </p>
          <p style={{ fontSize: '.92rem', lineHeight: 1.55, marginTop: '.6rem', color: '#4a4d6b' }}>
            Eine Ausnahme gibt es: <strong>Die Kettenreaktion</strong> braucht die ganze Klasse, weil jede
            Gruppe eine Station für die nächste baut.
          </p>
          <p style={{ marginTop: '.8rem' }}>
            <Link className={k.weiter} href="/woche">
              → Die Woche, Halbtag für Halbtag
            </Link>
          </p>
        </section>

        {/* ---------- 7 Entscheidungshilfe ---------- */}
        <div className={`${k.raster} ${k.rasterUnten}`} style={{ marginTop: '1.4rem' }}>
          <section className={k.kachel}>
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
                Dann ist die Woche trotzdem gelungen. Beurteilt wird nicht das Werkstück, sondern der Weg
                dorthin: was beobachtet, entschieden, geändert und begründet wurde. Der Kompetenznachweis
                entsteht aus der Lerndokumentation, nicht aus dem Prototyp.
              </p>
            </div>
          </section>

          <section className={`${k.kachel} ${k.kachelNavy}`}>
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
            <p style={{ fontSize: '.92rem', lineHeight: 1.5, marginTop: '.7rem', color: '#c6c8de' }}>
              Zur Grössenordnung: vier Boxen zu je rund CHF 750 pro Materialsatz. Betriebs- und
              Finanzierungsmodell sind offen – genau darüber möchten wir reden.
            </p>
          </section>
        </div>

        {/* ---------- Mieten und buchen ---------- */}
        <section className={k.stoererZone} style={{ marginTop: '1.4rem' }}>
          <span className={k.stoererMarke} style={{ background: 'var(--gruen)' }}>
            Buchen
          </span>
          <div className={k.stoerer} style={{ background: 'var(--gruen)' }}>
            <q style={{ quotes: 'none' }}>Boxen, Challenges und das ganze Setting lassen sich mieten.</q>
            <p style={{ color: '#e8f6ef', marginTop: '.8rem', fontSize: '1rem', lineHeight: 1.55, maxWidth: '44em' }}>
              Das Angebot läuft über den I+D Campus. Dort sind die Konditionen hinterlegt, und dort wird eine
              Woche gebucht – für eine einzelne Klasse oder für eine ganze Projektwoche.
            </p>
            <p style={{ marginTop: '1rem' }}>
              <a
                href="https://id-campus.ch/lp-infoabend-mint-future-skills-plattform/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#fff', textDecoration: 'underline', textUnderlineOffset: '4px' }}
              >
                → Zur Plattform des I+D Campus
              </a>
            </p>
          </div>
        </section>

        {/* ---------- 8 Erst jetzt: Sidequests ---------- */}
        <section className={k.quests} id="ausprobieren">
          <p className={k.auftragLabel}>Erst lesen, dann ausprobieren</p>
          <h2>Jetzt sind Sie dran</h2>
          <p>
            Sie wissen nun, wie die Woche aufgebaut ist. Ob das auch im Schulzimmer trägt, merkt man erst, wenn
            man es selbst versucht. Drei kurze Übungen – keine davon dauert länger als fünf Minuten.
          </p>
          <div className={k.questListe}>
            <Link className={k.quest} href="/moderationsfalle">
              <span className={k.questFuer}>Für Lehrpersonen</span>
              <b>Die Moderationsfalle</b>
              <p>
                Vierzehn Zeilen aus einem Mittwochnachmittag. Vier Sätze der Lehrperson nehmen der Gruppe die
                Arbeit ab – finden Sie sie.
              </p>
            </Link>
            <Link className={k.quest} href="/wochenplan">
              <span className={k.questFuer}>Für die Planung</span>
              <b>Passt der Plan?</b>
              <p>
                Ein Wochenplan mit mehreren Challenges nebeneinander. An vier Stellen bricht die Abstimmung.
              </p>
            </Link>
            <Link className={k.quest} href="/spiel">
              <span className={k.questFuer}>Zum Anschauen</span>
              <b>Die Kettenreaktion</b>
              <p>
                Jedes Bauteil wandelt eine Wirkung in eine andere um. Bauen Sie eine Kette, die den Anstoss
                weitergibt.
              </p>
            </Link>
          </div>
        </section>

        {/* ---------- 9 Offen ---------- */}
        <section className={k.offen}>
          <b>Offen geblieben</b>
          <p>
            Das Betriebs- und Finanzierungsmodell ist nicht entschieden – Miete, Trägerschaft und Betreuung
            stehen zur Diskussion. Ob Lasercutter, Tiefziehgerät und Lötstation zum Mietmaterial gehören,
            entscheidet sich nach der ersten Testklasse. Diese Klasse gibt es noch nicht: Was hier steht,
            beschreibt, wie das Material gebaut ist, und ist kein Erfahrungsbericht.
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
