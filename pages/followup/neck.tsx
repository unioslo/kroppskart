import MapContainer from '../../src/components/bodyMaps/MapContainer';
import neckMap from '../../src/components/bodyMaps/mapData/neckMap';
import EmbeddedForm from '../../src/components/EmbeddedForm';
import { useParamSelector } from '../../src/store/selectors';
import { surveyParams } from '../../src/utils/constants';

export default function Neck() {
  const formId = useParamSelector(surveyParams.neck);
  return (
    <main className="container">
      <MapContainer followUp={true} map={neckMap} />
      <EmbeddedForm formId={formId} />
    </main>
  );
}
