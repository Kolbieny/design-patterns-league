interface MinionFactory {
    createMageMinion(): MageMinion;
    createSoldierMinion(): SoldierMinion;
}

//Implementing base method of the product is crucial
interface MageMinion {
    throwSpell(): string
}

interface SoldierMinion {
    hitBySword(): string
    hitBeforeMageMinion(mageMinion: MageMinion): string;
}

//Abstract factory creates different products but considered as related.
//The variants of these products should not be related with the factory itself.
//It can be imagined as a two-dimensional chart, where the dimensions create specific configuration of a product.
class BlueSideMinionFactory implements MinionFactory {
    public createMageMinion(): MageMinion {
        return new BlueSideMageMinion();
    }

    public createSoldierMinion(): SoldierMinion {
        return new BlueSideSoldierMinion();
    }
}

class RedSideMinionFactory implements MinionFactory {
    public createMageMinion(): MageMinion {
        return new RedSideMageMinion();
    }

    public createSoldierMinion(): SoldierMinion {
        return new RedSideSoldierMinion();
    }
}

class BlueSideMageMinion implements MageMinion {
    public throwSpell(): string {
        return "Im blue mage minion and Im throwing a spell"
    }
}

class BlueSideSoldierMinion implements SoldierMinion {
    public hitBySword(): string {
        return "Im blue soldier minion and Im hitting by sword"
    }

    public hitBeforeMageMinion(mageMinion: MageMinion): string {
        const mageMinionQuote = mageMinion.throwSpell();
        return mageMinionQuote.slice(0, 26) + "... " + "\nSTFU, IM HITTING FIRST"
    }
}

class RedSideMageMinion implements MageMinion {
    public throwSpell(): string {
        return "Im red mage minion and Im throwing a spell"
    }
}

class RedSideSoldierMinion implements SoldierMinion {
    public hitBySword(): string {
        return "Im red soldier minion and Im hitting by sword"
    }

    public hitBeforeMageMinion(mageMinion: MageMinion): string {
        const mageMinionQuote = mageMinion.throwSpell();
        return mageMinionQuote.slice(0, 26) + "... " + "\nSTFU, IM HITTING FIRST"
    }
}

function main(factory: MinionFactory) {
    const mageMinion = factory.createMageMinion();
    const soldierMinion = factory.createSoldierMinion();

    console.log(soldierMinion.hitBySword())
    console.log(soldierMinion.hitBeforeMageMinion(mageMinion));
}

main(new RedSideMinionFactory());

