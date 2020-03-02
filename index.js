const cells = [];
const boxElem = document.querySelector('.box');
const timer = new Timer();
// eslint-disable-next-line no-unused-vars
const winPopup = new WinPopup({
    elem: document.querySelector('[data-component="win-popup"]'),
    timer,
});

(function() {
    const resetButtonElem = document.querySelector('.button_type_reset');
    const startButtonElem = document.querySelector('.button_type_start');
    const nameTrigger = document.querySelector('.statistics__name');


    const userInfo = new UserInfo({
        elem: document,
        name: '',
    });

    const userPopup = new UserPopup({
        elem: document.querySelector('[data-component="user-popup"]'),
        userInfo,
    });

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
        timer.start();
    });

    nameTrigger.addEventListener('click', userPopup.open.bind(userPopup));
})();
