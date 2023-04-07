
window.onload = function () {
    const canvas = document.querySelector('canvas');
    const c = canvas.getContext('2d');

    canvas.width = 600;
    canvas.height = 600;


    c.fillStyle = 'white';
    c.fillRect(10, 10, canvas.width - 10, canvas.height - 10);

}
