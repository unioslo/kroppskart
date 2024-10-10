import { useRouter } from 'next/router';
import { BodyMapPage, FollowupPage } from '../../src/components/MapPage';
import back from '../../src/components/MapContainer/mapData/backMap';

export default function Page() {
  const mode = useRouter().query.mode as string;

  if (mode === 'bodymap') {
    return <BodyMapPage mapName="back" map={back} />;
  }

  return <FollowupPage mapName="back" map={back} />;
}
