import { armyA, armyB, kings, prefixes, LAST_NAMES, SUFFIXES, TITLES, weapon, PLACES, verb } from './material/buildingBlocks.js';
import { getRandomInt } from './arbitraryFunctions.js';
import { generateName } from './generateName.js';
import { generateWord } from './generateWord.js';

let length;
let thing;
const ARMY_SIZE = 42;
const AMOUNT_KINGS = 10;
var armyAkilled = 0;
var armyBkilled = 0;

let CHARACTERS = [];
let LEADERS = [];

/*

 What we want is a main player character fighting an endless list of enemies.
 The enemies will be generated randomly, and the player will have to fight them.
 The player and enemies will all have the same parameters.
 Player death creates a new character. 

*/

class Character {

  prefix;
  name;
  lastName;
  title;
  fullName;
  childOf;
  weapon;
  HP;
  VIT;
  STR;
  DEX;
  prestige;
  birthplace;
  faction;
  status;
  alive;
  traits;
  items;
  relationships;
  eventLog;

  constructor(
    prefix,
    name,
    lastName,
    title,
    fullName,
    childOf,
    weapon,
    HP,
    VIT,
    STR,
    DEX,
    prestige,
    birthplace,
    faction,
    status,
    alive,
    traits,
    items,
    relationships,
    eventLog
  ) {
    this.prefix = prefix;
    this.name = name;
    this.lastName = lastName;
    this.title = title;
    this.fullName = `${prefix} ${name} ${lastName} ${title}`;
    this.childOf = [];
    this.weapon = weapon;
    this.HP = VIT * 10;
    this.VIT = VIT;
    this.STR = STR;
    this.DEX = DEX;
    this.prestige = prestige;
    this.birthplace = `Kingdom of ${LEADERS[getRandomInt(0, LEADERS.length)].kingdom}`;
    this.faction = `House ${LEADERS[getRandomInt(0, LEADERS.length)].dynasty}`;
    this.status = status;
    this.alive = alive;

    this.traits = traits;
    this.items = items;
    this.relationships = relationships;
    this.eventLog = eventLog;
  }
  whoAmI() {
    return `I am ${this.fullName} of ${this.faction}
      and I am from the ${this.birthplace}.
      I have ${this.prestige} prestige in ${this.faction}.`;
  }
  attack(target) {
    const hitRoll = getRandomInt(1, 21); // 1d20 roll to hit
    const damageRoll = getRandomInt(1, this.STR + 1); // 1d(STR+1) roll for damage

    if (hitRoll >= target.DEX) { // the attack hits if the hit roll is greater than or equal to the target's DEX score
      target.HP -= damageRoll; // apply damage to target
      this.eventLog.push(`${this.fullName} hits ${target.fullName} for ${damageRoll} damage.`);
      if (target.HP <= 0) { // target dies if their HP falls to or below 0
        target.alive = false;
        this.eventLog.push(`${target.fullName} has been defeated!`);
        return true; // return true to indicate that the target has been defeated
      }
      else {
        return false; // return false to indicate that the attack hit but the target is still alive
      }
    }
    else { // the attack misses if the hit roll is less than the target's DEX score
      this.eventLog.push(`${this.fullName} misses ${target.fullName}!`);
      return false; // return false to indicate that the attack missed
    }
  }
}

class Leader {
  constructor(name, dynasty, title, fullName, kingdom) {
    this.name = name;
    this.dynasty = dynasty;
    this.title = title;
    this.fullName = `${name} of House ${dynasty}`;
    this.kingdom = kingdom;
  }

  deleteAKing() {

  }

  whoAmI() {
    return `-
    ${this.fullName} ${this.title}
     Kingdom of: ${this.kingdom} 
     House of: ${this.dynasty} 
    - `;
  };

  toJSON() {
    return JSON.stringify(this);
  }
}

class PlayerCharacter extends Character {
  level;
  equipment;

  constructor(
    prefix,
    name,
    lastName,
    title,
    fullName,
    childOf,
    weapon,
    HP,
    VIT,
    STR,
    DEX,
    prestige,
    birthplace,
    faction,
    status,
    alive,
    traits,
    items,
    relationships,
    eventLog,
    level,
    equipment
  ) {
    super(
      prefix,
      name,
      lastName,
      title,
      fullName,
      childOf,
      weapon,
      HP,
      VIT,
      STR,
      DEX,
      prestige,
      birthplace,
      faction,
      status,
      alive,
      traits,
      items,
      relationships,
      eventLog
    );
    this.level = level;
    this.equipment = equipment;
  }

}

