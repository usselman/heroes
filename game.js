import { createAKing, createAChar, combat } from './modules/char.js';
import { LEADERS, CHARACTERS, combatText } from './modules/char.js';
import { getRandomInt } from './modules/arbitraryFunctions.js';

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


for (let i = 0; i < 1000; i++) {
    createAKing();
    createAChar();
    //playerText.innerHTML = CHARACTERS[0].name;
}

function renderDOM() {
    clearText();
    $('#create').innerHTML = `Create two new combatants!`;
    $('#player-name').innerHTML = `${char1.fullName}`;
    $('#player-hp').innerHTML = `HP: ${char1.HP}`;
    $('#player-weapon').innerHTML = `Weapon: ${char1.weapon}`;
    $('#player-str').innerHTML = `STR: ${char1.STR}`;
    $('#player-dex').innerHTML = `DEX: ${char1.DEX}`;
    $('#text-line-1').innerHTML = char1.whoAmI();

    $('#enemy-name').innerHTML = `${char2.fullName}`;
    $('#enemy-hp').innerHTML = `HP: ${char2.HP}`;
    $('#enemy-weapon').innerHTML = `Weapon: ${char2.weapon}`;
    $('#enemy-str').innerHTML = `STR: ${char2.STR}`;
    $('#enemy-dex').innerHTML = `DEX: ${char2.DEX}`;
    $('#text-line-2').innerHTML = char2.whoAmI();

    $('#fight').innerHTML = `${char1.fullName} attacks ${char2.fullName}!`;
    for (let count = 1; count <= 1; count++) {
        $(`#combat-text-line-${count}`).innerHTML = combatText;

    }
}

function setState(callback) {
    callback();
    renderDOM();
}

function clearText() {
    document.getElementById('combat-text-line-1').value = "";
}

$('#create').addEventListener('click', () => {

    setState(() => {
        char1 = CHARACTERS[getRandomInt(0, CHARACTERS.length / 2)];
        char2 = CHARACTERS[getRandomInt(CHARACTERS.length / 2, CHARACTERS.length)];
        //console.log(char1.fullName + ' and ' + char2.fullName)

        return char1, char2;
    });
});

$('#fight').addEventListener('click', () => {
    setState(() => {
        combat(char1, char2);
        //console.log(combatText);
        return combatText;
    });
});

//renderDOM();








