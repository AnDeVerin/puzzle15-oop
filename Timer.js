/* eslint-disable no-unused-vars */

class Timer {
    constructor() {
        this.startTime = 0;
        this.stopTime = 0;
    }

    start() {
        this.startTime = Date.now();
    }

    stop() {
        this.stopTime = Date.now();
    }

    getTime() {
        const diffInMs = this.stopTime - this.startTime;
        return `${Math.round(diffInMs / 1000)} sec`;
    }
}