class EnemyCharacter extends Character {
  level;
  equipment;

  constructor(
    prefix,
    name,
    lastName,
    title,
    fullName,
    childOf,
    weapon,
    HP,
    VIT,
    STR,
    DEX,
    prestige,
    birthplace,
    faction,
    status,
    alive,
    traits,
    items,
    relationships,
    eventLog,
    level,
    equipment
  ) {
    super(
      prefix,
      name,
      lastName,
      title,
      fullName,
      childOf,
      weapon,
      HP,
      VIT,
      STR,
      DEX,
      prestige,
      birthplace,
      faction,
      status,
      alive,
      traits,
      items,
      relationships,
      eventLog
    );
    this.level = level;
    this.equipment = equipment;
  }
}

/*
********** KING GENERATION **********
1. From the generated kings come the seeds of all characters.
  - Kings need to define dynasties
  - Kings need to define royal houses
  - Kings need to set the roots of prestige

*/

export function createAKing() {

  let leader = new Leader(
    `${generateName(getRandomInt(1, 6))} ${SUFFIXES[getRandomInt(0, SUFFIXES.length)]}`, //name
    `${LAST_NAMES[getRandomInt(0, LAST_NAMES.length)]}`, //dynasty
    `${TITLES[getRandomInt(0, TITLES.length)]}`, //title
    //full name
    null,
    `${generateWord(8).toUpperCase()}`, //generate kingdom name
  )
  LEADERS.push(leader);
  //console.log(leader);
  //console.log(LEADERS);
  return LEADERS;
}

/*
********** SOLDIER GENERATION **********
*/

export function createPlayerChar() {
  let character = new PlayerCharacter(
    `${prefixes[getRandomInt(0, prefixes.length)]}`, //prefix
    `${generateName(getRandomInt(1, 6))} ${SUFFIXES[getRandomInt(0, SUFFIXES.length)]}`, //name
    `${LAST_NAMES[getRandomInt(0, LAST_NAMES.length)]}`, //lastname
    `${TITLES[getRandomInt(0, TITLES.length)]}`, //title
    "", //fullname
    "", //childOf
    `${weapon[getRandomInt(0, weapon.length)]}`, //weapon 
    null, //HP
    getRandomInt(5, 20), //VIT
    getRandomInt(1, 10), //STR
    getRandomInt(1, 10), //DEX
    getRandomInt(0, 101), //prestige
    "", //birthplace
    "", //faction
    "Alive", //status 
    true, //alive
  )
  //console.log(character);
  CHARACTERS.push(character);
  //console.log(CHARACTERS);
  return CHARACTERS;

}

export function createAChar() {

  let character = new EnemyCharacter(
    `${prefixes[getRandomInt(0, prefixes.length)]}`, //prefix
    `${generateName(getRandomInt(1, 6))} ${SUFFIXES[getRandomInt(0, SUFFIXES.length)]}`, //name
    `${LAST_NAMES[getRandomInt(0, LAST_NAMES.length)]}`, //lastname
    `${TITLES[getRandomInt(0, TITLES.length)]}`, //title
    "", //fullname
    "", //childOf
    `${weapon[getRandomInt(0, weapon.length)]}`, //weapon 
    null, //HP
    getRandomInt(5, 20), //VIT
    getRandomInt(1, 10), //STR
    getRandomInt(1, 10), //DEX
    getRandomInt(0, 101), //prestige
    "", //birthplace
    "", //faction
    "Alive", //status 
    true, //alive
  )
  //console.log(character);
  CHARACTERS.push(character);
  //console.log(CHARACTERS);
  return CHARACTERS;
}

export function createAnArmy() {


}


