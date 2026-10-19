/**
 * All the family maps, joined into the two tables the rest of the code uses, keyed "<family number>:<English
 * name of the subtopic>".
 */
import { F01 } from './f01.ts';
import { F02 } from './f02.ts';
import { F03 } from './f03.ts';
import { F04 } from './f04.ts';
import { F05 } from './f05.ts';
import { F06 } from './f06.ts';
import { F07 } from './f07.ts';
import { F08 } from './f08.ts';
import { F09 } from './f09.ts';
import { F10 } from './f10.ts';
import { F11 } from './f11.ts';
import { F12 } from './f12.ts';
import { F13 } from './f13.ts';
import { F14 } from './f14.ts';
import { F15 } from './f15.ts';
import { F16 } from './f16.ts';
import { F17 } from './f17.ts';
import { F18 } from './f18.ts';
import { F19 } from './f19.ts';
import { F20 } from './f20.ts';
import { F21 } from './f21.ts';
import { F22 } from './f22.ts';
import { F23 } from './f23.ts';
import { F24 } from './f24.ts';
import { F25 } from './f25.ts';
import { F26 } from './f26.ts';
import { F27 } from './f27.ts';
import { F28 } from './f28.ts';
import { F29 } from './f29.ts';
import { F30 } from './f30.ts';
import { F31 } from './f31.ts';
import { F32 } from './f32.ts';
import { F33 } from './f33.ts';
import { F34 } from './f34.ts';
import { F35 } from './f35.ts';
import { F36 } from './f36.ts';
import { F37 } from './f37.ts';
import { F38 } from './f38.ts';
import { F39 } from './f39.ts';
import { F40 } from './f40.ts';
import { F41 } from './f41.ts';
import { F42 } from './f42.ts';
import { F43 } from './f43.ts';
import { F44 } from './f44.ts';
import type { FamilyMap } from './types.ts';

export const FAMILY_MAPS: Readonly<Record<string, FamilyMap>> = {
  '1': F01,
  '2': F02,
  '3': F03,
  '4': F04,
  '5': F05,
  '6': F06,
  '7': F07,
  '8': F08,
  '9': F09,
  '10': F10,
  '11': F11,
  '12': F12,
  '13': F13,
  '14': F14,
  '15': F15,
  '16': F16,
  '17': F17,
  '18': F18,
  '19': F19,
  '20': F20,
  '21': F21,
  '22': F22,
  '23': F23,
  '24': F24,
  '25': F25,
  '26': F26,
  '27': F27,
  '28': F28,
  '29': F29,
  '30': F30,
  '31': F31,
  '32': F32,
  '33': F33,
  '34': F34,
  '35': F35,
  '36': F36,
  '37': F37,
  '38': F38,
  '39': F39,
  '40': F40,
  '41': F41,
  '42': F42,
  '43': F43,
  '44': F44,
};

const join = (pick: (map: FamilyMap) => Readonly<Record<string, string>>): Readonly<Record<string, string>> =>
  Object.fromEntries(Object.entries(FAMILY_MAPS).flatMap(([family, map]) => Object.entries(pick(map)).map(([name, value]) => [`${family}:${name}`, value] as const)));

export const NAVE_MAP = join((map) => map.nave);
export const MAP_PASSAGES = join((map) => map.passages);
