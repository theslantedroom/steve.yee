
var player1 = {
	name: 'player1',
	currentCharCard: 9,
	gold: 50,
	healthBonusArmor: 0,
	damageBonusWeapon1: 0,
	damageBonusWeapon2: 0,
	attackBonusWeapon1: 0,
	attackBonusWeapon2: 0,
	defenseBonusWeapon: 0,
	defenseBonusShield1: 0,
	defenseBonusShield2: 0,
	damageBonusShield1: 0,
	damageBonusShield2: 0,

	healthBonusSkill: 0,
	damageBonusSkill: 0,
	attackBonusSkill: 0,
	defenseBonusSkill: 0,
	
	healthCard: 0,
	damageCard: 0,
	weapon1Card: 0,
	armorCard: 0,
	weapon2Card: 0,
	attackCard: 0,
	defenseCard: 0,

	// in math calculation
	health: 20,
	damage: 0,
	attack: 0,
	defense: 0,
	armor: 2,
	weapon1: 4,
	weapon2: -1,	

	kills: 0,
	deaths: 0,
};

var enemy1 = {
	name: 'peasant fool',
	alive: true,
	health: 20,
	defense: 6,
	weapon: 4,
};



var killCount = 0;
var deathCount = 0;
var highScore = 0;
var gamesPlayed = 0;

var attackRollE = 0;
var attackRoll = 0;
var attackDamage = 0;
var attackDamageE = 0;

var currentEnemyCard = 3;

//UI Interface
var confirmBuy = document.getElementById("confirmBuy");
var confirmDiscard = document.getElementById("confirmDiscard");
var okBuyRightButton = document.getElementById("okBuyRightButton");
var okBuyLeftButton = document.getElementById("okBuyLeftButton");

var discardButtonRightHand = document.getElementById("discardButtonRightHand");
var discardButtonLeftHand = document.getElementById("discardButtonLeftHand");
var discardButtonArmorHand = document.getElementById("discardButtonArmorHand");
var discardButtonHealth = document.getElementById("discardButtonHealth");
var discardButtonDamage = document.getElementById("discardButtonDamage");
var discardButtonAttack = document.getElementById("discardButtonAttack");
var discardButtonDefense = document.getElementById("discardButtonDefense");


var cancelBuyButton = document.getElementById("cancelBuyButton");
var wantToBuy = document.getElementById("wantToBuy");
var wantToBuyGoldCost = document.getElementById("wantToBuyGoldCost");

var charCreationPickCharacter = document.getElementById("characterCreation");
var player1CharCard = document.getElementById("player1CharCard");
var chooseCharacter = document.getElementById('chooseCharacter');
var characterCreationButton = document.getElementById("closeCharacterCreation");
var player1NameInput = document.getElementById("player1NameInput");
var player1Gold = document.getElementById("player1Gold");
var market = document.getElementById('market');
var player1AtMarket = document.getElementById('player1AtMarket');
var playArea = document.getElementById('playArea');

characterCreationButton.addEventListener("click", function(){
	console.log(player1NameInput.value);
	player1.name = player1NameInput.value;
	var player1Namep = document.createElement("div"); //place name on card
	player1Namep.appendChild(document.createTextNode(player1NameInput.value));
	player1CharCard.insertBefore(player1Namep, player1CharCard.firstChild);
	charCreationPickCharacter.style.visibility = "hidden";
	player1GotoBattle();
	refresh();
});


function clearDiscardPopUp(){
	discardButtonRightHand.style.display = 'none';
	discardButtonLeftHand.style.display = 'none';
	discardButtonArmorHand.style.display = 'none';
	discardButtonHealth.style.display = 'none';
	discardButtonDamage.style.display = 'none';
	discardButtonAttack.style.display = 'none';
	discardButtonDefense.style.display = 'none';
};
clearDiscardPopUp();

// MOVING THE CHAR CARD DIV

//create a  ABC div--------------add to it-------a textnode------(inputtext)
// document.createElement("div").appendChild(document.createTextNode(player1NameInput.value));

// //place in this location-----------------before------------the a  ABC div----------------------before first child
// document.getElementById("player1CharCard").insertBefore(document.createElement("div"), player1CharCard.firstChild);

function player1GotoCharacterSelect(){
	chooseCharacter.insertBefore(player1CharCard, chooseCharacter.childNodes[2]);
};

function player1GotoBattle(){
	playArea.insertBefore(player1CharCard, playArea.childNodes[0]);
};

function player1GotoMarket(){
	player1AtMarket.appendChild(player1CharCard);
};

function updateGold(){
	player1Gold.innerHTML = player1.gold;
	player1Gold2.innerHTML = player1.gold;
};

function player1previousCharacter(){	
		player1.currentCharCard -= 1;
		if (player1.currentCharCard == 0) {
			player1.currentCharCard = 32;
		}
		console.log('player1.currentCharCard '+player1.currentCharCard);
		player1CharCard.style.backgroundImage = "url('../steve.yee/img/charCard" + player1.currentCharCard + ".jpg')";
};

function player1NextCharacter(){	
		player1.currentCharCard += 1;
		if (player1.currentCharCard == 33) {
			player1.currentCharCard = 1;
		}
		console.log('player1.currentCharCard '+player1.currentCharCard);
		player1CharCard.style.backgroundImage = "url('../steve.yee/img/charCard" + player1.currentCharCard + ".jpg')";
};

function closeMarket(){
	player1GotoCharacterSelect();
	market.style.display = "none";
};

function openMarket(){
	player1GotoMarket();
	clearStore();
	document.getElementById("storeItemsOnehandWeapons").style.display = "flex";
	market.style.display = "block";
};

