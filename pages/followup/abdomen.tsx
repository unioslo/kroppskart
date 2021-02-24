import MapContainer from '../../src/components/bodyMaps/MapContainer';
import { abdomen } from '../../src/components/bodyMaps/mapData';
import EmbeddedForm from '../../src/components/EmbeddedForm';
import { useParamSelector } from '../../src/store/selectors';
import { surveyParams } from '../../src/utils/constants';

export default function Abdomen() {
  const formId = useParamSelector(surveyParams.abdomen);
  return (
    <div className="container">
      <MapContainer followUp={true} map={abdomen} />
      <EmbeddedForm formId={formId} />
    </div>
  );
}
