import MapContainer from '../../src/components/bodyMaps/MapContainer';
import { rightArm } from '../../src/components/bodyMaps/mapData';

export default function RightArm() {
  return (
    <div className="container">
      <MapContainer map={rightArm} />
    </div>
  );
}
