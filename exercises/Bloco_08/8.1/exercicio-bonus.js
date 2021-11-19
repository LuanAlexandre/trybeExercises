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

function dragonDamage() {
  return (Math.floor(Math.random() * (50 - 15 + 1))) + 15;
}

function warriorDamage() {
  return (Math.floor(Math.random() * (warrior.strength * warrior.weaponDmg - warrior.strength + 1))) + warrior.strength;
}

function mageDamage() {
  const mageData = {
    dmg: (Math.floor(Math.random() * (mage.intelligence * 2 - mage.intelligence + 1))) + mage.intelligence,
  }

  if (mage.mana < 15) mageData.manaCost = 'Não possui mana suficiente';
  else mageData.manaCost = 15;

  return mageData;
}

const gameActions = {
  warriorTurn: (warriorDamageFunction) => {
    warrior.damage = warriorDamageFunction();
    dragon.healthPoints -= warrior.damage;
  },
  mageTurn: (mageDamageFunction) => {
    mage.damage = mageDamageFunction();
    dragon.healthPoints -= mage.damage.dmg;
    mage.mana -= 15;
  },
  dragonTurn: (dragonDamageFunction) => {
    dragon.damage = dragonDamageFunction();
    warrior.healthPoints -= dragon.damage;
    mage.healthPoints -= dragon.damage;
  },
  showResult: () => {
    gameActions.dragonTurn(dragonDamage);
    gameActions.warriorTurn(warriorDamage);
    gameActions.mageTurn(mageDamage);
    return battleMembers;
  },
};

console.log(gameActions.showResult());
