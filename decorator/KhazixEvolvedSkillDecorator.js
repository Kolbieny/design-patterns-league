"use strict";
class KhazixUnevolvedQSkill {
    getSkill() {
        return "It is an unevolved yet Kha'zix 'Q' skill";
    }
}
class KhazixEvolvedSkillDecorator {
    constructor(skill) {
        this.skill = skill;
    }
    getSkill() {
        return this.skill.getSkill();
    }
}
class KhazixEvolvedQSkill extends KhazixEvolvedSkillDecorator {
    getSkill() {
        return "It is an EVOLVED yet Kha'zix 'Q' skill";
    }
}
function main() {
    const qSkill = new KhazixUnevolvedQSkill();
    const qEvolvedSkill = new KhazixEvolvedQSkill(qSkill);
    console.log(qSkill.getSkill());
    console.log(qEvolvedSkill.getSkill());
}
main();