export function makeArmy() {

  const element = document.getElementById('army');
  let html = `<div class="col"><h4>Army of <span class="highlight">${kings[0].fullName}</span></h4><table class="army-table">  
  <th>Name:</th> 
  <th>Child Of:</th>
  <th>Weapon:</th>
  <th>VIT:</th>
  <th>STR:</th>
  <th>DEX:</th>
  <th>Prestige:</th>
  <th>Birthplace:</th>
  <th>Faction:</th>`

  //clear array
  armyA.splice(0, armyA.length);

  //armyA
  for (let i = 0; i < ARMY_SIZE; i++) {



    // var character = {
    //   prefix: "",
    //   name: "",
    //   lastName: "",
    //   TITLES: "",
    //   fullName: "",
    //   childOf: [],
    //   weapon: "",
    //   HP: 0,
    //   VIT: 0,
    //   STR: 0,
    //   DEX: 0,
    //   prestige: 0,
    //   birthplace: "",
    //   faction: "",
    //   status: "Alive"
    // };

    char();

    armyA.push();

    let soldier =
      `<td>${armyA[i].fullName.toString()}</td>
    <td>${armyA[i].childOf[0].toString()} and ${armyA[i].childOf[1].toString()}</td>
    <td>${armyA[i].weapon.toString()}</td>
    <td>${armyA[i].VIT.toString()}</td>
    <td>${armyA[i].STR.toString()}</td>
    <td>${armyA[i].DEX.toString()}</td>
    <td>${armyA[i].prestige.toString()}</td>
    <td>${armyA[i].birthplace.toString()}</td>
    <td>${armyA[i].faction.toString()}`;

    if (character.status) {
      html += `<tr>${soldier}</tr>`;
    }
  }

  //display army in html doc
  html += '</table><hr></div>';
  //end ArmyA

  //ArmyB
  html += `<div class="col"><h4>Army of <span class="highlight">${kings[1].fullName}</span></h4><table class="army-table">  
  <th>Name:</th> 
  <th>Child Of:</th>
  <th>Weapon:</th>
  <th>VIT:</th>
  <th>STR:</th>
  <th>DEX:</th>
  <th>Prestige:</th>
  <th>Birthplace:</th>
  <th>Faction:</th>`



  //clear array
  armyB.splice(0, armyB.length);

  //armyB
  for (let i = 0; i < ARMY_SIZE; i++) {

    // let character = new Character();

    // var character = {
    //   prefix: "",
    //   name: "",
    //   lastName: "",
    //   TITLES: "",
    //   fullName: "",
    //   childOf: [],
    //   weapon: "",
    //   HP: 0,
    //   VIT: 0,
    //   STR: 0,
    //   DEX: 0,
    //   prestige: 0,
    //   birthplace: "",
    //   faction: "",
    //   status: true
    // };
    //char(character);

    //armyB.push(character);

    let soldier =
      `<td>${armyB[i].fullName.toString()}</td>
    <td>${armyB[i].childOf[0].toString()} and ${armyB[i].childOf[1].toString()}</td>
    <td>${armyB[i].weapon.toString()}</td>
    <td>${armyB[i].VIT.toString()}</td>
    <td>${armyB[i].STR.toString()}</td>
    <td>${armyB[i].DEX.toString()}</td>
    <td>${armyB[i].prestige.toString()}</td>
    <td>${armyB[i].birthplace.toString()}</td>
    <td>${armyB[i].faction.toString()}</td>`;

    if (character.status) {
      html += `<tr>${soldier}</tr>`;
    }
  }

  //display army in html doc
  html += '</table><hr></div>';

  element.innerHTML = html;

  return armyA, armyB;

}

/*
********** ARMY DISPLAY **********
*/

