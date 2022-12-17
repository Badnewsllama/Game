const config = require("../config/classNames")

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
        this.activeSPell = null;
        this.equipedWeapon = null;
        
    }

    levelUp(){
        this.level = this.level + 1;
        if(this.className === config.classNames.MageClassName ){
            console.log("Leveling up", this.className);
            this.attack = this.attack +3;
            this.health = this.health +11;
            this.mana = this.mana +2;
        }else if (this.className === config.classNames.ShamanClassName){
            console.log("Leveling up", this.className);
            this.mana = this.mana +17;
            this.magic = this.magic + 1;
        }else if(this.className === config.classNames.WarlockClassName){
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

            } else if (this.activeSPell){
                const spellDamage = this.activeSPell.power;
                const magicDamage = this.magic;
                return spellDamage + magicDamage;

            } else if (this.equipedWeapon){
                const weaponDamage = this.equipedWeapon.damage;
                const attackDamage = this.attack;
                return weaponDamage + attackDamage

            } else {
                const attackDamage = this.attack;
                return attackDamage;
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

    useSpell(spellName){
        for(let i = 0; i < this.spells.length; i++){
            const spell = this.spells[i];
            if(spell.name === spellName){
                this.activeSPell = spell
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
                this.equipedWeapon = weapon;
            }
        }
    }

}

module.exports = Character;