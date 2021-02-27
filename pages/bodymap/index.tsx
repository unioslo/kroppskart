import MapContainer from '../../src/components/bodyMaps/MapContainer';
import wholeBody from '../../src/components/bodyMaps/mapData/wholeBody';
import { MessageBoxWholeBody } from '../../src/components/messageBoxes';
import Navigator from '../../src/components/Navigator';

const Survey = () => {
  return (
    <main className="container flex">
      <MessageBoxWholeBody />
      <MapContainer map={wholeBody} />
      <Navigator />
    </main>
  );
};

export default Survey;
