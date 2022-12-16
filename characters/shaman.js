const Character = require("./character")
const Pet  = require("./pet"); // Pulling "Pet" class factory in pet.js file
const thunderthigh = require("../weapons/thunderthigh")
const lightHeal = require("../spells/lightheal")

class Shaman extends Character{
    constructor (name){
       super(name, "shaman", 6, 6, 8, 3, 100, 100);
       const fireElemental = new Pet ("Fire Elemental", 4);
       this.pets.push(fireElemental);
       this.weapons.push(thunderthigh);
       this.spells.push(lightHeal);
    }

}

module.exports = Shaman;