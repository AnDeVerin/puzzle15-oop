const boxElem = document.querySelector('.box');
const resetButtonElem = document.querySelector('.button_type_reset');
const startButtonElem = document.querySelector('.button_type_start');

const cells = [];


/* Инициализация игры */
for (let i = 1; i < 16; i++) {
    cells.push(i);
}
cells.push(0);

renderCells();

/* Обработчики кнопок Start и Reset*/
resetButtonElem.addEventListener('click', function() {
    stopGame();
    resetCells();
});

startButtonElem.addEventListener('click', function() {
    activateCells();
    boxElem.addEventListener('click', cellClickHandler);
});
