let length;
let thing;
const armySize = 25;

const letters = [
  "b",
  "c",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "r",
  "s",
  "t",
  "v",
  "y",
];
const vowels = ["a", "e", "i", "o", "u", "a", "e", "o", "ae", "ie", "oa"];

const name1 = [ 
  "Jh",
  "An",
  "Ec",
  "En",
  "Lh",
  "Ha",
  "Het",
  "Gh",
  "Mt",
  "Al",
  "Olp",
  "Elp",
  "Em",
  "On",
  "Tum",
  "Tep",
  "Pos",
  "Cn",
  "Kn",
  "Del",
  "Det",
  "Dat",
  "Shav",
  "Vas",
  "Tern",
  "Kol",
  "Gant",
  "Jos",
  "Alph",
  "Men",
  "Tav",
  "Olen",
  "Mol",
  "Godr",
  "Dem",
  "Gol",
  "Mel",
  "Kat",
  "Duf",
  "Diam",
  "Lonn",
  "Kohl",
  "Elum",
  "Alum",
  "Palum",
  "Oner",
  "Anut",
  "Hem",
  "Colm",
  "Mol",
  "Kolet",
  "Uden",
  "Umen",
  "Amen",
  "Akhen",
  "Toll",
  "Est",
  "Kotr",
  "Gl",
  "Kl",
  "Tn",
  "Kn",
  "Vr",
  "Tr",
  "Av",
  "Ev",
  "Jh",
  "Gh",
  "Gr",
  "Dr",
  "Br",
  "Gn",
  "Tl",
  "Fr",
  "D",
  "C",
  "T",
  "P",
  "K",
  "L",
  "G",
  "F",
];
const name2 = [
  "a",
  "o",
  "i",
  "y",
  "e",
  "u",
  "ei",
  "ul",
  "el",
  "al",
  "at",
  "at",
  "em",
  "im",
  "om",
  "un",
  "oc",
  "es",
  "il",
  "al",
  "af",
  "of",
  "ex",
  "ox",
  "ack",
  "am",
  "yn",
  "in",
  "ent",
  "og",
  "oc",
  "ack",
  "umn",
  "od",
  "ies",
  "ozn",
  "azn",
  "usan",
  "emr",
  "got",
  "kol",
  "cul",
  "ec",
  "ell",
  "ill",
  "ack",
];
const name3 = [
  "os",
  "h",
  "ote",
  "un",
  "at",
  "ot",
  "us",
  "en",
  "a",
  "e",
  "o",
  "u",
  "i",
  "es",
  "ul",
  "ura",
  "ur",
  "or",
  "er",
  "el",
  "ol",
  "eo",
  "al",
  "at",
  "em",
  "os",
  "eg",
  "og",
  "um",
  "un",
  "ant",
  "enk",
  "atl",
  "ono",
  "oso",
  "osu",
  "asa",
  "as",
  "deo",
  "dul",
  "mol",
  "us",
  "ees",
  "am",
  "an",
  "ane",
  "one",
  "ami",
  "ien",
  "ien",
  "onne",
  "ento",
  "anka",
  "aka",
  "oco",
  "ecce",
  "uta",
  "espa",
  "ago",
  "aga",
  "age",
];

const word = [];
const prefix = [
  "",
  "Sir ",
  "Madame ",
  "Master ",
  "Duke ",
  "King ",
  "Count ",
  "Warlord ",
  "Ranger ",
  "Caesar ",
  "Imperator ",
  "Senator ",
  "One-Eyed ",
  "",
  "Emperor ",
  "Captain ",
  "Crow Eyed ",
  "Honorable ",
  "Adjudicator ",
  "Dragon Rider ",
  "Hieromonk ",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "Chief ",
  "Khan ",
  "Great Khan ",
  "Negus ",
  "Chieftain ",
  "Old Man ",
  "Lord ",
  "Lord-Ruler ",
  "Horse Lord ",
  "Queen ",
  "Chieftess ",
  "Holy King ",
  "Holy Emperor ",
  "Child King ",
  "",
  "",
  "",
  "",
  "Father ",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];