function weaponStoreOneHandButton(){
	clearStore();
	document.getElementById("storeItemsOnehandWeapons").style.display = "flex";
};
function weaponStoreTwoHandButton(){
	clearStore();
	document.getElementById("storeItemsTwoHanded").style.display = "flex";
};
function weaponStoreRangedButton(){
	clearStore();
	document.getElementById("storeItemsRanged").style.display = "flex";
};
function weaponStoreShieldButton(){
	clearStore();
	document.getElementById("storeItemsShields").style.display = "flex";
};
function armorStoreButton(){
	clearStore();
	document.getElementById("storeItemsArmor").style.display = "flex";
};
function trainingStoreButton(){
	clearStore();
	document.getElementById("storeItemsTraining").style.display = "flex";	
};
function clearStore(){
	document.getElementById("storeItemsOnehandWeapons").style.display = "none";
	document.getElementById("storeItemsTwoHanded").style.display = "none";
	document.getElementById("storeItemsRanged").style.display = "none";
	document.getElementById("storeItemsShields").style.display = "none";
	document.getElementById("storeItemsArmor").style.display = "none";
	document.getElementById("storeItemsTraining").style.display = "none";
	cancelBuyClose();
};

function confirmBuyOpen(){
	confirmBuy.style.display = 'flex';
};

function cancelBuyClose(){
	confirmBuy.style.display = 'none';
};

function confirmDiscardOpen(){
	confirmDiscard.style.display = 'flex';
};

function confirmDiscardClose(){
	confirmDiscard.style.display = 'none';
};

// DISCARD CARDS

// var discardButtonArmorHand = document.getElementById("discardButtonArmorHand");
// var discardButtonHealth = document.getElementById("discardButtonHealth");
// var discardButtonDamage = document.getElementById("discardButtonDamage");
// var discardButtonAttack = document.getElementById("discardButtonAttack");
// var discardButtonDefense = document.getElementById("discardButtonDefense");

discardButtonRightHand.addEventListener("click", function() {
	player1.weapon1Card = 0;
	player1.weapon1 = -1;
	player1.damageBonusWeapon1 = 0;
	player1.attackBonusWeapon1 = 0;
	player1.defenseBonusShield1 = 0;
	player1.damageBonusShield1 = 0;
	confirmDiscardClose();
	refresh();
	console.log('click discard');
});
function discardWeaponR(){
	if (player1.weapon1Card != 0){
	clearDiscardPopUp();
	confirmDiscardOpen();
	discardButtonRightHand.style.display = "flex";
	refresh();
}};

discardButtonLeftHand.addEventListener("click", function() {
	player1.weapon2Card = 0;
	player1.weapon2 = -1;
	player1.damageBonusWeapon2 = 0;
	player1.attackBonusWeapon2 = 0;
	player1.defenseBonusShield2 = 0;
	player1.damageBonusShield2 = 0;
	confirmDiscardClose();
	refresh();
	console.log('click discard');
});
function discardWeaponL(){
	if (player1.weapon2Card != 0){
	clearDiscardPopUp();
	confirmDiscardOpen();
	discardButtonLeftHand.style.display = "flex";
	refresh();
}};












function cannotAfford(){
	okBuyRightButton.style.display = "none";
	okBuyLeftButton.style.display = "none";
};


function alreadyOwn(){
	okBuyRightButton.style.display = "none";
	okBuyLeftButton.style.display = "none";
};

function dualWield(){
	okBuyRightButton.style.display = "flex";
	okBuyLeftButton.style.display = "flex";
};



okBuyRightButton.addEventListener("click", function() {
 console.log('click okBuyRightButton');
 checkoutRightHand();
 confirmBuy.style.display = 'none';
});

okBuyLeftButton.addEventListener("click", function() {
 console.log('click okBuyLeftButton');
 checkoutLeftHand();
 confirmBuy.style.display = 'none';
});

cancelBuyButton.addEventListener("click", function() {
	cancelBuyClose();
	console.log('click cancelBuyButton');
});


// RIGHT HAND
var shoppingCartRightHand = {
	gold: 0,
	weapon1Card: 0,
	weapon1: 0,
	damageBonusWeapon1: 0,
	attackBonusWeapon1: 0,
	defenseBonusShield1: 0,
	damageBonusShield1: 0,

};
function checkoutRightHand(){
	player1.gold -= shoppingCartRightHand.gold;
	player1.weapon1Card = shoppingCartRightHand.weapon1Card;
	player1.weapon1 = shoppingCartRightHand.weapon1;
	player1.damageBonusWeapon1 = shoppingCartRightHand.damageBonusWeapon1;
	player1.attackBonusWeapon1 = shoppingCartRightHand.attackBonusWeapon1;
	player1.defenseBonusShield1 = shoppingCartRightHand.defenseBonusShield1;
	player1.damageBonusShield1 = shoppingCartRightHand.damageBonusShield1;
	refresh();
};


// LEFT HAND
var shoppingCartLeftHand = {
	gold: 0,
	weapon2Card: 0,
	weapon2: 0,
	damageBonusWeapon2: 0,
	attackBonusWeapon2: 0,
	defenseBonusShield2: 0,
	damageBonusShield2: 0,

};
function checkoutLeftHand(){
	player1.gold -= shoppingCartLeftHand.gold;
	player1.weapon2Card = shoppingCartLeftHand.weapon2Card;
	player1.weapon2 = shoppingCartLeftHand.weapon2;
	player1.damageBonusWeapon2 = shoppingCartLeftHand.damageBonusWeapon2;
	player1.attackBonusWeapon2 = shoppingCartLeftHand.attackBonusWeapon2;
	player1.defenseBonusShield2 = shoppingCartLeftHand.defenseBonusShield2;
	player1.damageBonusShield2 = shoppingCartLeftHand.damageBonusShield2;
	refresh();
};



var buyW1 = document.querySelectorAll("img")[0];
var buyW2 = document.querySelectorAll("img")[1];
var buyW3 = document.querySelectorAll("img")[2];
var buyW4 = document.querySelectorAll("img")[3];
var buyW5 = document.querySelectorAll("img")[4];
var buyW6 = document.querySelectorAll("img")[5];
var buyW7 = document.querySelectorAll("img")[6];
var buyW8 = document.querySelectorAll("img")[7];
var buyW9 = document.querySelectorAll("img")[8];
var buyW10 = document.querySelectorAll("img")[9];
var buyW11 = document.querySelectorAll("img")[10];


