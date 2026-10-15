'use client';

import { useMemo, useState } from 'react';
import { SZENEN, fallenAnzahl, type Szene } from '@/lib/szenen';
import s from './Moderationsfalle.module.css';

export default function Moderationsfalle({ szene = SZENEN[0] }: { szene?: Szene }) {
  const gesamt = useMemo(() => fallenAnzahl(szene), [szene]);

  const [gefunden, setGefunden] = useState<string[]>([]);
  const [daneben, setDaneben] = useState<string[]>([]);
  const [aufgedeckt, setAufgedeckt] = useState(false);
  const [tipps, setTipps] = useState(0);
  const [punkte, setPunkte] = useState(0);

  const fertig = gefunden.length === gesamt;

  function tippen(id: string) {
    if (aufgedeckt) return;
    const z = szene.zeilen.find((x) => x.id === id)!;
    if (z.falle) {
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
    const offen = szene.zeilen.find((z) => z.falle && !gefunden.includes(z.id));
    if (!offen) return;
    setTipps((t) => t + 1);
    setPunkte((p) => Math.max(0, p - 1));
    setGefunden((g) => [...g, offen.id]);
  }

  function neu() {
    setGefunden([]);
    setDaneben([]);
    setAufgedeckt(false);
    setTipps(0);
    setPunkte(0);
  }

  return (
    <div className={s.buehne}>
      <section className={s.szene}>
        <p className={s.lage}>{szene.lage}</p>

        <div className={s.zeilen}>
          {szene.zeilen.map((z) => {
            if (!z.lp) {
              return (
                <div key={z.id} className={`${s.zeile} ${s.kind}`}>
                  <span className={s.wer}>{z.wer}</span>
                  <span className={s.satz}>{z.text}</span>
                </div>
              );
            }

            const istGefunden = gefunden.includes(z.id);
            const istDaneben = daneben.includes(z.id);
            const zeigtAuf = aufgedeckt && z.falle && !istGefunden;
            const klassen = [s.zeile, s.tippbar];
            if (istGefunden) klassen.push(s.getroffen);
            if (istDaneben) klassen.push(s.danebenGetippt);
            if (zeigtAuf) klassen.push(s.aufgedeckt);

            return (
              <div key={z.id}>
                <button
                  type="button"
                  className={klassen.join(' ')}
                  onClick={() => tippen(z.id)}
                  aria-pressed={istGefunden || istDaneben}
                >
                  <span className={`${s.wer} ${s.werLp}`}>{z.wer}</span>
                  {(istGefunden || zeigtAuf) && (
                    <span className={`${s.marker} ${s.markerFalle}`} aria-hidden="true">
                      !
                    </span>
                  )}
                  {istDaneben && (
                    <span className={`${s.marker} ${s.markerOk}`} aria-hidden="true">
                      ✓
                    </span>
                  )}
                  <span className={s.satz}>{z.text}</span>
                </button>

                {(istGefunden || zeigtAuf) && z.falle && (
                  <p className={s.hinweis}>
                    <b>{z.falle.titel}</b>
                    {z.falle.warum} <span className={s.besser}>Besser: {z.falle.besser}</span>
                  </p>
                )}
                {istDaneben && z.inOrdnung && <p className={s.hinweis}>{z.inOrdnung}</p>}
              </div>
            );
          })}
        </div>
      </section>

      <aside>
        <div className={s.pult}>
          <h2>Tippen Sie auf die Sätze der Lehrperson</h2>
          <p>
            In dieser Szene stecken {gesamt} Stellen, an denen die Lehrperson der Gruppe die Arbeit abnimmt. Die
            Sätze der Kinder sind nur Zusammenhang und nicht antippbar.
          </p>

          <div className={s.kreise}>
            {Array.from({ length: gesamt }).map((_, i) => (
              <span key={i} className={`${s.kreis} ${i < gefunden.length ? s.kreisVoll : ''}`}>
                {i < gefunden.length ? '!' : ''}
              </span>
            ))}
          </div>
          <p className={s.stand}>
            {gefunden.length} von {gesamt} gefunden · {punkte} {punkte === 1 ? 'Punkt' : 'Punkte'}
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
            <h3>{fertig ? `Alle ${gesamt} gefunden.` : 'Aufgelöst.'}</h3>
            <p>
              Keiner dieser Sätze ist böse gemeint – sie kommen aus dem Wunsch zu helfen. Genau deshalb sind sie
              schwer zu lassen. Die Weiterbildung vor dem Einsatz übt nichts anderes als das: vierzig Minuten
              danebenstehen und nichts reparieren.
            </p>
          </div>
        )}

        <div className={s.muster}>
          <b>Musterszene</b>
          <p>
            Das hier ist eine von geplanten fünfzehn Szenen, quer durch die acht Halbtage und alle vier
            Challenges. Sie steht als Muster, damit sich prüfen lässt, ob die Form trägt, bevor der Rest
            geschrieben wird.
          </p>
        </div>
      </aside>
    </div>
  );
}
