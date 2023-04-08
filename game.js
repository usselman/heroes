import { createAKing, createAChar } from './modules/char.js';
import { LEADERS, CHARACTERS } from './modules/char.js';


const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

const kingButton = document.querySelector('#create_a_king');
kingButton.innerText = "Testing createAKing()";

kingButton.addEventListener('click', () => {
    for (let i = 1; i < 100; i += 10) {
        createAKing();
        c.fillText(JSON.stringify(LEADERS), 10, 10 * i);
    }
});

const charButton = document.querySelector('#create_a_character');
charButton.innerText = "Testing createACharacter()";

charButton.addEventListener('click', () => {
    createAChar();
});

canvas.width = 1600;
canvas.height = 1600;
c.textAlign = "center";
c.font = "10px Arial"
c.fillStyle = "red";

//c.fillStyle = 'white';
//c.fillRect(10, 10, canvas.width - 10, canvas.height - 10);




    //c.fillText(CHARACTERS[0], 50, 50);




