import MapContainer from '../../src/components/bodyMaps/MapContainer';
import { head } from '../../src/components/bodyMaps/mapData';
import EmbeddedForm from '../../src/components/EmbeddedForm';
import { useParamSelector } from '../../src/store/selectors';
import { surveyParams } from '../../src/utils/constants';

export default function HeadJawMouth() {
  const formId = useParamSelector(surveyParams.headJawMouth);
  return (
    <div className="container">
      <MapContainer followUp={true} map={head} />
      <EmbeddedForm formId={formId} />
    </div>
  );
}
