import MapContainer from '../../src/components/bodyMaps/MapContainer';
import { wholeBody } from '../../src/components/bodyMaps/mapData';

const Survey = () => {
  return (
    <div className="container flex">
      <MapContainer followUp={true} map={wholeBody} />
    </div>
  );
};

export default Survey;
