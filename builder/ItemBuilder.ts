interface ItemBuilder {
    produceItem1(): void
    produceItem2(): void
    produceItem3(): void
}

class BlackCleaverBuilder implements ItemBuilder {
    private item!: BlackCleaver;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.item = new BlackCleaver();
    }

    public produceItem1(): void {
        this.item.parts.push('Hammer');
    }

    public produceItem2(): void {
        this.item.parts.push('Sword');
    }

    public produceItem3(): void {
        this.item.parts.push('Gem');
    }

    public getItem(): BlackCleaver {
        const result = this.item;
        this.reset();
        return result;
    }
}

class BlackCleaver {
    public parts: string[] = [];
    public listParts(): void {
        console.log(`Black cleaver: ${this.parts.join(', ')}`);
    }
}

class Player {
    private itemBuilder!: ItemBuilder;

    public setItemBuilder(itemBuilder: ItemBuilder): void {
        this.itemBuilder = itemBuilder;
    }

    public buildBlackCleaver(): void {
        this.itemBuilder.produceItem1();
        this.itemBuilder.produceItem2();
        this.itemBuilder.produceItem3();
    }
}

function main(player: Player) {
    const blackCleaver = new BlackCleaverBuilder();
    player.setItemBuilder(blackCleaver);
    player.buildBlackCleaver();
    blackCleaver.getItem().listParts()
}

main(new Player());

