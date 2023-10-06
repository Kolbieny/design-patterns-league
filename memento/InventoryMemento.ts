class Inventory {
    private items: Array<string>;

    constructor(items: Array<string> = []) {
        this.items = items;
    }

    public getItems(): Array<string> {
        return this.items;
    }

    public addItem(item: string): void {
        this.items.push(item);
    }

    public getMemento(): InventoryMemento {
        return new InventoryMemento(structuredClone(this.items));
    }

    public restore(memento: InventoryMemento): this {
        this.items = memento.getItems();
        return this;
    }
}

class InventoryMemento {
    private readonly items: Array<string>;

    constructor(items: Array<string> = []) {
        this.items = items;
    }

    public getItems(): Array<string> {
        return this.items;
    }
}

class InventoryManager {
    private inventoryMementos: InventoryMemento[] = [];

    private inventory: Inventory;

    constructor(inventory: Inventory) {
        this.inventory = inventory;
    }

    public getInventoryItems(): void {
        console.log(`Items: [${this.getInventoryItemsString(this.inventory)}]`)
    }

    public addItem(item: string): void {
        this.setMemento();
        this.inventory.addItem(item);
    }

    public undo(): void {
        if (!this.inventoryMementos.length) {
            console.log('No undo found!');
            return;
        }

        const memento = this.inventoryMementos.pop();

        const restoredInventory = this.inventory.restore(memento!);
        console.log(`Restored inventory values: [${this.getInventoryItemsString(restoredInventory)}]`)
    }

    private setMemento(): void {
        this.inventoryMementos.push(this.inventory.getMemento());
    }

    private getInventoryItemsString(inventory: Inventory): string {
        return inventory.getItems().join(", ");
    }
}

function main() {
    const inventoryManager = new InventoryManager(new Inventory());
    inventoryManager.addItem("Doran's blade");
    inventoryManager.addItem("Long sword");
    inventoryManager.getInventoryItems();

    inventoryManager.undo();
    inventoryManager.addItem("Dagger");
    inventoryManager.getInventoryItems();
}

main();