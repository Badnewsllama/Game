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

//shaman.summonPet("pangolin");
//console.log(shaman);

//shaman.equipWeapon("cursedDagger");
//console.log(shaman);

//shaman.useSpell("disrupt");
//console.log(shaman);

shaman.equipWeapon("cursedDagger");
console.log(shaman.getDamage("cursedDagger"));
console.log(mage.getDamage());
console.log(warlock.getDamage());