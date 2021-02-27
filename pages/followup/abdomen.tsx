import MapContainer from '../../src/components/bodyMaps/MapContainer';
import abdomenMap from '../../src/components/bodyMaps/mapData/abdomenMap';
import EmbeddedForm from '../../src/components/EmbeddedForm';
import { useParamSelector } from '../../src/store/selectors';
import { surveyParams } from '../../src/utils/constants';

export default function Abdomen() {
  const formId = useParamSelector(surveyParams.abdomen);
  return (
    <main className="container">
      <MapContainer followUp={true} map={abdomenMap} />
      <EmbeddedForm formId={formId} />
    </main>
  );
}
