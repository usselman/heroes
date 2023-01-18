import { armyA, armyB, kings, prefix, lastname, suffix, title, weapon, place, verb } from './material/buildingBlocks.js';
import { getRandomInt } from './arbitraryFunctions.js';
import { generateName } from './generateName.js';
import { generateWord } from './generateWord.js';

let length;
let thing;
const armySize = 100;
const amtKings = 6;
var armyAkilled = 0;
var armyBkilled = 0;

export function char(charSheet) {

  charSheet.prefix = `${prefix[getRandomInt(0, prefix.length)]}`;
  charSheet.name =
    `${generateName(getRandomInt(1, 6)).toUpperCase()} ${suffix[getRandomInt(0, suffix.length)]}`;
  charSheet.lastName = `${lastname[getRandomInt(0, lastname.length)]}`; 
  charSheet.title = `<i>${title[getRandomInt(0, title.length)]}</i>`;
  charSheet.fullName = `${charSheet.prefix} ${charSheet.name} ${charSheet.lastName} ${charSheet.title}`;
  charSheet.childOf[0] =
    `${prefix[getRandomInt(0, prefix.length)]} ${generateName(getRandomInt(1, 6))}`;
  charSheet.childOf[1] =
    `${prefix[getRandomInt(0, prefix.length)]} ${generateName(getRandomInt(1, 6))} ${suffix[getRandomInt(0, suffix.length)]} ${title[getRandomInt(0, title.length)]}`;
  charSheet.weapon = `${weapon[getRandomInt(0, weapon.length)]}`;
  charSheet.VIT = `${getRandomInt(5, 20)}`;
  charSheet.STR = `${getRandomInt(1, 10)}`;
  charSheet.DEX = `${getRandomInt(1, 10)}`;
  charSheet.HP = `${charSheet.VIT * 10}`;
  charSheet.prestige = `${getRandomInt(0, 101)}`;
  charSheet.birthplace = `${kings[getRandomInt(0, amtKings)].kingdom}`;
  charSheet.faction = `House ${kings[getRandomInt(0, amtKings)].dynasty}`;
}

function makeKings(leader) {
      
  leader.name = `${generateName(getRandomInt(1, 6)).toUpperCase()} ${suffix[getRandomInt(0, suffix.length)]}`;
  leader.lastName = `${lastname[getRandomInt(0, lastname.length)]}`;
  leader.title = `<i>${title[getRandomInt(0, title.length)]}</i>`;
  leader.dynasty = `${generateWord(8).toUpperCase()}`;
  leader.fullName = `King ${leader.name} ${leader.lastName} ${leader.title} of House ${leader.dynasty}`;
  leader.kingdom = `${place[getRandomInt(0, place.length)]} of ${generateWord(8).toUpperCase()}`;
  return kings;
};

