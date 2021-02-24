import MapContainer from '../../src/components/bodyMaps/MapContainer';
import { neck } from '../../src/components/bodyMaps/mapData';
import EmbeddedForm from '../../src/components/EmbeddedForm';
import { useParamSelector } from '../../src/store/selectors';
import { surveyParams } from '../../src/utils/constants';

export default function Neck() {
  const formId = useParamSelector(surveyParams.neck);
  return (
    <div className="container">
      <MapContainer followUp={true} map={neck} />
      <EmbeddedForm formId={formId} />
    </div>
  );
}
