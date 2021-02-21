import MapContainer from '../../src/components/bodyMaps/MapContainer';
import { leftArm } from '../../src/components/bodyMaps/mapData';

export default function LeftArm() {
  return (
    <div className="container">
      <MapContainer map={leftArm} />
    </div>
  );
}
