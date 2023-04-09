import { createAKing, createAChar } from './modules/char.js';
import { LEADERS, CHARACTERS } from './modules/char.js';


const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

const kingButton = document.querySelector('#create_a_king');
kingButton.innerText = "Testing createAKing()";

const cardsColumn = document.querySelector('#cards-column');
const newCard = document.querySelector("#card");
//newCard.classList.add("card");

const cardText = document.querySelector('#card-text');
//cardText.innerText = "Card Text"

kingButton.addEventListener('click', () => {
    createAKing();

    cardText.textContent += `\n ${LEADERS.toString()} `;
    //newCard.appendChild(cardText);
    //newCard.textContent = ` ${LEADERS[i].toString()} `;
    //document.createElement(`div`);
    //c.fillText(text, canvas.width / 2, 10 * i);

    //cardsColumn.appendChild(cardText);

});

const charButton = document.querySelector('#create_a_character');
charButton.innerText = "Testing createACharacter()";

charButton.addEventListener('click', () => {
    createAChar();
});

canvas.width = 1000;
canvas.height = 1600;
c.textAlign = "center";
c.font = "25px Arial"
c.fillStyle = "red";



//c.fillStyle = 'white';
//c.fillRect(10, 10, canvas.width - 10, canvas.height - 10);




    //c.fillText(CHARACTERS[0], 50, 50);




