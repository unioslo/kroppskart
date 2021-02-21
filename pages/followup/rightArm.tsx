import MapContainer from '../../src/components/bodyMaps/MapContainer';
import { rightArm } from '../../src/components/bodyMaps/mapData';
import EmbeddedForm from '../../src/components/EmbeddedForm';
import { usePossiblyGenderedParamSelector } from '../../src/store/selectors';

export default function RightArm() {
  const formId = usePossiblyGenderedParamSelector({
    maleParam: 'rightArmMale',
    femaleParam: 'rightArmFemale',
    generalParam: 'rightArm',
  }) as string;
  return (
    <div className="container">
      <MapContainer followUp={true} map={rightArm} />
      <EmbeddedForm formId={formId} />
    </div>
  );
}
