import { useRouter } from 'next/router';
import { BodyMapPage, FollowupPage } from '../../src/components/MapPage';
import head from '../../src/components/MapContainer/mapData/headMap';

export default function Page() {
  const mode = useRouter().query.mode as string;

  if (mode === 'bodymap') {
    return <BodyMapPage mapName="head" map={head} />;
  }

  return <FollowupPage mapName="head" map={head} />;
}
