import { Alert } from '../ui';

export const MessageBoxWholeBody = () => (
  <Alert>
    <p>
      Klikk på alle områder hvor du har hatt smerte i løpet av de siste 4 ukene.
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
      Har du ikke hatt smerte de siste 4 ukene, går du videre til neste side.
    </p>
  </Alert>
);

export const MessageBoxBodyMap = () => (
  <Alert>
    <p>
      Klikk på alle områder hvor du har hatt smerte i løpet av de siste 4 ukene.
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
    <p></p>
  </Alert>
);

export const MessageBoxIntro = () => (
  <>
    <Alert>
      <p>På de neste sidene spør vi om smerter du har hatt de siste 4 ukene.</p>
      <p>
        Ta med alle typer smerter, både overfladiske og dype (i brystet, munnen,
        magen, huden, muskler og ledd, kjønnsorganer, urinveier, med flere).
      </p>
      <p>Ikke ta med forbigående, kortvarige smerter.</p>
      <p>Kvinner skal ikke ta med menstruasjonssmerter her.</p>
    </Alert>
    <Alert>
      <p>Har du kvinnekropp eller mannekropp? (Trykk for å velge)</p>
    </Alert>
  </>
);

export const FollowUpIntro = () => (
  <Alert>
    <p>
      Du vil nå få noen oppfølgingsspørsmål om de kroppsområdene du har markert.
    </p>
  </Alert>
);

export const MessageBoxDelivering = () => (
  <Alert type="warning">
    <p>
      Leverer data. Dette skal normalt bare ta noen få sekunder. Vennligst ikke
      lukk nettleseren mens leveringen pågår.
    </p>
  </Alert>
);

export const MessageBoxPointOfNoReturn = () => (
  <Alert>
    <p>Din besvarelse leveres når du går til neste side.</p>
  </Alert>
);
