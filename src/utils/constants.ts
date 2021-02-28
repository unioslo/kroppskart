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

export const mainPaths = {
  bodymap: '/bodymap',
  followup: '/followup',
  done: '/done',
};

export const surveyParams = {
  abdomen: 'abdom',
  back: 'back',
  genitals: 'genit',
  head: 'head',
  leftArm: {
    female: 'leftArmFemale',
    male: 'leftArmMale',
    general: 'leftArm',
  },
  rightArm: {
    female: 'rightArmFemale',
    male: 'rightArmMale',
    general: 'rightArm',
  },
  leftLeg: 'leftLeg',
  rightLeg: 'leftLeg',
  neck: 'neck',
  chest: 'chest',
  followup: 'FollowUpSurvey',
  dataTarget: 'dataTarget',
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