export function makeArmy() {

  //make kings
  kings.splice(0, kings.length);  
  for (let i=0; i<amtKings; i++){
    var leader = {
      name: "",
      lastName: "",
      title: "",
      fullName: "",
      dynasty: "",
      kingdom: ""
    };

    makeKings(leader);
    kings.push(leader);
  }

  
  
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
  for (let i = 0; i < armySize; i++) {

    var character = {
      prefix: "",
      name: "",
      lastName: "",
      title: "",
      fullName: "",
      childOf: [],
      weapon: "",
      HP: 0,
      VIT: 0,
      STR: 0,
      DEX: 0,
      prestige: 0,
      birthplace: "",
      faction: "",
      status: "Alive"
    };
    
    char(character);
    
    armyA.push(character);

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
  for (let i = 0; i < armySize; i++) {

    var character = {
      prefix: "",
      name: "",
      lastName: "",
      title: "",
      fullName: "",
      childOf: [],
      weapon: "",
      HP: 0,
      VIT: 0,
      STR: 0,
      DEX: 0,
      prestige: 0,
      birthplace: "",
      faction: "",
      status: true
    };
    char(character);
    
    armyB.push(character);

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

export function showArmy() {
  for (let i=0; i<armySize; i++){
    console.log(armyA[i]);
    console.log(armyB[i]);
  }
  //console.log(armyB);
}

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

  armyAkilled = 0;
  armyBkilled = 0;
  
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

  if(speedA > speedB) {
    first = soldierA;
    second = soldierB;
  }else {
    first = soldierB;
    second = soldierA;
  }

  while(first.status && second.status) {

    let dmgFirst = Math.floor(first.STR * first.VIT + (first.HP/10));
    let dmgSecond = Math.floor(second.STR * second.VIT + (second.HP/10));
    

    second.HP = second.HP - dmgFirst;

    result+= 
    `<p><span class='nameA'>${first.name}</span> <span class='attack'>attacked</span> for <span class='dmg'>${dmgFirst}DMG</span>!</p>
    <p><span class='nameB'>${second.name}</span> has <span class='highlight'>${Math.floor(second.HP)}HP</span> left.</p>`;

    first.HP = first.HP - dmgSecond;

    result+= 
    `<p><span class='nameA'>${second.name}</span> <span class='attack'>attacked</span> for <span class='dmg'>${dmgSecond}DMG</span>!</p>
    <p><span class='nameB'>${first.name}</span> has <span class='highlight'>${Math.floor(first.HP)}HP</span> left.</p>`;
    

    result += `<span class='outcome'>`;
    if(first.HP <= 0) {
      result += `<span class='name'>${second.prefix} ${second.name}</span> killed 
      <span class='name'>${first.prefix} ${first.name}. </span>`;
      first.status = false;
      armyAkilled += 1;
    } else if (second.HP <= 0) {
      result += `<span class='name'>${first.prefix} ${first.name}</span> killed 
      <span class='name'>${second.prefix} ${second.name}. </span>`;
      second.status = false;
      armyBkilled += 1;
    }
    result += `</span>`;
  }

  if (armyAkilled > armyBkilled) {
    outcome = `<p>The army of <span class="highlight">${kings[1].fullName}</span> won.</p>`
  } else if (armyBkilled > armyAkilled) {
    outcome = `<p>The army of <span class="highlight">${kings[0].fullName}</span> won.</p>`
  } else if (armyAkilled = armyAkilled) {
    outcome = `<p>The battle was indecisive.</p>`
  }

  result += `</span><hr><p>`;
  text += result;
  text += `<p>
          The army of <span class="highlight">${kings[0].fullName}</span> lost <b>${armyAkilled}</b> soldiers.
           The army of <span class="highlight">${kings[1].fullName}</span> lost <b>${armyBkilled}</b> soldiers.
           </p>`
  combatText.push(text);
}

const combatText = [];
let outcome;

export function makeCombat() {
  
  
  //clear array
  combatText.splice(0, combatText.length);

  const element = document.getElementById('combat');
  let html = `<h1>At the Battle of <span class="highlight">${place[getRandomInt(0, place.length)]} ${generateWord(10).toUpperCase()}</span>...</h1>`

  html += `<ul class="combat-log-list">`;

  for (let i = 0; i < armySize; i++){
    combat(armyA[i], armyB[i]);
    html += `<p><li class="combat-list-entry">${combatText[i]}</li></p>`;
  }
  html += `</ul>`;
  html += outcome;

  element.innerHTML = html;
}

const eventText = [];

export function makeHappen(soldierA, soldierB) {
  let thing =
  `In the year ${getRandomInt(1, 30)}
   of the reign of <span class="highlight">${kings[getRandomInt(0, amtKings)].fullName}</span>,
   in the <span class="highlight">${place[getRandomInt(0, place.length)]} of ${generateWord(8).toUpperCase()}</span>,
   <span class="nameA">${soldierA.fullName}</span> <span class="attack">${verb[getRandomInt(0, verb.length)]}</span> <span class="nameB">${soldierB.fullName}</span>.`
  
   eventText.push(thing);
}

export function printEvent() {
  eventText.splice(0, eventText.length);
  const element = document.getElementById('event');

  let kingLog = `<h2>The great kings who rule today...</h2>`;
  for (let i = 0; i < amtKings; i++){
    kingLog += `<hr><p class='event-list'><span class='highlight'>${kings[i].fullName}</span> of <span class="name">${kings[i].kingdom}</span>.</p><hr>`
  }

  let html = `<h2>In the histories of old, it is said that...</h2>`;

  for (let i = 0; i < armySize; i++){
    makeHappen(armyA[i], armyB[i]);
    html += `<hr><p class='event-list'>${eventText[i]}</p><hr>`;
  }
  html += ``;

  element.innerHTML = kingLog + html;

}
