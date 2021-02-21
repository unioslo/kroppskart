import MapContainer from '../../src/components/bodyMaps/MapContainer';
import { rightArm } from '../../src/components/bodyMaps/mapData';
import { MessageBoxBodyMap } from '../../src/components/messageBoxes';

export default function RightArm() {
  return (
    <div className="container">
      <MessageBoxBodyMap />
      <MapContainer map={rightArm} />
    </div>
  );
}
