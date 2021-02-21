import MapContainer from '../../src/components/bodyMaps/MapContainer';
import { leftArm } from '../../src/components/bodyMaps/mapData';
import { MessageBoxBodyMap } from '../../src/components/messageBoxes';

export default function LeftArm() {
  return (
    <div className="container">
      <MessageBoxBodyMap />
      <MapContainer map={leftArm} />
    </div>
  );
}