// EVENT LISTENERS
//Click on STORE ITEMS
buyW1.addEventListener("click", function() {
	console.log('buyW1');
		confirmBuyOpen();
		if (player1.weapon1Card != 1 && player1.weapon2Card != 1 && player1.gold >= 0){
		dualWield();
		wantToBuy.innerHTML = "Do you want to buy the Dagger for ";
		wantToBuyGoldCost.innerHTML = "0 gold?";
		shoppingCartRightHand.gold = 0;
		shoppingCartRightHand.weapon1Card = 1;
		shoppingCartRightHand.weapon1 = 4;
		shoppingCartRightHand.damageBonusWeapon1 = 0;
		shoppingCartRightHand.attackBonusWeapon1 = 0;
		shoppingCartRightHand.defenseBonusShield1 = 0;
		shoppingCartRightHand.damageBonusShield1 = 0;
		shoppingCartLeftHand.gold = 0;
		shoppingCartLeftHand.weapon2Card = 1;
		shoppingCartLeftHand.weapon2 = 4;
		shoppingCartLeftHand.damageBonusWeapon2 = 0;
		shoppingCartLeftHand.attackBonusWeapon2 = 0;
		shoppingCartLeftHand.defenseBonusShield2 = 0;
		shoppingCartLeftHand.damageBonusShield2 = 0;
	} else if (player1.weapon1Card == 1 || player1.weapon2Card == 1){
		wantToBuy.innerHTML = "You already own this Dagger.  ";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 1){
		console.log('not enough gold');
		wantToBuy.innerHTML = "You cannot afford this dagger."
		wantToBuyGoldCost.innerHTML = "  You only have " + player1.gold + " gold?";
		cannotAfford();
	};
	refresh();
});

buyW2.addEventListener("click", function() {
		confirmBuyOpen();
		if (player1.weapon1Card != 2 && player1.weapon2Card != 2 && player1.gold >= 2){
		dualWield();
		wantToBuy.innerHTML = "Do you want to buy the Gladius for ";
		wantToBuyGoldCost.innerHTML = "2 gold?";
		shoppingCartRightHand.gold = 2;
		shoppingCartRightHand.weapon1Card = 2;
		shoppingCartRightHand.weapon1 = 6;
		shoppingCartRightHand.damageBonusWeapon1 = 0;
		shoppingCartRightHand.attackBonusWeapon1 = 0;
		shoppingCartRightHand.defenseBonusShield1 = 0;
		shoppingCartRightHand.damageBonusShield1 = 0;
		shoppingCartLeftHand.gold = 2;
		shoppingCartLeftHand.weapon2Card = 2;
		shoppingCartLeftHand.weapon2 = 6;
		shoppingCartLeftHand.damageBonusWeapon2 = 0;
		shoppingCartLeftHand.attackBonusWeapon2 = 0;
		shoppingCartLeftHand.defenseBonusShield2 = 0;
		shoppingCartLeftHand.damageBonusShield2 = 0;
	} else if (player1.weapon1Card == 2 || player1.weapon2Card == 2){
		wantToBuy.innerHTML = "You already own this Gladius.  ";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 2){
		console.log('not enough gold');
		wantToBuy.innerHTML = "You cannot afford this Gladius."
		wantToBuyGoldCost.innerHTML = "  You only have " + player1.gold + " gold?";
		cannotAfford();
	};
	refresh();
});

buyW3.addEventListener("click", function() {
		confirmBuyOpen();
		if (player1.weapon1Card != 3 && player1.weapon2Card != 3 && player1.gold >= 4){
		dualWield();
		wantToBuy.innerHTML = "Do you want to buy the Long Sword for ";
		wantToBuyGoldCost.innerHTML = "4 gold?";
		shoppingCartRightHand.gold = 4;
		shoppingCartRightHand.weapon1Card = 3;
		shoppingCartRightHand.weapon1 = 8;
		shoppingCartRightHand.damageBonusWeapon1 = 0;
		shoppingCartRightHand.attackBonusWeapon1 = 0;
		shoppingCartRightHand.defenseBonusShield1 = 0;
		shoppingCartRightHand.damageBonusShield1 = 0;
		shoppingCartLeftHand.gold = 4;
		shoppingCartLeftHand.weapon2Card = 3;
		shoppingCartLeftHand.weapon2 = 8;
		shoppingCartLeftHand.damageBonusWeapon2 = 0;
		shoppingCartLeftHand.attackBonusWeapon2 = 0;
		shoppingCartLeftHand.defenseBonusShield2 = 0;
		shoppingCartLeftHand.damageBonusShield2 = 0;
	} else if (player1.weapon1Card == 3 || player1.weapon2Card == 3){
		wantToBuy.innerHTML = "You already own this Long Sword.  ";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 4){
		console.log('not enough gold');
		wantToBuy.innerHTML = "You cannot afford this Long Sword."
		wantToBuyGoldCost.innerHTML = "  You only have " + player1.gold + " gold?";
		cannotAfford();
	};
	refresh();
});

buyW4.addEventListener("click", function() {
		confirmBuyOpen();
		if (player1.weapon1Card != 4 && player1.weapon2Card != 4 && player1.gold >= 7){
		dualWield();
		wantToBuy.innerHTML = "Do you want to buy the Deadly Axe for ";
		wantToBuyGoldCost.innerHTML = "4 gold?";
		shoppingCartRightHand.gold = 7;
		shoppingCartRightHand.weapon1Card = 4;
		shoppingCartRightHand.weapon1 = 10;
		shoppingCartRightHand.damageBonusWeapon1 = 0;
		shoppingCartRightHand.attackBonusWeapon1 = 0;
		shoppingCartRightHand.defenseBonusShield1 = 0;
		shoppingCartRightHand.damageBonusShield1 = 0;
		shoppingCartLeftHand.gold = 7;
		shoppingCartLeftHand.weapon2Card = 4;
		shoppingCartLeftHand.weapon2 = 10;
		shoppingCartLeftHand.damageBonusWeapon2 = 0;
		shoppingCartLeftHand.attackBonusWeapon2 = 0;
		shoppingCartLeftHand.defenseBonusShield2 = 0;
		shoppingCartLeftHand.damageBonusShield2 = 0;
	} else if (player1.weapon1Card == 4 || player1.weapon2Card == 4){
		wantToBuy.innerHTML = "You already own this Deadly Axe.  ";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 7){
		console.log('not enough gold');
		wantToBuy.innerHTML = "You cannot afford this Deadly Axe."
		wantToBuyGoldCost.innerHTML = "  You only have " + player1.gold + " gold?";
		cannotAfford();
	};
	refresh();
});

