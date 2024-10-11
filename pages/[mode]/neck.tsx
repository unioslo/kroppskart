import { useRouter } from 'next/router';
import { BodyMapPage, FollowupPage } from '../../src/components/MapPage';
import neck from '../../src/components/MapContainer/mapData/neckMap';

export default function Page() {
  const mode = useRouter().query.mode as string;

  if (mode === 'followup') {
    return <FollowupPage mapName="neck" map={neck} />;
  }

  return <BodyMapPage mapName="neck" map={neck} />;
}
