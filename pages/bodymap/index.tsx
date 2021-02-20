import WholeBodyMap from '../../src/components/bodyMaps/WholeBodyMap';
import { Alert } from '../../src/components/ui';

const Survey = () => {
  return (
    <div className="container flex">
      <Alert>
        <p>
          Klikk på alle områder hvor du har hatt smerte i løpet av de siste 4
          ukene.
        </p>

        <p>
          Hvis du bare har hatt smerter i en del av et område skal du likevel
          markere hele området.
        </p>

        <p>
          Du skal angi hvor du har hatt smerte, ikke hvor du tror årsaken til
          smerten ligger.
        </p>

        <p>Du kan fjerne merking ved å klikke en gang til på området.</p>

        <p>
          Har du ikke hatt smerte de siste 4 ukene, går du videre til neste
          side.
        </p>
      </Alert>
      <WholeBodyMap />
    </div>
  );
};

export default Survey;
