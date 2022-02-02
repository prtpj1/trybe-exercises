const mage = {
	healthPoints: 130,
	intelligence: 45,
	mana: 125,
	damage: undefined,
};

const warrior = {
	healthPoints: 200,
	strength: 30,
	weaponDmg: 2,
	damage: undefined,
};

const dragon = {
	healthPoints: 350,
	strength: 50,
	damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonAtk = (dragon) => {
	const minDmg = 15;
	const dragonDmg = Math.floor((Math
		.random() * (dragon.strength - minDmg + 1) + minDmg));
	return dragonDmg;
};
dragonAtk(dragon);

const warriorAtk = (warrior) => {
	const minDmg = warrior.strength;
	const maxDmg = minDmg * warrior.weaponDmg;
	const warriorDmg = Math.floor((Math
		.random() * (maxDmg - minDmg + 1)) + minDmg);
	return warriorDmg;
};
warriorAtk(warrior);

const mageAtk = (mage) => {
	const minDmg = mage.intelligence;
	const maxDmg = mage.intelligence * 2;
	const mana = mage.mana;

	const turn = {
		manaSpent: 0,
		dmgDone: 'Not enough mana...',
	}

	if (mana > 15) {
		const mageDmg = Math.floor((Math
			.random() * (maxDmg - minDmg + 1)) + minDmg);
		turn.manaSpent = 15;
		turn.dmgDone = mageDmg;
		return turn;
	}
	return turn;
};
mageAtk(mage);
