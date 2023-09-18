type JungleMonsterType = {
    side: string;
    health: Number;
    damage: Number;
}

class JungleMonsterFlyweight {
    private readonly jungleMonsterType: JungleMonsterType;

    constructor(jungleMonsterType: JungleMonsterType) {
        this.jungleMonsterType = jungleMonsterType;
    }

    public getJungleMonsterType(): JungleMonsterType {
        return this.jungleMonsterType;
    }

    public spawn(x: Number, y: Number): void {
        console.log(`
            Spawned a ${this.jungleMonsterType.side} side minion 
            with ${this.jungleMonsterType.health.toString()} HP 
            and ${this.jungleMonsterType.damage.toString()} AD 
            at position (${x}, ${y}). 
        `)
    }
}

//Singleton factory
class JungleMonsterFactory {
    private static instance: JungleMonsterFactory;

    private jungleMonsterSavedTypes: JungleMonsterFlyweight[];

    private constructor() {
        this.jungleMonsterSavedTypes = [];
    }

    public static getInstance(): JungleMonsterFactory {
        if(!JungleMonsterFactory.instance) {
            JungleMonsterFactory.instance = new JungleMonsterFactory();
        }

        return JungleMonsterFactory.instance;
    }

    public getJungleMonsterSavedType(type: JungleMonsterType): JungleMonsterFlyweight {
        const jungleMonsterSavedType: JungleMonsterFlyweight|undefined = this.jungleMonsterSavedTypes.find(
            existingType => JSON.stringify(existingType.getJungleMonsterType()) === JSON.stringify(type)
        );

        if (jungleMonsterSavedType instanceof JungleMonsterFlyweight) {
            console.log('The data provided for this jungle monster exist');
            return jungleMonsterSavedType;
        } else {
            console.log('The data provided for this jungle are created');
            const jungleMonsterNewType = new JungleMonsterFlyweight(type);
            this.jungleMonsterSavedTypes.push(jungleMonsterNewType);
            return jungleMonsterNewType;
        }
    }
}

class JungleMonster {
    private readonly x: Number;
    private readonly y: Number;
    private type: JungleMonsterFlyweight;

    constructor(x: Number, y: Number, type: JungleMonsterType) {
        this.x = x;
        this.y = y;
        this.type = JungleMonsterFactory.getInstance().getJungleMonsterSavedType(type);
    }

    public spawn(): void {
        this.type.spawn(this.x, this.y);
    }
}

function main() {
    const monster1 = new JungleMonster(1, 1, {side: "blue", health: 100, damage: 50});
    const monster2 = new JungleMonster(2, 2, {side: "red", health: 150, damage: 30});
    const monster3 = new JungleMonster(3, 3, {side: "blue", health: 100, damage: 50});

    monster1.spawn();
    monster2.spawn();
    monster3.spawn();
}

main();