import { useRouter } from 'next/router';
import { BodyMapPage, FollowupPage } from '../../src/components/MapPage';
import chestMale from '../../src/components/MapContainer/mapData/chestMaleMap';
import chestFemale from '../../src/components/MapContainer/mapData/chestFemaleMap';

export const chest = { male: chestMale, female: chestFemale };

export default function Page() {
  const mode = useRouter().query.mode as string;

  if (mode === 'bodymap') {
    return <BodyMapPage mapName="chest" map={chest} />;
  }

  return <FollowupPage mapName="chest" map={chest} />;
}
