export const redundantBodyMapKeys = {
  wholeBody: [
    'left-leg-back',
    'right-leg-back',
    'left-arm-back',
    'right-arm-back',
    'head-back',
  ],
  genitals: ['vulva-1', 'vulva-2', 'urethra-2', 'vagina-right'],
  leftLeg: [
    'left-shin-left-back',
    'left-shin-right-back',
    'left-thigh-back-left',
    'left-thigh-back-right',
  ],
  rightLeg: [
    'right-thigh-back-left',
    'right-thigh-back-right',
    'right-shin-left-back',
    'right-shin-right-back',
  ],
  head: ['lips2'],
};

export const lowerBackKeys = [
  'bottom-end',
  'right-lower-back',
  'left-lower-back',
  'mid-lower-back',
];

export const mainPaths = {
  bodymap: '/bodymap',
  followup: '/followup',
  done: '/done',
};

export const surveyParams = {
  abdomen: 'abdom',
  back: 'back',
  lowerBack: 'lowerBack',
  genitals: 'genit',
  head: 'head',
  leftArm: 'leftArm',
  rightArm: 'rightArm',
  leftLeg: 'leftLeg',
  rightLeg: 'leftLeg',
  neck: 'neck',
  chest: 'chest',
  followup: 'FollowUpSurvey',
  dataTarget: 'dataTarget',
  submissionId: 'submissionId',
} as const;

type ValueOf<T> = T[keyof T];
export type SurveyParams = {
  [Param in ValueOf<typeof surveyParams>]?: string | string[];
};

export const bodymapOrder = [
  'head',
  'chest',
  'back',
  'abdomen',
  'leftArm',
  'rightArm',
  'neck',
  'rightLeg',
  'leftLeg',
  'genitals',
];

export const routingMap = {
  'left-arm': 'leftArm',
  'right-arm': 'rightArm',
  abdomen: 'abdomen',
  neck: 'neck',
  head: 'head',
  back: 'back',
  'right-leg': 'rightLeg',
  'left-leg': 'leftLeg',
  chest: 'chest',
  genitals: 'genitals',
};
