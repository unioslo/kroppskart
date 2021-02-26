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
  headJawMouth: ['lips2'],
};

export const surveyParams = {
  abdomen: 'abdom',
  back: 'back',
  genitals: 'genit',
  headJawMouth: 'head',
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
  leftFoot: 'leftFoot',
  rightFoot: 'leftFoot',
  neck: 'neck',
  upperBody: 'chest',
  followup: 'FollowUpSurvey',
  dataTarget: 'dataTarget',
};

export const bodymapOrder = [
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

export const routingMap = {
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
