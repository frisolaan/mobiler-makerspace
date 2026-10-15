/* 24 Making-Kompetenzen nach MakeComp4School.
   Quelle: Maurer, B. (2024): 24 Making-Kompetenzen. Framework für schulische Maker Education
   mit Indikatoren zur Kompetenzüberprüfung. Pädagogische Hochschule Thurgau, Kreuzlingen.
   Beschreibungen und Indikatoren im Wortlaut des Frameworks. */

export type Indikator = { label: string; text: string };

export type Kompetenz = {
  nr: number;
  name: string;
  bereich: 'personal' | 'sozial' | 'methoden' | 'fach';
  beschreibung: string;
  indikatoren: Indikator[];
  /** Hinweis auf eine Unstimmigkeit in der Quelle. */
  anmerkung?: string;
};

export const BEREICHE = {
  personal: { titel: 'Personale Kompetenzen', farbe: '#9B2D63' },
  sozial: { titel: 'Soziale Kompetenzen', farbe: '#C96436' },
  methoden: { titel: 'Methodenkompetenzen', farbe: '#6A9A2B' },
  fach: { titel: 'Fachkompetenzen', farbe: '#2E7FB8' },
} as const;

export const KOMPETENZEN: Kompetenz[] = [
  {
    nr: 1,
    name: 'Eigeninitiative',
    bereich: 'personal',
    beschreibung:
      'Die Schüler:innen werden selbst aktiv und bringen sich mit ihren eigenen Ideen und Interessen in den Making-Prozess ein.',
    indikatoren: [
      { label: 'Selbstgemacht', text: 'Du verstehst, dass es beim Making darum geht, etwas selbst herzustellen.' },
      { label: 'Eigene Ideen', text: 'Du kannst die Freiheit beim Making für dich nutzen und eigene Ideen entwickeln.' },
      { label: 'Interessen nutzen', text: 'Du kennst deine Interessen und Bedürfnisse und kannst sie für deine Making-Projekte nutzen.' },
      { label: 'Selbstständig arbeiten', text: 'Du kannst dich selbstständig im MakerSpace beschäftigen. Du findest selbst Projekte, die du umsetzen kannst.' },
      { label: 'Herzensprojekte', text: 'Die Projekte, die du beim Making umsetzt, sind dir wichtig.' },
      { label: 'Ideen einbringen', text: 'Du hast Ideen, wie man den MakerSpace weiterentwickeln könnte und bringst sie ein.' },
    ],
  },
  {
    nr: 2,
    name: 'Offenheit',
    bereich: 'personal',
    beschreibung:
      'Die Schüler:innen stehen Unbekanntem offen und neugierig gegenüber und sind bereit, Neues dazuzulernen.',
    indikatoren: [
      { label: 'Offen für Neues', text: 'Du bist offen für Neues und bereit unbekannte Wege zu gehen.' },
      { label: 'Neugier auf Technologie', text: 'Du probierst gerne neue Verfahren und Technologien aus, ohne davor Angst zu haben.' },
      { label: 'Bereit zu lernen', text: 'Du bist bereit, beim Making etwas dazuzulernen, wenn du es für die Umsetzung deiner Idee nötig ist.' },
      { label: 'Probleme meistern', text: 'Du traust dich an schwierige Probleme heran, auch wenn du noch keine Lösung weisst.' },
      { label: 'Spontan Handeln', text: 'Du kannst auf Unerwartetes spontan reagieren und das Beste daraus machen.' },
      { label: 'Alternative Lösungen', text: 'Wenn Material fehlt oder eine Lösung nicht funktioniert, findest du einen anderen Weg zum Ziel.' },
    ],
  },
  {
    nr: 3,
    name: 'Selbstreflexion',
    bereich: 'personal',
    beschreibung:
      'Die Schüler:innen kennen ihre Stärken und Schwächen, können ihre Lernfortschritte wahrnehmen und ihre Leistungen realistisch selbsteinschätzen.',
    indikatoren: [
      { label: 'Stärken und Schwächen', text: 'Du kannst deine Stärken und Schwächen bei der Planung deiner Projekte berücksichtigen.' },
      { label: 'Nachhaltig denken', text: 'Du bist dir deiner Einstellung gegenüber «Nachhaltigkeit» bewusst und kannst sie in deiner Projektentwicklung berücksichtigen.' },
      { label: 'Lernen und entwickeln', text: 'Du kannst erkennen, wenn dir Wissen oder Fähigkeiten fehlen, und bist bereit, dies zu ändern.' },
      { label: 'Lernerfolge erkennen', text: 'Du kannst erkennen, was du gelernt hast, und kannst deinen Lernzuwachs dokumentieren.' },
      { label: 'Hilfe bei Problemen', text: 'Wenn du an Grenzen stösst, kannst du dein Problem erklären und dir Unterstützung holen.' },
      { label: 'Selbstbewusst einschätzen 4', text: 'Du kannst deine Motivation, dein Engagement und deine Leistungen (Erfolge und Misserfolge) beim Making realistisch einschätzen. 2' },
    ],
  },
  {
    nr: 4,
    name: 'Überzeugungskraft',
    bereich: 'personal',
    beschreibung:
      'Die Schüler:innen entwickeln Selbstvertrauen und können ihre Ideen anderen gegenüber mit überzeugenden Argumenten und in unterhaltsamer Form präsentieren.',
    indikatoren: [
      { label: 'Begeisterung wecken', text: 'Du weisst, dass es einfacher ist, Ideen umzusetzen, wenn du andere dafür begeistern kannst.' },
      { label: 'Überzeugend präsentieren', text: 'Du bist dir bewusst, dass oft nicht nur die Idee zählt, sondern auch, wie überzeugend du sie präsentierst.' },
      { label: 'Selbstbewusst auftreten', text: 'Du kannst deine Ideen, Prototypen oder Produkte selbstbewusst und mit Freude vor Publikum präsentieren.' },
      { label: 'Schwächen als', text: 'Du kannst Schwächen deiner Idee als Potenziale darstellen.' },
      { label: 'Potenzial Präsentationstricks nutzen', text: 'Du kennst Tricks für eine gute Präsentation wie z.B. Storytelling, Charme und Humor.' },
      { label: 'Publikum überzeugen', text: 'Du kannst deine Ideen/Prototypen/Produkte vor einer Öffentlichkeit überzeugend präsentieren.' },
    ],
  },
  {
    nr: 5,
    name: 'Resilienz',
    bereich: 'personal',
    beschreibung:
      'Die Schüler:innen entwickeln Widerstandfähigkeit und Durchhaltevermögen in schwierigen Situationen. Von Rückschritten und Misserfolgen lassen sie sich nicht entmutigen.',
    indikatoren: [
      { label: 'Geduld bei Neuentwicklungen', text: 'Dir ist bewusst, dass Neuentwicklungen oft Zeit und Mühe brauchen, und dass manche Erfindungen durch Fehler entstanden sind.' },
      { label: 'Fehler als Erkenntnisse', text: 'Du weisst, dass Fehler wichtige Erkenntnisse für die Weiterarbeit bringen.' },
      { label: 'Positives Denken', text: 'Du kannst positiv und zuversichtlich denken und geduldig mit dir und deinem Projekt sein.' },
      { label: 'Enttäuschungen bewältigen', text: 'Du hast Strategien, wie du mit Enttäuschungen umgehst (z.B. Pausen einlegen, Stress abbauen, Inspiration suchen).' },
      { label: 'Ideen verteidigen', text: 'Du kannst an deiner guten Idee festhalten, auch wenn sie dir andere ausreden wollen.' },
      { label: 'Durchhalten und Weitermachen', text: 'Du kannst einen Making-Prozess mit allen Höhen und Tiefen durchlaufen, ohne aufzugeben oder die Motivation zu verlieren. 3' },
    ],
  },
  {
    nr: 6,
    name: 'Verantwortung',
    bereich: 'personal',
    beschreibung:
      'Die Schüler:innen übernehmen Verantwortung für ihren Lernprozess und richten ihr Handeln anhand ethischer Prinzipien und gesellschaftlicher Normen aus.',
    indikatoren: [
      { label: 'Regeln im', text: 'Du kennst die Regeln im MakerSpace und kannst sie befolgen (z.B.' },
      { label: 'MakerSpace', text: 'Sicherheitsmassnahmen, Ordnungssystem).' },
      { label: 'Verantwortung im Lernprozess', text: 'Du kannst Verantwortung für deinen eigenen Lernprozess übernehmen und die Lernzeit effektiv nutzen.' },
      { label: 'Respekt für Rechte anderer', text: 'Du kannst die Rechte anderer Personen achten und sensibel und korrekt mit Fragen der Privatsphäre, personenbezogenen Daten und Urheberrechten umgehen.' },
      { label: 'Folgen bedenken', text: 'Du kannst vorhersehen, welche Folgen dein Handeln haben wird und vermeiden, dass andere sich gestört oder gar geschädigt fühlen.' },
      { label: 'Ressourcen sparen', text: 'Du kannst Maschinen und Materialien sinnvoll einsetzen und Ressourcenverschwendung vermeiden.' },
    ],
  },
  {
    nr: 7,
    name: 'Nachhaltigkeit',
    bereich: 'personal',
    beschreibung:
      'Die Schüler:innen können Making Prozesse und Produktentwickung an Kriterien der Nachhaltigkeit ausrichten und einen Beitrag zur nachhaltigen Entwicklung leisten.',
    indikatoren: [
      { label: 'Planeten schützen', text: 'Du kennst wichtige Dinge, die wir tun müssen, um unseren Planeten zu schützen, wie die grossen Nachhaltigkeitsziele für eine bessere Welt (die SDGs).' },
      { label: 'Nachhaltige Zukunft', text: 'Du kannst dir ausdenken, wie eine Welt aussieht, in der alles umweltfreundlich, gerecht und lebenswert ist. Du bist gut darin, neue Dinge zu erfinden, die der Umwelt helfen, wie Produkte oder Dienstleistungen, die nicht schädlich sind.' },
      { label: 'Meinung bilden', text: 'Du weisst, dass nicht alle das Gleiche unter «Nachhaltigkeit» verstehen und kannst deine eigene Meinung dazu entwickeln.' },
      { label: 'Erfindungen für Nachhaltigkeit', text: 'Wenn du etwas Neues erfindest, denkst du darüber nach, wie es der Umwelt helfen kann (z.B. Material upcyceln, Energie sparen, …).' },
      { label: 'Für Nachhaltigkeit sensibilisieren', text: 'Du kannst Dinge erfinden, die anderen zeigen, wie wichtig es ist, auf unseren Planeten aufzupassen.' },
      { label: 'Kritisches Denken', text: 'Wenn du etwas über Nachhaltigkeit hörst oder liest, denkst du genau nach und prüfst, ob es wirklich stimmen kann und wichtig ist. 4' },
    ],
  },
  {
    nr: 8,
    name: 'Teamarbeit',
    bereich: 'sozial',
    beschreibung:
      'Die Schüler:innen können im Team produktiv zusammenarbeiten und ihre Stärken und Ressourcen sinnvoll einsetzen.',
    indikatoren: [
      { label: 'Teamarbeit schätzen', text: 'Du weisst, dass ein Team oft bessere Ideen hat als eine Person alleine.' },
      { label: 'Ideen mitteilen', text: 'Du kannst deine Gedanken so erklären, dass deine Mitschüler:innen sie gut verstehen.' },
      { label: 'Gemeinsame Ziele', text: 'Du kannst mit anderen besprechen und entscheiden, was ihr zusammen erreichen wollt. Wenn ihr euch nicht einig seid, findest du gute Wege, um das Problem zu lösen.' },
      { label: 'Stärken nutzen', text: 'Du hilfst dabei, Aufgaben so zu verteilen, dass jeder das machen kann, was er oder sie am besten kann.' },
      { label: 'Gemeinsam Brainstormen', text: 'Du kannst mit anderen viele verschiedene Ideen sammeln, um euer Ziel zu erreichen.' },
      { label: 'Zusammen und Alleine', text: 'Du kannst gut entscheiden, wann es besser ist, etwas alleine zu machen, und wann ihr besser im Team arbeitet.' },
    ],
  },
  {
    nr: 9,
    name: 'Unterstützung',
    bereich: 'sozial',
    beschreibung:
      'Die Schüler:innen können sich in Making-Prozessen gegenseitig unterstützen und inspirieren.',
    indikatoren: [
      { label: 'Interesse zeigen', text: 'Du kannst Interesse an den Ideen deiner Mitschüler:innen zeigen und ihnen aufmerksam zuhören.' },
      { label: 'Unterstützungsbedarf erkennen', text: 'Du bist in der Lage zu erkennen, wenn Mitschüler:innen Probleme haben und Unterstützung benötigen.' },
      { label: 'Wissen teilen', text: 'Du weisst, wie du dein Wissen mit anderen teilen und ihnen bei Bedarf helfen kannst.' },
      { label: 'Gemeinschaft schätzen', text: 'Du verstehst, dass ihr keine Konkurrenten, sondern eine Lerngemeinschaft seid, die jedes Projekt zum Erfolg führen will!' },
      { label: 'Fairness und Ermutigung', text: 'Du kannst dich fair und respektvoll verhalten und deine Mitschüler:innen ermutigen, ihre Ideen zu verfolgen.' },
      { label: 'Unterstützung annehmen', text: 'Du bist in der Lage, Unterstützung von anderen anzunehmen und sie gezielt für deine Projekte einzusetzen.' },
    ],
  },
  {
    nr: 10,
    name: 'Feedback',
    bereich: 'sozial',
    beschreibung:
      'Die Schüler:innen können sich auf wertschätzende Weise Feedback geben, Feedback annehmen und in Making-Projekten nutzen.',
    indikatoren: [
      { label: 'Hilfreiche Tipps', text: 'Du weisst, dass Tipps von anderen dir helfen können, deine Arbeit noch besser zu machen.' },
      { label: 'Feedback austauschen', text: 'Du kannst gute Tipps geben und auch von anderen Tipps annehmen, um dein Produkt besser zu machen.' },
      { label: 'Gutes würdigen, Entwicklungspotenzial aufzeigen', text: 'Du kannst dir gut überlegen, was bei den Projekten deiner Mitschüler:innen besonders gelungen ist und ihnen Tipps geben, wie es noch besser werden kann.' },
      { label: 'Freundliches Feedback', text: 'Du kannst deine Tipps so sagen, dass sich niemand traurig oder schlecht fühlt, sondern alle verstehen, was du meinst.' },
      { label: 'Feedback einschätzen', text: 'Du kannst gut erkennen, welche Tipps dir wirklich helfen, deine Arbeit zu verbessern.' },
      { label: 'Feedback nutzen', text: 'Du kannst die Tipps deiner Mitschüler:innen nutzen, um deine Projekte noch spannender und besser zu machen. 5' },
    ],
  },
  {
    nr: 11,
    name: 'Fehlerkultur',
    bereich: 'sozial',
    beschreibung:
      'Die Schüler:innen können in der Lerngemeinschaft eine innovationsfreundliche Fehlerkultur pflegen und aus ihren Fehlern lernen.',
    indikatoren: [
      { label: 'Immer weiter probieren', text: 'Du weisst, dass es manchmal mehrere Versuche braucht, um unbekannte Probleme zu lösen.' },
      { label: 'Aus Fehlern lernen', text: 'Dir ist bewusst, dass Fehler wichtige Hinweise geben, um Probleme besser zu verstehen.' },
      { label: 'Fehler sind okay', text: 'Du weisst, dass Fehler ganz normal sind und du dich dafür nicht schämen musst. Sie helfen uns allen beim Lernen.' },
      { label: 'Mut zu Fehlern', text: 'Du kannst deine Mitschüler:innen ermutigen, auch Fehler zu machen und darüber zu sprechen, damit alle davon lernen können.' },
      { label: 'Fehler dokumentieren', text: 'Du kannst deine Fehler dokumentieren, so dass du und andere daraus lernen können.' },
      { label: 'Fehler genau analysieren', text: 'Du kannst deine Fehler und die Fehler der anderen analysieren und überlegen, was man daraus lernen kann, um es nächstes Mal besser zu machen. 6' },
    ],
  },
  {
    nr: 12,
    name: 'Problemlösen',
    bereich: 'methoden',
    beschreibung:
      'Die Schüler:innen können Anforderungen und Problemstellungen in Making-Projekten verstehen und passende Lösungen entwickeln.',
    indikatoren: [
      { label: 'Offene Probleme', text: 'Du weisst, dass es manchmal mehrere Versuche braucht, um unbekannte Probleme zu lösen.' },
      { label: 'Probleme verstehen', text: 'Dir ist bewusst, dass Fehler wichtige Hinweise geben, um Probleme besser zu verstehen.' },
      { label: 'Probleme untersuchen', text: 'Du weisst, dass Fehler ganz normal sind und du dich dafür nicht schämen musst. Sie helfen uns allen beim Lernen.' },
      { label: 'Fehler finden', text: 'Du kannst deine Mitschüler:innen ermutigen, auch Fehler zu machen und darüber zu sprechen, damit alle davon lernen können.' },
      { label: 'Probleme zerteilen', text: 'Du kannst deine Fehler dokumentieren, so dass du und andere daraus lernen können.' },
      { label: 'Wissen nutzen', text: 'Du kannst deine Fehler und die Fehler der anderen analysieren und überlegen, was man daraus lernen kann, um es nächstes Mal besser zu machen.' },
    ],
    anmerkung:
      'Im veröffentlichten Framework stimmen fünf der sechs Indikatortexte dieser Kompetenz wörtlich mit denen von Kompetenz 11 (Fehlerkultur) überein. Die Indikatorbezeichnungen gehören zum Problemlösen, die Texte nicht. Wir zeigen hier die Bezeichnungen und klären die Texte mit dem Autor.',
  },
  {
    nr: 13,
    name: 'Kreativität',
    bereich: 'methoden',
    beschreibung:
      'Die Schüler:innen können innovativ und kreativ denken und geeignete Ideen für ihre Projekte auswählen.',
    indikatoren: [
      { label: 'Kreativität ist menschlich', text: 'Du weisst, dass Kreativität etwas ist, das jeder Mensch hat und das du wie einen Muskel trainieren kannst.' },
      { label: 'Du bist kreativ', text: 'Du bist in der Lage, dich selbst als eine kreative Person zu sehen und schätzt diese Eigenschaft bei dir.' },
      { label: 'Ideen feiern', text: 'Du kannst originelle Ideen und Gedanken, sowohl deine eigenen als auch die von anderen, erkennen und wertschätzen.' },
      { label: 'Kreativitätstechniken nutzen', text: 'Du weisst, wie man Methoden einsetzt, um kreativ zu sein, wie zum Beispiel Neues auszuprobieren oder Inspiration aus dem Zufall zu ziehen.' },
      { label: 'Perfektionismus nein Danke', text: 'Du kannst für eine Weile vergessen, dass alles perfekt und funktionieren muss. Stattdessen kannst du ganz viele neue und einzigartige Ideen ausdenken.' },
      { label: 'Passende Ideen finden 14', text: 'Du bist fähig, aus vielen kreativen Ideen diejenigen auszuwählen, die am besten zu einem bestimmten Ziel oder zur einem Problem passen. 7' },
    ],
  },
  {
    nr: 14,
    name: 'Produktentwicklung',
    bereich: 'methoden',
    beschreibung:
      'Die Schüler:innen können ein Produkt mithilfe designorientierter Methoden (Iteration, Design Thinking) entwickeln und verbessern.',
    indikatoren: [
      { label: 'Für wen und wofür', text: 'Du weisst, dass alles, was wir bauen oder erfinden, für bestimmte Leute und einen besonderen Zweck gemacht wird.' },
      { label: 'Immer wieder verbessern', text: 'Du verstehst, dass wir beim Erfinden und Entwickeln oft Dinge ändern und verbessern müssen, bis alles so funktioniert, wie es soll.' },
      { label: 'Auf Vorgaben achten', text: 'Du verstehst, dass wir beim Erfinden und Entwickeln auf bestimmte Dinge achten müssen, z.B. wie viel Zeit wir haben, welche Materialien wir benutzen können und ob es umweltfreundlich und bezahlbar ist.' },
      { label: 'Bedürfnisse herausfinden', text: 'Du kennst verschiedene Wege, um herauszufinden, was die Leute, für die du etwas erfindest oder entwickelst, brauchen und sich wünschen.' },
      { label: 'Schrittweise vorgehen', text: 'Du kannst Schritt für Schritt vorgehen. Ideen entwickeln, ausprobieren und testen, Feedback einholen und dabei deinen Prototyp immer besser machen.' },
      { label: 'Besser machen', text: 'Du kannst überprüfen, ob dein Produkt gut funktioniert, leicht zu benutzen ist, stabil ist, der Umwelt nicht schadet und schön aussieht. Falls nicht, kannst du es noch besser machen.' },
    ],
  },
  {
    nr: 15,
    name: 'Planung und Organisation',
    bereich: 'methoden',
    beschreibung:
      'Die Schüler:innen können ihren Making-Prozess eigenständig planen, strukturieren und dokumentieren.',
    indikatoren: [
      { label: 'Realistische Ziele', text: 'Du kannst dir Ziele setzen, die du wirklich erreichen kannst.' },
      { label: 'Zielerreichung prüfen', text: 'Du bist in der Lage, regelmässig zu überprüfen, wie weit du mit deinen Zielen bist, und kannst sie bei Bedarf anpassen.' },
      { label: 'Vorbereitungen treffen', text: 'Du kannst die Materialien und Ressourcen organisieren, die du für dein Projekt brauchst.' },
      { label: 'Zeitmanagement', text: 'Du kannst so planen, dass du genug Zeit hast, um an deinem Projekt zu arbeiten und auch um neue Dinge zu lernen.' },
      { label: 'Planung der Schritte', text: 'Du kannst dein Projekt in kleine Schritte aufteilen und dir überlegen, was du zuerst und was du danach machen willst.' },
      { label: 'Prozess dokumentieren 16', text: 'Du kannst deinen Arbeitsprozess so dokumentieren, dass du auch nach Pausen nahtlos weiterarbeiten kannst. 8' },
    ],
  },
  {
    nr: 16,
    name: 'Informationskompetenz',
    bereich: 'methoden',
    beschreibung:
      'Die Schüler:innen können sich für ihr Making-Projekt Informationen beschaffen und deren Eignung für das eigene Vorhaben beurteilen.',
    indikatoren: [
      { label: 'Infos helfen', text: 'Du verstehst, dass Informationen uns helfen, Dinge leichter, besser und schneller zu machen.' },
      { label: 'Infos finden', text: 'Du kennst verschiedene Wege, um Informationen zu bekommen, wie z.B. Leute fragen, die sich auskennen, oder im Internet recherchieren.' },
      { label: 'Schlaue Suche', text: 'Du kennst Tricks, wie du schnell an relevante Informationen zu deinem Projekt kommst.' },
      { label: 'Infos prüfen', text: 'Du kannst überprüfen, ob das, was du herausgefunden hast, auch wirklich stimmt.' },
      { label: 'Mit Infos arbeiten', text: 'Du kannst die Informationen, die du gesammelt hast, gut nutzen, um deine Produkte noch besser zu machen.' },
      { label: 'Infos aufbewahren 17', text: 'Du kannst deine Informationen so aufbewahren, dass du und andere sie leicht wiederfinden können. 9' },
    ],
  },
  {
    nr: 17,
    name: 'Digitale Fabrikation',
    bereich: 'fach',
    beschreibung:
      'Die Schüler:innen kennen die Potenziale und Gestaltungsmöglichkeiten der digitalen Fabrikation und können sie im Rahmen eigener Projekte zielführend und sinnvoll nutzen.',
    indikatoren: [
      { label: 'Technik kennen', text: 'Du kennst die coolen Maschinen im MakerSpace, wie den 3D-Drucker und den Laserschneider, und weisst, was man damit machen kann.' },
      { label: 'Am Computer gestalten', text: 'Du kannst mit Programmen am Computer Prototypen entwerfen, die du dann wirklich herstellen kannst.' },
      { label: 'Workflow durchlaufen', text: 'Du kannst ein Produkt von der Idee über die erste Skizze, das digitale Design bis zum Endprodukt mit dem Gerät (z.B. 3D-Drucker) erstellen.' },
      { label: 'Mehrwerte erkennen', text: 'Du erkennst, wann es besonders sinnvoll ist, die Maschinen zu nutzen, anstatt alles mit der Hand zu machen.' },
      { label: 'Möglichkeiten nutzen', text: 'Du kannst die Möglichkeiten der Maschinen für deine eigenen Ideen nutzen und entscheidest klug, wie du etwas am besten machst.' },
      { label: 'Vorlagen verwenden', text: 'Du weisst, wo du im Internet geeignete Datei-Vorlagen findest, die du herunterladen und für deine Projekte anpassen kannst.' },
    ],
  },
  {
    nr: 18,
    name: 'Physical Computing',
    bereich: 'fach',
    beschreibung:
      'Die Schüler:innen kennen die Funktionsweise der digitalen Steuerungstechnologie (Sensoren, Microcontroller, Aktoren) und können sie im Rahmen von physical computing Projekten sinnvoll einsetzen.',
    indikatoren: [
      { label: 'Sensoren entdecken', text: 'Du kennst verschiedene Sensoren, die Dinge um uns herum messen können, wie Wärme oder Licht, und weisst, wofür wir sie im Alltag nutzen.' },
      { label: 'Aktoren kennenlernen', text: 'Du weisst, was Aktoren sind und kennst Anwendungsbeispiele aus dem Alltag.' },
      { label: 'Digitale Vorteile', text: 'Du verstehst, warum es vorteilhaft ist, Dinge mit Computern zu steuern, und warum das besser sein kann als mit elektrischen Schaltern.' },
      { label: 'Microcontroller verstehen', text: 'Du weisst, was ein Microcontrollerboard ist, wie zum Beispiel ein Calliope oder micro:bit, und wie man Sensoren und Aktoren damit verbindet.' },
      { label: 'Lauffähig machen', text: 'Du kannst eine digitale Steuerung in Betrieb nehmen, Probleme finden, wenn etwas nicht funktioniert, und diese dann lösen.' },
      { label: 'Eigene Projekte erfinden', text: 'Du kannst digitale Steuerung nutzen, um deine eigenen interaktiven Projekte zu machen, die z.B. auf Knopfdruck oder Bewegung reagieren. 10' },
    ],
  },
  {
    nr: 19,
    name: 'Programmieren',
    bereich: 'fach',
    beschreibung:
      'Die Schüler:innen kennen einfache Programmierumgebungen und können damit zu ihren Projekten passende Software entwickeln.',
    indikatoren: [
      { label: 'Programmieren online', text: 'Du kannst Plattformen wie Scratch, MakeCode oder Open Roberta nutzen, um deine eigenen Programme zu erstellen.' },
      { label: 'Blockbasiert programmieren', text: 'Du bist fähig, mit Bedingungen, Schleifen, logischen Blöcken und Variablen in einem blockbasierten Programmierumfeld umzugehen.' },
      { label: 'Software entwickeln', text: 'Du kannst Software entwickeln, die genau auf dein Making-Projekt abgestimmt ist.' },
      { label: 'Software auf Hardware übertragen', text: 'Du bist in der Lage, deine eigene Software auf Hardware zu übertragen und sie zum Laufen zu bringen.' },
      { label: 'Software testen und optimieren', text: 'Du kannst deine Software unter realen Bedingungen testen und Verbesserungen vornehmen.' },
      { label: 'Programmierfähigkeiten ausbauen', text: 'Du kannst deine Programmierfähigkeiten weiterentwickeln, um die Effizienz, Geschwindigkeit und Stabilität deiner Software zu optimieren.' },
    ],
  },
  {
    nr: 20,
    name: 'Elektronik',
    bereich: 'fach',
    beschreibung:
      'Die Schüler:innen kennen gängige Elektronikkomponenten, Schaltungen und Möglichkeiten zur Gewinnung von elektrischer Energie. Sie können die Komponenten in eigenen Projekten sinnvoll integrieren und nutzen.',
    indikatoren: [
      { label: 'Bauteile kennen', text: 'Du kannst verschiedene Elektronikbauteile wie Kabel, LEDs und Schalter benennen und weisst, wofür sie sind.' },
      { label: 'Auf Sicherheit achten', text: 'Du kennst die Sicherheitsregeln beim Umgang mit Elektrizität und achtest darauf, keine Kurzschlüsse zu verursachen.' },
      { label: 'Stromkreise bauen', text: 'Du kannst einfache Stromkreise mit Schaltern und Lampen (LEDs) bauen und dafür sorgen, dass sie richtig funktionieren.' },
      { label: 'Schaltungen verstehen', text: 'Du kannst Schaltungen hintereinander (Serie) und nebeneinander (Parallel) bauen und weisst, wann man was verwendet.' },
      { label: 'Alternative Energie nutzen', text: 'Du weisst, wie man Strom aus Sonnenlicht oder Wind macht und wie man ihn in Akkus speichern kann.' },
      { label: 'Elektronik integrieren', text: 'Du kannst deine eigenen Sachen mit elektronischen Teilen bauen und dafür sorgen, dass alles gut funktioniert.' },
    ],
  },
  {
    nr: 21,
    name: 'Mechanik',
    bereich: 'fach',
    beschreibung:
      'Die Schüler:innen kennen mechanische Komponenten und wichtige Anwendungsbeispiele.',
    indikatoren: [
      { label: 'Mechaniken kennen', text: 'Du kennst einfache mechanische Teile wie Hebel und Räder und weisst, wo sie im Alltag vorkommen.' },
      { label: 'Mechaniken bauen', text: 'Du kannst einfache mechanische Konstruktionen bauen, die sich bewegen, indem du Beispiele nachmachst.' },
      { label: 'Bewegung übertragen', text: 'Du kannst Bewegung von einem Teil auf ein anderes übertragen (z.B. mit Zahnrädern oder Riemen).' },
      { label: 'Antriebe bauen', text: 'Du kannst funktionierende Antriebe für unterschiedliche Zwecke bauen (z.B. Fahrzeuge, Flugzeuge, Roboter, Maschinen).' },
      { label: 'Mechanik optimieren', text: 'Du kannst Probleme in deinen mechanischen Konstruktionen finden (z.B. hohe Reibung) und sie beheben.' },
      { label: 'Bauteile fertigen 22', text: 'Du nutzt Geräte für digitale Fabrikation verwenden, um genau passende Teile für deine Konstruktionen herzustellen. 11' },
    ],
  },
  {
    nr: 22,
    name: 'Material- und Werkzeugkunde',
    bereich: 'fach',
    beschreibung:
      'Die Schüler:innen kennen Eigenschaften von verschiedenen Materialien und Werkzeugen und können sie für die Fertigung von Produkten zielführend auswählen und nutzen.',
    indikatoren: [
      { label: 'Materialeigenschaften kennen', text: 'Du kennst verschiedene Materialien wie Papier, Holz und Stoff und weisst, was man damit machen kann.' },
      { label: 'Werkzeuge nutzen', text: 'Du kennst verschiedene Werkzeuge, weisst, wofür sie da sind und wie man sie sicher benutzt.' },
      { label: 'Materialen verarbeiten', text: 'Du kannst mit den richtigen Werkzeugen Sachen aus Papier, Holz und anderen Materialien basteln und gestalten.' },
      { label: 'Klug auswählen', text: 'Du kannst geeignete Materialien und Werkzeuge für deine Projekte aussuchen, auch so, dass es gut für die Umwelt ist.' },
      { label: 'Geräte in Schuss halten', text: 'Du kannst dafür sorgen, dass deine Werkzeuge und Maschinen immer gut funktionieren, und kleine Probleme selbst beheben.' },
      { label: 'Kreativ improvisieren', text: 'Wenn mal ein Material fehlt, findest du andere Sachen, die du stattdessen benutzen kannst, um dein Projekt umzusetzen.' },
    ],
  },
  {
    nr: 23,
    name: 'Designkompetenz',
    bereich: 'fach',
    beschreibung:
      'Die Schüler:innen können Objekte unter Berücksichtigung von naturwissenschaftlichen Gesetzmässigkeiten, ästhetischen Anforderungen und Usability adressatengerecht entwickeln.',
    indikatoren: [
      { label: 'Wirkung erkennen', text: 'Du weisst, wie Materialien, Farben und Formen wirken und was man damit alles machen kann.' },
      { label: 'Haltbarkeit erreichen', text: 'Du kannst Konstruktionen entwickeln, die nicht umfallen und stabil sind.' },
      { label: 'Teile verbinden', text: 'Du kannst Teile so zusammenzubauen, dass sie entweder fest zusammenhalten oder wieder auseinandergenommen werden können.' },
      { label: 'Vorgaben beachten', text: 'Du kannst Produkte so bauen, wie sie sein sollen: zum Beispiel leicht, wasserdicht, haltbar und umweltfreundlich.' },
      { label: 'Nutzer:innen im Blick haben', text: 'Du kannst dir überlegen, was die Nutzer:innen brauchen und möchten, und machst das Produkt so, dass gut für sie ist.' },
      { label: 'Testen und verbessern', text: 'Du testest, was du gebaut hast, hörst zu, was andere dazu sagen, und verbesserst es dann. 12' },
    ],
  },
  {
    nr: 24,
    name: 'Angewandte Medienkompetenz',
    bereich: 'fach',
    beschreibung:
      'Die Schüler:innen können digitale Medienprodukte herstellen beziehungsweise digitale Medien für Recherche, Ideenentwicklung, Zusammenarbeit, Modellierung von Prototypen, Produktpräsentation und Prozessdokumentation kompetent nutzen.',
    indikatoren: [
      { label: 'Digital zusammenarbeiten', text: 'Du kannst mit anderen digital zusammenarbeiten, zum Beispiel indem ihr gemeinsam eine digitale Tafel für eure Pläne und Ideen nutzt.' },
      { label: 'Medien gestalten', text: 'Du kannst mit digitalen Geräten Texte schreiben, Tonaufnahmen, Fotos und Videos machen und sie zu einem Produkt zusammenstellen, das anderen gefällt.' },
      { label: 'Wissen weitergeben', text: 'Du kannst digitale Medien wie Videos oder Präsentationen nutzen, um anderen zu zeigen und zu erklären, was du weisst und welche Ideen du hast.' },
      { label: 'Künstliche Intelligenz nutzen', text: 'Du kannst künstliche Intelligenz einsetzen, um neue Ideen zu finden oder Informationen zu suchen.' },
      { label: 'Informationen', text: 'Du kannst im Internet nach Infos suchen, die dir wirklich weiterhelfen.' },
      { label: 'beschaffen Sicherheitsregeln beachten', text: 'Du kennst die Regeln, wie man sicher und fair im Internet umgeht, damit niemandem Probleme entstehen, zum Beispiel beim Teilen von Bildern oder Daten.' },
    ],
  },
];

export function kompetenz(nr: number) {
  return KOMPETENZEN.find((k) => k.nr === nr);
}
