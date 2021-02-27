import MapContainer from '../../src/components/MapContainer';
import backMap from '../../src/components/MapContainer/mapData/backMap';
import EmbeddedForm from '../../src/components/EmbeddedForm';
import { useParamSelector } from '../../src/store/selectors';
import { surveyParams } from '../../src/utils/constants';

export default function Back() {
  const formId = useParamSelector(surveyParams.back);
  return (
    <main className="container">
      <MapContainer followUp={true} map={backMap} />
      <EmbeddedForm formId={formId} />
    </main>
  );
}
