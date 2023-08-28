"use strict";
class LeagueMapFactory {
    buyItem() {
        const item = this.getItem();
        console.log(`Bought: ${item}`);
    }
    getItem() {
        return this.getShop().getItem();
    }
}
class SummonersRiftShop {
    getItem() {
        return "Hullbreaker";
    }
}
class HowlingAbyssShop {
    getItem() {
        return "Guardian's Horn";
    }
}
class SummonersRift extends LeagueMapFactory {
    getShop() {
        return new SummonersRiftShop();
    }
}
class HowlingAbyss extends LeagueMapFactory {
    getShop() {
        return new HowlingAbyssShop();
    }
}
function main(leagueMap) {
    leagueMap.buyItem();
}
main(new SummonersRift());
main(new HowlingAbyss());
