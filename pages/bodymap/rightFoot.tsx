import MapContainer from '../../src/components/bodyMaps/MapContainer';
import { rightFoot } from '../../src/components/bodyMaps/mapData';
import { MessageBoxBodyMap } from '../../src/components/messageBoxes';
import Navigator from '../../src/components/Navigator';

export default function RightFoot() {
  return (
    <main className="container">
      <MessageBoxBodyMap />
      <MapContainer map={rightFoot} />
      <Navigator />
    </main>
  );
}