buyW5.addEventListener("click", function() {
		confirmBuyOpen();
		if (player1.weapon1Card != 5 && player1.weapon2Card != 5 && player1.gold >= 10){
		dualWield();
		wantToBuy.innerHTML = "Do you want to buy the Deadly Axe for ";
		wantToBuyGoldCost.innerHTML = "4 gold?";
		shoppingCartRightHand.gold = 10;
		shoppingCartRightHand.weapon1Card = 5;
		shoppingCartRightHand.weapon1 = 12;
		shoppingCartRightHand.damageBonusWeapon1 = 0;
		shoppingCartRightHand.attackBonusWeapon1 = 0;
		shoppingCartRightHand.defenseBonusShield1 = 0;
		shoppingCartRightHand.damageBonusShield1 = 0;
		shoppingCartLeftHand.gold = 10;
		shoppingCartLeftHand.weapon2Card = 5;
		shoppingCartLeftHand.weapon2 = 12;
		shoppingCartLeftHand.damageBonusWeapon2 = 0;
		shoppingCartLeftHand.attackBonusWeapon2 = 0;
		shoppingCartLeftHand.defenseBonusShield2 = 0;
		shoppingCartLeftHand.damageBonusShield2 = 0;
	} else if (player1.weapon1Card == 5 || player1.weapon2Card == 5){
		wantToBuy.innerHTML = "You already own this Deadly Axe.  ";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 10){
		console.log('not enough gold');
		wantToBuy.innerHTML = "You cannot afford this Deadly Axe."
		wantToBuyGoldCost.innerHTML = "  You only have " + player1.gold + " gold?";
		cannotAfford();
	};
	refresh();
});

buyW6.addEventListener("click", function() {
		confirmBuyOpen();
		if (player1.weapon1Card != 6 && player1.weapon2Card != 6 && player1.gold >= 2){
		dualWield();
		wantToBuy.innerHTML = "Do you want to buy the Smith's Hammer for ";
		wantToBuyGoldCost.innerHTML = "4 gold?";
		shoppingCartRightHand.gold = 2;
		shoppingCartRightHand.weapon1Card = 6;
		shoppingCartRightHand.weapon1 = 4;
		shoppingCartRightHand.damageBonusWeapon1 = 1;
		shoppingCartRightHand.attackBonusWeapon1 = 0;
		shoppingCartRightHand.defenseBonusShield1 = 0;
		shoppingCartRightHand.damageBonusShield1 = 0;
		shoppingCartLeftHand.gold = 2;
		shoppingCartLeftHand.weapon2Card = 6;
		shoppingCartLeftHand.weapon2 = 4;
		shoppingCartLeftHand.damageBonusWeapon2 = 1;
		shoppingCartLeftHand.attackBonusWeapon2 = 0;
		shoppingCartLeftHand.defenseBonusShield2 = 0;
		shoppingCartLeftHand.damageBonusShield2 = 0;
	} else if (player1.weapon1Card == 6 || player1.weapon2Card == 6){
		wantToBuy.innerHTML = "You already own this Smith's Hammer.  ";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 2){
		console.log('not enough gold');
		wantToBuy.innerHTML = "You cannot afford this Smith's Hammer."
		wantToBuyGoldCost.innerHTML = "  You only have " + player1.gold + " gold?";
		cannotAfford();
	};
	refresh();
});

buyW7.addEventListener("click", function() {
		confirmBuyOpen();
		if (player1.weapon1Card != 7 && player1.weapon2Card != 7 && player1.gold >= 3){
		dualWield();
		wantToBuy.innerHTML = "Do you want to buy the Expensive Mace for ";
		wantToBuyGoldCost.innerHTML = "4 gold?";
		shoppingCartRightHand.gold = 3;
		shoppingCartRightHand.weapon1Card = 7;
		shoppingCartRightHand.weapon1 = 6;
		shoppingCartRightHand.damageBonusWeapon1 = 0;
		shoppingCartRightHand.attackBonusWeapon1 = 0;
		shoppingCartRightHand.defenseBonusShield1 = 0;
		shoppingCartRightHand.damageBonusShield1 = 0;
		shoppingCartLeftHand.gold = 3;
		shoppingCartLeftHand.weapon2Card = 7;
		shoppingCartLeftHand.weapon2 = 6;
		shoppingCartLeftHand.damageBonusWeapon2 = 0;
		shoppingCartLeftHand.attackBonusWeapon2 = 0;
		shoppingCartLeftHand.defenseBonusShield2 = 0;
		shoppingCartLeftHand.damageBonusShield2 = 0;
	} else if (player1.weapon1Card == 7 || player1.weapon2Card == 7){
		wantToBuy.innerHTML = "You already own this Expensive Mace.  ";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 3){
		console.log('not enough gold');
		wantToBuy.innerHTML = "You cannot afford this Expensive Mace."
		wantToBuyGoldCost.innerHTML = "  You only have " + player1.gold + " gold?";
		cannotAfford();
	};
	refresh();
});