export function combat(soldierA, soldierB) {

  let text;
  let result;
  let hpA = soldierA.HP;
  let hpB = soldierB.HP;
  let strA = soldierA.STR;
  let strB = soldierB.STR;
  let speedA = soldierA.DEX;
  let speedB = soldierB.DEX;
  let first;
  let second;
  let turn = 0;


  // Will execute myCallback every 1 seconds 
  //var intervalID = window.setInterval(combat(), 1000);

  text =
    `<span class='name'>${soldierA.fullName}</span> 
  wielding a <span class='highlight'>${soldierA.weapon}</span> 
  fought <span class='name'>${soldierB.fullName}</span>
  wielding a <span class='highlight'>${soldierB.weapon}</span>: <hr>`;

  result = `<span class='result'>`;
  result +=
    `<p><span class='nameA'>${soldierA.name}</span> has <span class='highlight'>${soldierA.HP}HP</span> -
  <span class='nameB'>${soldierB.name}</span> has <span class='highlight'>${soldierB.HP}HP</span>.</p>`

  //---------------------//
  //conditions for combat//
  //---------------------//

  if (speedA > speedB) {
    first = soldierA;
    second = soldierB;
  } else {
    first = soldierB;
    second = soldierA;
  }

  while (first.alive && (turn === 0)) {
    turn = 1;
    let dmg = Math.floor(first.STR * first.VIT + (first.HP / 10));
    second.HP = second.HP - dmg;
    result +=
      `<p><span>${first.name}</span> <span class='attack'>attacked</span> for <span class='dmg'>${dmg}DMG</span>!
      so,
      <span>${first.name}</span> has <span class='highlight'>${Math.floor(first.HP)}HP</span> left. ${second.name}</span> has <span class='highlight'>${Math.floor(second.HP)}HP</span> left.</p>`;

    if (first.HP <= 0) {
      first.HP = 0;
      first.alive = false;
      result += `<span class='name'>${second.prefix} ${second.name}</span> killed 
      <span class='name'>${first.prefix} ${first.name}. </span>`;

    }
  }

  while (second && (turn === 1)) {
    turn = 0;
    let dmg = Math.floor(second.STR * second.VIT + (second.HP / 10));
    first.HP = first.HP - dmg;
    result +=
      `<p><span>${second.name}</span> <span class='attack'>attacked</span> for <span class='dmg'>${dmg}DMG</span>!
      so,    
      <span>${first.name}</span> has <span class='highlight'>${Math.floor(first.HP)}HP</span> left. ${Math.floor(second.name)} has ${Math.floor(second.HP)} left.</p>`;

    if (second.HP <= 0) {
      second.HP = 0;
      second.alive = false;
      result += `<span class='name'>${first.prefix} ${first.name}</span> killed 
      <span class='name'>${second.prefix} ${second.name}. </span>`;

    }
  }


  // while (first.alive && second.alive) {

  //   result += `<span class='outcome'>`;
  //   if (first.HP <= 0) {
  //     first.HP = 0;
  //     first.alive = false;
  //     result += `<span class='name'>${second.prefix} ${second.name}</span> killed 
  //     <span class='name'>${first.prefix} ${first.name}. </span>`;

  //   } else if (second.HP <= 0) {
  //     second.HP = 0;
  //     second.alive = false;
  //     result += `<span class='name'>${first.prefix} ${first.name}</span> killed 
  //     <span class='name'>${second.prefix} ${second.name}. </span>`;

  //   }
  //   result += `</span>`;
  // }

  result += `</span><hr><p>`;
  text += result;
  combatText.push(text);
  //combatText = text;
  //console.log(combatText);
  return combatText;

}

const combatText = [];
let outcome;

export function removeDeadChars() {
  const index = CHARACTERS.findIndex(char => !char.alive);
  if (index > -1) {
    CHARACTERS.splice(index, 1);
  }
  console.log(CHARACTERS);

}


export function makeCombat() {


  //clear array
  combatText.splice(0, combatText.length);

  const element = document.getElementById('combat');
  let html = `<h1>At the Battle of <span class="highlight">${PLACES[getRandomInt(0, PLACES.length)]} ${generateWord(10).toUpperCase()}</span>...</h1>`

  html += `<ul class="combat-log-list">`;

  for (let i = 0; i < ARMY_SIZE; i++) {
    combat(armyA[i], armyB[i]);
    html += `<p><li class="combat-list-entry">${combatText[i]}</li></p>`;
  }
  html += `</ul>`;
  html += outcome;
  element.innerHTML = html;
  //reinit army deaths
  armyAkilled = 0;
  armyBkilled = 0;
}

const eventText = [];

export function makeHappen(soldierA, soldierB) {
  let thing =
    `In the year ${getRandomInt(1, 30)}
   of the reign of <span class="highlight">${kings[getRandomInt(0, AMOUNT_KINGS)].fullName}</span>,
   in the <span class="highlight">${PLACES[getRandomInt(0, PLACES.length)]} of ${generateWord(8).toUpperCase()}</span>,
   <span class="nameA">${soldierA.fullName}</span> <span class="attack">${verb[getRandomInt(0, verb.length)]}</span> <span class="nameB">${soldierB.fullName}</span>.`

  eventText.push(thing);
}

export function printEvent() {
  eventText.splice(0, eventText.length);
  const element = document.getElementById('event');

  let kingLog = `<h2>The great kings who rule today...</h2>`;
  for (let i = 0; i < AMOUNT_KINGS; i++) {
    kingLog += `<hr><p class='event-list'><span class='highlight'>${kings[i].fullName}</span> of <span class="name">${kings[i].kingdom}</span>.</p><hr>`
  }

  let html = `<h2>In the histories of old, it is said that...</h2>`;

  for (let i = 0; i < ARMY_SIZE; i++) {
    makeHappen(armyA[i], armyB[i]);
    html += `<hr><p class='event-list'>${eventText[i]}</p><hr>`;
  }
  html += ``;

  element.innerHTML = kingLog + html;

}

export { CHARACTERS, LEADERS, combatText };