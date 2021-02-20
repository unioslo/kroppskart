import Introduction from '../src/components/surveyPages/Introduction';
import useUrlParameters from '../src/utils/urlParameters';

export const Home = (): JSX.Element => {
  useUrlParameters();
  return (
    <div className="container">
      <Introduction />
    </div>
  );
};

export default Home;
