import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import cn from 'classnames';

import { rootState } from '../../store/store';
import { Alert, Button } from '../ui';
import { closeModal } from '../../store/appStateReducer';

import style from './modal.module.scss';
import { useRouter } from 'next/router';

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
        <p>Du har oppgitt at du ikke har hatt smerte i områdene på bildet.</p>
        <p>Stemmer dette?</p>
      </Alert>
      <Button
        type="modalAnswer"
        onClick={() => {
          close();
          onAccept();
        }}
      >
        Det stemmer, jeg har ikke hatt smerter i noen av områdene
      </Button>
      <Button type="modalAnswer" onClick={close}>
        Nei, jeg vil gå tilbake og markere i bildet
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
          Du har oppgitt at du ikke har hatt smerter de siste 4 ukene. Stemmer
          dette?
        </p>
      </Alert>
      <Button
        type="modalAnswer"
        onClick={() => {
          close();
          onNoPain();
        }}
      >
        Det stemmer, jeg har ikke hatt smerter
      </Button>
      <Button type="modalAnswer" onClick={close}>
        Nei, ta meg tilbake til bildet
      </Button>
      <Button
        type="modalAnswer"
        onClick={() => {
          close();
          onIgnore();
        }}
      >
        Jeg ønsker ikke å svare på spørsmål om smerter
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
        <p>Å gå tilbake herfra vil fjerne alle markeringer du har gjort.</p>
      </Alert>
      <div>
        <Button
          type="whiteButton"
          onClick={() => {
            close();
            onAccept();
          }}
        >
          Ok
        </Button>
        <Button type="whiteButton" onClick={close}>
          Avbryt
        </Button>
      </div>
    </Modal>
  );
};
