//Builder describes set of steps to product a product
interface ItemBuilder {
    produceItem1(): void
    produceItem2(): void
    produceItem3(): void
}

class BlackCleaverBuilder implements ItemBuilder {
    private item!: BlackCleaver;

    //New builder instance should contain empty product (object)
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

    //Builder instances may use methods different from interface.
    //It is common to reset Builder after getting product, but not necessary
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

//Director is responsible for describing steps of product creation by Builder.
//Director contains the Builder interface that allows him to switch between Builder instances.
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

