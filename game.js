import { createAKing } from './modules/char.js';

window.onload = function () {
    const canvas = document.querySelector('canvas');
    const c = canvas.getContext('2d');

    const kingButton = document.querySelector('#create_a_king');
    kingButton.innerText = "Testing createAKing()";

    kingButton.addEventListener('click', () => {
        createAKing();
    });
    //createAKing();

    canvas.width = 600;
    canvas.height = 600;


    c.fillStyle = 'white';
    c.fillRect(10, 10, canvas.width - 10, canvas.height - 10);




}
