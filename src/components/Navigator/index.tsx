import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useFilteredBodyMapValues } from '../../store/selectors';
import { Button } from '../ui';

// const bodymapOrder = [
//   'headJawMouth',
//   'upperBody',
//   'back',
//   'abdomen',
//   'leftArm',
//   'rightArm',
//   'neck',
//   'rightFoot',
//   'leftFoot',
//   'genitals',
// ];

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

const mainPaths = { bodymap: '/bodymap', followup: '/followup' };

const useFindRelevantRoutes = () => {
  const bodyAnswers = useFilteredBodyMapValues('wholeBody') ?? {};
  const relevantRoutes = Object.keys(bodyAnswers).map((key) => routingMap[key]);
  return relevantRoutes;
};

const getBodymapRoutingOrder = (relevantRoutes: string[]) => [
  mainPaths.bodymap,
  ...relevantRoutes.map((route) => `${mainPaths.bodymap}/${route}`),
  mainPaths.followup,
];

const getCurrentPage = (path: string) => {
  const splitPath = path.split('/');
  return splitPath[splitPath.length - 1];
};

/* eslint-disable no-console */
const Navigator = () => {
  const router = useRouter();
  const { pathname } = router;
  let nextPage;
  const relevantRoutes = useFindRelevantRoutes();
  console.log('relevantRoutes', relevantRoutes);
  const bodymapRoutingOrder = getBodymapRoutingOrder(relevantRoutes);
  console.log('bodymapRoutingOrder', bodymapRoutingOrder);
  const currentPage = getCurrentPage(pathname);
  console.log('currentPage', currentPage);
  if (pathname === mainPaths.bodymap) {
    nextPage = bodymapRoutingOrder[1];
  } else if (pathname.startsWith(mainPaths.bodymap)) {
    const index = bodymapRoutingOrder.findIndex((v) => v.includes(currentPage));
    nextPage = bodymapRoutingOrder[index + 1];
  }
  console.log(nextPage, 'nextPage');
  return (
    <div>
      <Link href={nextPage ?? ''}>
        <Button type="nextPage">Neste</Button>
      </Link>
      <Button type="previousPage" onClick={() => router.back()}>
        Forrige
      </Button>
    </div>
  );
};
/* eslint-enable no-console */

export default Navigator;
