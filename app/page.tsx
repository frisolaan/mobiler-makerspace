import Link from 'next/link';
import k from '@/components/Kartenblatt.module.css';
import { CHALLENGES } from '@/lib/inhalte';

/** Adresse der Challenge Cards zum Ansehen. Leer lassen, solange sie nicht veröffentlicht sind. */
const CHALLENGE_CARDS_URL = '';

/** Acht Lernschritte – links der Schritt, rechts, was die Gruppe in der jeweiligen Aufgabe tut. */
const SCHRITTE_KURZ: { nr: number; name: string; je: string[] }[] = [
  { nr: 1, name: 'Erfahren', je: ['Stolperjagd', 'Kreuzungsjagd', 'Ereignisjagd', 'Anstoss suchen'] },
  { nr: 2, name: 'Festlegen', je: ['Problem wählen', 'Hindernis wählen', 'Ereignis wählen', 'Station wählen'] },
  { nr: 3, name: 'Entwerfen', je: ['Ideen schmieden', 'Ideen schmieden', 'Ideen schmieden', 'Ideen schmieden'] },
  { nr: 4, name: 'Prüfen', je: ['Bauteile testen', 'Bauteile testen', 'Bauteile testen', 'Bauteile testen'] },
  { nr: 5, name: 'Entscheiden', je: ['Skizze mit Massen', 'Skizze mit Massen', 'Wenn-Dann-Regel', 'Schnittstelle klären'] },
  { nr: 6, name: 'Bauen', je: ['Erste Fassung', 'Erste Fassung', 'Erste Fassung', 'Erste Fassung'] },
  { nr: 7, name: 'Testen', je: ['Eine Sache ändern', 'Eine Sache ändern', 'Eine Sache ändern', 'Übergabe testen'] },
  { nr: 8, name: 'Zeigen', je: ['Vorführen', 'Vorführen', 'Vorführen', 'Ein Durchlauf'] },
];

