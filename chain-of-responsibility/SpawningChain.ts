//Interface defines call methods
interface SpawningChain {
    setNext(spawn: SpawningChain): SpawningChain;
    spawn(): void;
}

//Each element in the chain extends the abstract
//It is also possible to create a container that stores handlers. It would extend this abstract
//Container functionalities are responsible for chain configuration
//In this example, chain is defined by setNext() and nextSpawnHandler() method
abstract class SpawnHandler implements SpawningChain {
    protected nextHandler?: SpawningChain;

    abstract spawn(): void;

    public setNext(spawn: SpawningChain): SpawningChain {
        this.nextHandler = spawn;
        return spawn;
    }

    protected nextSpawnHandler(): void {
        if (this.nextHandler instanceof SpawnHandler) {
            this.nextHandler.spawn();
        }
    }
}

//Components may extend the functionalities
class MinionsSpawnHandler extends SpawnHandler {
    spawn() {
        console.log('Spawning minions...');
        this.nextSpawnHandler();
    }
}

class JungleMonstersSpawnHandler extends SpawnHandler {
    spawn() {
        console.log('Spawning jungle monsters...');
        this.nextSpawnHandler();
    }
}

function main() {
    const minionsSpawnHandler = new MinionsSpawnHandler();
    const jungleMonstersSpawnHandler = new JungleMonstersSpawnHandler();

    minionsSpawnHandler.setNext(jungleMonstersSpawnHandler);

    minionsSpawnHandler.spawn();
}

main();
