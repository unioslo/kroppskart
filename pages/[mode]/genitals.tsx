import { useRouter } from 'next/router';
import { BodyMapPage, FollowupPage } from '../../src/components/MapPage';
import genitalsMale from '../../src/components/MapContainer/mapData/genitalsMaleMap';
import genitalsFemale from '../../src/components/MapContainer/mapData/genitalsFemaleMap';
import { MapType } from '../../src/components/MapContainer/mapData/mapType';

export const genitals = {
  male: genitalsMale,
  female: genitalsFemale,
} as MapType;

export default function Page() {
  const mode = useRouter().query.mode as string;

  if (mode === 'followup') {
    return <FollowupPage mapName="genitals" map={genitals} />;
  }

  return <BodyMapPage mapName="genitals" map={genitals} />;
}
