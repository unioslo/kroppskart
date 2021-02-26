import React from 'react';
import { useRouter } from 'next/router';

import { useGetBodyMap } from '../../store/selectors';
import { NavigationButtons } from '../ui';
import { redundantBodyMapKeys } from '../../utils/constants';
import { useSelector } from 'react-redux';
import { rootState } from '../../store/store';

const bodymapOrder = [
  'headJawMouth',
  'upperBody',
  'back',
  'abdomen',
  'leftArm',
  'rightArm',
  'neck',
  'rightFoot',
  'leftFoot',
  'genitals',
];

const routingMap = {
  'left-arm': 'leftArm',
  'right-arm': 'rightArm',
  abdomen: 'abdomen',
  neck: 'neck',
  head: 'headJawMouth',
  back: 'back',
  'right-leg': 'rightFoot',
  'left-leg': 'leftFoot',
  chest: 'upperBody',
  genitals: 'genitals',
};

//const followUpOrder = ['intro', ...bodymapOrder];

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
  mainPaths.followup,
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

const allAnswersFalse = (map: Record<string, boolean>) => {
  for (const val of Object.values(map)) {
    if (val === true) {
      return false;
    }
  }
  return true;
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
    onBack,
  }: {
    section?: 'start' | 'bodymap' | 'followup' | 'end';
    onBack?: () => void;
  }) => {
    const router = useRouter();
    const nextPage = useGetNextPage(section);
    return (
      <NavigationButtons
        nextPage={nextPage}
        onBack={() => {
          onBack?.();
          router.back();
        }}
      />
    );
  }
);
/* eslint-enable no-console */

export default Navigator;
