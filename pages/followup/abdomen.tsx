import MapContainer from '../../src/components/MapContainer';
import abdomenMap from '../../src/components/MapContainer/mapData/abdomenMap';
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
