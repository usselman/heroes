import { letters, vowels, name1, name2, name3, word, prefixes, LAST_NAMES, SUFFIXES, TITLES, weapon, PLACES, verb } from './material/buildingBlocks.js';
import { generateWord } from './generateWord.js';
import { getRandomInt } from './arbitraryFunctions.js';

export function generateName(sel) {
  var choice = sel;
  switch (choice) {
    case 1:
      return (
        name1[getRandomInt(0, name1.length)] + vowels[getRandomInt(0, vowels.length)] + generateWord(getRandomInt(2, 5))
      );
      break;
    case 2:
      return (
        name1[getRandomInt(0, name1.length)] +
        name2[getRandomInt(0, name2.length)]
      );
      break;
    case 3:
      return (
        name1[getRandomInt(0, name1.length)] +
        name2[getRandomInt(0, name2.length / 2)] +
        name3[getRandomInt(0, name3.length / 2)]
      );
      break;
    case 4:
      return (
        name1[getRandomInt(0, name1.length)] +
        name2[getRandomInt(0, name2.length / 2)] +
        name3[getRandomInt(0, name3.length / 2)] +
        name2[getRandomInt(0, name2.length / 4)]
      );
      break;
    case 5:
      return (
        name1[getRandomInt(0, name1.length)] +
        name2[getRandomInt(0, name2.length / 2)] +
        name3[getRandomInt(0, name3.length / 4)] +
        name3[getRandomInt(0, name3.length)]
      );
      break;
  }
}