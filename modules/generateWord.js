import { getRandomInt } from './arbitraryFunctions.js';
import { letters, vowels, word } from './material/buildingBlocks.js';

export function generateWord(len) {
  length = getRandomInt(4, len);

  for (let i = 0; i < length; i++) {
    word[i] = letters[getRandomInt(0, letters.length)];
    if (i % 2) {
      word[i] = vowels[getRandomInt(0, vowels.length)];
    }
  }
  ////console.log(word);
  let final = word.join("");
  word.length = 0;
  return final;
}