buyW8.addEventListener("click", function() {
		confirmBuyOpen();
		if (player1.weapon1Card != 8 && player1.weapon2Card != 8 && player1.gold >= 6){
		dualWield();
		wantToBuy.innerHTML = "Do you want to buy the Expensive Mace for ";
		wantToBuyGoldCost.innerHTML = "4 gold?";
		shoppingCartRightHand.gold = 6;
		shoppingCartRightHand.weapon1Card = 8;
		shoppingCartRightHand.weapon1 = 100;
		shoppingCartRightHand.damageBonusWeapon1 = 0;
		shoppingCartRightHand.attackBonusWeapon1 = 0;
		shoppingCartRightHand.defenseBonusShield1 = 0;
		shoppingCartRightHand.damageBonusShield1 = 0;
		shoppingCartLeftHand.gold = 6;
		shoppingCartLeftHand.weapon2Card = 8;
		shoppingCartLeftHand.weapon2 = 100;
		shoppingCartLeftHand.damageBonusWeapon2 = 0;
		shoppingCartLeftHand.attackBonusWeapon2 = 0;
		shoppingCartLeftHand.defenseBonusShield2 = 0;
		shoppingCartLeftHand.damageBonusShield2 = 0;
	} else if (player1.weapon1Card == 8 || player1.weapon2Card == 8){
		wantToBuy.innerHTML = "You already own this Expensive Mace.  ";
		wantToBuyGoldCost.innerHTML = "";
		alreadyOwn();
	} else if (player1.gold < 6){
		console.log('not enough gold');
		wantToBuy.innerHTML = "You cannot afford this Expensive Mace."
		wantToBuyGoldCost.innerHTML = "  You only have " + player1.gold + " gold?";
		cannotAfford();
	};
	refresh();
});







// function resetShoppingCart(){
// 	shoppingCart.gold = 0;
// 	shoppingCart.healthCard = 0;
// 	shoppingCart.damageCard = 0;
// 	shoppingCart.weapon1Card = 0;
// 	shoppingCart.armorCard = 0;
// 	shoppingCart.weapon2Card = 0;
// 	shoppingCart.attackCard = 0;
// 	shoppingCart.defenseCard = 0;
// 	shoppingCart.weapon1 = 0;
// 	shoppingCart.weapon2 = 0;
// 	shoppingCart.armor = 0;
// 	shoppingCart.healthBonusArmor = 0;
// 	shoppingCart.damageBonusWeapon1 = 0;
// 	shoppingCart.attackBonusWeapon1 = 0;
// 	shoppingCart.defenseBonusWeapon = 0;
// 	shoppingCart.defenseBonusShield1 = 0;
// 	shoppingCart.damageBonusShield1 = 0;
// };



// var shoppingCart = {
// 	gold: 0,
// 	healthCard: 0,
// 	damageCard: 0,
// 	weapon1Card: 0,
// 	armorCard: 0,
// 	weapon2Card: 0,
// 	attackCard: 0,
// 	defenseCard: 0,
// 	weapon1: 0,
// 	weapon2: 0,
// 	armor: 0,
// 	healthBonusArmor: 0,
// 	damageBonusWeapon1: 0,
// 	attackBonusWeapon1: 0,
// 	defenseBonusWeapon: 0,
// 	defenseBonusShield1: 0,
// 	damageBonusShield1: 0,
// };








// Visual components
var player1CharCard = document.getElementById("player1CharCard");
var player1HealthCard = document.getElementById('player1HealthCard');
var player1DamageCard = document.getElementById('player1DamageCard');
var player1Weapon1Card = document.getElementById('player1Weapon1Card');
var player1ArmorCard = document.getElementById('player1ArmorCard');
var player1Weapon2Card = document.getElementById('player1Weapon2Card');
var player1AttackCard = document.getElementById('player1AttackCard');
var player1DefenseCard = document.getElementById('player1DefenseCard');
var player1DefenseCounter = document.getElementById("player1DefenseCounter");
var player1HealthCounter = document.getElementById("player1HealthCounter");

var logWeapon1PopUp = document.getElementById('logWeapon1PopUp');
var logWeapon2PopUp = document.getElementById('logWeapon2PopUp');

var enemy1CharCard = document.getElementById("enemy1Idle");
var enemy1HealthCounter = document.getElementById("enemyHealthCounter");

// TABLE Stats 
var player1Name = document.getElementById("player1Name");
var enemyName = document.getElementById("enemyName");

var tableKillScore = document.getElementById("tableKillScore");
var tableDeathScore = document.getElementById("tableDeathScore");
var tableHighScore = document.getElementById("tableHighScore");
var tableGamesPlayed = document.getElementById("tableGamesPlayed");
var tableDamageBonusSkill = document.getElementById("player1.damageBonusSkill");
var tableAttackBonusSkill = document.getElementById("player1.attackBonusSkill");
var tablePlayer1Weapon1 = document.getElementById("player1.weapon1");
var tablePlayer1Weapon2 = document.getElementById("player1.weapon2");
var tablePlayer1Armor = document.getElementById("player1.armor");

var tableEnemyWeapon = document.getElementById("enemy.weapon");

// SLIDES

var slideStart = document.getElementById("slideStart");
var slidePlayer1Hit= document.getElementById("slidePlayer1Hit");
var slidePlayer1Critical= document.getElementById("slidePlayer1Critical");
var slidePlayer1Turn = document.getElementById("slidePlayer1Turn");
var slideEnemy1Turn = document.getElementById("slideEnemy1Turn");
var slideLogSlide = document.getElementById("slideLogSlide");
var slideLogSlideE = document.getElementById("slideLogSlideE");
var slideNextEnemy = document.getElementById("slideNextEnemy");
var slidePlayer1Dead = document.getElementById("slidePlayer1Dead");
var slideKillLog = document.getElementById("slideKillLog");

var logSlideRollResult = document.getElementById("rollResult");
var logSlideResultLine2 = document.getElementById("resultLine2");
var logSlideResultLine3 = document.getElementById("resultLine3");

var logSlideRollResultE = document.getElementById("rollResultE");
var logSlideResultLine2E = document.getElementById("resultLine2E");
var logSlideResultLine3E = document.getElementById("resultLine3E");

var damageRollResultK = document.getElementById("damageRollResultK");
var damageResultLine2K = document.getElementById("damageResultLine2K");
var damageResultLine3K= document.getElementById("damageResultLine3K");


var nextEnemyKillCount= document.getElementById("nextEnemyKillCount");
var PopUpEnemy1Dead = document.getElementById("PopUpEnemy1Dead");
var deathCountPopup = document.getElementById("deathCountPopup");
var finalScorePopup = document.getElementById("finalScorePopup");
var player1DamageAttackRoll = document.getElementById("player1DamageAttackRoll");


