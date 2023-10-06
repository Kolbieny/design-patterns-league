class Jayce {
    private state!: JayceState;

    constructor(state: JayceState) {
        this.changeWeapon(state);
    }

    public changeWeapon(state: JayceState): void {
        console.log('Changing to weapon: ' + state.getWeapon());
        this.state = state;
    }

    public useQ(): void {
        this.state.useQ();
    }

    public useR(): void {
        this.state.useR();
    }
}

abstract class JayceState {
    protected jayce: Jayce|undefined;
    public weapon: string;

    protected constructor(weapon: string) {
        this.weapon = weapon;
    }

    public setJayce(jayce: Jayce): void
    {
        this.jayce = jayce;
    }

    public getWeapon(): string
    {
        return this.weapon;
    }

    public abstract useQ(): void;


    public abstract useR(): void;
}

class JayceHammer extends JayceState {
    constructor() {
        super('Hammer');
    }

    public useQ(): void {
        console.log('Used: TO THE SKIES!');
    }

    public useR(): void {
        console.log('Used: Change to Cannon');
        this.jayce?.changeWeapon(new JayceCannon());
    }
}

class JayceCannon extends JayceState {
    constructor() {
        super('Cannon');
    }

    public useQ(): void {
        console.log('Used: SHOCK BLAST');
    }

    public useR(): void {
        console.log('Used: Change to Hammer');
        this.jayce?.changeWeapon(new JayceHammer());
    }
}

function main() {
    const jayceHammer = new JayceHammer();
    const jayce = new Jayce(jayceHammer);
    jayceHammer.setJayce(jayce);

    jayce.useQ();
    jayce.useR();
    jayce.useQ();
}

main();