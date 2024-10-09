//import { default as wholeBody } from './wholeBody';
import { default as head } from './headMap';
import { default as back } from './backMap';
import { default as leftArm } from './leftArmMap';
import { default as rightArm } from './rightArmMap';
import { default as neck } from './neckMap';
import { default as abdomen } from './abdomenMap';
import { default as leftLeg } from './leftLegMap';
import { default as rightLeg } from './rightLegMap';
import { default as genitalsMale } from './genitalsMaleMap';
import { default as genitalsFemale } from './genitalsFemaleMap';
import { default as chestFemale } from './chestFemaleMap';
import { default as chestMale } from './chestMaleMap';

export const chest = { male: chestMale, female: chestFemale };
export const genitals = { male: genitalsMale, female: genitalsFemale };

const mapInfo = {
  head,
  back,
  leftArm,
  rightArm,
  neck,
  abdomen,
  rightLeg,
  leftLeg,
  chest,
  genitals,
};

export default mapInfo;
