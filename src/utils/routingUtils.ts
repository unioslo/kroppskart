import { bodymapOrder, routingMap, mainPaths } from './constants';
import { allAnswersFalse } from './mapUtils';

// Get current page from router.pathname
export const getCurrentPage = (path: string) => {
  const splitPath = path.split('/');
  return splitPath[splitPath.length - 1];
};

export const getRelevantRoutes = (answers: Record<string, boolean>) => {
  const keys = Object.keys(answers).map((key) => routingMap[key]);
  const relevantRoutes = bodymapOrder.filter((v) => keys.includes(v));
  return relevantRoutes;
};

export const getBodymapRoutingOrder = (relevantRoutes: string[]) => [
  mainPaths.bodymap,
  ...relevantRoutes.map((route) => `${mainPaths.bodymap}/${route}`),
  relevantRoutes.length > 0 ? mainPaths.followup : mainPaths.done,
];

export const getFollowupRoutingOrder = (relevantRoutes: string[]) => [
  mainPaths.followup,
  ...relevantRoutes.map((route) => `${mainPaths.followup}/${route}`),
  mainPaths.done,
];

export const filterFollowUpPages = (
  allAnswers: Record<string, Record<string, boolean>>,
  relevantRoutes: string[]
) =>
  relevantRoutes.filter((route: string) => !allAnswersFalse(allAnswers[route]));

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

export const getNextPage = (relevantRoutes: string[], pathname: string) => {
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
