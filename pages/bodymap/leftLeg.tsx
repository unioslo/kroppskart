import MapContainer from '../../src/components/MapContainer';
import leftLeg from '../../src/components/MapContainer/mapData/leftLegMap';
import { MessageBoxBodyMap } from '../../src/components/messageBoxes';
import Navigator from '../../src/components/Navigator';

export default function LeftLeg() {
  return (
    <main className="container">
      <MessageBoxBodyMap />
      <MapContainer map={leftLeg} />
      <Navigator />
    </main>
  );
}
