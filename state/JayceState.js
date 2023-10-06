"use strict";
class Jayce {
    constructor(state) {
        this.changeWeapon(state);
    }
    changeWeapon(state) {
        console.log('Changing to weapon: ' + state.getWeapon());
        this.state = state;
    }
    useQ() {
        this.state.useQ();
    }
    useW() {
        this.state.useW();
    }
    useE() {
        this.state.useE();
    }
    useR() {
        this.state.useR();
    }
}
class JayceState {
    constructor(weapon) {
        this.weapon = weapon;
    }
    setJayce(jayce) {
        this.jayce = jayce;
    }
    getWeapon() {
        return this.weapon;
    }
}
class JayceHammer extends JayceState {
    constructor() {
        super('Hammer');
    }
    useQ() {
        console.log('Used: TO THE SKIES!');
    }
    useW() {
        console.log('Used: LIGHTNING FIELD');
    }
    useE() {
        console.log('Used: THUNDERING BLOW');
    }
    useR() {
        var _a;
        console.log('Used: Change to Cannon');
        (_a = this.jayce) === null || _a === void 0 ? void 0 : _a.changeWeapon(new JayceCannon());
    }
}
class JayceCannon extends JayceState {
    constructor() {
        super('Cannon');
    }
    useQ() {
        console.log('Used: SHOCK BLAST');
    }
    useW() {
        console.log('Used: HYPER CHARGE');
    }
    useE() {
        console.log('Used: ACCELERATION GATE');
    }
    useR() {
        var _a;
        console.log('Used: Change to Hammer');
        (_a = this.jayce) === null || _a === void 0 ? void 0 : _a.changeWeapon(new JayceHammer());
    }
}
function main() {
    const jayceHammer = new JayceHammer();
    const jayce = new Jayce(jayceHammer);
    jayceHammer.setJayce(jayce);
    jayce.useQ();
    jayce.useR();
    jayce.useQ();
}
main();
