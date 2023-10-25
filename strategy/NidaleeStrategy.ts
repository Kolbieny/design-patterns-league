//Context class contains both constructor and set method to change strategy
class Nidalee {
    private form: NidaleeStrategy;

    constructor(form: NidaleeStrategy) {
        this.form = form;
    }

    public setForm(form: NidaleeStrategy) {
        this.form = form;
    }

    public useQ(): void {
        this.form.useQ();
    }
}


interface NidaleeStrategy {
    useQ(): void;

}

class NidaleeHumanStrategy {
    public useQ(): void
    {
        console.log('Throw the spear!');
    }
}

class NidaleePantherStrategy {
    public useQ(): void
    {
        console.log('Scratch a guy!');
    }
}

function main() {
    const nidalee = new Nidalee(new NidaleeHumanStrategy());
    nidalee.useQ();
    nidalee.setForm(new NidaleePantherStrategy());
    nidalee.useQ();
}

main();