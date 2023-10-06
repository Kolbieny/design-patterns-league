"use strict";
class Inventory {
    constructor(items = []) {
        this.items = items;
    }
    getItems() {
        return this.items;
    }
    addItem(item) {
        this.items.push(item);
    }
    getMemento() {
        return new InventoryMemento(structuredClone(this.items));
    }
    restore(memento) {
        this.items = memento.getItems();
        return this;
    }
}
class InventoryMemento {
    constructor(items = []) {
        this.items = items;
    }
    getItems() {
        return this.items;
    }
}
class InventoryManager {
    constructor(inventory) {
        this.inventoryMementos = [];
        this.inventory = inventory;
    }
    getInventoryItems() {
        console.log(`Items: [${this.getInventoryItemsString(this.inventory)}]`);
    }
    addItem(item) {
        this.setMemento();
        this.inventory.addItem(item);
    }
    undo() {
        if (!this.inventoryMementos.length) {
            console.log('No undo found!');
            return;
        }
        const memento = this.inventoryMementos.pop();
        const restoredInventory = this.inventory.restore(memento);
        console.log(`Restored inventory values: [${this.getInventoryItemsString(restoredInventory)}]`);
    }
    setMemento() {
        this.inventoryMementos.push(this.inventory.getMemento());
    }
    getInventoryItemsString(inventory) {
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