const lastname = [
  "",
  " " + generateName(2, 6).toUpperCase(),
  " " + generateName(2, 6).toUpperCase(),
  " " + generateName(2, 6).toUpperCase(),
  " " + generateName(2, 6).toUpperCase(),
  " " + generateName(2, 6).toUpperCase(),
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];
const suffix = [
  "",
  " I",
  " II",
  " III",
  " IV",
  " V",
  " VI",
  " VII",
  " VIII",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];
const title = [
  "",
  " the Warrior",
  " the Builder",
  " the Madman",
  " the Maiden",
  " the Barbarian",
  " the Freak",
  " the Rogue",
  "",
  " the Bandit",
  " the Fisher",
  " the Monk",
  " the Thief",
  " the Peasant",
  " Lowborn",
  " Highborn",
  " the Bear",
  " the Wolf",
  " the Magpie",
  " the Goblin",
  "",
  " the Drunk",
  " the Menace",
  " the Docile",
  " Cleaver",
  " the Nightingale",
  " the Mudded",
  " Woebegotten",
  " the Lucky",
  " the Small",
  " the Big",
  " the Unwanted",
  " born-Tough",
  " the Eagle-Eyed",
  " the Sleepy",
  " the Poor",
  " the Smiling",
  " the Northman",
  " the Easterling",
  "",
  " Silver-Spooned",
  " the Exorcist",
  " the Artist",
  " the Fighter",
  "",
  " Tells-No-Tales",
  " the Lemon",
  " of-the-Moon",
  " of-the-Stars",
  " of-the-Sun",
  " Big-Boned",
  " the Hairless",
  " the Craven",
  " the Brave",
  " the Long-Seer",
  " Future-Sight",
  " the Hero",
  " the Legend",
  " the Greybeard",
  " Darkstalker",
  " Evil-Eye",
  " the Ogre",
  " the Goose",
  " the Duck",
  " the Fox",
  " the Nimble",
  " the Dragon",
  " the Alchemist",
  " the Scholar",
  " the Mourner",
  " the Woeful",
  " the Baneful",
  " Destined-for-Death",
  " Never-Born",
  " Who-Walks-In-Death",
  " the Left Behind",
  " the Tamer",
  " the Beast Hunter",
  " of the Mountains",
  " of the Joust",
  " the Pious",
  " the Sword of the Stars",
  " the Faithful",
  " the Frowner",
  " the Drowned",
  " the Brown-Eye",
  " the Seer",
  "",
  "",
  "",
  "",
  " the Blue-Faced",
  " the Green",
  " the Blackheart",
  " the Lionheart",
  " the Unready",
  " the Great",
  " the Conqueror",
  " the Wanderer",
  " the Forlorn",
  " Misquoted",
  " the Lecher",
  " the Snake",
  " the Unruly",
  " the Bastard",
  " the She-Wolf",
  " the Sword of the Night",
  " the Widow",
  " the Black",
  " the Yellow Knight",
  " the Golden",
  " the Erudite",
  " the Student",
  " of Utmost Devotion",
  " the Sweet",
  " the Bard",
  " the Low",
  " the Unknown",
  " of High Halls",
  " the Child",
  " the Boy Conqueror",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];

const weapon = [
  "Spear",
  "Sword and Shield",
  "Bow",
  "Polearm",
  "Axe",
  "Whips",
  "Mace",
  "Morningstar",
  "Falchion",
  "Daggers",
  "Crossbow",
  "Greatsword",
  "Greataxe",
  "Fists",
  "Greatspear",
  "Bastard Sword",
  "Broadsword",
  "Arakh",
  "Scythe",
  "Flail",
  "Bloodletter",
  "Axe of the Fallingstar Beast",
  "Dragon Tail",
  "Metal Chunk",
  "Sword of the Darkstalker",
  "Lion Tail",
  "Rock-spear",
  "Sling",
  "Glass Dagger",
  "Iron Menhir",
  "Caestus",
  "Weevil Dagger",
  "Ball and Chain",
  "Rapier",
  "Longsword",
  "Poisoned Knives",
  "Crystal Knife",
  "Lightning Rod",
  "Staff",
  "Tree Branch",
  "Rock",
  "None",
  "Dual Sickles",
  "Fire Magic",
  "Ice Magic",
  "Light Magic",
  "Dark Magic",
  "Shadow Magic",
  "Earth Magic",
  "Widowmaker",
  "Rusted Chain",
  "Lightning Spear",
  "Ice Pick",
  "Holy Flail",
];

