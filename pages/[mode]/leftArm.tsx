import { useRouter } from 'next/router';
import { BodyMapPage, FollowupPage } from '../../src/components/MapPage';
import leftArm from '../../src/components/MapContainer/mapData/leftArmMap';

export default function Page() {
  const mode = useRouter().query.mode as string;

  if (mode === 'followup') {
    return <FollowupPage mapName="leftArm" map={leftArm} />;
  }

  return <BodyMapPage mapName="leftArm" map={leftArm} />;
}
