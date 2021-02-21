import WholeBodyMap from '../../src/components/bodyMaps/WholeBodyMap';
import { MessageBoxWholeBody } from '../../src/components/messageBoxes';

const Survey = () => {
  return (
    <div className="container flex">
      <MessageBoxWholeBody />
      <WholeBodyMap />
    </div>
  );
};

export default Survey;
