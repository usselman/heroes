import { getRandomInt } from './arbitraryFunctions.js';

export function alignment() {
    switch (getRandomInt(1, 10)) {
      case 1:
        return "True Neutral";
        break;
      case 2:
        return "Lawful Neutral";
        break;
      case 3:
        return "Neutral Good";
        break;
      case 4:
        return "Chaotic Good";
        break;
      case 5:
        return "Lawful Evil";
        break;
      case 6:
        return "Neutral Evil";
        break;
      case 7:
        return "Lawful Good";
        break;
      case 8:
        return "Chaotic Evil";
        break;
      case 9:
        return "Chaotic Neutral";
    }
  }