"use strict";
class InfinityForce {
    getInfinityForceValues() {
        return "Trinity Force gives 300 HP, 40 AD, 33% Attack Speed and 10 Ability Haste";
    }
}
class TrinityForce {
    getTrinityForceValues() {
        return "Trinity Force gives 400 HP, 50 AD, 45% Attack Speed and 15 Ability Haste";
    }
}
class OrnnItemAdapter extends InfinityForce {
    constructor(trinityForce) {
        super();
        this.trinityForce = trinityForce;
    }
    getInfinityForceValues() {
        return this.trinityForce.getTrinityForceValues();
    }
}
function main() {
    const adaptee = new TrinityForce();
    const adapter = new OrnnItemAdapter(adaptee);
    console.log(adapter.getInfinityForceValues());
}
main();
