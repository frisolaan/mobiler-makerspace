'use client';

import { Fragment, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { BAUTEILE, STUFEN, START, ZIEL, WIRKUNG_FARBE, bauteil, type Wirkung, type Bauteil } from '@/lib/bauteile';
import s from './Kettenspiel.module.css';

type Zustand = 'bauen' | 'laeuft' | 'erfolg' | 'fehler';

type Pruefung = {
  ok: boolean;
  /** Index der Station, an der die Kette reisst. null = alle Anschlüsse passen. */
  bruch: number | null;
  grund: string;
  arten: Wirkung[];
};

const SPEICHER = 'mms-kettenreaktion-v1';

function Chip({ w, klein }: { w: Wirkung; klein?: boolean }) {
  return (
    <span className={s.chip} style={klein ? { fontSize: '0.68rem' } : undefined}>
      <span className={s.punkt} style={{ background: WIRKUNG_FARBE[w] }} />
      {w}
    </span>
  );
}

function pruefe(slots: (string | null)[], minArten: number): Pruefung {
  const arten: Wirkung[] = [START];
  let signal: Wirkung = START;

  for (let i = 0; i < slots.length; i++) {
    const id = slots[i];
    if (!id) {
      return { ok: false, bruch: i, grund: `Station ${i + 1} ist noch leer.`, arten };
    }
    const b = bauteil(id)!;
    if (b.rein !== signal) {
      return {
        ok: false,
        bruch: i,
        grund: `Station ${i + 1}: ${b.name} braucht ${b.rein}, bekommt aber ${signal}.`,
        arten,
      };
    }
    signal = b.raus;
    if (!arten.includes(signal)) arten.push(signal);
  }

  if (signal !== ZIEL) {
    return {
      ok: false,
      bruch: slots.length - 1,
      grund: `Am Ende kommt ${signal} heraus. Die nächste Gruppe braucht aber einen ${ZIEL}.`,
      arten,
    };
  }
  if (arten.length < minArten) {
    return {
      ok: false,
      bruch: null,
      grund: `Die Kette läuft, aber sie nutzt erst ${arten.length} Wirkungsarten. Gefordert sind ${minArten}.`,
      arten,
    };
  }
  return { ok: true, bruch: null, grund: 'Die Kette läuft durch.', arten };
}

export default function Kettenspiel() {
  const [stufeNr, setStufeNr] = useState(1);
  const stufe = STUFEN.find((x) => x.nr === stufeNr)!;

  const [slots, setSlots] = useState<(string | null)[]>(() => Array(STUFEN[0].stationen).fill(null));
  const [aktiv, setAktiv] = useState<number | null>(0);
  const [zustand, setZustand] = useState<Zustand>('bauen');
  const [puls, setPuls] = useState(-1);
  const [ergebnis, setErgebnis] = useState<Pruefung | null>(null);
  const [entdeckt, setEntdeckt] = useState<string[]>([]);
  const [geschafft, setGeschafft] = useState<number[]>([]);
  const [versuche, setVersuche] = useState(0);
  const [erklaerung, setErklaerung] = useState<Bauteil | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* --- gespeicherten Fortschritt laden --- */
  useEffect(() => {
    try {
      const roh = window.localStorage.getItem(SPEICHER);
      if (roh) {
        const d = JSON.parse(roh) as { entdeckt?: string[]; geschafft?: number[] };
        if (Array.isArray(d.entdeckt)) setEntdeckt(d.entdeckt);
        if (Array.isArray(d.geschafft)) setGeschafft(d.geschafft);
      }
    } catch {
      /* Privatfenster oder blockierter Speicher – das Spiel läuft auch ohne. */
    }
  }, []);

  const sichern = useCallback((e: string[], g: number[]) => {
    try {
      window.localStorage.setItem(SPEICHER, JSON.stringify({ entdeckt: e, geschafft: g }));
    } catch {
      /* egal */
    }
  }, []);

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  const wechsleStufe = (nr: number) => {
    const st = STUFEN.find((x) => x.nr === nr)!;
    if (timer.current) clearTimeout(timer.current);
    setStufeNr(nr);
    setSlots(Array(st.stationen).fill(null));
    setAktiv(0);
    setZustand('bauen');
    setPuls(-1);
    setErgebnis(null);
    setErklaerung(null);
  };

  const zuruecksetzen = () => {
    if (timer.current) clearTimeout(timer.current);
    setSlots(Array(stufe.stationen).fill(null));
    setAktiv(0);
    setZustand('bauen');
    setPuls(-1);
    setErgebnis(null);
  };

  const setze = (teilId: string) => {
    if (zustand === 'laeuft') return;
    let ziel = aktiv !== null && slots[aktiv] === null ? aktiv : slots.findIndex((x) => x === null);
    if (ziel === -1) ziel = aktiv ?? slots.length - 1; // alles besetzt: gewählte Station ersetzen
    const neu = [...slots];
    neu[ziel] = teilId;
    setSlots(neu);
    const naechste = neu.findIndex((x) => x === null);
    setAktiv(naechste === -1 ? ziel : naechste);
    setZustand('bauen');
    setErgebnis(null);
    setPuls(-1);
    setErklaerung(bauteil(teilId) ?? null);
    if (!entdeckt.includes(teilId)) {
      const e = [...entdeckt, teilId];
      setEntdeckt(e);
      sichern(e, geschafft);
    }
  };

  const leere = (i: number) => {
    if (zustand === 'laeuft') return;
    const neu = [...slots];
    neu[i] = null;
    setSlots(neu);
    setAktiv(i);
    setZustand('bauen');
    setErgebnis(null);
    setPuls(-1);
  };

  const starte = () => {
    const p = pruefe(slots, stufe.minArten);
    const bis = p.bruch === null ? slots.length : p.bruch;
    setZustand('laeuft');
    setErgebnis(null);
    setPuls(-1);

    let i = -1;
    const schritt = () => {
      i += 1;
      setPuls(i);
      if (i < bis) {
        timer.current = setTimeout(schritt, 420);
      } else {
        timer.current = setTimeout(() => {
          setPuls(-1);
          setErgebnis(p);
          setZustand(p.ok ? 'erfolg' : 'fehler');
          setVersuche((v) => v + 1);
          if (p.ok && !geschafft.includes(stufeNr)) {
            const g = [...geschafft, stufeNr];
            setGeschafft(g);
            sichern(entdeckt, g);
          }
        }, 520);
      }
    };
    schritt();
  };

  const voll = slots.every((x) => x !== null);

  const abzeichen = useMemo(() => {
    if (!ergebnis?.ok) return [];
    const ids = slots.filter(Boolean) as string[];
    const teile = ids.map((id) => bauteil(id)!);
    const liste: { titel: string; text: string }[] = [
      { titel: 'Die Kette läuft', text: `${stufe.stationen} Stationen, und die Kugel kommt bei der nächsten Gruppe an.` },
    ];
    if (ergebnis.arten.length > stufe.minArten) {
      liste.push({
        titel: 'Viele Wege',
        text: `${ergebnis.arten.length} verschiedene Wirkungsarten statt der geforderten ${stufe.minArten}.`,
      });
    }
    if (teile.some((t) => t.erzeugt)) {
      liste.push({ titel: 'Strom selbst gemacht', text: 'Mindestens eine Station erzeugt die Energie, statt sie nur zu verbrauchen.' });
    }
    for (let i = 0; i < ids.length - 1; i++) {
      if (ids[i] === 'led' && ids[i + 1] === 'solarzelle') {
        liste.push({ titel: 'Umweg über das Licht', text: 'LED auf Solarzelle – ein Signal ohne Kabel zwischen zwei Stationen.' });
        break;
      }
    }
    if (new Set(ids).size === ids.length) {
      liste.push({ titel: 'Kein Bauteil doppelt', text: 'Jede Station löst die Aufgabe auf ihre eigene Art.' });
    }
    return liste;
  }, [ergebnis, slots, stufe]);

  const eingang = (i: number): Wirkung => {
    if (i === 0) return START;
    const vor = slots[i - 1];
    return vor ? bauteil(vor)!.raus : START;
  };

  return (
    <div className={s.buehne}>
      <div className={s.kopf}>
        <div>
          <p className={s.ziel}>Die Kugel stösst an. Baut eine Kette, die den Anstoss weitergibt.</p>
          <p className={s.zielUnter}>{stufe.text}</p>
        </div>
        <div className={s.stufen}>
          {STUFEN.map((x) => (
            <button
              key={x.nr}
              type="button"
              className={s.stufeKnopf}
              aria-pressed={x.nr === stufeNr}
              onClick={() => wechsleStufe(x.nr)}
            >
              {x.name}
              {geschafft.includes(x.nr) ? ' ✓' : ''}
            </button>
          ))}
        </div>
      </div>

      {/* ---------- die Kette ---------- */}
      <div className={s.bahn}>
        <div className={s.pol}>
          <span className={s.polLabel}>Anstoss</span>
          <Chip w={START} />
        </div>

        {slots.map((id, i) => {
          const b = id ? bauteil(id)! : null;
          const passt = b ? b.rein === eingang(i) : false;
          const istBruch = zustand === 'fehler' && ergebnis?.bruch === i;
          const klassen = [s.slot];
          if (aktiv === i && zustand === 'bauen') klassen.push(s.slotAktiv);
          if (puls === i) klassen.push(s.slotPuls);
          if (istBruch) klassen.push(s.slotBruch);

          return (
            <Fragment key={i}>
              <span className={`${s.pfeil} ${passt ? s.pfeilOk : b ? s.pfeilBruch : ''}`} aria-hidden="true">
                {b ? (passt ? '→' : '✕') : '→'}
              </span>
              <button
                type="button"
                className={klassen.join(' ')}
                onClick={() => (b ? leere(i) : setAktiv(i))}
                aria-label={b ? `Station ${i + 1}: ${b.name}, antippen zum Entfernen` : `Station ${i + 1} ist leer`}
              >
                <span className={s.slotNr}>Station {i + 1}</span>
                {b ? (
                  <>
                    <span className={s.slotName}>{b.name}</span>
                    <span className={s.weg}>
                      <Chip w={b.rein} klein />
                      <span aria-hidden="true">→</span>
                      <Chip w={b.raus} klein />
                    </span>
                  </>
                ) : (
                  <span className={s.slotLeer}>Bauteil aus der Werkbank wählen</span>
                )}
              </button>
            </Fragment>
          );
        })}

        <span className={s.pfeil} aria-hidden="true">→</span>
        <div className={s.pol}>
          <span className={s.polLabel}>Übergabe</span>
          <Chip w={ZIEL} />
        </div>
      </div>

      {/* ---------- Werkbank ---------- */}
      <div className={s.werkbank}>
        <p className={s.werkTitel}>Werkbank · {BAUTEILE.length} Bauteile aus den Boxen</p>
        <div className={s.teile}>
          {BAUTEILE.map((b) => (
            <button
              key={b.id}
              type="button"
              className={s.teil}
              disabled={zustand === 'laeuft'}
              onClick={() => setze(b.id)}
            >
              <span className={s.teilName}>{b.name}</span>
              <span className={s.weg}>
                <Chip w={b.rein} klein />
                <span aria-hidden="true">→</span>
                <Chip w={b.raus} klein />
              </span>
              <span className={s.teilBox}>{b.box}</span>
            </button>
          ))}
        </div>
      </div>

      {erklaerung && (
        <p className={s.erklaerBox}>
          <b>{erklaerung.name}:</b> {erklaerung.erklaerung}
        </p>
      )}

      {/* ---------- Leiste ---------- */}
      <div className={s.leiste}>
        <button type="button" className="knopf" disabled={!voll || zustand === 'laeuft'} onClick={starte}>
          {zustand === 'laeuft' ? 'Die Kugel läuft …' : 'Kette starten'}
        </button>
        <button type="button" className="knopf rand" onClick={zuruecksetzen} disabled={zustand === 'laeuft'}>
          Neu bauen
        </button>
        <p className={`${s.meldung} ${zustand === 'fehler' ? s.meldungFehler : ''} ${zustand === 'erfolg' ? s.meldungOk : ''}`}>
          {zustand === 'bauen' && !voll && `Noch ${slots.filter((x) => x === null).length} Station(en) zu besetzen.`}
          {zustand === 'bauen' && voll && 'Alle Stationen besetzt. Startet die Kugel.'}
          {zustand === 'laeuft' && 'Mal sehen, wie weit sie kommt.'}
          {(zustand === 'fehler' || zustand === 'erfolg') && ergebnis?.grund}
        </p>
      </div>

      {/* ---------- Ergebnis ---------- */}
      {zustand === 'erfolg' && ergebnis && (
        <div className={s.ergebnis}>
          <h3>Geschafft – nach {versuche} {versuche === 1 ? 'Versuch' : 'Versuchen'}.</h3>
          <p style={{ color: '#d6d7ea', marginTop: '.4rem', fontSize: '.92rem', lineHeight: 1.5 }}>
            Genau darum geht es in der Challenge «Die Kettenreaktion»: Nicht die eigene Station ist schwierig, sondern
            die Stelle, an der sie die Station der Nachbargruppe berührt.
          </p>
          <div className={s.abzeichen}>
            {abzeichen.map((a) => (
              <span key={a.titel} className={s.plakette}>
                <span>
                  <b>{a.titel}</b>
                  {a.text}
                </span>
              </span>
            ))}
          </div>
          {stufeNr === 1 && (
            <p style={{ marginTop: '1rem' }}>
              <button type="button" className="knopf hell" onClick={() => wechsleStufe(2)}>
                Weiter zum Tüftelmodus
              </button>
            </p>
          )}
        </div>
      )}

      {/* ---------- Sammlung ---------- */}
      <div className={s.sammlung}>
        <p className={s.werkTitel}>
          Ausprobiert: {entdeckt.length} von {BAUTEILE.length} Bauteilen
        </p>
        <div className={s.sammelRaster}>
          {BAUTEILE.map((b) => (
            <span key={b.id} className={`${s.sammelStueck} ${entdeckt.includes(b.id) ? s.sammelOffen : ''}`}>
              {b.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
