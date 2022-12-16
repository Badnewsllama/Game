
const Character = require("./character")
const Pet  = require("./pet"); // Pulling "Pet" class factory in pet.js file

class Warlock extends Character{
    constructor (name){
        super(name, "warlock", 3, 3, 7, 5, 200, 100);
        const racoon = new Pet ("racoon", 3);
        this.pets.push(racoon);
    }

}

module.exports = Warlock;