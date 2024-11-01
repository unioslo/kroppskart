# Kroppskart

For å kjøre lokalt: `npm run dev`
For å bygge: `npm run build` og `npm run start`

## Struktur

Foreløpig struktur:

- Pages
  - Intro
  - Bodymaps
  - Followup
  - Done
- bodyMaps
  - MapContainer (rendrer bilde og SVG-lag basert på mapData)
  - SVGContainer (lager SVG-lag basert på innsendt mapData)
  - mapData (mapping for kroppskart, transformert fra gammel app)
- Navigator (inneholder logikk for ruting, bruk av modaler, og navigasjonsknapper)
- EmbeddedForm (logikk for embedding av skjema + ruting etter leveranse)

