"use strict";
class ChampionSkillset {
    constructor(stackableSkill) {
        this.stackableSkill = stackableSkill;
    }
    getSkill() {
        const stackAmount = this.stackableSkill.getStackAmount();
        return `This champion has ${stackAmount} stacks on his stackable skill`;
    }
}
class ToplanerSkillset extends ChampionSkillset {
    getSkill() {
        const stackAmount = this.stackableSkill.getStackAmount();
        return `This top lane champion has ${stackAmount} stacks on his stackable skill`;
    }
}
class ChogathR {
    getStackAmount() {
        return "6";
    }
}
class NasusQ {
    getStackAmount() {
        return "230";
    }
}
function main() {
    const chogathSkills = new ChampionSkillset(new ChogathR());
    const nasusSkills = new ToplanerSkillset(new NasusQ());
    console.log(chogathSkills.getSkill());
    console.log(nasusSkills.getSkill());
}
main();
