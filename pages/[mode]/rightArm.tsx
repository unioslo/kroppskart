import { useRouter } from 'next/router';
import { BodyMapPage, FollowupPage } from '../../src/components/MapPage';
import rightArm from '../../src/components/MapContainer/mapData/rightArmMap';

export default function Page() {
  const mode = useRouter().query.mode as string;

  if (mode === 'bodymap') {
    return <BodyMapPage mapName="rightArm" map={rightArm} />;
  }

  return <FollowupPage mapName="rightArm" map={rightArm} />;
}
