"use strict";
class Weapon {
    constructor(owner) {
        this.damage = 100;
        this.owner = owner;
    }
}
class Health {
    constructor(amount) {
        this.amount = amount;
    }
}
class MinionPrototype {
    constructor() {
        this.id = Math.ceil(Math.random() * 10000);
        this.health = new Health(500);
        this.weapon = new Weapon(this);
    }
    clone() {
        const clone = Object.create(this);
        clone.health = Object.create(this.health);
        clone.weapon = Object.assign(Object.assign({}, this.weapon), { prototype: Object.assign({}, this) });
        return clone;
    }
}
function main() {
    const minionOne = new MinionPrototype();
    const minionTwo = minionOne.clone();
    console.log('Is an ID equal: ' + (minionOne.id === minionTwo.id));
    console.log('Is an health equal: ' + (minionOne.health.amount === minionOne.health.amount));
    console.log('Is an Onwer equal: ' + (minionOne.weapon.owner === minionOne.weapon.owner));
}
main();
