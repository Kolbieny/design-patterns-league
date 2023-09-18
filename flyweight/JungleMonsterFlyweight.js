"use strict";
class JungleMonsterFlyweight {
    constructor(jungleMonsterType) {
        this.jungleMonsterType = jungleMonsterType;
    }
    getJungleMonsterType() {
        return this.jungleMonsterType;
    }
    spawn(x, y) {
        console.log(`
            Spawned a ${this.jungleMonsterType.side} side minion 
            with ${this.jungleMonsterType.health.toString()} HP 
            and ${this.jungleMonsterType.damage.toString()} AD 
            at position (${x}, ${y}). 
        `);
    }
}
//Singleton factory
class JungleMonsterFactory {
    constructor() {
        this.jungleMonsterSavedTypes = [];
    }
    static getInstance() {
        if (!JungleMonsterFactory.instance) {
            JungleMonsterFactory.instance = new JungleMonsterFactory();
        }
        return JungleMonsterFactory.instance;
    }
    getJungleMonsterSavedType(type) {
        const jungleMonsterSavedType = this.jungleMonsterSavedTypes.find(existingType => JSON.stringify(existingType.getJungleMonsterType()) === JSON.stringify(type));
        if (jungleMonsterSavedType instanceof JungleMonsterFlyweight) {
            console.log('The data provided for this jungle monster exist');
            return jungleMonsterSavedType;
        }
        else {
            console.log('The data provided for this jungle are created');
            const jungleMonsterNewType = new JungleMonsterFlyweight(type);
            this.jungleMonsterSavedTypes.push(jungleMonsterNewType);
            return jungleMonsterNewType;
        }
    }
}
class JungleMonster {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = JungleMonsterFactory.getInstance().getJungleMonsterSavedType(type);
    }
    spawn() {
        this.type.spawn(this.x, this.y);
    }
}
function main() {
    const monster1 = new JungleMonster(1, 1, { side: "blue", health: 100, damage: 50 });
    const monster2 = new JungleMonster(2, 2, { side: "red", health: 150, damage: 30 });
    const monster3 = new JungleMonster(3, 3, { side: "blue", health: 100, damage: 50 });
    monster1.spawn();
    monster2.spawn();
    monster3.spawn();
}
main();
