class ChampionSkillset {
    protected stackableSkill: StackableSkillBridge;

    constructor(stackableSkill: StackableSkillBridge) {
        this.stackableSkill = stackableSkill;
    }

    public getSkill(): string {
        const stackAmount = this.stackableSkill.getStackAmount();
        return `This champion has ${stackAmount} stacks on his stackable skill`;
    }
}

class ToplanerSkillset extends ChampionSkillset {
    public getSkill(): string {
        const stackAmount = this.stackableSkill.getStackAmount();
        return `This top lane champion has ${stackAmount} stacks on his stackable skill`;
    }
}

class ChogathR implements StackableSkillBridge {
    public getStackAmount(): string {
        return "6";
    }
}

class NasusQ implements StackableSkillBridge {
    public getStackAmount(): string {
        return "230";
    }
}


interface StackableSkillBridge {
    getStackAmount(): string;
}

function main() {
    const chogathSkills = new ChampionSkillset(new ChogathR());
    const nasusSkills = new ToplanerSkillset(new NasusQ());

    console.log(chogathSkills.getSkill());
    console.log(nasusSkills.getSkill());
}

main()