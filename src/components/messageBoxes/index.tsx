import { Trans } from '@lingui/macro';
import { Alert } from '../ui';

export const MessageBoxWholeBody = () => (
  <Alert>
    <p>
      <Trans>
        Klikk på alle områder hvor du har hatt smerte i løpet av de siste 4
        ukene.
      </Trans>
    </p>
    <p>
      <Trans>
        Hvis du bare har hatt smerter i en del av et område skal du likevel
        markere hele området.
      </Trans>
    </p>
    <p>
      <Trans>
        Du skal angi hvor du har hatt smerte, ikke hvor du tror årsaken til
        smerten ligger.
      </Trans>
    </p>
    <p>
      <Trans>Du kan fjerne merking ved å klikke en gang til på området.</Trans>
    </p>
    <p>
      <Trans>
        Har du ikke hatt smerte de siste 4 ukene, går du videre til neste side.
      </Trans>
    </p>
  </Alert>
);

export const MessageBoxBodyMap = () => (
  <Alert>
    <p>
      <Trans>
        Klikk på alle områder hvor du har hatt smerte i løpet av de siste 4
        ukene.
      </Trans>
    </p>
    <p>
      <Trans>
        Hvis du bare har hatt smerter i en del av et område skal du likevel
        markere hele området.
      </Trans>
    </p>
    <p>
      <Trans>
        Du skal angi hvor du har hatt smerte, ikke hvor du tror årsaken til
        smerten ligger.
      </Trans>
    </p>
    <p>
      <Trans>Du kan fjerne merking ved å klikke en gang til på området.</Trans>
    </p>
    <p></p>
  </Alert>
);

export const MessageBoxIntro = () => (
  <>
    <Alert>
      <p>
        <Trans>
          På de neste sidene spør vi om smerter du har hatt de siste 4 ukene.
        </Trans>
      </p>
      <p>
        <Trans>
          Ta med alle typer smerter, både overfladiske og dype (i brystet,
          munnen, magen, huden, muskler og ledd, kjønnsorganer, urinveier, med
          flere).
        </Trans>
      </p>
      <p>
        <Trans>Ikke ta med forbigående, kortvarige smerter.</Trans>
      </p>
      <p>
        <Trans>Kvinner skal ikke ta med menstruasjonssmerter her.</Trans>
      </p>
    </Alert>
    <Alert>
      <p>
        <Trans>Har du kvinnekropp eller mannekropp? (Trykk for å velge)</Trans>
      </p>
    </Alert>
  </>
);

export const FollowUpIntro = () => (
  <Alert>
    <p>
      <Trans>
        Du vil nå få noen oppfølgingsspørsmål om de kroppsområdene du har
        markert.
      </Trans>
    </p>
  </Alert>
);

export const MessageBoxDelivering = () => (
  <Alert type="warning">
    <p>
      <Trans>
        Leverer data. Dette skal normalt bare ta noen få sekunder. Vennligst
        ikke lukk nettleseren mens leveringen pågår.
      </Trans>
    </p>
  </Alert>
);

export const MessageBoxPointOfNoReturn = () => (
  <Alert>
    <p>
      <Trans>Din besvarelse leveres når du går til neste side.</Trans>
    </p>
  </Alert>
);
