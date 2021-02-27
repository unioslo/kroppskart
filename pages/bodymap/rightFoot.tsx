import MapContainer from '../../src/components/bodyMaps/MapContainer';
import rightFootMap from '../../src/components/bodyMaps/mapData/rightFootMap';
import { MessageBoxBodyMap } from '../../src/components/messageBoxes';
import Navigator from '../../src/components/Navigator';

export default function RightFoot() {
  return (
    <main className="container">
      <MessageBoxBodyMap />
      <MapContainer map={rightFootMap} />
      <Navigator />
    </main>
  );
}
