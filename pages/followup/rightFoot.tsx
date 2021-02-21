import MapContainer from '../../src/components/bodyMaps/MapContainer';
import { rightFoot } from '../../src/components/bodyMaps/mapData';
import EmbeddedForm from '../../src/components/EmbeddedForm';
import { useParamSelector } from '../../src/store/selectors';

export default function RightFoot() {
  const formId = useParamSelector('rightFoot');
  return (
    <div className="container">
      <MapContainer followUp={true} map={rightFoot} />
      <EmbeddedForm formId={formId} />
    </div>
  );
}
