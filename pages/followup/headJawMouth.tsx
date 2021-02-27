import MapContainer from '../../src/components/bodyMaps/MapContainer';
import headMap from '../../src/components/bodyMaps/mapData/headMap';
import EmbeddedForm from '../../src/components/EmbeddedForm';
import { useParamSelector } from '../../src/store/selectors';
import { surveyParams } from '../../src/utils/constants';

export default function HeadJawMouth() {
  const formId = useParamSelector(surveyParams.headJawMouth);
  return (
    <main className="container">
      <MapContainer followUp={true} map={headMap} />
      <EmbeddedForm formId={formId} />
    </main>
  );
}
