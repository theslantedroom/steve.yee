


var player1 = {
	name: 'player1',
	alive: true,
	healthMa: 20,
	health: 20,
	defense: 6,
	attackRoll: 'n/a',
	damageBonus: 'n/a',
	weapon: 4,

	stats: function(){
		alert(player1.name+ ' has ' + player1.health + '/' + player1.healthMa +' health');
	},
};



var enemy = {
	name: 'Peasant',
	alive: true,
	healthMa: 20,
	health: 20,
	defense: 6,
	attackRoll: 'n/a',
	damageBonus: 'n/a',
	weapon: 4,

	stats: function(){
		alert(player1.name+ ' has ' + player1.health + '/' + player1.healthMa +' health');
	},
};

// weapon swap


function swapWeapon(){
document.getElementById('player1Weapon').style.backgroundImage = "url('../steve.yee/img/market/w" + player1Weapon + ".jpg')";
};


var player1Weapon = 1;

function nextWeapon(){
	player1Weapon += 1;
	if (player1Weapon >= 6) {
		player1Weapon = 1;
	}
	swapWeapon();
if (player1Weapon == 1){
		player1.weapon = 4;
};
if (player1Weapon == 2){
		player1.weapon = 6;
};
if (player1Weapon == 3){
		player1.weapon = 8;
};
if (player1Weapon == 4){
		player1.weapon = 10;
};
if (player1Weapon == 5){
		player1.weapon = 12;
};
document.getElementById("player1.weapon").innerHTML = player1.weapon;
};

// weapon2
// var player1Weapon2 = 1;

// function nextWeapon2(){
// 	player1Weapon2 += 1;
// 	if (player1Weapon2 >= 6) {
// 		player1Weapon2 = 1;
// 	}
// 	swapWeapon2();
// if (player1Weapon2 == 1){
// 		player1.weapon2 = 4;
// };
// if (player1Weapon2 == 2){
// 		player1.weapon2 = 6;
// };
// if (player1Weapon2 == 3){
// 		player1.weapon2 = 8;
// };
// if (player1Weapon2 == 4){
// 		player1.weapon2 = 10;
// };
// if (player1Weapon2 == 5){
// 		player1.weapon2 = 12;
// };
// document.getElementById("player1.weapon").innerHTML = player1.weapon;
// };


// next armor
var player1Armor = 1;

function swapArmor(){
document.getElementById('player1Armor').style.backgroundImage = "url('../steve.yee/img/market/a" + player1Armor + ".jpg')";
};

function nextArmor(){
	player1Armor += 1;
	if (player1Armor >= 8) {
		player1Armor = 1;
	}
	swapArmor();
if (player1Armor == 1){
		player1.defense = 6;
};
if (player1Armor == 2){
		player1.defense = 7;
};
if (player1Armor == 3){
		player1.defense = 8;
};
if (player1Armor == 4){
		player1.defense = 9;
};
if (player1Armor == 5){
		player1.defense = 10;
};
if (player1Armor == 6){
		player1.defense = 11;
};
if (player1Armor == 7){
		player1.defense = 12;
};

document.getElementById("player1DefenseCounter").innerHTML = player1.defense;
};

// Bootup stats

document.getElementById("player1.attackRoll").innerHTML = player1.attackRoll;
document.getElementById("enemy.attackRoll").innerHTML = enemy.attackRoll;

document.getElementById("player1.damageBonus").innerHTML = player1.damageBonus;
document.getElementById("enemy.damageBonus").innerHTML = enemy.damageBonus;

document.getElementById("player1.weapon").innerHTML = player1.weapon;
document.getElementById("enemy.weapon").innerHTML = enemy.weapon;

document.getElementById("player1HealthCounter").innerHTML = player1.health;
document.getElementById("player1DefenseCounter").innerHTML = player1.defense;

document.getElementById("enemyHealthCounter").innerHTML = enemy.health;
document.getElementById("enemyDefenseCounter").innerHTML = enemy.defense;

// document.getElementById("player1.kills").innerHTML = killCount;
// document.getElementById("enemy.kills").innerHTML = deathCount;


var gamesPlayed = 0;
var killCount = 0;
var deathCount = 0;

document.getElementById("deathScore").innerHTML = deathCount;
document.getElementById("killScore").innerHTML = killCount;
document.getElementById("gamesPlayed").innerHTML = gamesPlayed;

// enemyturn popup
function enemyTurn(){
	console.log('enemyturn');
};


// START

function start(){
	console.log('start');
	document.getElementById("start").className = "hidden";
	document.getElementById("ready").className = "visibleBlock";
	document.getElementById("tvLog").innerHTML = "START";

};

function tryAgain(){
	console.log('tryagain');
	nextEnemy();
	killCount = 0;
	player1.health = 20;
	document.getElementById("player1HealthCounter").innerHTML = player1.health;
	document.getElementById("player1Dead").className = "hidden";
	document.getElementById("logSlideE").className = "hidden";
	document.getElementById("next").className = "hidden";
	document.getElementById("ready").className = "hidden";
	document.getElementById("start").className = "visibleBlock";

	document.getElementById("deathScore").innerHTML = deathCount;
	document.getElementById("killScore").innerHTML = killCount;
	gamesPlayed = gamesPlayed + 1;
	document.getElementById("gamesPlayed").innerHTML = gamesPlayed;

};

