import MapContainer from '../../src/components/bodyMaps/MapContainer';
import { MessageBoxWholeBody } from '../../src/components/messageBoxes';
import { wholeBody } from '../../src/components/bodyMaps/mapData';
import Navigator from '../../src/components/Navigator';
import { useDispatch } from 'react-redux';
import { resetBodyMaps } from '../../src/store/bodyMapReducer';

const Survey = () => {
  const dispatch = useDispatch();
  return (
    <main className="container flex">
      <MessageBoxWholeBody />
      <MapContainer map={wholeBody} />
      <Navigator onBack={() => dispatch(resetBodyMaps())} />
    </main>
  );
};

export default Survey;
