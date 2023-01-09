import { generateName } from '../generateName.js';

const armyA = [];
const armyB = [];
const kings = [];

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
const vowels = [
  "a",
  "e",
  "i",
  "o",
  "u",
  "a",
  "e",
  "o",
  "ae",
  "ie",
  "oa",
];

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
  "the Warrior",
  "the Builder",
  "the Madman",
  "the Maiden",
  "the Barbarian",
  "the Freak",
  "the Rogue",
  "",
  "the Bandit",
  "the Fisher",
  "the Monk",
  "the Thief",
  "the Peasant",
  "Lowborn",
  "Highborn",
  "the Bear",
  "the Wolf",
  "the Magpie",
  "the Goblin",
  "",
  "the Drunk",
  "the Menace",
  "the Docile",
  "Cleaver",
  "the Nightingale",
  "the Mudded",
  "Woebegotten",
  "the Lucky",
  "the Small",
  "the Big",
  "the Unwanted",
  "born-Tough",
  "the Eagle-Eyed",
  "the Sleepy",
  "the Poor",
  "the Smiling",
  "the Northman",
  "the Easterling",
  "",
  "Silver-Spooned",
  "the Exorcist",
  "the Artist",
  "the Fighter",
  "",
  "Tells-No-Tales",
  "the Lemon",
  "of-the-Moon",
  "of-the-Stars",
  "of-the-Sun",
  "Big-Boned",
  "the Hairless",
  "the Craven",
  "the Brave",
  "the Long-Seer",
  "Future-Sight",
  "the Hero",
  "the Legend",
  "the Greybeard",
  "Darkstalker",
  "Evil-Eye",
  "the Ogre",
  "the Goose",
  "the Duck",
  "the Fox",
  "the Nimble",
  "the Dragon",
  "the Alchemist",
  "the Scholar",
  "the Mourner",
  "the Woeful",
  "the Baneful",
  "Destined-for-Death",
  "Never-Born",
  "Who-Walks-In-Death",
  "the Left Behind",
  "the Tamer",
  "the Beast Hunter",
  "of the Mountains",
  "of the Joust",
  "the Pious",
  "the Sword of the Stars",
  "the Faithful",
  "the Frowner",
  "the Drowned",
  "the Brown-Eye",
  "the Seer",
  "",
  "",
  "",
  "",
  "the Blue-Faced",
  "the Green",
  "the Blackheart",
  "the Lionheart",
  "the Unready",
  "the Great",
  "the Conqueror",
  "the Wanderer",
  "the Forlorn",
  "Misquoted",
  "the Lecher",
  "the Snake",
  "the Unruly",
  "the Bastard",
  "the She-Wolf",
  "the Sword of the Night",
  "the Widow",
  "the Black",
  "the Yellow Knight",
  "the Golden",
  "the Erudite",
  "the Student",
  "of Utmost Devotion",
  "the Sweet",
  "the Bard",
  "the Low",
  "the Unknown",
  "of High Halls",
  "the Child",
  "the Boy Conqueror",
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

export { armyA, armyB, kings, letters, vowels, name1, name2, name3, word, prefix, lastname, suffix, title, weapon, place, verb };