function refresh(){

// calculate Final Stats
	player1.defense = player1.defenseBonusWeapon + player1.defenseBonusShield1 + player1.defenseBonusShield2 + player1.armor + player1.defenseBonusSkill;
	player1.damage =  player1.damageBonusWeapon1 + player1.damageBonusWeapon2 + player1.damageBonusShield1 + player1.damageBonusShield2 + player1.damageBonusSkill;
	player1.attack =  player1.attackBonusSkill + player1.attackBonusWeapon1 + player1.attackBonusWeapon2;	

// CARD UPDATES
		player1CharCard.style.backgroundImage = "url('../steve.yee/img/charCard" + player1.currentCharCard + ".jpg')";
		enemy1CharCard.style.backgroundImage = "url('../steve.yee/img/enemy" + currentEnemyCard + ".jpg')";
		player1Weapon1Card.style.backgroundImage = "url('../steve.yee/img/market/w" + player1.weapon1Card + ".jpg')";
		player1ArmorCard.style.backgroundImage = "url('../steve.yee/img/market/a" + player1.armorCard + ".jpg')";
		player1Weapon2Card.style.backgroundImage = "url('../steve.yee/img/market/w" + player1.weapon2Card + ".jpg')";
		player1HealthCard.style.backgroundImage = "url('../steve.yee/img/market/healthBonus0" + player1.healthCard + ".jpg')";
		player1DamageCard.style.backgroundImage = "url('../steve.yee/img/market/damageBonus" + player1.damageCard + ".jpg')";
		player1AttackCard.style.backgroundImage = "url('../steve.yee/img/market/attackBonus" + player1.attackCard + ".jpg')";
		player1DefenseCard.style.backgroundImage = "url('../steve.yee/img/market/defenseBonus" + player1.defenseCard + ".jpg')";
		player1DefenseCounter.innerHTML = player1.defense;
		enemy1HealthCounter.innerHTML = enemy1.health;	

// Damage popup images

		logWeapon1PopUp.style.backgroundImage = "url('../steve.yee/img/market/w" + player1.weapon1Card + ".jpg')";
		logWeapon2PopUp.style.backgroundImage = "url('../steve.yee/img/market/w" + player1.weapon2Card + ".jpg')";	

// TABLE		
		player1Name.innerHTML = player1.name;
		enemyName.innerHTML = enemy1.name;
		tableKillScore.innerHTML = killCount;
		tableDeathScore.innerHTML = deathCount;
		tableHighScore.innerHTML = highScore;
		tableGamesPlayed.innerHTML = gamesPlayed;
		tableDamageBonusSkill.innerHTML = player1.damage;
		tableAttackBonusSkill.innerHTML = player1.attack;
		tablePlayer1Weapon1.innerHTML = player1.weapon1;
		tablePlayer1Weapon2.innerHTML = player1.weapon2;
		tablePlayer1Armor.innerHTML = player1.armor;
		
		tableEnemyWeapon.innerHTML = enemy1.weapon;
		updateGold();
};

refresh();

// BOOTUP and Character create
player1HealthCounter.innerHTML = player1.health;
player1CharCard.style.backgroundImage = "url('../steve.yee/img/charCard" + player1.currentCharCard + ".jpg')";
updateGold();
player1GotoCharacterSelect();
clearStore();




// START
function start(){
	console.log('start');
	slideStart.style.display = "none";
	slidePlayer1Turn.style.display = "block";

};


function nextArmor(){
	player1.armorCard += 1;
	if (player1.armorCard >= 8) {
		player1.armorCard = 0;
	};
if (player1.armorCard == 0){
		player1.armor = 2;
};	
if (player1.armorCard == 1){
		player1.armor = 6;
};
if (player1.armorCard == 2){
		player1.armor = 7;
};
if (player1.armorCard == 3){
		player1.armor = 8;
};
if (player1.armorCard == 4){
		player1.armor = 9;
};
if (player1.armorCard == 5){
		player1.armor = 10;
};
if (player1.armorCard == 6){
		player1.armor = 11;
};
if (player1.armorCard == 7){
		player1.armor = 12;
};

console.log('armor = ' + player1.armor)
player1.health =  20 + player1.healthBonusArmor + player1.healthBonusSkill;
player1HealthCounter.innerHTML = player1.health;
refresh();
};

function nextHealthTraining(){
	player1.healthCard += 1;
	if (player1.healthCard >= 4) {
		player1.healthCard = 0;
	};

	if (player1.healthCard == 0){
			player1.healthBonusSkill = 0;
	};
	if (player1.healthCard == 1){
			player1.healthBonusSkill = 4;
	};
	if (player1.healthCard == 2){
			player1.healthBonusSkill = 8;
	};

	if (player1.healthCard == 3){
			player1.healthBonusSkill = 12;
	};

	console.log('nextHealthTraining');

	player1.health =  20 + player1.healthBonusArmor + player1.healthBonusSkill;
	player1HealthCounter.innerHTML = player1.health;
	refresh();
};

function nextDamageTraining(){
	player1.damageCard += 1;
	if (player1.damageCard >= 4) {
		player1.damageCard = 0;
	};

	if (player1.damageCard == 0){
			player1.damageBonusSkill = 0;
	};
	if (player1.damageCard == 1){
			player1.damageBonusSkill = 1;
	};
	if (player1.damageCard == 2){
			player1.damageBonusSkill = 2;
	};

	if (player1.damageCard == 3){
			player1.damageBonusSkill = 3;
	};
	refresh();
	console.log('nextDamageTraining');
};

function nextAttackTraining(){
	player1.attackCard += 1;
	if (player1.attackCard >= 4) {
		player1.attackCard = 0;
	};

	if (player1.attackCard == 0){
			player1.attackBonusSkill = 0;
	};
	if (player1.attackCard == 1){
			player1.attackBonusSkill = 1;
	};
	if (player1.attackCard == 2){
			player1.attackBonusSkill = 2;
	};

	if (player1.attackCard == 3){
			player1.attackBonusSkill = 3;
	};
	refresh();

	console.log('nextAttackTraining = ' + player1.attackBonus);
};

