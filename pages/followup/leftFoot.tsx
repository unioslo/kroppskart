import MapContainer from '../../src/components/bodyMaps/MapContainer';
import { leftFoot } from '../../src/components/bodyMaps/mapData';

export default function LeftFoot() {
  return (
    <div className="container">
      <MapContainer map={leftFoot} />
    </div>
  );
}
