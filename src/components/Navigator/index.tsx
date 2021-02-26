import React from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import { useGetBodyMap } from '../../store/selectors';
import { NavigationButtons } from '../ui';
import {
  redundantBodyMapKeys,
  bodymapOrder,
  routingMap,
} from '../../utils/constants';
import { rootState } from '../../store/store';
import { allAnswersFalse } from '../../utils/mapUtils';
import { EmptyBodyMapModal, EmptySubmapModal, ResetStateModal } from '../Modal';
import { openModal } from '../../store/appStateReducer';

const mainPaths = { bodymap: '/bodymap', followup: '/followup', done: '/done' };

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

const getRelevantRoutes = (answers: Record<string, boolean>) => {
  const keys = Object.keys(answers).map((key) => routingMap[key]);
  const relevantRoutes = bodymapOrder.filter((v) => keys.includes(v));
  return relevantRoutes;
};

const getBodymapRoutingOrder = (relevantRoutes: string[]) => [
  mainPaths.bodymap,
  ...relevantRoutes.map((route) => `${mainPaths.bodymap}/${route}`),
  relevantRoutes.length > 0 ? mainPaths.followup : mainPaths.done,
];

const getFollowupRoutingOrder = (relevantRoutes: string[]) => [
  mainPaths.followup,
  ...relevantRoutes.map((route) => `${mainPaths.followup}/${route}`),
  mainPaths.done,
];

const getCurrentPage = (path: string) => {
  const splitPath = path.split('/');
  return splitPath[splitPath.length - 1];
};

const getNextPageFromRouting = (
  pathname: string,
  currentPage: string,
  routingOrder: string[]
) => {
  if (pathname === routingOrder[0]) {
    return routingOrder[1];
  } else {
    const index = routingOrder.findIndex((v) => v.includes(currentPage));
    return routingOrder[index + 1];
  }
};

const getNextPage = (relevantRoutes: string[], pathname: string) => {
  let routingOrder: string[];
  if (pathname === '/') {
    return '/bodymap';
  }
  if (pathname.includes(mainPaths.bodymap)) {
    routingOrder = getBodymapRoutingOrder(relevantRoutes);
  } else {
    routingOrder = getFollowupRoutingOrder(relevantRoutes);
  }
  const currentPage = getCurrentPage(pathname);
  return getNextPageFromRouting(pathname, currentPage, routingOrder);
};

export const useGetNextPage = (section: string) => {
  const router = useRouter();
  const wholeBodyAnswers = useFilteredBodyMapValues('wholeBody');
  const allAnswers = useSelector((state: rootState) => state.body);
  let relevantRoutes = getRelevantRoutes(wholeBodyAnswers);
  if (section === 'followup') {
    // TODO Filter missing URL param followup
    relevantRoutes = filterFollowUpPages(allAnswers, relevantRoutes);
  }
  const nextPage = getNextPage(relevantRoutes, router.pathname);
  return nextPage;
};

const filterFollowUpPages = (
  allAnswers: Record<string, Record<string, boolean>>,
  relevantRoutes: string[]
) =>
  relevantRoutes.filter((route: string) => !allAnswersFalse(allAnswers[route]));

/* eslint-disable no-console */
const Navigator = React.memo(
  ({
    section = 'bodymap',
  }: {
    section?: 'start' | 'bodymap' | 'followup' | 'end';
  }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const currentPage = getCurrentPage(router.pathname);
    const bodyMapForPage = useSelector(
      (state: rootState) =>
        state.body[currentPage !== 'bodymap' ? currentPage : 'wholeBody']
    );
    const nextPage = useGetNextPage(section);
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
