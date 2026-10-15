# Mobiler MakerSpace

Projektseite und Kettenreaktions-Spiel zum **Mobilen MakerSpace** der Pädagogischen Hochschule Thurgau –
einer Making-Woche, die als Materialset ins Klassenzimmer kommt.

Gebaut mit Next.js 15 (App Router), ohne Datenbank und ohne Backend. Alle Seiten werden statisch
vorgerendert; das Spiel läuft vollständig im Browser.

## Seiten

| Pfad | Inhalt |
|---|---|
| `/` | Projekt: drei Teile, vier Challenges, acht Schritte, vier Boxen |
| `/spiel` | «Die Kettenreaktion» – das Spiel, dazu alle 14 Bauteile mit Wirkungsrichtung |
| `/kompetenzen` | Die 24 Making-Kompetenzen nach MakeComp4School |
| `/making` | Was schulisches Making ist, mit Quellen |

## Das Spiel

Jedes Bauteil wandelt eine Wirkung in eine andere um – ein Motor nimmt Strom und gibt Drehung ab, eine
Handkurbel macht es umgekehrt. Die Spielerin besetzt vier (bzw. sechs) Stationen so, dass der Anstoss
der Kugel durchläuft und am Ende wieder als Stoss herauskommt, damit die nächste Gruppe übernehmen kann.

Die Daten stehen in `lib/bauteile.ts`:

- `BAUTEILE` – Name, `rein`, `raus`, Erklärung und Herkunftsbox je Bauteil
- `STUFEN` – Anzahl Stationen und geforderte Zahl verschiedener Wirkungsarten
- `WIRKUNG_FARBE` – Farbe je Wirkungsart

Neue Bauteile oder Stufen brauchen nur einen Eintrag in dieser Datei. Stufe 1 hat derzeit 5 Lösungen,
Stufe 2 hat 32 – wer die Daten ändert, sollte das nachrechnen, sonst wird eine Stufe unlösbar.

Fortschritt (ausprobierte Bauteile, geschaffte Stufen) liegt in `localStorage` unter
`mms-kettenreaktion-v1`. Fällt der Speicher aus, läuft das Spiel trotzdem.

## Lokal starten

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # Produktionsbuild
```

## Auf Vercel veröffentlichen

1. Repository auf GitHub anlegen und pushen:

   ```bash
   git init
   git add .
   git commit -m "Mobiler MakerSpace: Projektseite und Kettenreaktions-Spiel"
   gh repo create mobiler-makerspace --public --source=. --push
   ```

2. Auf [vercel.com/new](https://vercel.com/new) das Repository importieren. Vercel erkennt Next.js
   selbst; Build Command, Output Directory und Environment Variables bleiben leer.

3. Nach dem Deploy steht die Seite unter `https://<projektname>.vercel.app`. Diese Adresse in den
   Messe-Generator (`MMS-Messe-Generator_1.html`) als Hauptlink eintragen – damit zeigen alle
   QR-Codes auf dem Messetisch hierher.

Jeder weitere Push auf `main` löst automatisch ein neues Deployment aus.

## Quellen

- Ingold, S. & Maurer, B. (Hrsg., 2024): *Making und Schule. Praxishandbuch für Schulentwicklung und
  Unterricht.* kopaed. CC BY 4.0
- Maurer, B. (2024): *MakeComp4School – Kompetenzrahmen Making in der Schule.* Pädagogische Hochschule
  Thurgau.
- Konzept Mobiler MakerSpace, Kapitel 5 (Boxensystem, Challenges, Ablauf).

## Lizenz

Inhalte CC BY-SA 4.0, Pädagogische Hochschule Thurgau.
