import MapContainer from '../../src/components/bodyMaps/MapContainer';
import wholeBody from '../../src/components/bodyMaps/mapData/wholeBody';
import { FollowUpIntro } from '../../src/components/messageBoxes';
import { useGetNextPage } from '../../src/components/Navigator';
import { NavigationButtons } from '../../src/components/ui';

const Survey = () => {
  const nextPage = useGetNextPage('followup');
  return (
    <main className="container flex">
      <MapContainer followUp={true} map={wholeBody} />
      <FollowUpIntro />
      <NavigationButtons nextPage={nextPage} />
    </main>
  );
};

export default Survey;
