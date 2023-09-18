"use strict";
class TerrainElement {
    setParent(parent) {
        this.parent = parent;
    }
}
class Tree extends TerrainElement {
    constructor(x, y) {
        super();
        this.x = x;
        this.y = y;
    }
    getPosition(x, y) {
        console.log(x.toString() + ", " + y.toString());
    }
    generate() {
        console.log(`Generated at position (${this.x}, ${this.y})`);
    }
}
class TreeWall extends Tree {
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }
    generate() {
        console.log(`Generated at position (${this.x}, ${this.y}) and height of (${this.z})`);
    }
}
class TerrainElementComposite extends TerrainElement {
    constructor() {
        super();
        this.items = [];
    }
    add(item) {
        this.items.push(item);
        item.setParent(this);
    }
    remove(item) {
        const itemIndex = this.items.indexOf(item);
        if (itemIndex >= 0) {
            this.items.splice(itemIndex, 1);
            item.setParent(undefined);
        }
    }
    getPosition(x, y) {
        this.items.forEach((item) => { item.getPosition(x, y); });
    }
    generate() {
        this.items.forEach((item) => { item.generate(); });
    }
}
function main() {
    const tree1 = new Tree(1, 2);
    const tree2 = new Tree(3, 4);
    const tree3 = new Tree(5, 6);
    const treeWall = new TreeWall(1, 4, 2);
    const composite = new TerrainElementComposite();
    composite.add(tree1);
    composite.add(tree2);
    composite.add(tree3);
    composite.add(treeWall);
    composite.remove(tree3);
    composite.generate();
}
main();
