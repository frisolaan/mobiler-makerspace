import type { Metadata } from 'next';
import Link from 'next/link';
import k from '@/components/Kartenblatt.module.css';

export const metadata: Metadata = {
  title: 'Die Lernschritte',
  description:
    'Acht Lernschritte, Schritt für Schritt – und was die Lehrperson dabei tut und was sie ausdrücklich nicht tut.',
};

const SCHRITTE = [
  {
    nr: 1,
    takt: 'Rund ein Halbtag',
    name: 'Erfahren',
    text: 'Die Klasse geht auf die Jagd nach echten Problemen – Stolperstellen beim Lernen, Kreuzungen, die etwas Bewegliches verlangen, Momente, die jemand melden müsste. Gesammelt wird, nicht gelöst.',
    tut: 'Hält die Klasse beim Beobachten und lässt sammeln, ohne zu werten.',
    tutNicht: 'Nennt keine Beispiele für «gute» Probleme – sonst bauen am Ende alle dasselbe.',
  },
  {
    nr: 2,
    takt: 'Rund ein Halbtag',
    name: 'Festlegen',
    text: 'Jede Gruppe wählt aus ihrer Sammlung ein Problem aus und schreibt auf, warum gerade dieses. Ab hier ist die Aufgabe der Gruppe festgelegt, nicht mehr die der Lehrperson.',
    tut: 'Besteht darauf, dass die Wahl begründet wird.',
    tutNicht: 'Entscheidet nicht mit, auch wenn eine Idee aussichtslos wirkt.',
  },
  {
    nr: 3,
    takt: 'Rund ein Halbtag',
    name: 'Entwerfen',
    text: 'Menge vor Qualität. Es werden so viele Lösungsideen erzeugt wie möglich, gezeichnet und an die Wand gehängt. Erst ganz am Schluss markiert die Gruppe drei Favoriten.',
    tut: 'Zählt die Ideen mit und hält die Bewertung bis zum Schluss zurück.',
    tutNicht: 'Sortiert keine Idee aus, auch nicht die unmögliche.',
  },
  {
    nr: 4,
    takt: 'Rund ein Halbtag',
    name: 'Prüfen',
    text: 'Werkstatt: Die Bauteile aus den Boxen werden der Reihe nach ausprobiert und gemessen – Motoren, Getriebe, Fühler, Signalgeber. Danach weiss die Gruppe aus eigener Erfahrung, was ihr Material kann, und muss es nicht raten.',
    tut: 'Stellt die Stationen bereit und lässt messen statt raten.',
    tutNicht: 'Verrät nicht, welches Bauteil am meisten hergibt.',
  },
  {
    nr: 5,
    takt: 'Rund ein Halbtag',
    name: 'Entscheiden',
    text: 'Aus drei Favoriten wird einer. Die Gruppe zeichnet ihn mit Massen – so gross, dass daraus gebaut werden kann, und so genau, dass zwei Kinder gleichzeitig daran arbeiten können.',
    tut: 'Verlangt Masse auf der Skizze, nicht nur eine hübsche Zeichnung.',
    tutNicht: 'Korrigiert die Konstruktion nicht, auch wenn sie den Fehler kommen sieht.',
  },
  {
    nr: 6,
    takt: 'Der längste Schritt – gut zwei Halbtage',
    name: 'Bauen',
    text: 'Die erste Fassung entsteht, arbeitsteilig. Vorher klärt die Gruppe, wo ihre Teile aufeinandertreffen – an diesen Stellen scheitern Prototypen, nicht in der Mitte eines Bauteils.',
    tut: 'Achtet darauf, dass alle bauen und die Schnittstellen vorher besprochen sind.',
    tutNicht: 'Baut nicht mit, auch nicht «schnell das eine Stück».',
  },
  {
    nr: 7,
    takt: 'Rund ein Halbtag',
    name: 'Testen',
    text: 'Getestet wird unter festen Bedingungen, und dann wird genau eine Sache geändert. Danach derselbe Test nochmal. Die Zahlen vorher und nachher stehen nebeneinander – was sie bedeuten, erklärt die Gruppe selbst.',
    tut: 'Besteht auf genau einer Änderung und auf Zahlen vorher und nachher.',
    tutNicht: 'Sagt nicht, welche Änderung die richtige wäre.',
  },
  {
    nr: 8,
    takt: 'Rund ein Halbtag',
    name: 'Zeigen',
    text: 'Vorgeführt wird unter denselben Bedingungen wie beim Test. Erzählt wird aber nicht das Produkt, sondern der Weg: was zuerst gedacht, was verworfen, was geändert wurde. Danach wird eingeräumt.',
    tut: 'Lässt den Entwicklungsweg erzählen statt das Ergebnis anpreisen.',
    tutNicht: 'Vergleicht die Gruppen nicht miteinander.',
  },
];

