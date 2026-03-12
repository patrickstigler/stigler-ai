# SEO & Favicon – fehlende Assets

Nach dem technischen SEO-Update fehlen noch folgende **Dateien**, die manuell ergänzt werden sollten:

## 1. OG-Default-Bild (Social Sharing)

- **Pfad:** `public/assets/img/og-default.jpg`
- **Maße:** 1200 × 630 px
- **Inhalt:** Hintergrund in Hauptfarbe (#0a1628), Logo Stigler AI, Tagline „KI-Beratung & Digitale Transformation“
- **Alternative:** [realfavicongenerator.net](https://realfavicongenerator.net) oder [og-image.vercel.app](https://og-image.vercel.app) / `@vercel/og` für dynamische OG-Bilder

Die Komponente `SEO.astro` verwendet bereits `og-default.jpg` als Standard-OG-Bild.

## 2. Favicon-PNG und -ICO

Die Favicon-Links im Layout verweisen auf Dateien im Root von `public/`:

- `public/favicon.ico` (32×32)
- `public/favicon-16x16.png`
- `public/favicon-32x32.png`
- `public/apple-touch-icon.png` (180×180)

**Empfehlung:** Logo (z. B. `public/assets/img/logo.svg`) auf [realfavicongenerator.net](https://realfavicongenerator.net) hochladen und das generierte Paket in `public/` entpacken.  
`public/favicon.svg` ist bereits vorhanden (SVG-Favicon für moderne Browser).
