import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import cn from 'classnames';

import { rootState } from '../../store/store';
import { Alert, Button } from '../ui';
import { closeModal } from '../../store/appStateReducer';

import style from './modal.module.scss';
import { useRouter } from 'next/router';
import { Trans } from '@lingui/macro';

Modal.setAppElement('#__next');

export const EmptySubmapModal = ({ nextPage }: { nextPage: string }) => {
  const isOpen = useSelector(
    (state: rootState) => state.app.openModal === 'emptySubmap'
  );
  const router = useRouter();
  const dispatch = useDispatch();
  const close = () => dispatch(closeModal());
  const onAccept = () => router.push(nextPage);
  return (
    <Modal
      isOpen={isOpen}
      className={cn(style.modalContainer, style.wholeBodyModal)}
      overlayClassName={cn(style.modalOverlay, style.overlayDefault)}
    >
      <Alert type="warning">
        <p>
          <Trans>
            Du har oppgitt at du ikke har hatt smerte i områdene på bildet.
          </Trans>
        </p>
        <p>
          <Trans>Stemmer dette?</Trans>
        </p>
      </Alert>
      <Button
        type="modalAnswer"
        onClick={() => {
          close();
          onAccept();
        }}
      >
        <Trans>Det stemmer, jeg har ikke hatt smerter i noen av områdene</Trans>
      </Button>
      <Button type="modalAnswer" onClick={close}>
        <Trans>Nei, jeg vil gå tilbake og markere i bildet</Trans>
      </Button>
    </Modal>
  );
};

export const EmptyBodyMapModal = () => {
  const isOpen = useSelector(
    (state: rootState) => state.app.openModal === 'emptyBodyModal'
  );
  const router = useRouter();
  const dispatch = useDispatch();
  const close = () => dispatch(closeModal());

  const onIgnore = () => router.push('/done');
  const onNoPain = () => router.push('/done');

  return (
    <Modal
      isOpen={isOpen}
      className={cn(style.modalContainer, style.wholeBodyModal)}
      overlayClassName={cn(style.modalOverlay, style.overlayDefault)}
    >
      <Alert type="warning">
        <p>
          <Trans>
            Du har oppgitt at du ikke har hatt smerter de siste 4 ukene. Stemmer
            dette?
          </Trans>
        </p>
      </Alert>
      <Button
        type="modalAnswer"
        onClick={() => {
          close();
          onNoPain();
        }}
      >
        <Trans>Det stemmer, jeg har ikke hatt smerter</Trans>
      </Button>
      <Button type="modalAnswer" onClick={close}>
        <Trans>Nei, ta meg tilbake til bildet</Trans>
      </Button>
      <Button
        type="modalAnswer"
        onClick={() => {
          close();
          onIgnore();
        }}
      >
        <Trans>Jeg ønsker ikke å svare på spørsmål om smerter</Trans>
      </Button>
    </Modal>
  );
};

export const ResetStateModal = () => {
  const isOpen = useSelector(
    (state: rootState) => state.app.openModal === 'resetState'
  );
  const router = useRouter();
  const dispatch = useDispatch();
  const close = () => dispatch(closeModal());

  const onAccept = () => router.back();

  return (
    <Modal
      isOpen={isOpen}
      className={style.modalContainer}
      preventScroll={true}
      overlayClassName={cn(style.modalOverlay, style.overlayDefault)}
    >
      <Alert type="warning">
        <p>
          <Trans>
            Å gå tilbake herfra vil fjerne alle markeringer du har gjort.
          </Trans>
        </p>
      </Alert>
      <div>
        <Button
          type="whiteButton"
          onClick={() => {
            close();
            onAccept();
          }}
        >
          <Trans>Ok</Trans>
        </Button>
        <Button type="whiteButton" onClick={close}>
          <Trans>Avbryt</Trans>
        </Button>
      </div>
    </Modal>
  );
};
