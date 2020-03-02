/* eslint-disable no-unused-vars */

class UserInfo {
    constructor({elem, name = 'Player'}) {
        this.userName = name;
        this.userNameElem = elem.querySelector('.statistics__name');
        this.updateName();
    }

    setName(userName) {
        this.userName = userName;
    }

    updateName() {
        this.userNameElem.textContent = `Name: ${this.userName}`;
    }

    getName() {
        return this.userName;
    }
}