const CH_DETAIL: Record<string, { bedingung: string; boxen: string; schluss: string }> = {
  'Der Lernhelfer': {
    bedingung: 'Das Problem muss selbst beobachtet sein – nicht ausgedacht und nicht von der Lehrperson gestellt.',
    boxen: 'Material-, Elektro- und Energiebox',
    schluss: 'Das Gerät läuft vor der Klasse und die Gruppe erklärt, welches Lernproblem es löst.',
  },
  'Die bewegliche Brücke': {
    bedingung: 'Sie überspannt 40 cm, trägt geschlossen 200 g und gibt den Weg dreimal hintereinander frei.',
    boxen: 'Material-, Elektro- und Energiebox',
    schluss: 'Vorgeführt wird unter denselben Bedingungen wie beim Test – mit Zahlen von vorher und nachher.',
  },
  'Der Wächter': {
    bedingung: 'Er meldet von selbst, ohne dass jemand einen Knopf drückt. Die Wenn-Dann-Regel steht vorher auf Papier.',
    boxen: 'Material-, Elektro- und Energiebox',
    schluss: 'Das Ereignis wird ausgelöst, und das Signal kommt – oder es kommt nicht, und die Gruppe erklärt warum.',
  },
  'Die Kettenreaktion': {
    bedingung: 'Jede Station nimmt den Anstoss der vorherigen an und gibt ihn weiter. Die Schnittstelle wird zwischen den Gruppen ausgehandelt.',
    boxen: 'Material-, Elektro- und Konstruktionsbox',
    schluss: 'Ein Durchlauf durch alle Stationen. Diese Aufgabe braucht die ganze Klasse.',
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
              M
            </div>
            <div style={{ minWidth: 0 }}>
              <p className={k.marke}>I+D Campus × Pädagogische Hochschule Thurgau</p>
              <h1 className={k.titel}>Mobiler MakerSpace</h1>
              <p className={k.untertitel}>Eine Making-Woche, die ins Klassenzimmer kommt</p>
            </div>
          </div>
          <div className={k.kopfRechts}>
            <span className={k.pille}>Zur Miete</span>
            <span className={k.zeile}>4.–6. Klasse · acht Lernschritte · Prototyp Oktober 2026</span>
          </div>
        </header>

        {/* ---------- 2 Das Angebot: drei Standbeine ---------- */}
        <section className={k.kachel} style={{ marginTop: '1rem' }}>
          <h2>Ein Materialsortiment, das didaktisch begleitet an Schulen vermietet wird</h2>
          <p className="weich" style={{ fontSize: '.97rem', lineHeight: 1.55, marginTop: '.45rem', maxWidth: '58em' }}>
            Der Mobile MakerSpace ist eine Kooperation des <strong>I+D Campus</strong> mit der{' '}
            <strong>Pädagogischen Hochschule Thurgau</strong>. Eine Schule mietet das Set für die Dauer ihres
            Vorhabens; es kommt vollständig ins Schulzimmer und geht danach wieder zurück. Das Angebot steht auf
            drei Standbeinen.
          </p>
          <div className={k.standbeine}>
            <div className={k.standbein}>
              <span className={k.standbeinNr}>1</span>
              <span style={{ minWidth: 0 }}>
                <b>Materialset</b>
                <span>
                  Werkzeug und Bauteile, thematisch in Boxen geordnet. Ein Einlagensystem hält sie vollständig und
                  macht die Kontrolle zur Aufgabe der Kinder.
                </span>
              </span>
            </div>
            <div className={k.standbein}>
              <span className={k.standbeinNr}>2</span>
              <span style={{ minWidth: 0 }}>
                <b>Didaktisches und methodisches Material</b>
                <span>
                  Vier ausgearbeitete Aufgaben mit didaktischem Kommentar für die Lehrperson und Challenge Cards,
                  mit denen die Schüler:innen selbstständig arbeiten.
                </span>
              </span>
            </div>
            <div className={k.standbein}>
              <span className={k.standbeinNr}>3</span>
              <span style={{ minWidth: 0 }}>
                <b>Kompetenzen sichtbar machen</b>
                <span>
                  Eine Anleitung, wie die geförderten überfachlichen Kompetenzen dokumentiert und pro Kind belegt
                  werden – von der Lerndokumentation bis zum Nachweis.
                </span>
              </span>
            </div>
          </div>
        </section>

        {/* ---------- 3 Prinzipien des schulischen Making ---------- */}
        <div className={k.stoererZone} style={{ marginTop: '1.3rem' }}>
          <span className={k.stoererMarke} style={{ background: '#EFA52B', color: 'var(--navy)' }}>
            Educational Making
          </span>
          <section className={k.unterschiede}>
            <div className={k.unterschiedeKopf}>
              <h2>Die Prinzipien des schulischen Making</h2>
              <p>
                Making folgt im Unterricht einigen wenigen Grundsätzen. Sie zielen auf überfachliche Kompetenzen –
                und bestimmen, wie das Material gebaut ist.
              </p>
            </div>
            <div className={k.plus}>
              <div className={k.plusKachel} style={{ color: '#EFA52B' }}>
                <span className={k.plusGegen}>Die Aufgabe</span>
                <span className={k.plusTitel}>Eigene Ideen umsetzen</span>
                <span className={k.plusText}>
                  Die Aufgabe ist offen formuliert. Was gebaut wird, entscheidet die Gruppe – an einem Problem,
                  das sie selbst beobachtet hat.
                </span>
              </div>
              <div className={k.plusKachel} style={{ color: 'var(--gruen)' }}>
                <span className={k.plusGegen}>Die Beurteilung</span>
                <span className={k.plusTitel}>Prozess vor Produkt</span>
                <span className={k.plusText}>
                  Im Mittelpunkt steht der Weg: was beobachtet, entschieden, geändert und begründet wurde.
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
                <span className={k.plusTitel}>Überfachliche Kompetenzen</span>
                <span className={k.plusText}>
                  Gefördert werden Kompetenzen, die sich sonst schwer zeigen lassen – und hier belegbar werden.
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

        {/* ---------- 4 Einordnung ---------- */}
        <div className={k.belege}>
          <div className={k.beleg}>
            <b>Grundlage</b>
            <p>
              Das Praxishandbuch «Making und Schule» (Ingold &amp; Maurer, kopaed 2024) und der Kompetenzrahmen
              MakeComp4School mit 24 Making-Kompetenzen.
            </p>
          </div>
          <div className={k.beleg}>
            <b>Erfahrung</b>
            <p>
              Die PHTG war mit der OST an der dreijährigen Making-Erprobung des Kantons Thurgau beteiligt und hat
              parallel einen eigenen Ausbildungs-MakerSpace aufgebaut.
            </p>
          </div>
          <div className={k.beleg}>
            <b>Stand</b>
            <p>
              Boxen, Kartenset und Kompetenznachweis liegen als Prototyp vor. Eine Testklasse hat die Lernschritte
              noch nicht durchlaufen.
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

        {/* ---------- 5 Der Mehrwert ---------- */}
        <section className={k.auftrag} id="mehrwert">
          <p className={k.auftragLabel}>Worum es geht</p>
          <p className={k.auftragSatz}>Making kennenlernen, ohne eine eigene Werkstatt aufzubauen.</p>
          <p className={k.auftragUnter}>
            Eine Schule kann die Making-Methode im eigenen Unterricht erproben, bevor sie in Räume und Geräte
            investiert: Das Material kommt in Boxen, die Lernschritte sind ausgearbeitet, und die Karten tragen
            den Inhalt. Die Lehrperson führt selbst durch – und nimmt die Erfahrung mit, auch wenn das Material
            wieder weg ist.
          </p>
        </section>

        <section className={`${k.kachel} ${k.kachelMint}`} style={{ marginTop: '.9rem' }}>
          <div className={k.kachelKopf}>
            <span className={k.symbol} aria-hidden="true">
              ✎
            </span>
            <h2>Was bleibt</h2>
          </div>
          <ul className={k.haken}>
            <li>
              Eine digitale Lerndokumentation: nach jedem Lernschritt ein Eintrag, meist ein Foto und ein bis drei
              Sätze.
            </li>
            <li>Ein Kompetenznachweis pro Kind, nach den 24 Making-Kompetenzen von MakeComp4School.</li>
            <li>Die Erfahrung der Lehrperson, die das Ganze im Jahr darauf wiederholen kann.</li>
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

        {/* ---------- 6 Störer: schulisches Making ---------- */}
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

        {/* ---------- 7 Die vier Aufgaben ---------- */}
        <section style={{ marginTop: '1.4rem' }}>
          <h2 style={{ fontSize: 'clamp(1.3rem,3.6vw,1.9rem)' }}>Vier Aufgaben zur Auswahl</h2>
          <p className="lead weich" style={{ marginTop: '.4rem' }}>
            Jede ist als offene Problemstellung formuliert: einfacher Einstieg, nach oben offen. Aufklappen zeigt
            Bedingung, Material und was am Schluss vorgeführt wird.
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
                      <b>Am Schluss</b>
                      <span>{d.schluss}</span>
                    </p>
                  </div>
                </details>
              );
            })}
          </div>
        </section>

        {/* ---------- 8 Die Methodik ---------- */}
        <section className={k.kachel} style={{ marginTop: '1.4rem' }}>
          <h2>Ein Materialset, vier Aufgaben, eine Struktur</h2>
          <p style={{ fontSize: '.97rem', lineHeight: 1.55, maxWidth: '58em', marginTop: '.5rem' }}>
            Zu jeder Aufgabe gehören ein <strong>didaktischer Kommentar</strong> für die Lehrperson und{' '}
            <strong>Challenge Cards</strong> für die Schüler:innen: Auf jeder Karte stehen der Auftrag, das
            Vorgehen in vier bis fünf Schritten, ein Fertig-Kriterium, das die Gruppe selbst prüfen kann, und
            eine dreistufige Hilfe. Damit arbeiten die Gruppen selbstständig.
          </p>
          <p style={{ fontSize: '.97rem', lineHeight: 1.55, maxWidth: '58em', marginTop: '.6rem' }}>
            Alle vier Aufgaben folgen <strong>derselben Abfolge von acht Lernschritten</strong>. Eine Klasse muss
            sich deshalb nicht auf eine Aufgabe einigen: Vier Gruppen können gleichzeitig an vier verschiedenen
            Aufgaben arbeiten, und die Lehrperson begleitet trotzdem nur einen Schritt auf einmal.
          </p>
          <div className={k.mini}>
            <table className={k.miniTab}>
              <thead>
                <tr>
                  <th scope="col" style={{ background: 'transparent' }}>
                    <span className="eyebrow">Lernschritt</span>
                  </th>
                  {CHALLENGES.map((c) => (
                    <th key={c.titel} scope="col">
                      {c.titel}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SCHRITTE_KURZ.map((s) => (
                  <tr key={s.nr}>
                    <td className={k.zeit}>
                      {s.nr} · {s.name}
                    </td>
                    {CHALLENGES.map((c, i) => (
                      <td key={c.titel}>{s.je[i]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '.92rem', lineHeight: 1.55, marginTop: '.8rem', color: '#4a4d6b' }}>
            Eine Ausnahme gibt es: <strong>Die Kettenreaktion</strong> braucht die ganze Klasse, weil jede Gruppe
            eine Station für die nächste baut.
          </p>
          <p style={{ marginTop: '.9rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <Link className={k.weiter} href="/woche">
              → Die acht Lernschritte im Einzelnen
            </Link>
            {CHALLENGE_CARDS_URL && (
              <a className={k.weiter} href={CHALLENGE_CARDS_URL} target="_blank" rel="noopener noreferrer">
                → Die Challenge Cards ansehen
              </a>
            )}
          </p>
        </section>

        {/* ---------- 9 Erfolg und Einwände ---------- */}
        <div className={`${k.raster} ${k.rasterUnten}`} style={{ marginTop: '1.4rem' }}>
          <section className={k.kachel}>
            <h2>Häufige Fragen</h2>

            <div className={k.einwand}>
              <p className={k.einwandFrage}>
                <span className={k.nr}>1</span>
                «Unsere Lehrpersonen können kein Making.»
              </p>
              <p className={k.einwandAntwort}>
                Dafür ist das Material gebaut. Auf jeder Karte stehen der Auftrag, das Vorgehen, ein
                Fertig-Kriterium, das die Kinder selbst prüfen können, und eine dreistufige Hilfe. Die Lehrperson
                moderiert, sie unterrichtet nicht. Eine halbtägige Weiterbildung vor dem Einsatz gehört dazu.
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
                «Passt das in unseren Jahresplan?»
              </p>
              <p className={k.einwandAntwort}>
                Die acht Lernschritte füllen eine Schulwoche, wenn man sie am Stück durchführt. Sie lassen sich
                aber ebenso über ein Semester verteilen – etwa als wöchentlicher Kurshalbtag. Die Abfolge bleibt
                dieselbe, nur der Takt ändert sich.
              </p>
            </div>
          </section>

          <section className={`${k.kachel} ${k.kachelNavy}`}>
            <div className={k.kachelKopf}>
              <span className={`${k.symbol} ${k.symbolHell}`} aria-hidden="true">
                ✓
              </span>
              <h2>Wann ist Making ein Erfolg?</h2>
            </div>
            <p style={{ fontSize: '.96rem', lineHeight: 1.55 }}>
              Mit Making ist es nie fertig. Es gibt keinen Zustand, in dem ein Projekt endgültig gelöst wäre –
              jede Lösung lässt sich weiterdenken, und genau das ist erwünscht.
            </p>
            <p style={{ fontSize: '.96rem', lineHeight: 1.55, marginTop: '.7rem' }}>
              Gelungen ist es dann, wenn eine <strong>fehlerfreundliche Lernumgebung</strong> entstanden ist: wo
              ein Prototyp scheitern darf, weil das Scheitern den nächsten Schritt zeigt. Was dabei wächst, sind
              überfachliche Kompetenzen – Problemlösen, Zusammenarbeit, Durchhaltevermögen, der Umgang mit
              Fehlern.
            </p>
          </section>
        </div>

        {/* ---------- 10 Mieten und buchen ---------- */}
        <section className={k.stoererZone} style={{ marginTop: '1.4rem' }}>
          <span className={k.stoererMarke} style={{ background: 'var(--gruen)' }}>
            Buchen
          </span>
          <div className={k.stoerer} style={{ background: 'var(--gruen)' }}>
            <q style={{ quotes: 'none' }}>Material, Aufgaben und Begleitung lassen sich mieten.</q>
            <p style={{ color: '#e8f6ef', marginTop: '.8rem', fontSize: '1rem', lineHeight: 1.55, maxWidth: '44em' }}>
              Das Angebot läuft über den I+D Campus. Dort sind die Konditionen hinterlegt, und dort wird gebucht –
              für eine einzelne Klasse, eine Projektwoche oder einen Semesterkurs. Zur Grössenordnung: Ein
              Materialsatz besteht aus vier Boxen zu je rund CHF 750.
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

        {/* ---------- 11 Erst jetzt: Sidequests ---------- */}
        <section className={k.quests} id="ausprobieren">
          <p className={k.auftragLabel}>Erst lesen, dann ausprobieren</p>
          <h2>Jetzt sind Sie dran</h2>
          <p>
            Sie wissen nun, wie das Angebot aufgebaut ist. Ob das auch im Schulzimmer trägt, merkt man erst, wenn
            man es selbst versucht. Drei kurze Übungen – keine davon dauert länger als fünf Minuten.
          </p>
          <div className={k.questListe}>
            <Link className={k.quest} href="/moderationsfalle">
              <span className={k.questFuer}>Für Lehrpersonen</span>
              <b>Die Moderationsfalle</b>
              <p>
                Vierzehn Zeilen aus einem Schulzimmer. Vier Sätze der Lehrperson nehmen der Gruppe die Arbeit ab
                – finden Sie sie.
              </p>
            </Link>
            <Link className={k.quest} href="/wochenplan">
              <span className={k.questFuer}>Für die Planung</span>
              <b>Passt der Plan?</b>
              <p>Ein Ablaufplan mit mehreren Aufgaben nebeneinander. An vier Stellen bricht die Abstimmung.</p>
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

        {/* ---------- 12 Offen ---------- */}
        <section className={k.offen}>
          <b>Offen geblieben</b>
          <p>
            Das Betriebs- und Finanzierungsmodell ist nicht abschliessend entschieden – Miete, Trägerschaft und
            Betreuung stehen zur Diskussion. Ob Lasercutter, Tiefziehgerät und Lötstation zum Mietmaterial
            gehören, entscheidet sich nach der ersten Testklasse. Diese Klasse gibt es noch nicht: Was hier steht,
            beschreibt, wie das Material gebaut ist, und ist kein Erfahrungsbericht.
          </p>
        </section>

        <p className={k.kartenfuss}>
          <span>I+D Campus × PHTG · Mobiler MakerSpace</span>
          <span>CC BY-SA 4.0 · Prototyp · Oktober 2026</span>
        </p>
      </div>
    </div>
  );
}
