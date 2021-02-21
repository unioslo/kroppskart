import MapContainer from '../../src/components/bodyMaps/MapContainer';
import { rightFoot } from '../../src/components/bodyMaps/mapData';
import { MessageBoxBodyMap } from '../../src/components/messageBoxes';

export default function RightFoot() {
  return (
    <div className="container">
      <MessageBoxBodyMap />
      <MapContainer map={rightFoot} />
    </div>
  );
}
