/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*
  === GameObject ===
  * createdAt
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/

/*
function GameObject(attr) {
	this.createdAt = attr.createdAt;
	this.dimensions = attr.dimensions;
}
GameObject.prototype.destroy = function() {
	return `${this.name} was removed from the game.`;
};
*/

class GameObject {
	constructor(attr) {
		this.createdAt = attr.createdAt;
		this.dimensions = attr.dimensions;
	}
	destroy() {
		return `${this.name} was removed from the game.`;
	}
}

/*
  === CharacterStats ===
  * healthPoints
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
/*
function CharacterStats(attr) {
	GameObject.call(this, attr);
	this.healthPoints = attr.healthPoints;
	this.name = attr.name;
}
CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function() {
	return `${this.name} took damage.`;
};
*/

class CharacterStats extends GameObject {
	constructor(attr) {
		super(attr);
		this.healthPoints = attr.healthPoints;
		this.name = attr.name;
	}
	takeDamage() {
		return `${this.name} took damage.`;
	}
}

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
/*
function Humanoid(attr) {
	CharacterStats.call(this, attr);
	this.team = attr.team;
	this.weapons = attr.weapons;
	this.language = attr.language;
}
Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function() {
	return `${this.name} offers a greeting in ${this.language}.`;
};
*/

class Humanoid extends CharacterStats {
	constructor(attr) {
		super(attr);
		this.team = attr.team;
		this.weapons = attr.weapons;
		this.language = attr.language;
	}
	greet() {
		return `${this.name} offers a greeting in ${this.language}.`;
	}
}

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:

const mage = new Humanoid({
	createdAt: new Date(),
	dimensions: {
		length: 2,
		width: 1,
		height: 1
	},
	healthPoints: 5,
	name: 'Bruce',
	team: 'Mage Guild',
	weapons: [ 'Staff of Shamalama' ],
	language: 'Common Tongue'
});

const swordsman = new Humanoid({
	createdAt: new Date(),
	dimensions: {
		length: 2,
		width: 2,
		height: 2
	},
	healthPoints: 15,
	name: 'Sir Mustachio',
	team: 'The Round Table',
	weapons: [ 'Giant Sword', 'Shield' ],
	language: 'Common Tongue'
});

const archer = new Humanoid({
	createdAt: new Date(),
	dimensions: {
		length: 1,
		width: 2,
		height: 4
	},
	healthPoints: 10,
	name: 'Lilith',
	team: 'Forest Kingdom',
	weapons: [ 'Bow', 'Dagger' ],
	language: 'Elvish'
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

// Refactor prototypes.js stretch

class Villain extends Humanoid {
	constructor(attr) {
		super(attr);
	}
	attack() {
		if (firstHero.healthPoints > 5) {
			firstHero.healthPoints -= 5;

			console.log(`${this.name} used ${this.weapons}`);
			return firstHero.takeDamage();
		} else {
			return firstHero.destroy();
		}
	}
}

class Hero extends Humanoid {
	constructor(attr) {
		super(attr);
	}
	attack() {
		if (firstVillain.healthPoints > 5) {
			firstVillain.healthPoints -= 5;
			console.log(`${this.name} used ${this.weapons}`);
			return firstVillain.takeDamage();
		} else {
			return firstVillain.destroy();
		}
	}
}

const firstVillain = new Villain({
	createdAt: new Date(),
	dimensions: {
		length: 2,
		width: 2,
		height: 2
	},
	healthPoints: 10,
	name: 'Mr. Bad',
	team: 'Villains Team',
	weapons: [ 'Giant Sword' ],
	language: 'Common Tongue'
});

const firstHero = new Hero({
	createdAt: new Date(),
	dimensions: {
		length: 2,
		width: 2,
		height: 2
	},
	healthPoints: 20,
	name: 'Mr. Good',
	team: 'Heros Team',
	weapons: [ 'Giant Sword', 'Shield' ],
	language: 'Common Tongue'
});

console.log(firstHero.attack());
console.log(firstVillain.attack());
console.log(firstHero.attack());