export default function WochenSeite() {
  return (
    <div className={k.blatt}>
      <div className="wrap">
        <header className={k.kopf}>
          <div className={k.kopfLinks}>
            <div className="okt gruen" style={{ width: '2.8rem', height: '2.8rem', fontSize: '1.15rem' }}>
              8
            </div>
            <div style={{ minWidth: 0 }}>
              <p className={k.marke}>Mobiler MakerSpace · die Lernschritte</p>
              <h1 className={k.titel}>Acht Lernschritte, einer nach dem anderen</h1>
              <p className={k.untertitel}>
                Als Projektwoche am Stück – oder über ein Semester verteilt
              </p>
            </div>
          </div>
          <div className={k.kopfRechts}>
            <span className={k.pille}>Für alle vier Aufgaben gleich</span>
            <span className={k.zeile}>Je rund ein Halbtag · die Reihenfolge bleibt</span>
          </div>
        </header>

        <section className={k.auftrag}>
          <p className={k.auftragLabel}>Worum es auf dieser Seite geht</p>
          <p className={k.auftragSatz}>Nicht was im Material steckt, sondern was im Schulzimmer passiert.</p>
          <p className={k.auftragUnter}>
            Der Ablauf ist in allen vier Aufgaben derselbe – nur das Problem ist ein anderes. Neben jedem Schritt
            steht, was die Lehrperson tut und was sie ausdrücklich unterlässt. Das Unterlassen ist der
            schwierigere Teil und der Grund, warum die Lernschritte ohne Making-Vorwissen funktionieren.
          </p>
        </section>

        <div className={k.kette}>
          {SCHRITTE.map((h) => (
            <article key={h.nr} className={k.halbtag}>
              <div className={k.htKopf}>
                <div className="okt" style={{ width: '2.2rem', height: '2.2rem', fontSize: '1rem' }}>
                  {h.nr}
                </div>
                <div>
                  <p className={k.htTag}>Lernschritt {h.nr} · {h.takt}</p>
                  <p className={k.htName}>{h.name}</p>
                </div>
              </div>
              <p className={k.htText}>{h.text}</p>
              <div className={k.htRollen}>
                <p className={k.htTut}>{h.tut}</p>
                <p className={k.htTutNicht}>{h.tutNicht}</p>
              </div>
            </article>
          ))}
        </div>

        <section className={`${k.kachel} ${k.kachelMint}`} style={{ marginTop: '.9rem' }}>
          <h2>Acht Schritte – der Takt ist frei</h2>
          <p style={{ fontSize: '.95rem', lineHeight: 1.55 }}>
            Die Schritte sind so bemessen, dass sie <strong>auf eine Schulwoche passen würden</strong>: Eine Woche
            bietet in der Regel sieben nutzbare Halbtage, acht Schritte brauchen etwa neun – die Differenz ist
            Absicht. Ein Schritt kann weggelassen, zwei können zusammengelegt oder einer kann verkürzt werden.
            Welcher, entscheidet die Lehrperson nach ihrer Klasse und nicht das Material.
          </p>
          <p style={{ fontSize: '.95rem', lineHeight: 1.55, marginTop: '.7rem' }}>
            Genauso gut lassen sich die acht Schritte <strong>über ein Semester verteilen</strong> – etwa als
            wöchentlicher Kurshalbtag oder als Wahlfach. Dann bleibt zwischen den Schritten Zeit zum Nachdenken,
            und der Prototyp darf über Wochen wachsen. Die Reihenfolge bleibt in jedem Fall dieselbe; nur der
            Takt ändert sich.
          </p>
          <p style={{ fontSize: '.95rem', lineHeight: 1.55, marginTop: '.7rem' }}>
            Nach jedem Schritt entsteht ein Eintrag in der Lerndokumentation, meist ein Foto und ein bis drei
            Sätze. Deshalb ist die Dokumentation kein Zusatz am Schluss, sondern der rote Faden durch das ganze
            Vorhaben. Am Ende geht die Hardware zurück – die Lernspur bleibt bei den Kindern.
          </p>
        </section>

        <section className={`${k.kachel} ${k.kachelLavendel}`} style={{ marginTop: '.9rem' }}>
          <h2>Wenn Sie Zeit haben</h2>
          <p style={{ fontSize: '.95rem', lineHeight: 1.5 }}>
            Die ✕-Spalte liest sich leicht. Im Schulzimmer ist sie der schwierigste Teil – und man merkt es im
            Moment selbst nicht. Probieren Sie es an einer Szene aus: vierzehn Zeilen, vier Sätze darin nehmen der
            Gruppe die Arbeit ab.
          </p>
          <Link className={k.weiter} href="/moderationsfalle">
            → Die Moderationsfalle
          </Link>
          <span className={k.weiterZusatz}>
            Und wenn Sie wissen wollen, wie mehrere Aufgaben gleichzeitig in einer Klasse laufen:{' '}
            <Link href="/wochenplan" style={{ fontWeight: 700 }}>
              Passt der Plan?
            </Link>
          </span>
        </section>

        <section className={k.offen}>
          <b>Ehrlich gesagt</b>
          <p>
            Eine Testklasse hat diese Schritte noch nicht durchlaufen. Was hier steht, beschreibt, wie das
            Material gebaut ist und wofür jede Karte gemacht wurde – es ist kein Erfahrungsbericht. Sobald die
            erste Klasse durch ist, steht an dieser Stelle, was tatsächlich passiert ist, auch dort, wo es anders
            kam.
          </p>
        </section>

        <p style={{ marginTop: '1rem' }}>
          <Link className={k.weiter} href="/">
            → Zurück zur Projektkarte
          </Link>
        </p>

        <p className={k.kartenfuss}>
          <span>I+D Campus × PHTG · Mobiler MakerSpace · Die Lernschritte</span>
          <span>CC BY-SA 4.0 · Prototyp · Oktober 2026</span>
        </p>
      </div>
    </div>
  );
}
