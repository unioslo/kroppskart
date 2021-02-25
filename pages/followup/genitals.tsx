import { useSelector } from 'react-redux';
import MapContainer from '../../src/components/bodyMaps/MapContainer';
import { genitals } from '../../src/components/bodyMaps/mapData';
import EmbeddedForm from '../../src/components/EmbeddedForm';
import { useParamSelector } from '../../src/store/selectors';
import { rootState } from '../../src/store/store';
import { surveyParams } from '../../src/utils/constants';

export default function Genitals() {
  const sex = useSelector((state: rootState) => state.app.sex);
  const formId = useParamSelector(surveyParams.genitals);
  return (
    <main className="container">
      <MapContainer followUp={true} map={genitals[sex]} />
      <EmbeddedForm formId={formId} />
    </main>
  );
}
