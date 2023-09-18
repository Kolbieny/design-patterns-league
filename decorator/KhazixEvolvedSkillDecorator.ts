interface KhazixSkill {
    getSkill(): string;
}

class KhazixUnevolvedQSkill {
    public getSkill(): string {
        return "It is an unevolved yet Kha'zix 'Q' skill";
    }
}

abstract class KhazixEvolvedSkillDecorator implements KhazixSkill {
    protected skill: KhazixSkill;

    public constructor(skill: KhazixSkill) {
        this.skill = skill;
    }

    public getSkill(): string {
        return this.skill.getSkill();
    }
}

class KhazixEvolvedQSkill extends KhazixEvolvedSkillDecorator {
    public getSkill(): string {
        return "It is an EVOLVED yet Kha'zix 'Q' skill";
    }
}

function main() {
    const qSkill = new KhazixUnevolvedQSkill();
    const qEvolvedSkill = new KhazixEvolvedQSkill(qSkill);

    console.log(qSkill.getSkill())
    console.log(qEvolvedSkill.getSkill())
}

main()