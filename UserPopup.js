/* eslint-disable no-unused-vars */

class UserPopup extends Popup {
    constructor({elem, userInfo}) {
        super(elem);

        this.userInfo = userInfo;
        this.inputElem = this.elem.querySelector('input');
        this.formElem = this.elem.querySelector('form');
        this.okButtonElem = this.elem.querySelector('.button_type_start');

        // обработчики
        // esc
        document.addEventListener('keydown', this.escHandler.bind(this));
        // reset
        this.elem.querySelector('.button_type_reset')
            .addEventListener('click', this.hide.bind(this));

        // submit
        this.formElem.addEventListener('submit', this.submit.bind(this));
    }

    open() {
        const name = this.userInfo.getName();
        this.inputElem.value = name;
        this.show();
    }

    submit(e) {
        e.preventDefault();
        const name = this.inputElem.value;
        this.userInfo.setName(name);
        this.userInfo.updateName(name);

        this.hide();
        this.formElem.reset();
    }

    escHandler({keyCode}) {
        if (keyCode === 27) {
            this.hide();
        }
    }
}
