interface GameEventCommand {
    execute(): string;
}

abstract class Drake {
    private readonly type: string;

    protected constructor(type: string) {
        this.type = type
    }
    setSpawn(): string {
        return `Spawning the ${this.type} Drake.`;
    }
}

class InfernalDrake extends Drake {
    constructor() {
        super('Infernal');
    }
}

class BaronSpawnCommand implements GameEventCommand {
    public execute(): string {
        return `Spawning the Baron Nashor.`;
    }
}

class DrakeSpawnCommand implements GameEventCommand {
    private drake: Drake;

    constructor(drake: Drake) {
        this.drake = drake;
    }

    public execute(): string {
        return this.drake.setSpawn();
    }
}

class GameEventInvoker {
    private onGameTwoThirty: GameEventCommand|undefined;
    private onGameTwenty: GameEventCommand|undefined;

    public setOnGameTwoThirty(command: GameEventCommand): void {
        this.onGameTwoThirty = command;
    }

    public setOnGameTwenty(command: GameEventCommand): void {
        this.onGameTwenty = command;
    }

    private isCommand(object: any): object is GameEventCommand {
        return object.execute !== undefined;
    }

    public configureGameEvents(): void {
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

function main(): void {
    const invoker = new GameEventInvoker();
    invoker.setOnGameTwoThirty(new DrakeSpawnCommand(new InfernalDrake()));
    invoker.setOnGameTwenty(new BaronSpawnCommand());

    invoker.configureGameEvents();
}

main();