//Interface defines methods, which can be modified with Decorator
interface KhazixSkill {
    getSkill(): string;
}

//Concrete components deliver implementation
class KhazixUnevolvedQSkill {
    public getSkill(): string {
        return "It is an unevolved yet Kha'zix 'Q' skill";
    }
}

//Decorator has the same interface as the other components
abstract class KhazixEvolvedSkillDecorator implements KhazixSkill {
    protected skill: KhazixSkill;

    public constructor(skill: KhazixSkill) {
        this.skill = skill;
    }

    public getSkill(): string {
        return this.skill.getSkill();
    }
}

//Decorator instance overrides (or enhance) methods
//Decorator has access (from abstract) to decorated component
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