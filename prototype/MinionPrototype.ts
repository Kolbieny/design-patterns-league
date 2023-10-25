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

//Prototype provides cloning method to duplicate its instance to new object
//Class which can extend the prototype may use in constructor a prototype instance.
//It can be cloned then through constructor
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
    const minion = new MinionPrototype();
    const minionClone = minion.clone();

    console.log('Are minions equal in memory: ' + (minion === minionClone))
}

main();
