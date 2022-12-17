const Character = require("./character")
const Pet  = require("./pet"); // Pulling "Pet" class factory in pet.js file
const cursedDagger = require("../weapons/curseddagger")
const disrupt = require("../spells/disrupt");
const config = require("../config/classNames");

class Shaman extends Character{
    constructor (name){
       super(name, config.classNames.ShamanClassName, 6, 6, 8, 3, 100, 100);
       const pangolin = new Pet ("pangolin", 4);
       this.pets.push(pangolin);
       this.weapons.push(cursedDagger);
       this.spells.push(disrupt);
    }

}

module.exports = Shaman;