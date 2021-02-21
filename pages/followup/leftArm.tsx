import MapContainer from '../../src/components/bodyMaps/MapContainer';
import { leftArm } from '../../src/components/bodyMaps/mapData';
import EmbeddedForm from '../../src/components/EmbeddedForm';
import { usePossiblyGenderedParamSelector } from '../../src/store/selectors';

export default function LeftArm() {
  const formId = usePossiblyGenderedParamSelector({
    femaleParam: 'femaleLeftArm',
    maleParam: 'maleLeftArm',
    generalParam: 'leftArm',
  }) as string;
  return (
    <div className="container">
      <MapContainer followUp={true} map={leftArm} />
      <EmbeddedForm formId={formId} />
    </div>
  );
}
