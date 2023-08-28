class Weapon {
    public damage = 100;
    public owner: MinionPrototype;
    public name?: string;

    constructor(owner: MinionPrototype) {
        this.owner = owner;
    }
}

class Health {
    public amount: Number;

    constructor(amount: Number) {
        this.amount = amount;
    }

}

class MinionPrototype {
    public id: Number;
    public health: Health;
    public weapon: Weapon;

    constructor() {
        this.id = Math.ceil(Math.random() * 10000);
        this.health = new Health(500);
        this.weapon = new Weapon(this);
    }

    public clone(): this {
        const clone = Object.create(this);
        clone.health = Object.create(this.health);
        clone.weapon = {
            ...this.weapon,
            prototype: {...this}
        }

        return clone;
    }
}

function main() {
    const minionOne = new MinionPrototype();
    const minionTwo = minionOne.clone();

    console.log('Is an ID equal: ' + (minionOne.id === minionTwo.id))
    console.log('Is an health equal: ' + (minionOne.health.amount === minionTwo.health.amount))
    console.log('Is an Onwer equal: ' + (minionOne.weapon.owner === minionTwo.weapon.owner))
}

main();
