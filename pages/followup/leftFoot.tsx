import MapContainer from '../../src/components/bodyMaps/MapContainer';
import { leftFoot } from '../../src/components/bodyMaps/mapData';
import EmbeddedForm from '../../src/components/EmbeddedForm';
import { useParamSelector } from '../../src/store/selectors';

export default function LeftFoot() {
  const formId = useParamSelector('leftFoot');
  return (
    <div className="container">
      <MapContainer followUp={true} map={leftFoot} />
      <EmbeddedForm formId={formId} />
    </div>
  );
}
