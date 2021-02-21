import MapContainer from '../../src/components/bodyMaps/MapContainer';
import { MessageBoxBodyMap } from '../../src/components/messageBoxes';
import { head } from '../../src/components/bodyMaps/mapData';

export default function HeadJawMouth() {
  return (
    <div className="container">
      <MessageBoxBodyMap />
      <MapContainer map={head.default} />
    </div>
  );
}
