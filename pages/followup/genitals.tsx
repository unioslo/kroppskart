import { useSelector } from 'react-redux';
import MapContainer from '../../src/components/MapContainer';
import genitalsFemaleMap from '../../src/components/MapContainer/mapData/genitalsFemaleMap';
import genitalsMaleMap from '../../src/components/MapContainer/mapData/genitalsMaleMap';
import EmbeddedForm from '../../src/components/EmbeddedForm';
import { useParamSelector } from '../../src/store/selectors';
import { rootState } from '../../src/store/store';
import { surveyParams } from '../../src/utils/constants';

export default function Genitals() {
  const sex = useSelector((state: rootState) => state.app.sex);
  const formId = useParamSelector(surveyParams.genitals);
  return (
    <main className="container">
      <MapContainer
        followUp={true}
        map={sex === 'female' ? genitalsFemaleMap : genitalsMaleMap}
      />
      <EmbeddedForm formId={formId} />
    </main>
  );
}
