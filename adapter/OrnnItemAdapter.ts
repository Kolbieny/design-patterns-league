//Target class is extended in Adapter
class TrinityForce {
    getTrinityForceValues() {
        return "Trinity Force gives 300 HP, 40 AD, 33% Attack Speed and 10 Ability Haste";
    }
}

//Adaptee is the object that behaviour we want to achieve.
//The extension it offers is used inside the Adapter
class InfinityForce {
    getInfinityForceValues() {
        return "Infinity (upgraded Trinity) Force gives 400 HP, 50 AD, 45% Attack Speed and 15 Ability Haste";
    }
}

//Adapter extends Target
class OrnnItemAdapter extends TrinityForce {
    private infinityForce: InfinityForce;

    constructor(infinityForce: InfinityForce) {
        super();
        this.infinityForce = infinityForce;
    }

    public getTrinityForceValues(): string {
        return this.infinityForce.getInfinityForceValues();
    }
}

//The example is kinda messy.
//Ornn Item Adapter uses Trinity Force interface to use its method.
//The adaptee is provided in Adapter's constructor
function main() {
    const adaptee = new InfinityForce();
    const adapter = new OrnnItemAdapter(adaptee);

    console.log(adapter.getTrinityForceValues());
}

main()