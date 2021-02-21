import MapContainer from '../../src/components/bodyMaps/MapContainer';
import { MessageBoxWholeBody } from '../../src/components/messageBoxes';
import { wholeBody } from '../../src/components/bodyMaps/mapData';

const Survey = () => {
  return (
    <div className="container flex">
      <MessageBoxWholeBody />
      <MapContainer map={wholeBody.default} />
    </div>
  );
};

export default Survey;
