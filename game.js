import { createAKing, createAChar, combat, removeDeadChars } from './modules/char.js';
import { LEADERS, CHARACTERS, combatText } from './modules/char.js';
import { getRandomInt, capitalizeFirstLetter } from './modules/arbitraryFunctions.js';

let char1 = CHARACTERS[0];
let char2 = CHARACTERS[1];

// let combatText;

// kingButton.addEventListener('click', () => {

// });

$ = (selector) => {
    const elements = document.querySelectorAll(selector);
    if (elements.length > 1) {
        return elements;
    } else if (elements.length === 1) {
        return elements[0];
    }
};

const state = {
    name: 'Playing!'
}

function init_game() {
    for (let i = 0; i < 30; i++) {
        createAKing();
        createAChar();
        //playerText.innerHTML = CHARACTERS[0].name;
    }
}
function renderDOM() {

    $('#create').innerHTML = `Create Player!`;
    $('#player-name').innerHTML = `${char1?.fullName}`;
    $('#player-hp').innerHTML = `HP: ${char1?.HP}`;
    $('#player-weapon').innerHTML = `Weapon: ${char1?.weapon}`;
    $('#player-str').innerHTML = `STR: ${char1?.STR}`;
    $('#player-dex').innerHTML = `DEX: ${char1?.DEX}`;
    $('#player-killed').innerHTML = `${char1?.killed}\n`;
    $('#text-line-1').innerHTML = char1?.whoAmI();

    $('#enemy-name').innerHTML = `${char2?.fullName}`;
    $('#enemy-hp').innerHTML = `HP: ${char2?.HP}`;
    $('#enemy-weapon').innerHTML = `Weapon: ${char2?.weapon}`;
    $('#enemy-str').innerHTML = `STR: ${char2?.STR}`;
    $('#enemy-dex').innerHTML = `DEX: ${char2?.DEX}`;
    $('#enemy-killed').innerHTML = `${char2?.killed}\n`;
    $('#text-line-2').innerHTML = char2?.whoAmI();

    $('#fight').innerHTML = `${char1.fullName} attacks ${char2.fullName}!`;
    for (let count = 1; count <= 1; count++) {
        $(`#combat-text-line-${count}`).innerHTML = combatText;

    }
}

function setState(callback) {
    callback();
    renderDOM();
}

function clearCombatText() {
    //document.getElementById('combat-text-line-1').value = "";
    combatText.splice(0, combatText.length);
}

$('#create').addEventListener('click', () => {

    setState(() => {
        if (!char1?.alive) {
            char1 = CHARACTERS[getRandomInt(0, CHARACTERS.length / 2)];
        }
        if (!char2?.alive) {
            char2 = CHARACTERS[getRandomInt(CHARACTERS.length / 2, CHARACTERS.length)];
        }
        removeDeadChars();
        clearCombatText();


        //console.log(char1.fullName + ' and ' + char2.fullName)

        return char1;
    });
});

// $('#create-enemies').addEventListener('click', () => {

//     setState(() => {

//         removeDeadChars();
//         clearCombatText();

//         //console.log(char1.fullName + ' and ' + char2.fullName)

//         return char2;
//     });
// });

$('#fight').addEventListener('click', () => {
    setState(() => {
        removeDeadChars();
        combat(char1, char2);
        //console.log(combatText);
        return combatText;
    });
});

init_game();
//renderDOM();








