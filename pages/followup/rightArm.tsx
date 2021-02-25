import MapContainer from '../../src/components/bodyMaps/MapContainer';
import { rightArm } from '../../src/components/bodyMaps/mapData';
import EmbeddedForm from '../../src/components/EmbeddedForm';
import { usePossiblyGenderedParamSelector } from '../../src/store/selectors';
import { surveyParams } from '../../src/utils/constants';

export default function RightArm() {
  const formId = usePossiblyGenderedParamSelector(
    surveyParams.rightArm
  ) as string;
  return (
    <main className="container">
      <MapContainer followUp={true} map={rightArm} />
      <EmbeddedForm formId={formId} />
    </main>
  );
}
