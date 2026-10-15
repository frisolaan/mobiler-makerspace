'use client';

import { useState } from 'react';
import { HALBTAGE, SPUREN, FEHLER_GESAMT } from '@/lib/wochenplan';
import s from './Planpruefung.module.css';

type Befund = { id: string; wo: string; titel: string; warum: string; richtig: string };

const ALLE_FEHLER: Befund[] = [
  ...SPUREN.filter((sp) => sp.kopfFehler).map((sp) => ({
    id: `kopf-${sp.id}`,
    wo: `${sp.gruppen} · ${sp.challenge}`,
    ...sp.kopfFehler!,
  })),
  ...SPUREN.flatMap((sp) =>
    sp.zellen
      .map((z, i) => ({ z, i, sp }))
      .filter((x) => x.z.fehler)
      .map((x) => ({
        id: x.z.id,
        wo: `${HALBTAGE[x.i].tag} · ${x.sp.challenge}`,
        ...x.z.fehler!,
      })),
  ),
];

export default function Planpruefung() {
  const [gefunden, setGefunden] = useState<string[]>([]);
  const [daneben, setDaneben] = useState<string[]>([]);
  const [aufgedeckt, setAufgedeckt] = useState(false);
  const [punkte, setPunkte] = useState(0);
  const [tipps, setTipps] = useState(0);

  const fertig = gefunden.length === FEHLER_GESAMT;
  const istFehler = (id: string) => ALLE_FEHLER.some((f) => f.id === id);

  function tippen(id: string) {
    if (aufgedeckt) return;
    if (istFehler(id)) {
      if (gefunden.includes(id)) return;
      setGefunden((g) => [...g, id]);
      setPunkte((p) => p + 2);
    } else {
      if (daneben.includes(id)) return;
      setDaneben((d) => [...d, id]);
      setPunkte((p) => Math.max(0, p - 1));
    }
  }

  function tipp() {
    const offen = ALLE_FEHLER.find((f) => !gefunden.includes(f.id));
    if (!offen) return;
    setTipps((t) => t + 1);
    setPunkte((p) => Math.max(0, p - 1));
    setGefunden((g) => [...g, offen.id]);
  }

  function neu() {
    setGefunden([]);
    setDaneben([]);
    setAufgedeckt(false);
    setPunkte(0);
    setTipps(0);
  }

  const sichtbar = aufgedeckt ? ALLE_FEHLER : ALLE_FEHLER.filter((f) => gefunden.includes(f.id));

  function klasse(id: string) {
    const kl = [s.zelle, s.tippbar];
    if (gefunden.includes(id)) kl.push(s.getroffen);
    else if (daneben.includes(id)) kl.push(s.danebenGetippt);
    else if (aufgedeckt && istFehler(id)) kl.push(s.aufgedeckt);
    return kl.join(' ');
  }

  return (
    <div className={s.buehne}>
      <section className={s.planKarte}>
        <div className={s.rollen}>
          <table className={s.plan}>
            <caption className="eyebrow" style={{ textAlign: 'left', paddingBottom: '.6rem' }}>
              Wochenplan 5b · 32 Kinder · 8 Gruppen
            </caption>
            <thead>
              <tr>
                <th className={s.ecke} scope="col">
                  <span className="eyebrow">Halbtag</span>
                </th>
                {SPUREN.map((sp) => {
                  const id = `kopf-${sp.id}`;
                  const kl = [s.kopf];
                  if (sp.kopfFehler) {
                    kl.push(s.kopfKnopf);
                    if (gefunden.includes(id)) kl.push(s.getroffen);
                    else if (aufgedeckt) kl.push(s.aufgedeckt);
                  } else if (daneben.includes(id)) {
                    kl.push(s.danebenGetippt);
                  }
                  return (
                    <th key={sp.id} scope="col" className={kl.join(' ')} onClick={() => tippen(id)}>
                      <b>{sp.challenge}</b>
                      <small>{sp.gruppen}</small>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {HALBTAGE.map((h, i) => (
                <tr key={h.nr}>
                  <th scope="row" className={s.tag}>
                    {h.tag}
                    <span>
                      {h.nr} · {h.schritt}
                    </span>
                  </th>
                  {SPUREN.map((sp) => {
                    const z = sp.zellen[i];
                    return (
                      <td key={z.id} style={{ padding: 0 }}>
                        <button type="button" className={klasse(z.id)} onClick={() => tippen(z.id)}>
                          {z.text}
                        </button>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={s.wisch}>Breiter Plan – auf dem Telefon seitlich wischen.</p>

        {sichtbar.length > 0 && (
          <div className={s.befunde}>
            {sichtbar.map((f) => (
              <p key={f.id} className={s.befund}>
                <span className={s.wo}>{f.wo}</span>
                <b>{f.titel}</b>
                {f.warum} <span className={s.richtig}>Richtig wäre: {f.richtig}</span>
              </p>
            ))}
          </div>
        )}
      </section>

      <aside>
        <div className={s.pult}>
          <h2>Finden Sie die {FEHLER_GESAMT} Stellen, an denen der Plan nicht aufgeht</h2>
          <p>
            Tippen Sie auf ein Feld im Plan oder auf einen Spaltenkopf. Die meisten Felder sind richtig – auch
            solche, die auf den ersten Blick merkwürdig aussehen.
          </p>

          <div className={s.kreise}>
            {Array.from({ length: FEHLER_GESAMT }).map((_, i) => (
              <span key={i} className={`${s.kreis} ${i < gefunden.length ? s.kreisVoll : ''}`}>
                {i < gefunden.length ? '!' : ''}
              </span>
            ))}
          </div>
          <p className={s.stand}>
            {gefunden.length} von {FEHLER_GESAMT} gefunden · {punkte} {punkte === 1 ? 'Punkt' : 'Punkte'}
            {daneben.length > 0 && ` · ${daneben.length} danebengetippt`}
            {tipps > 0 && ` · ${tipps} Tipp${tipps === 1 ? '' : 's'}`}
          </p>

          <div className={s.knoepfe}>
            <button type="button" className={s.kl} onClick={tipp} disabled={fertig || aufgedeckt}>
              Tipp (−1)
            </button>
            <button type="button" className={s.kl} onClick={() => setAufgedeckt(true)} disabled={aufgedeckt || fertig}>
              Auflösen
            </button>
            <button type="button" className={s.kl} onClick={neu}>
              Neu starten
            </button>
          </div>
        </div>

        {(fertig || aufgedeckt) && (
          <div className={s.fertig}>
            <h3>{fertig ? `Alle ${FEHLER_GESAMT} gefunden.` : 'Aufgelöst.'}</h3>
            <p>
              Drei Challenges nebeneinander in einer Klasse funktionieren nur, weil alle Gruppen am selben
              Halbtag beim selben Schritt stehen. Die Abstimmung der Karten ist keine Ordnungsliebe – sie ist die
              Bedingung dafür, dass eine Lehrperson acht Gruppen gleichzeitig begleiten kann.
            </p>
          </div>
        )}
      </aside>
    </div>
  );
}
