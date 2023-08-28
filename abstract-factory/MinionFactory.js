"use strict";
class BlueSideMinionFactory {
    createMageMinion() {
        return new BlueSideMageMinion();
    }
    createSoldierMinion() {
        return new BlueSideSoldierMinion();
    }
}
class RedSideMinionFactory {
    createMageMinion() {
        return new RedSideMageMinion();
    }
    createSoldierMinion() {
        return new RedSideSoldierMinion();
    }
}
class BlueSideMageMinion {
    throwSpell() {
        return "Im blue mage minion and Im throwing a spell";
    }
}
class BlueSideSoldierMinion {
    hitBySword() {
        return "Im blue soldier minion and Im hitting by sword";
    }
    hitBeforeMageMinion(mageMinion) {
        const mageMinionQuote = mageMinion.throwSpell();
        return mageMinionQuote.slice(0, 26) + "... " + "\nSTFU, IM HITTING FIRST";
    }
}
class RedSideMageMinion {
    throwSpell() {
        return "Im red mage minion and Im throwing a spell";
    }
}
class RedSideSoldierMinion {
    hitBySword() {
        return "Im red soldier minion and Im hitting by sword";
    }
    hitBeforeMageMinion(mageMinion) {
        const mageMinionQuote = mageMinion.throwSpell();
        return mageMinionQuote.slice(0, 26) + "... " + "\nSTFU, IM HITTING FIRST";
    }
}
function main(factory) {
    const mageMinion = factory.createMageMinion();
    const soldierMinion = factory.createSoldierMinion();
    console.log(soldierMinion.hitBySword());
    console.log(soldierMinion.hitBeforeMageMinion(mageMinion));
}
main(new RedSideMinionFactory());