function nextDefenseTraining(){
	player1.defenseCard += 1;
	if (player1.defenseCard >= 4) {
		player1.defenseCard = 0;
	};

	if (player1.defenseCard == 0){
			player1.defenseBonusSkill = 0;
	};
	if (player1.defenseCard == 1){
			player1.defenseBonusSkill = 1;
	};
	if (player1.defenseCard == 2){
			player1.defenseBonusSkill = 2;
	};

	if (player1.defenseCard == 3){
			player1.defenseBonusSkill = 3;
	};
	refresh();
	console.log('nextDefenseTraining = ' + player1.attackBonus);
};

function nextWeapon(){
	player1.weapon1Card += 1;
	if (player1.weapon1Card >= 6) {
		player1.weapon1Card = 0;
	};

	if (player1.weapon1Card == 0){
			player1.weapon1 = -1;
	};
	if (player1.weapon1Card == 1){
			player1.weapon1 = 4;
	};
	if (player1.weapon1Card == 2){
			player1.weapon1 = 6;
	};
	if (player1.weapon1Card == 3){
			player1.weapon1 = 8;
	};
	if (player1.weapon1Card == 4){
			player1.weapon1 = 10;
	};
	if (player1.weapon1Card == 5){
			player1.weapon1 = 12;
	};
	refresh();
	console.log('weapon 1 = ' + player1.weapon1Card)
};


function nextWeapon2(){
	player1.weapon2Card += 1;
	if (player1.weapon2Card >= 6) {
		player1.weapon2Card = 0;
	};

	if (player1.weapon2Card == 0){
			player1.weapon2 = -1;
	};
	if (player1.weapon2Card == 1){
			player1.weapon2 = 4;
	};
	if (player1.weapon2Card == 2){
			player1.weapon2 = 6;
	};
	if (player1.weapon2Card == 3){
			player1.weapon2 = 8;
	};
	if (player1.weapon2Card == 4){
			player1.weapon2 = 10;
	};
	if (player1.weapon2Card == 5){
			player1.weapon2 = 12;
	};
	refresh();
	console.log('weapon 2 = ' + player1.weapon2Card)
};


function highScoreUpdate(){
	if (killCount > highScore) {
		highScore = killCount;
		tableHighScore.innerHTML = highScore;
	}
};

// enemyturn popup
function enemyTurn(){
	console.log('enemyturn');
};

function tryAgain(){
	console.log('tryagain');
	nextEnemy();
	highScoreUpdate();

	killCount = 0;
	player1.health = 20;
	player1HealthCounter.innerHTML = player1.health;
	slidePlayer1Dead.style.display = "none";
	slideLogSlideE.style.display = "none";
	slideNextEnemy.style.display = "none";
	slidePlayer1Turn.style.display = "none";
	slideStart.style.display = "block";


	tableDeathScore.innerHTML = deathCount;
	tableKillScore.innerHTML = killCount;
	gamesPlayed = gamesPlayed + 1;
	refresh();
};

function logSlide(){
	console.log('logSlide close / open "enemyTurn"');
	slideLogSlide.style.display = "none";
	slideEnemy1Turn.style.display = "block";

	enemy1Attack();
};

function logSlideE(){
	console.log('logSlideE close / open "player1Turn"');
	slideLogSlideE.style.display = "none";
	slidePlayer1Turn.style.display = "block";

};

// next enemy popup
function nextEnemy(){
	console.log('next enemy');
	PopUpEnemy1Dead.style.display = "none";
	enemy1.health = 20;
	enemy1HealthCounter.innerHTML = enemy1.health;
	logSlideRollResult.innerHTML = '...';
	logSlideResultLine2.innerHTML = 'You look around..';
	logSlideResultLine3.innerHTML = "and see an angry peasant";
	slideNextEnemy.style.display = "block";

	slideKillLog.style.display = "none";
	tableDeathScore.innerHTML = deathCount;
	tableKillScore.innerHTML = killCount;
};

function fightNext(){
	slidePlayer1Turn.style.display = "block";

	slideNextEnemy.style.display = "none";
};

function enemy1Attack(){
	enemy1CharCard.id = "enemy1Attack";
};


function enemy1AttackDone(){
	document.getElementById("enemy1Attack").id = "enemy1Idle";
	// cannot make Var for document.getElementById("enemy1Attack") because is doesnt exist in the html at time of variable declaraton.
	// make a  slide instead of a class change for attacking enemy to fix
};


function enemy1Dead(){
	killCount = killCount + 1;
	enemy1.health = 0;
	tableKillScore.innerHTML = killCount;
	nextEnemyKillCount.innerHTML = killCount;
	enemy1HealthCounter.innerHTML = enemy1.health;
	PopUpEnemy1Dead.style.display = "block";

	console.log('enemydead()logged');
};

function player1Dead(){
		deathCount = deathCount + 1;
		player1HealthCounter.innerHTML = player1.health;
		logSlideResultLine3.innerHTML = 'You have been killed ' + deathCount + ' times';
		deathCountPopup.innerHTML = deathCount;
		finalScorePopup.innerHTML = killCount;
		tableDeathScore.innerHTML = deathCount;
		slideLogSlideE.style.display = "none";
		slidePlayer1Dead.style.display = "block";

		console.log('player dead');
};



function changeEnemy(){
		currentEnemyCard += 1;
		if (currentEnemyCard >= 39) {
			currentEnemyCard = 1;
		}
		console.log('change Enemy  '+currentEnemyCard);
		enemy1CharCard.style.backgroundImage = "url('../steve.yee/img/enemy" + currentEnemyCard + ".jpg')";
};