const place = [
  "village",
  "town",
  "land",
  "castle",
  "tribe",
  "plains",
  "cliffs",
  "fortress",
  "forest",
  "isle",
  "bay",
  "jungle",
  "kingdom",
  "empire",
  "steppe",
  "hills",
  "eternal city",
  "underground city",
  "caverns",
  "hidden village",
  "hidden fortress",
  "tower",
  "stronghold",
];

const verb = [
  "married ",
  "killed ",
  "slew ",
  "dueled ",
  "speared ",
  "executed ",
  "met ",
  "played a drinking game with ",
  "pledged loyalty to ",
  "murdered ",
  "bent the knee to ",
  "beheaded ",
  "engaged in a fistfight with ",
  "gave a gift showing devotion to ",
  "kidnapped ",
  "kidnapped the wife of ",
  "stole a precious heirloom from ",
  "brought back treasure from a far away land for ",
  "wrote an epic poem commemorating ",
  "went to war with ",
  "wrote a song commemorating ",
  "etched a carving of ",
  "converted to the religion of ",
  "was forced to abdicate their lands to ",
  "gave a county to ",
  "gave a fiefdom to ",
  "gave a title to ",
  "gave land to ",
  "betrothed one of their children to ",
  "stole something precious from ",
  "set fire to the lands of ",
  "came bearing gifts for ",
  "brought a tribute to ",
  "gave a rare heirloom to ",
  "murdered the child of ",
  "poisoned ",
  "held a feast for ",
  "gave a gift of rare wines to ",
  "built a statue of ",
  "tamed a wild beast for ",
  "was betrothed to the child of ",
  "abdicated inheritance in favor of ",
  "secretly poisoned ",
  "brought a rare beast from a faraway land for ",
  "wore the traditional garb of ",
  "swore fealty to ",
  "sent a secret letter to ",
  "asked for military assistance from ",
  "raided the fort of ",
  "raided the village of ",
  "sent a battalion to aid the efforts of ",
  "gave a gift of pure gold to ",
  "gave a gift of gems to ",
  "signed a peace treaty with ",
  "struck a lifelong correspondence with ",
  "made contact for the first time with ",
  "asked the king for permission to eradicate ",
  "raided the farms of ",
  "sent a gift of grain and water to ",
  "brawled with ",
  "questioned the honor of ",
  "accused ",
  "claimed ownership of the land of ",
  "disputed the claim of ",
];

// var charSheet = {
//   name: "",
//   childOf: [],
//   weapon: "",
//   VIT: 0,
//   STR: 0,
//   DEX: 0,
//   prestige: 0,
//   birthplace: "",
// };



