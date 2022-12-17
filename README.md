## RESTARDED LLAMA GAMES 1985

THE VISION: 1) To have a simple game path where you choose a character from a simple prompt.
            2) Upon choosing CHARACTER stats are shown
            3) receive prompt to FIGHT OR STAND
                a)if choose to stand mob character fucks you
                b)you get to choose again
            4)if choose to FIGHT game begins
            
            5) IN DEVELOPMENT 

CHARACTERS:

## Mage 

is a high mana, high magic but low HP/attack character that starts with fireball speel and staff weapon.

## Shaman 

is a mid-range allrounder, that starts with a pangolin pet, cursed Dagger weapon and disrupt spell.

## Warlock 

is a high HP, weak character that will deal most of it's damage with summons, and start with a racoon pet.

## Mobs

A mob array was created to ultimately be chose at random when fight sequence is prompt.

## Game Rules

Our game logic dictates a character's damage is calculated using this algorithm:

    If a character has an activePet, we take the activePet's damage as starting value, and add it to the character's magic damage.
    If a character is casting a spell, we take the spell's damage and add it to the character's magic damage.
    If a character has neither an activePet, nor a spell, we take their weapon's damage, and add it to the character's attack damage.

## Pet Logic

A character can have an array of pets, but can only have a single active pet. They have to summon the pet.

## Spell Logic

A character can have a spell available abd can only use if when spell is activated by useSpell Function.

## Weapon LOgic

A characte can have a weapon available abd can only use it if weapons is equipped with euip function.


