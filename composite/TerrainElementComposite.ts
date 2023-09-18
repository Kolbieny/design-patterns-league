abstract class TerrainElement {
    protected parent?: TerrainElement

    public abstract getPosition(x: Number, y: Number): void;
    public abstract generate(): void;
    setParent(parent: TerrainElement|undefined): void {
        this.parent = parent;
    }
}

class Tree extends TerrainElement {
    protected readonly x: Number;
    protected readonly y: Number;

    constructor(x: Number, y: Number) {
        super();
        this.x = x;
        this.y = y;
    }

    getPosition(x: Number, y: Number): void {
        console.log(x.toString() + ", " + y.toString());
    }

    generate(): void {
        console.log(`Generated at position (${this.x}, ${this.y})`);
    }
}

class TreeWall extends Tree {
    protected z: Number;

    constructor(x: Number, y: Number, z: Number) {
        super(x, y);
        this.z = z;
    }

    generate(): void {
        console.log(`Generated at position (${this.x}, ${this.y}) and height of (${this.z})`);
    }
}

class TerrainElementComposite extends TerrainElement {
    protected items: Tree[];

    constructor() {
        super();
        this.items = [];
    }

    add(item: Tree): void {
        this.items.push(item);
        item.setParent(this);
    }

    remove(item: Tree): void {
        const itemIndex = this.items.indexOf(item);
        if (itemIndex >= 0) {
            this.items.splice(itemIndex, 1);
            item.setParent(undefined);
        }
    }

    getPosition(x: Number, y: Number): void {
        this.items.forEach((item) => {item.getPosition(x, y)});
    }

    generate(): void {
        this.items.forEach((item) => {item.generate()});
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