function alignment() {
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

function generateName(sel) {
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

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
  // The maximum is exclusive and the minimum is inclusive
}

function generateWord(len) {
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

function char(charSheet) {

  let character = charSheet;
  charSheet.prefix = prefix[getRandomInt(0, prefix.length)];
  charSheet.name =
    generateName(getRandomInt(1, 6)).toUpperCase() +
    suffix[getRandomInt(0, suffix.length)];
  charSheet.lastName = lastname[getRandomInt(0, lastname.length)]; 
  charSheet.title = title[getRandomInt(0, title.length)];
  charSheet.fullName = charSheet.prefix + ' ' + charSheet.name + ' ' + charSheet.lastName + ' ' + charSheet.title;
  charSheet.childOf[0] =
    prefix[getRandomInt(0, prefix.length)] + generateName(getRandomInt(1, 6));
  charSheet.childOf[1] =
    prefix[getRandomInt(0, prefix.length)] +
    generateName(getRandomInt(1, 6)) +
    suffix[getRandomInt(0, suffix.length)] +
    title[getRandomInt(0, title.length)];
  charSheet.weapon = weapon[getRandomInt(0, weapon.length)];
  charSheet.VIT = getRandomInt(5, 20);
  charSheet.STR = getRandomInt(1, 10);
  charSheet.DEX = getRandomInt(1, 10);
  charSheet.HP = charSheet.VIT * 10;
  charSheet.prestige = getRandomInt(0, 101);
  charSheet.birthplace =
    place[getRandomInt(0, place.length)] +
    " of " +
    generateWord(8).toUpperCase();
}

const armyA = [];
const armyB = [];

function makeArmy() {
  const element = document.getElementById('army');
  let html = `<h4>Army A</h4><table>  
  <th>Name:</th> 
  <th>Child Of:</th>
  <th>Weapon:</th>
  <th>VIT:</th>
  <th>STR:</th>
  <th>DEX:</th>
  <th>Prestige:</th>
  <th>Birthplace:</th>`

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
    `<b><td>` + armyA[i].fullName.toString() + ' ' + `<p></td>` +
    `<b><td>` + `</b>` + armyA[i].childOf[0].toString() + 
    ' and ' + armyA[i].childOf[1].toString() + ' ' + `<p></b></td>` +
    `<b><td>` + `</b>` + armyA[i].weapon.toString() + ' ' + `<p></td>` +
    `<b><td>` + `</b>` + armyA[i].VIT.toString() + ' ' + `<p></td>` +
    `<b><td>` + `</b>` + armyA[i].STR.toString() + ' ' + `<p></td>` +
    `<b><td>` + `</b>` + armyA[i].DEX.toString() + ' ' + `<p></td>` +
    `<b><td>` + `</b>` + armyA[i].prestige.toString() + ' ' + `<p></td>` +
    `<b><td>` + `</b>` + armyA[i].birthplace.toString() + `</td>`;

    if (character.status) {
      html += `<tr>${soldier}</tr>`;
    }
  }

  //display army in html doc
  html += '</table><hr>';
  //end ArmyA

  //ArmyB
  html += `<h4>Army B</h4><table>  
  <th>Name:</th> 
  <th>Child Of:</th>
  <th>Weapon:</th>
  <th>VIT:</th>
  <th>STR:</th>
  <th>DEX:</th>
  <th>Prestige:</th>
  <th>Birthplace:</th>`

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
    `<b><td>` + armyB[i].fullName.toString() + ' ' + `<p></td>` +
    `<b><td>` + `</b>` + armyB[i].childOf[0].toString() + 
    ' and ' + armyB[i].childOf[1].toString() + ' ' + `<p></b></td>` +
    `<b><td>` + `</b>` + armyB[i].weapon.toString() + ' ' + `<p></td>` +
    `<b><td>` + `</b>` + armyB[i].VIT.toString() + ' ' + `<p></td>` +
    `<b><td>` + `</b>` + armyB[i].STR.toString() + ' ' + `<p></td>` +
    `<b><td>` + `</b>` + armyB[i].DEX.toString() + ' ' + `<p></td>` +
    `<b><td>` + `</b>` + armyB[i].prestige.toString() + ' ' + `<p></td>` +
    `<b><td>` + `</b>` + armyB[i].birthplace.toString() + `</td>`;

    if (character.status) {
      html += `<tr>${soldier}</tr>`;
    }
  }

  //display army in html doc
  html += '</table><hr>';

  element.innerHTML = html;

  return armyA, armyB;

}

function showArmy() {
  for (let i=0; i<armySize; i++){
    console.log(armyA[i]);
    console.log(armyB[i]);
  }
  //console.log(armyB);
}