// PLAYER ATTACK
function player1AttackRoll(){
	slidePlayer1Turn.style.display = "none"; //you stand ready 
	attackRoll = Math.floor((Math.random() * 20) + 1);
	// attackRoll = 20;

	refresh();
	console.log('player1AttackRoll ' + attackRoll);
	logSlideRollResult.innerHTML = 'Your attack total is ' + attackRoll + ' (+ ' + player1.attack +' skill)';
// HIT enemy 
	if (attackRoll > (enemy1.defense - player1.attack) && attackRoll != 20) {
		slidePlayer1Hit.style.display = "block";

		player1DamageAttackRoll.innerHTML = 'Attack total is ' + (attackRoll + player1.attack) +'  (' + attackRoll + ' + ' + player1.attack +' skill)';
		console.log('hit enemy');
// CRIT
	} else if (attackRoll == 20) {
		slidePlayer1Critical.style.display = "block";
 
		console.log('critical hit on enemy');
		
//MISS
	} else if (attackRoll <= enemy1.defense - player1.attack)	{
		slideLogSlide.style.display = "block";

		logSlideResultLine2.innerHTML = 'Miss';
		logSlideResultLine3.innerHTML = "pathetic...";
		console.log(" player1 miss with " + attackRoll);
	};


};

function player1Damage(){	
		slidePlayer1Hit.style.display = "none";
		slideLogSlide.style.display = "block";

		player1weapon1Damage = Math.floor((Math.random() * player1.weapon1) + 1);
		player1weapon2Damage = Math.floor((Math.random() * player1.weapon2) + 1);
		attackDamage = player1weapon1Damage + player1weapon2Damage;
		enemy1.health = enemy1.health - attackDamage;
		enemy1.health = enemy1.health - player1.damage;

		logSlideRollResult.innerHTML = 'Your attack deals ' + player1weapon1Damage + ' + ' + player1weapon2Damage + ' (weapons) + ' + player1.damage + ' (bonus)';
		logSlideResultLine2.innerHTML = 'a deep wound';
		logSlideResultLine3.innerHTML = "You hit " + (attackDamage + player1.damage) + " down to " + enemy1.health;

		enemy1HealthCounter.innerHTML = enemy1.health;
		console.log('player1 deals ' + player1weapon1Damage + ' ' + player1weapon2Damage +' = '+ attackDamage +' damage');
		
// Killed Enemy
		if (enemy1.health <= 0) {
		slideLogSlide.style.display = "none";	
		slideKillLog.style.display = "block";

		
		damageRollResultK.innerHTML = 'Your damage roll is ' + player1weapon1Damage + ' + ' + player1weapon2Damage + ' damage';
		damageResultLine2K.innerHTML = 'oh the Blood!!';
		damageResultLine3K.innerHTML = 'Sweet Victory!  ' + attackDamage +' damage kills the enemy';	

		enemy1Dead();
		console.log('killed enemy');
	};
};

function player1Critical(){
		slidePlayer1Critical.style.display = "none";
		slideLogSlide.style.display = "block";

		player1weapon1Damage = Math.floor((Math.random() * player1.weapon1) + 1);
		player1weapon2Damage = Math.floor((Math.random() * player1.weapon2) + 1);
		attackDamage = 2 * (player1weapon1Damage + player1weapon2Damage);
		enemy1.health = enemy1.health - (attackDamage);
		enemy1.health = enemy1.health - player1.damage;

		logSlideRollResult.innerHTML = 'Your attack deals ' + player1weapon1Damage + ' + ' + player1weapon2Damage + ' (weapons)';
		logSlideResultLine2.innerHTML = 'Critical hit DOUBLES damage to ' + attackDamage + ', (+ ' + player1.damage + ' bonus)';
		logSlideResultLine3.innerHTML = "The enemy is crippled by " + (attackDamage+player1.damage) +" down to " + enemy1.health + ' health';

		enemy1HealthCounter.innerHTML = enemy1.health;
		console.log('player1 deals crit (' + player1weapon1Damage + ' ' + player1weapon2Damage +') x 2 = '+ attackDamage +' damage');

// killed him Critical
	if (enemy1.health <= 0) {
		slidePlayer1Critical.style.display = "none";
		slideLogSlide.style.display = "none";
		slideKillLog.style.display = "block";

		
		damageRollResultK.innerHTML = 'Your damage roll is (' + player1weapon1Damage + ' + ' + player1weapon2Damage +') = ' + (attackDamage / 2) ;
		damageResultLine2K.innerHTML = 'CRITICAL HIT - Great Glory';
		damageResultLine3K.innerHTML = 'Your blow DOUBLES to ' + (attackDamage) +' and kills the enemy';
		
		enemy1Dead();
		console.log('killed enemy with Crit');
	};	
};



//enemy ATTACK
function enemyAttack(){
	enemy1AttackDone();
	slideEnemy1Turn.style.display = "none";
	slideLogSlideE.style.display = "block";

	attackRollE = Math.floor((Math.random() * 20) + 1);

	// attackRollE = 20; 

	console.log('enemy Attackroll ' + attackRollE);
	logSlideRollResultE.innerHTML = 'Enemy attack roll is ' + attackRollE;

// hit player
	if (attackRollE > player1.defense && attackRollE != 20) {	
		attackDamageE = Math.floor((Math.random() * enemy1.weapon) + 1);
		player1.health = player1.health - attackDamageE;
		player1HealthCounter.innerHTML = player1.health;

		logSlideResultLine2E.innerHTML = 'OUCH!!';
		logSlideResultLine3E.innerHTML = "You  got hit " + attackDamageE +" down to " + player1.health;
	
		console.log("hit player with attackroll " + attackRollE);
		console.log('enemy deals ' + attackDamageE +' Damage');
	
// CRIT
	} else if (attackRollE == 20) {
		attackDamageE = Math.floor((Math.random() * enemy1.weapon) + 1);
		player1.health = player1.health - (attackDamageE*2);
		player1HealthCounter.innerHTML = player1.health;

		logSlideResultLine2E.innerHTML = 'CRITICAL HIT';
		logSlideResultLine3E.innerHTML = "hit (" + (attackDamageE) + " x 2)="+ (attackDamageE*2) +", down to " + player1.health;

		console.log("Enemy deals critical hit");
		console.log(attackDamageE + ' x 2 player Damage');

//enemy miss
	} else if (attackRollE <= player1.defense)	{	
		logSlideResultLine2E.innerHTML = 'Enemy misses..';
		logSlideResultLine3E.innerHTML = "lucky for you";
		console.log(" enemy miss with " + attackRollE);
	};

	// killed player dead
	if (player1.health <= 0) {
		player1Dead();
	};
};
