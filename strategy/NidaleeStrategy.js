"use strict";
class Nidalee {
    constructor(form) {
        this.form = form;
    }
    setForm(form) {
        this.form = form;
    }
    useQ() {
        this.form.useQ();
    }
}
class NidaleeHumanStrategy {
    useQ() {
        console.log('Throw the spear!');
    }
}
class NidaleePantherStrategy {
    useQ() {
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
