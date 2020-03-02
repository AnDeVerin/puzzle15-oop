/* eslint-disable no-unused-vars */
class Popup {
    constructor(elem) {
        this.elem = elem;
    }

    show() {
        this.elem.classList.remove('popup_hidden');
    }

    hide() {
        this.elem.classList.add('popup_hidden');
    }
}
