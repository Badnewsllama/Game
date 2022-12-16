//DAY 6 HMW
//so now, we will set up a file structure to make a game!
//PART1: Create a new folder called game. (remember to cd into it if youre not in it in your terminal, to run node!)

//PART 3:  Create a game.js Import the Mage class using require, and create a new Mage with whatever name you want. Log it to the console.

const Mage = require("./characters/mage"); // Pulling "Mage" class factory in mage.js file
const Shaman = require("./characters/shaman"); // Pulling "Medic" class factory in medic.js file
const Warlock = require("./characters/warlock"); // Pulling "Warlock" class factory in warlock.js file
const Pet = require("./characters/pet");

const mage = new Mage ("Merlin");
console.log(mage);

const shaman = new Shaman  ("Pikachu")
console.log(shaman);

const warlock = new Warlock ("Escobar")
console.log(warlock);

const pet = new Pet ("Scooby")
console.log(pet);

shaman.levelUp();
console.log(shaman);

mage.levelUp();
console.log(mage);

warlock.summonPet("imp");
console.log(warlock);

shaman.summonPet("Fire Elemental");
console.log(shaman);

console.log(shaman.getDamage());

warlock.equipWeapon("thunderthigh");
console.log(warlock);