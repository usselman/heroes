export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
  // The maximum is exclusive and the minimum is inclusive
}

// export function diceRoll() {
//     return getRandomInt(0, 6);
//   } 

export let diceRoll = () => getRandomInt(0, 6);