function combat(soldierA, soldierB) {
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
  
  text =
  `<span class='name'> ${soldierA.fullName} </span> 
  wielding a <span class='highlight'> ${soldierA.weapon} </span> 
  fought <span class='name'> ${soldierB.fullName} </span>
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

    if(first.HP <= 0) {
      result += `<span class='name'> ${second.prefix} ${second.name} </span> killed 
      <span class='name'> ${first.prefix} ${first.name}. </span>`;
      first.status = false;
    } else if (second.HP <= 0) {
      result += `<span class='name'> ${first.prefix} ${first.name} </span> killed 
      <span class='name'> ${second.prefix} ${second.name}. </span>`;
      second.status = false;
    }

  }






  // if (strA > strB) {
  //   result += `<span class='name'> ${soldierA.prefix} ${soldierA.name} </span> killed 
  //   <span class='name'> ${soldierB.prefix} ${soldierB.name}. </span>`;
  //   soldierB.status = false;
    
  // }
  // if (strB > strA) {
  //   result += `<span class='name'> ${soldierB.prefix} ${soldierB.name} </span> killed 
  //   <span class='name'> ${soldierA.prefix} ${soldierA.name}. </span>`;
  //   soldierA.status = false;
    
  // }
  // if (strB == strA) {
  //   result += 'The battle was indecisive. Both were equally matched.'
  // }

  result += `</span><hr><p>`
  text += result;
  combatText.push(text);
}

const combatText = [];

function diceRoll() {
  return getRandomInt(0, 6);
}

function makeCombat() {
  
  //clear array
  combatText.splice(0, combatText.length);

  const element = document.getElementById('combat');
  let html = `<h4>The Battle of ${place[getRandomInt(0, place.length)]} ${generateWord(10).toUpperCase()}</h4>`

  html += `<ul>`;

  for (let i = 0; i < armySize; i++){
    combat(armyA[i], armyB[i]);
    html += `<p><li>${combatText[i]}</li></p>`;
  }
  html += `</ul>`;

  element.innerHTML = html;
}

const eventText = [];

function makeHappen() {
  let thing =
  `<td>` + "\nIn the histories of old, it is said that: " + `</td>` +
    "\nIn the year " +
    getRandomInt(1, 30) +
    " of the reign of King " +
    generateName(getRandomInt(1, 6)).toUpperCase() +
    suffix[getRandomInt(0, suffix.length)] +
    lastname[getRandomInt(0, lastname.length)] +
    title[getRandomInt(0, title.length)] +
    "," +
    "\nin the " +
    place[getRandomInt(0, place.length)] +
    " of " +
    generateWord(8).toUpperCase() +
    "," +
    "\n" +
    prefix[getRandomInt(0, prefix.length)] +
    generateName(getRandomInt(1, 6)).toUpperCase() +
    suffix[getRandomInt(0, suffix.length)] +
    lastname[getRandomInt(0, lastname.length)] +
    title[getRandomInt(0, title.length)] +
    ", " +
    "the child of " +
    prefix[getRandomInt(0, prefix.length)] +
    generateName(getRandomInt(1, 6)) +
    " and " +
    prefix[getRandomInt(0, prefix.length)] +
    generateName(getRandomInt(1, 6)) +
    suffix[getRandomInt(0, suffix.length)] +
    title[getRandomInt(0, title.length)] +
    "," +
    "\n" +
    verb[getRandomInt(0, verb.length)] +
    "" +
    prefix[getRandomInt(0, prefix.length)] +
    generateName(getRandomInt(1, 6)).toUpperCase() +
    suffix[getRandomInt(0, suffix.length)] +
    lastname[getRandomInt(0, lastname.length)] +
    title[getRandomInt(0, title.length)] +
    "."
    eventText.push(thing);
}

function printEvent() {
  eventText.splice(0, eventText.length);
  const element = document.getElementById('event');
  let html = '<ul>';

  for (let i = 0; i < 100; i++){
    makeHappen();
    html += `<p><li>${eventText[i]}</li></p>`;
  }
  html += '</ul>';

  element.innerHTML = html;

}
