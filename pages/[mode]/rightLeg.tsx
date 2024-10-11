import { useRouter } from 'next/router';
import { BodyMapPage, FollowupPage } from '../../src/components/MapPage';
import rightLeg from '../../src/components/MapContainer/mapData/rightLegMap';

export default function Page() {
  const mode = useRouter().query.mode as string;

  if (mode === 'followup') {
    return <FollowupPage mapName="rightLeg" map={rightLeg} />;
  }

  return <BodyMapPage mapName="rightLeg" map={rightLeg} />;
}
