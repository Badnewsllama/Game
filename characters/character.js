class Character {
    constructor(name, className, attack, magic, defense, speed, health, mana) {
        this.name = name;
        this.className = className;
        this.level = 1;
        this.attack = attack;
        this.magic = magic;
        this.defense = defense;
        this.speed = speed;
        this.health = health;
        this.mana = mana;
        this.spells = [];
        this.weapons = [];
        this.pets = [];
        this.activePet = null;
    }

    levelUp(){
        this.level = this.level + 1;
        if(this.className === "shaman"){
            console.log("Leveling up", this.className);
            this.attack = this.attack +3;
            this.health = this.health +11;
            this.mana = this.mana +2;
        }else if (this.className === "mage"){
            console.log("Leveling up", this.className);
            this.mana = this.mana +17;
            this.magic = this.magic + 1;
        }else if(this.className === "warlock"){
            console.log("Leveling up", this.className);
            this.health = this.health + 29;
            this.mana = this.mana + 11;
            this.speed = this.speed + 1;
        }

    }

    getDamage(){
            //we need a way to keep track of a user's active pet. if they have one, we get pet's damage, and add it
            //to the character's magic damage
            if(this.activePet){
                const petDamage = this.activePet.damage;
                const magicDamage = this.magic;
                return petDamage + magicDamage;

            }
    }

    summonPet(petName){
        //if we have a pet in our this.pets array, that matches the name passed in as an argument to this function,
        //lets summon it.
        //we can loop over the pets we have to find it.
        for(let i=0; i< this.pets.length;i++){
            const pet = this.pets[i];
            if(pet.name === petName){
                this.activePet = pet;
            }
        }
    }

    addWeapon(weapon){
        this.weapons.push(weapon);

    }

    equipWeapon(weaponName){
        for(let i=0; i < this.weapons.length; i++) {
            const weapon = this.weapons[i];
            if(weapon.name === weaponName){
                this.equipWeapon = weapon;
            }
        }
    }

}

module.exports = Character;