import { useRouter } from 'next/router';
import { BodyMapPage, FollowupPage } from '../../src/components/MapPage';
import back from '../../src/components/MapContainer/mapData/backMap';

export default function Page() {
  const mode = useRouter().query.mode as string;

  if (mode === 'followup') {
    return <FollowupPage mapName="back" map={back} />;
  }

  return <BodyMapPage mapName="back" map={back} />;
}
