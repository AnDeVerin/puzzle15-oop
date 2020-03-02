/* eslint-disable no-unused-vars */

class WinPopup extends Popup {
    constructor({elem, timer}) {
        super(elem);
        this.timer = timer;

        this.elem.querySelector('.button_type_start')
            .addEventListener('click', this.hide.bind(this));

        this.timeElem = this.elem.querySelector('.popup__time');
    }

    open() {
        const time = this.timer.getTime();
        this.timeElem.innerHTML = time;
        this.show();
    }
}
