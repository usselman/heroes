export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
  // The maximum is exclusive and the minimum is inclusive
}

export function capitalizeFirstLetter(element, index, array) {
  array[index] = element[0].toUpperCase() + element.substring(1);
}

export let diceRoll = () => getRandomInt(0, 6);
