"use strict";
class Drake {
    constructor(type) {
        this.type = type;
    }
    setSpawn() {
        return `Spawning the ${this.type} Drake.`;
    }
}
class InfernalDrake extends Drake {
    constructor() {
        super('Infernal');
    }
}
class BaronSpawnCommand {
    execute() {
        return `Spawning the Baron Nashor.`;
    }
}
class DrakeSpawnCommand {
    constructor(drake) {
        this.drake = drake;
    }
    execute() {
        return this.drake.setSpawn();
    }
}
class GameEventInvoker {
    setOnGameTwoThirty(command) {
        this.onGameTwoThirty = command;
    }
    setOnGameTwenty(command) {
        this.onGameTwenty = command;
    }
    isCommand(object) {
        return object.execute !== undefined;
    }
    configureGameEvents() {
        if (this.isCommand(this.onGameTwoThirty)) {
            const gameTwoThirtyEvent = this.onGameTwoThirty.execute();
            console.log('This event will be executed at 2:30 => ' + gameTwoThirtyEvent);
        }
        if (this.isCommand(this.onGameTwenty)) {
            const gameTwentyEvent = this.onGameTwenty.execute();
            console.log('This event will be executed at 2:30 => ' + gameTwentyEvent);
        }
    }
}
function main() {
    const invoker = new GameEventInvoker();
    invoker.setOnGameTwoThirty(new DrakeSpawnCommand(new InfernalDrake()));
    invoker.setOnGameTwenty(new BaronSpawnCommand());
    invoker.configureGameEvents();
}
main();
