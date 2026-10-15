'use client';

import { useState } from 'react';
import { KOMPETENZEN, BEREICHE, type Kompetenz } from '@/lib/kompetenzen';
import s from './Kompetenzraster.module.css';

const ORDNUNG: (keyof typeof BEREICHE)[] = ['personal', 'sozial', 'methoden', 'fach'];

export default function Kompetenzraster() {
  const [offen, setOffen] = useState<number | null>(null);
  const [schwebt, setSchwebt] = useState<number | null>(null);

  const gezeigt: Kompetenz | undefined = KOMPETENZEN.find((k) => k.nr === (offen ?? schwebt));

  return (
    <div>
      <div className={s.raster}>
        {ORDNUNG.map((b) => {
          const gruppe = KOMPETENZEN.filter((k) => k.bereich === b);
          const farbe = BEREICHE[b].farbe;
          return (
            <section key={b} className={s.bereich} style={{ color: farbe }}>
              <h2 className={s.bereichKopf} style={{ background: farbe }}>
                {BEREICHE[b].titel}
                <span>
                  {gruppe[0].nr}–{gruppe[gruppe.length - 1].nr}
                </span>
              </h2>
              <div className={s.liste}>
                {gruppe.map((k) => (
                  <button
                    key={k.nr}
                    type="button"
                    className={`${s.eintrag} ${offen === k.nr ? s.eintragAktiv : ''}`}
                    onClick={() => setOffen(offen === k.nr ? null : k.nr)}
                    onMouseEnter={() => setSchwebt(k.nr)}
                    onMouseLeave={() => setSchwebt(null)}
                    onFocus={() => setSchwebt(k.nr)}
                    onBlur={() => setSchwebt(null)}
                    aria-expanded={offen === k.nr}
                  >
                    <span className={s.nummer}>{k.nr}</span>
                    <span style={{ minWidth: 0 }}>
                      <span className={s.eintragName}>{k.name}</span>
                      <span className={s.vorschau}>
                        {k.beschreibung.replace('Die Schüler:innen ', '').slice(0, 78)}…
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {gezeigt ? (
        <article className={s.detail} style={{ color: BEREICHE[gezeigt.bereich].farbe }}>
          <div className={s.detailKopf}>
            <span className={s.detailNr} style={{ background: BEREICHE[gezeigt.bereich].farbe }}>
              {gezeigt.nr}
            </span>
            <div style={{ minWidth: 0 }}>
              <p className={s.detailBereich}>{BEREICHE[gezeigt.bereich].titel}</p>
              <h3>{gezeigt.name}</h3>
            </div>
          </div>

          <p className={s.detailBeschreibung}>{gezeigt.beschreibung}</p>

          <p className={s.indTitel}>Sechs Indikatoren · an die Kinder gerichtet</p>
          <div className={s.indListe}>
            {gezeigt.indikatoren.map((i) => (
              <div key={i.label} className={s.ind}>
                <b>{i.label}</b>
                <p>{i.text}</p>
              </div>
            ))}
          </div>

          {gezeigt.anmerkung && (
            <p className={s.anmerkung}>
              <b>Anmerkung zur Quelle</b>
              {gezeigt.anmerkung}
            </p>
          )}
        </article>
      ) : (
        <p className={s.hinweisLeer}>
          <b>Fahren Sie über eine Kompetenz oder tippen Sie sie an.</b>
          Dann erscheint hier, was darunter verstanden wird – und die sechs Indikatoren, mit denen sie
          überprüfbar wird. Die Indikatoren sind bewusst an die Kinder selbst gerichtet, damit sie sich damit
          auch einschätzen können.
        </p>
      )}
    </div>
  );
}
