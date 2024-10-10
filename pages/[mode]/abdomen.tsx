import { useRouter } from 'next/router';
import { BodyMapPage, FollowupPage } from '../../src/components/MapPage';
import abdomen from '../../src/components/MapContainer/mapData/abdomenMap';

export default function Page() {
  const mode = useRouter().query.mode as string;

  if (mode === 'bodymap') {
    return <BodyMapPage mapName="abdomen" map={abdomen} />;
  }

  return <FollowupPage mapName="abdomen" map={abdomen} />;
}
