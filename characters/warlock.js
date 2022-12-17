const Character = require("./character")
const Pet  = require("./pet"); // Pulling "Pet" class factory in pet.js file
const config = require("../config/classNames");

class Warlock extends Character{
    constructor (name){
        super(name, config.classNames.WarlockClassName, 3, 3, 7, 5, 200, 100);
        const racoon = new Pet ("racoon", 3);
        this.pets.push(racoon);
    }

}

module.exports = Warlock;