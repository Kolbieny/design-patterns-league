"use strict";
class SpawnHandler {
    setNext(spawn) {
        this.nextHandler = spawn;
        return spawn;
    }
    nextSpawnHandler() {
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