function logSlide(){
	console.log('logSlide');
	document.getElementById("logSlide").className = "hidden";
	document.getElementById("enemyTurn").className = "visibleBlock";

};

function logSlideE(){
	console.log('logSlide');
	document.getElementById("logSlideE").className = "hidden";
	document.getElementById("ready").className = "visibleBlock";

};


// next enemy popup
function nextEnemy(){
	enemy.health = 20;
	document.getElementById("enemyHealthCounter").innerHTML = enemy.health;
	document.getElementById("rollResult").innerHTML = '...';
	document.getElementById("next").className = "hidden";
	document.getElementById("result").innerHTML = 'You look around..';
	document.getElementById("tvLog").innerHTML = "and see an angry peasant";
	document.getElementById("next").className = "visibleBlock";
	document.getElementById("killLog").className = "hidden";

	document.getElementById("deathScore").innerHTML = deathCount;
	document.getElementById("killScore").innerHTML = killCount;

};



function fightNext(){
	document.getElementById("ready").className = "visibleBlock";
	document.getElementById("next").className = "hidden";
};
//enemy ATTACK

function enemyAttack(){
	console.log('enemyattack');
	document.getElementById("enemyTurn").className = "hidden";
	randomNumber = Math.floor((Math.random() * 20) + 1);
	console.log(randomNumber);
	document.getElementById("rollResultE").innerHTML = 'Enemy attack roll is ' + randomNumber;
// hit
	if (randomNumber > player1.defense ) {
		console.log("hit  player with attackroll " + randomNumber);
		document.getElementById("resultE").innerHTML = 'OUCH!!';

	randomNumber = Math.floor((Math.random() * enemy.weapon) + 1);
	console.log(randomNumber + 'enemy Damage');


		player1.health = player1.health - randomNumber;
		document.getElementById("tvLogE").innerHTML = "You  got hit " + randomNumber +" down to " + player1.health;
		document.getElementById("player1HealthCounter").innerHTML = player1.health;
	
// MIss
	} else	{
		console.log("miss with " + randomNumber);
		document.getElementById("resultE").innerHTML = 'The enemy swings..';
		document.getElementById("tvLogE").innerHTML = "luckily you dodged the blow";
	};


	// killed player dead
	if (player1.health <= 0) {
		deathCount = deathCount + 1;
		player1.health = 0;

		document.getElementById("player1HealthCounter").innerHTML = player1.health;
		document.getElementById("tvLog").innerHTML = "YOUR DEAD";
		document.getElementById("tvLog").innerHTML = 'You have been killed ' + deathCount + ' times';
		document.getElementById("deathPopup").innerHTML = deathCount;
		document.getElementById("deathScore").innerHTML = deathCount;
		document.getElementById("player1Dead").className = "visibleBlock";
		console.log('player dead');
	};

	document.getElementById("logSlideE").className = "visibleBlock";
	document.getElementById("enemyTurn").className = "hidden";
};



//var randomNumber = Math.round(Math.random()*10);
// PLAYER ATTACK

function rollDie(){
	randomNumber = Math.floor((Math.random() * 20) + 1);
	console.log(randomNumber);
	document.getElementById("rollResult").innerHTML = 'Your attack roll is ' + randomNumber;

// HIT
	if (randomNumber > enemy.defense ) {
		console.log("hit with attack roll " + randomNumber);
		document.getElementById("result").innerHTML = 'HIT';
	

		// player1 damage
		randomNumber = Math.floor((Math.random() * player1.weapon) + 1);
		console.log(randomNumber + 'player Damage');
		enemy.health = enemy.health - randomNumber;

		document.getElementById("tvLog").innerHTML = "You hit " + randomNumber + " down to " + enemy.health;
		document.getElementById("enemyHealthCounter").innerHTML = enemy.health;
		document.getElementById("ready").className = "hidden";
		document.getElementById("logSlide").className = "visibleBlock";
	
// MIss
	} else	{
		console.log("miss with " + randomNumber);
		document.getElementById("result").innerHTML = 'Miss';
		document.getElementById("tvLog").innerHTML = "pathetic...";
		document.getElementById("ready").className = "hidden";
	};


// killed him
	if (enemy.health <= 0) {
		killCount = killCount + 1;
		enemy.health = 0;
		document.getElementById("enemyHealthCounter").innerHTML = enemy.health;
		document.getElementById("tvLogK").innerHTML = 'Your blow for ' + randomNumber +' kills the enemy';
		document.getElementById("resultK").innerHTML = 'HIT';
		document.getElementById("killScore").innerHTML = killCount;
		document.getElementById("rollResultK").innerHTML = 'Your attack roll is ' + randomNumber;
		document.getElementById("killpopup").innerHTML = killCount;
		document.getElementById("logSlide").className = "hidden";
		document.getElementById("killLog").className = "visibleBlock";
		console.log('killed enemy');
	} else {

// enemy turn
		console.log('enemyturn');
		document.getElementById("logSlide").className = "visibleBlock";
	};	
};






// change Sex
function changeSexMaleP1(){
		console.log('change sex');
		document.getElementById("player1").className = "player01a";
		document.getElementById("genderButtonM").innerHTML = 'You the MAN';
		document.getElementById("genderButtonF").innerHTML = '-';
};

function changeSexFemaleP1(){
		console.log('change sex');
		document.getElementById("player1").className = "player01b";
		document.getElementById("genderButtonM").innerHTML = '-';
		document.getElementById("genderButtonF").innerHTML = 'You the WOMAN';
};




