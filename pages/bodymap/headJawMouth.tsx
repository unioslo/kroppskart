import MapContainer from '../../src/components/bodyMaps/MapContainer';
import { MessageBoxBodyMap } from '../../src/components/messageBoxes';
import { head } from '../../src/components/bodyMaps/mapData';
import Navigator from '../../src/components/Navigator';

export default function HeadJawMouth() {
  return (
    <main className="container">
      <MessageBoxBodyMap />
      <MapContainer map={head} />
      <Navigator />
    </main>
  );
}
