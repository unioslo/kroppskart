import MapContainer from '../../src/components/bodyMaps/MapContainer';
import { MessageBoxWholeBody } from '../../src/components/messageBoxes';
import { wholeBody } from '../../src/components/bodyMaps/mapData';
import Navigator from '../../src/components/Navigator';

const Survey = () => {
  return (
    <div className="container flex">
      <MessageBoxWholeBody />
      <MapContainer map={wholeBody} />
      <Navigator />
    </div>
  );
};

export default Survey;
