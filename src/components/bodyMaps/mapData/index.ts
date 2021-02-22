import { default as wholeBody } from './wholeBody';
import { default as head } from './headMap';
import { default as back } from './backMap';
import { default as leftArm } from './leftArmMap';
import { default as rightArm } from './rightArmMap';
import { default as neck } from './neckMap';
import { default as abdomen } from './abdomenMap';
import { default as leftFoot } from './leftFootMap';
import { default as rightFoot } from './rightFootMap';
import { default as genitalsMale } from './genitalsMaleMap';
import { default as genitalsFemale } from './genitalsFemaleMap';
import { default as upperBodyFemale } from './upperBodyFemaleMap';
import { default as upperBodyMale } from './upperBodyMaleMap';

const upperBody = { male: upperBodyMale, female: upperBodyFemale };
const genitals = { male: genitalsMale, female: genitalsFemale };

export {
  wholeBody,
  head,
  back,
  leftArm,
  rightArm,
  neck,
  abdomen,
  rightFoot,
  leftFoot,
  upperBody,
  genitals,
};
