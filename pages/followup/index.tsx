import MapContainer from '../../src/components/bodyMaps/MapContainer';
import { wholeBody } from '../../src/components/bodyMaps/mapData';

const Survey = () => {
  return (
    <div className="container flex">
      <MapContainer map={wholeBody} />
    </div>
  );
};

export default Survey;
