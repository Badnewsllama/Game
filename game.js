const Mage = require("./characters/mage"); // Pulling "Mage" class factory in mage.js file
const Shaman = require("./characters/shaman"); // Pulling "Medic" class factory in medic.js file
const Warlock = require("./characters/warlock"); // Pulling "Warlock" class factory in warlock.js file
const Pet = require("./characters/pet");

const config = require("./config/config");
const mobs = require("./mobs/mobs");

const prompt = require("prompt-promise");
const { classNames } = require("./config/config");


// const mage = new Mage ("Merlin");
// console.log(mage);

// const shaman = new Shaman  ("Pikachu")
// console.log(shaman);

// const warlock = new Warlock ("Escobar")
// console.log(warlock);

//game loop will start and run our game, initializing everything it needs
//to spawn an instance of our game.
//we want to prompt the user to make decisions, so we need to use a prompting library,


async function gameLoop () {
    console.log("Bienvenidos a los " + config.gameName);
    console.log(".............................................");
//in my gameloop, at the start, i want to get the class choice from the user.
//they can pick shaman, warlock or mage.

//i'm going to store my character in this varaible. once i pick a class
//i will create that class, and put it in the character variable.
let character;

    const classChoice = await prompt ("Select your class: shaman, warlock or mage\n");
    console.log("Your class choice is: " + classChoice);
    console.log(".............................................");
    if (classChoice === config.classNames.MageClassName){
        character = new Mage("Llama");
    } else if (classChoice === config.classNames.ShamanClassName){
        character = new Shaman("Llama");
    } else if (classChoice === config.classNames.WarlockClassName){
        character = new Warlock("Llama");
    } else {
        throw Error ("You typed a class that is not available in this version of the game")
    }

    


//spawn a random mob, then lets prompt to fight it.
//lets just take the first mob in the array, then if we beat it, we can fight the second one.

let mob = mobs[0]; //this should be the goblin. mobs[1] should be the capybara, mob [2] should be the panda.
//console.log("A wild " + mob.name + " appears");
//console.log(mob.name + " has " + mob.health + " health");

while(character.health > 0 && mob.health > 0){
    //while BOTH my character AND the mob im fighting both have health, we fight.
    //when ONE of them stops having health, ie: it's below 0 or equal to 0, this block will stop running.
    console.log("Your character's attacks");
    console.log("Standard class attack = " + character.attack);
    console.log("Special abilities : ")
    console.log(character.spells);
    console.log(character.pets);
    console.log(character.weapons);//here I lay out character's available attacks.
    console.log(".............................................");

        const walkOrStand = await prompt ("would you like to fight or stand?\n")// creating a prompt that will need development but for now just a pause 
        console.log("You chose to: " + walkOrStand);
        console.log("A wild " + mob.name + " appears");
        console.log(mob.name + " has " + mob.health + " health and looks horny");
        console.log(".............................................");
            if(walkOrStand === "stand"){
    
            console.log(mob.name + " Fucked you in the ass hard...SAD..choose again!!");
            console.log(".............................................");
            
            
        } else {
                const move = await prompt("Select a move: attack, or spell\n");
                console.log("You selected: " + move);
                const damage = character.getDamage(move);
                console.log("You attack for " + damage);
                const mobDamage = mob.damage;
                console.log(mob.name + " hits you for " + mob.damage);
                mob.health = mob.health - damage;
                character.health = character.health -mobDamage;
                console.log("Your health is " + character.health);
                console.log(mob.name + "'s health is " + mob.health);}

}

console.log("this restarded fight is finished");
}

gameLoop();