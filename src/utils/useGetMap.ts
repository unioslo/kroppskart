import { useEffect, useState } from 'react';

export const useGetMap = (mapName: string, sex: string) => {
  const [map, setMap] = useState();
  useEffect(() => {
    if (['genitals', 'chest'].includes(mapName)) {
      import(
        `../../src/components/MapContainer/mapData/${mapName}${sex.charAt(0).toUpperCase() + sex.slice(1)}Map.ts`
      ).then((r) => setMap(r.default));
    } else {
      import(`../../src/components/MapContainer/mapData/${mapName}Map.ts`).then(
        (r) => setMap(r.default)
      );
    }
  }, [mapName, sex]);

  return map;
};

export default useGetMap;
