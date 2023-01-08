import { letters, vowels, name1, name2, name3, word, prefix, lastname, suffix, title, weapon, place, verb } from './material/buildingBlocks';

export function generateName(sel) {
    var choice = sel;
    switch (choice) {
      case 1:
        return (
          name1[getRandomInt(0, name1.length)] + generateWord(getRandomInt(2, 5))
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