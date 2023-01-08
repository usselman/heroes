import { getRandomInt } from './arbitraryFunctions.js';
import { word, letters, vowels } from './material/buildingBlocks.js';

export function generateWord(len) {
    length = getRandomInt(3, len);
  
    for (let i = 0; i < length; i++) {
      word[i] = letters[getRandomInt(0, letters.length)];
      if (i % 2) {
        word[i] = vowels[getRandomInt(0, vowels.length)];
      }
    }
    //console.log(word);
    let final = word.join("");
    word.length = 0;
    return final;
  }