interface SpawningChain {
    setNext(spawn: SpawningChain): SpawningChain;
    spawn(): void;
}

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
