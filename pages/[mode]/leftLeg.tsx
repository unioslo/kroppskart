import { useRouter } from 'next/router';
import { BodyMapPage, FollowupPage } from '../../src/components/MapPage';
import leftLeg from '../../src/components/MapContainer/mapData/leftLegMap';

export default function Page() {
  const mode = useRouter().query.mode as string;

  if (mode === 'bodymap') {
    return <BodyMapPage mapName="leftLeg" map={leftLeg} />;
  }

  return <FollowupPage mapName="leftLeg" map={leftLeg} />;
}
