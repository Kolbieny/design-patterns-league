"use strict";
class BlackCleaverBuilder {
    constructor() {
        this.reset();
    }
    reset() {
        this.item = new BlackCleaver();
    }
    produceItem1() {
        this.item.parts.push('Hammer');
    }
    produceItem2() {
        this.item.parts.push('Sword');
    }
    produceItem3() {
        this.item.parts.push('Gem');
    }
    getItem() {
        const result = this.item;
        this.reset();
        return result;
    }
}
class BlackCleaver {
    constructor() {
        this.parts = [];
    }
    listParts() {
        console.log(`Black cleaver: ${this.parts.join(', ')}`);
    }
}
class Player {
    setItemBuilder(itemBuilder) {
        this.itemBuilder = itemBuilder;
    }
    buildBlackCleaver() {
        this.itemBuilder.produceItem1();
        this.itemBuilder.produceItem2();
        this.itemBuilder.produceItem3();
    }
}
function main(player) {
    const blackCleaver = new BlackCleaverBuilder();
    player.setItemBuilder(blackCleaver);
    player.buildBlackCleaver();
    blackCleaver.getItem().listParts();
}
main(new Player());
