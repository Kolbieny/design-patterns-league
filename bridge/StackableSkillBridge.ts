//Abstract part has attribute which refers to the connected bridge.
//Its duty is to define usable business methods
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

//Optionally, instances could implement their own business methods
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

//Interface defines methods which have different role from the abstract part
//Casual Bridge interface contains sub-methods used for abstract part business methods
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