import React from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import { useGetBodyMap } from '../../store/selectors';
import { NavigationButtons } from '../ui';
import { redundantBodyMapKeys } from '../../utils/constants';
import { rootState } from '../../store/store';
import { allAnswersFalse } from '../../utils/mapUtils';
import { EmptyBodyMapModal, EmptySubmapModal, ResetStateModal } from '../Modal';
import { openModal } from '../../store/appStateReducer';
import {
  getCurrentPage,
  getNextPage,
  getRelevantRoutes,
  filterFollowUpPages,
} from '../../utils/routingUtils';

const useFilteredBodyMapValues = (mapName: string) => {
  const map = useGetBodyMap(mapName) ?? {};
  const redundantKeys = redundantBodyMapKeys[mapName];

  let filteredMap = map;

  if (map && redundantKeys && process?.browser) {
    const filteredEntries = Object.entries(map).filter(
      ([key, value]) => !redundantKeys.includes(key) && value
    );
    filteredMap = Object.fromEntries(filteredEntries);
  }

  return filteredMap;
};

export const useGetNextPage = (section: string, mapName?: string) => {
  const router = useRouter();
  const wholeBodyAnswers = useFilteredBodyMapValues('wholeBody');
  const urlParameters = useSelector(
    (state: rootState) => state.app.urlParameters
  );
  const doneFollowups =
    useSelector((state: rootState) => state.app.followUpDone) ?? {};
  const allAnswers = useSelector((state: rootState) => state.body);
  let relevantRoutes = getRelevantRoutes(wholeBodyAnswers);
  if (section === 'followup') {
    // TODO Filter missing URL param followup
    relevantRoutes = filterFollowUpPages(
      allAnswers,
      relevantRoutes,
      urlParameters
    ).filter((w) => doneFollowups[w] !== true);
  }
  const nextPage = getNextPage(relevantRoutes, router.pathname, mapName);
  return { nextPage, relevantRoutes };
};

/* eslint-disable no-console */
// Render navigation buttons and Modal containers for bodymaps
const Navigator = React.memo(
  ({
    section = 'bodymap',
    mapName,
  }: {
    mapName?: string;
    section?: 'start' | 'bodymap' | 'followup' | 'end';
  }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const currentPage = mapName ?? getCurrentPage(router.pathname);
    const bodyMapForPage = useSelector(
      (state: rootState) =>
        state.body[currentPage !== 'bodymap' ? currentPage : 'wholeBody']
    );
    const { nextPage } = useGetNextPage(section, mapName);

    if (currentPage === 'bodymap') {
      const onNext = () =>
        allAnswersFalse(bodyMapForPage)
          ? dispatch(openModal('emptyBodyModal'))
          : router.push(nextPage);
      const onBack = () => dispatch(openModal('resetState'));
      return (
        <>
          <NavigationButtons
            nextPage={nextPage}
            onNext={onNext}
            onBack={onBack}
          />
          <EmptyBodyMapModal />
          <ResetStateModal />
        </>
      );
    }
    const onNext = () =>
      allAnswersFalse(bodyMapForPage)
        ? dispatch(openModal('emptySubmap'))
        : router.push(nextPage);

    return (
      <>
        <NavigationButtons onNext={onNext} />
        <EmptySubmapModal nextPage={nextPage} />
      </>
    );
  }
);
/* eslint-enable no-console */

export default Navigator;
