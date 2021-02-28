import MapContainer from '../../src/components/MapContainer';
import rightLegMap from '../../src/components/MapContainer/mapData/rightLegMap';
import { MessageBoxBodyMap } from '../../src/components/messageBoxes';
import Navigator from '../../src/components/Navigator';

export default function RightLeg() {
  return (
    <main className="container">
      <MessageBoxBodyMap />
      <MapContainer map={rightLegMap} />
      <Navigator />
    </main>
  );
}
