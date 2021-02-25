# Kroppskart2

Påbegynt overflytting fra gammel kodebase.

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
- Navigator (inneholder logikk for ruting og navigasjonsknapper)
- EmbeddedForm (logikk for embedding av skjema + ruting etter leveranse)

## Overføring av kroppskart fra gammel kode:

1. Kopier innhold i gammel map-fil til en tom fil
2. Fjern komma mellom area-tagger, bytt "name=" til "id="
3. Kopier inn i HTML-dokument
4. Kjør kodeblokken under i nettleser og kopier objektet for bruk i dette repoet.

```js
let areas = document.getElementsByTagName('area');
Object.values(areas).reduce((acc, area) => {
  acc[area.id] = {
      shape: area.shape,
      points: area.coords,
      alt: area.alt,
      name: area.id,
  };
  return acc;
}, {});
```
