import { useSelector } from 'react-redux';
import MapContainer from '../../src/components/bodyMaps/MapContainer';
import { genitals } from '../../src/components/bodyMaps/mapData';
import EmbeddedForm from '../../src/components/EmbeddedForm';
import { useParamSelector } from '../../src/store/selectors';
import { rootState } from '../../src/store/store';

export default function Genitals() {
  const sex = useSelector((state: rootState) => state.app.sex);
  const formId = useParamSelector('genit');
  return (
    <div className="container">
      <MapContainer followUp={true} map={genitals[sex]} />
      <EmbeddedForm formId={formId} />
    </div>
  );
}
