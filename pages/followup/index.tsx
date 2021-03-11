import MapContainer from '../../src/components/MapContainer';
import wholeBody from '../../src/components/MapContainer/mapData/wholeBody';
import {
  FollowUpIntro,
  MessageBoxPointOfNoReturn,
} from '../../src/components/messageBoxes';
import { useGetNextPage } from '../../src/components/Navigator';
import { NavigationButtons } from '../../src/components/ui';

const Survey = () => {
  const { nextPage, relevantRoutes } = useGetNextPage('followup');
  return (
    <main className="container flex">
      <MapContainer followUp={true} map={wholeBody} />
      {relevantRoutes.length > 2 ? (
        <FollowUpIntro />
      ) : (
        <MessageBoxPointOfNoReturn />
      )}
      <NavigationButtons nextPage={nextPage} />
    </main>
  );
};

export default Survey;
