

//var attackRoll = Math.round(Math.random()*10);

var player1 = {
	name: 'player1',
	alive: true,
	healthMa: 20,
	health: 20,
	defense: 6,
	attackBonus: 'n/a',
	damageBonus: 'n/a',
	weapon: 4,

	stats: function(){
		alert(player1.name+ ' has ' + player1.health + '/' + player1.healthMa +' health');
	},
};



var enemy = {
	name: 'Zombie',
	alive: true,
	healthMa: 20,
	health: 20,
	defense: 6,
	attackBonus: 'n/a',
	damageBonus: 'n/a',
	weapon: 6,

	stats: function(){
		alert(player1.name+ ' has ' + player1.health + '/' + player1.healthMa +' health');
	},
};

// weapon swap


function swapWeapon(){
document.getElementById('player1Weapon').style.backgroundImage = "url('../steve.yee/img/market/w" + player1Weapon + ".jpg')";
document.getElementById('weaponPopUp').style.backgroundImage = "url('../steve.yee/img/market/w" + player1Weapon + ".jpg')";
document.getElementById('weaponPopUpC').style.backgroundImage = "url('../steve.yee/img/market/w" + player1Weapon + ".jpg')";
};


var gamesPlayed = 0;
var killCount = 0;
var deathCount = 0;
var highScore = 0;
var attackRollE = 0;
var attackroll = 0;
var attackDamage = 0;
var attackDamageE = 0;
var currentCharCard = 1;
var currentEnemyCard = 3;

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

document.getElementById("highScore").innerHTML = highScore;
document.getElementById("enemy.attackRoll").innerHTML = enemy.attackRoll;
document.getElementById("player1.damageBonus").innerHTML = player1.damageBonus;
document.getElementById("enemy.damageBonus").innerHTML = enemy.damageBonus;
document.getElementById("player1.weapon").innerHTML = player1.weapon;
document.getElementById("enemy.weapon").innerHTML = enemy.weapon;
document.getElementById("player1HealthCounter").innerHTML = player1.health;
document.getElementById("player1DefenseCounter").innerHTML = player1.defense;
document.getElementById("enemyHealthCounter").innerHTML = enemy.health;
document.getElementById("enemyDefenseCounter").innerHTML = enemy.defense;
document.getElementById("player1").style.backgroundImage = "url('../steve.yee/img/charCard" + currentCharCard + ".jpg')";
document.getElementById("enemy1").style.backgroundImage = "url('../steve.yee/img/enemy" + currentEnemyCard + ".jpg')";

// document.getElementById("player1.kills").innerHTML = killCount;
// document.getElementById("enemy.kills").innerHTML = deathCount;


document.getElementById("deathScore").innerHTML = deathCount;
document.getElementById("killScore").innerHTML = killCount;
document.getElementById("gamesPlayed").innerHTML = gamesPlayed;


function highScoreUpdate(){
	if (killCount > highScore) {
		highScore = killCount;
		document.getElementById("highScore").innerHTML = highScore;
	}
};

// enemyturn popup
function enemyTurn(){
	console.log('enemyturn');
};


// START
function start(){
	console.log('start');
	document.getElementById("start").className = "hidden";
	document.getElementById("player1Turn").className = "visibleBlock";
};

function tryAgain(){
	console.log('tryagain');
	nextEnemy();
	highScoreUpdate();

	killCount = 0;
	player1.health = 20;
	document.getElementById("player1HealthCounter").innerHTML = player1.health;
	document.getElementById("player1Dead").className = "hidden";
	document.getElementById("logSlideE").className = "hidden";
	document.getElementById("next").className = "hidden";
	document.getElementById("player1Turn").className = "hidden";
	document.getElementById("start").className = "visibleBlock";

	document.getElementById("deathScore").innerHTML = deathCount;
	document.getElementById("killScore").innerHTML = killCount;
	gamesPlayed = gamesPlayed + 1;
	document.getElementById("gamesPlayed").innerHTML = gamesPlayed;
};

function logSlide(){
	console.log('logSlide close / open "enemyTurn"');
	document.getElementById("logSlide").className = "hidden";
	document.getElementById("enemyTurn").className = "visibleBlock";
	enemy1Attack();
};

function logSlideE(){
	console.log('logSlideE close / open "player1Turn"');
	document.getElementById("logSlideE").className = "hidden";
	document.getElementById("player1Turn").className = "visibleBlock";


};


// next enemy popup
function nextEnemy(){
	console.log('next enemy');
	enemy.health = 20;
	document.getElementById("enemyHealthCounter").innerHTML = enemy.health;
	document.getElementById("rollResult").innerHTML = '...';
	document.getElementById("result").innerHTML = 'You look around..';
	document.getElementById("tvLog").innerHTML = "and see an angry peasant";
	document.getElementById("next").className = "visibleBlock";
	document.getElementById("killLog").className = "hidden";
	document.getElementById("next").className = "visibleBlock";
	document.getElementById("deathScore").innerHTML = deathCount;
	document.getElementById("killScore").innerHTML = killCount;
};


function fightNext(){
	document.getElementById("player1Turn").className = "visibleBlock";
	document.getElementById("next").className = "hidden";
};


//enemy ATTACK
function enemyAttack(){
	enemy1AttackDone();
	document.getElementById("enemyTurn").className = "hidden";
	attackRollE = Math.floor((Math.random() * 20) + 1);
	console.log('enemy Attackroll ' + attackRollE);
	document.getElementById("rollResultE").innerHTML = 'Enemy attack roll is ' + attackRollE;

// hit player
	if (attackRollE > player1.defense && attackRollE != 20) {
		console.log("hit player with attackroll " + attackRollE);
		document.getElementById("resultE").innerHTML = 'OUCH!!';

		attackDamageE = Math.floor((Math.random() * enemy.weapon) + 1);
		console.log('enemy deals ' + attackDamageE +' Damage');
		player1.health = player1.health - attackDamageE;

		document.getElementById("tvLogE").innerHTML = "You  got hit " + attackDamageE +" down to " + player1.health;
		document.getElementById("player1HealthCounter").innerHTML = player1.health;	
		document.getElementById("logSlideE").className = "visibleBlock";

		// CRIT
	} else if (attackRollE == 20) {
		console.log("Enemy deals critical hit");
		document.getElementById("resultE").innerHTML = 'CRITICAL HIT';

		// Enemy Deals damage
		attackDamageE = Math.floor((Math.random() * enemy.weapon) + 1);
		console.log(attackDamageE + ' x 2 player deal Damage');
		player1.health = player1.health - (attackDamage*2);

		document.getElementById("tvLogE").innerHTML = "hit (" + (attackDamageE) + " x 2) down to " + player1.health;
		document.getElementById("player1HealthCounter").innerHTML = player1.health;
		document.getElementById("logSlideE").className = "visibleBlock";

//enemy miss
	} else if (attackRollE <= player1.defense)	{
		console.log(" enemy miss with " + attackRollE);
		document.getElementById("resultE").innerHTML = 'Enemy misses..';
		document.getElementById("tvLogE").innerHTML = "lucky for you";
		document.getElementById("logSlideE").className = "visibleBlock";
	};

	// killed player dead
	if (player1.health <= 0) {
		deathCount = deathCount + 1;
		player1.health = 0;

		document.getElementById("player1HealthCounter").innerHTML = player1.health;
		document.getElementById("tvLog").innerHTML = "YOUR DEAD";
		document.getElementById("tvLog").innerHTML = 'You have been killed ' + deathCount + ' times';
		document.getElementById("deathPopup").innerHTML = deathCount;
		document.getElementById("finalScore").innerHTML = killCount;
		document.getElementById("deathScore").innerHTML = deathCount;
		document.getElementById("player1Dead").className = "visibleBlock";
		console.log('player dead');
	};
	document.getElementById("logSlideE").className = "visibleBlock";
	document.getElementById("enemyTurn").className = "hidden";
};




// PLAYER ATTACK
function player1AttackRoll(){
	document.getElementById("player1Turn").className = "hidden";
	attackRoll = Math.floor((Math.random() * 20) + 1);
	swapWeapon();
	
	console.log('player1AttackRoll ' + attackRoll);
	document.getElementById("rollResult").innerHTML = 'Your attack roll is ' + attackRoll;

// HIT enemy
	if (attackRoll > enemy.defense && attackRoll != 20) {
		console.log('hit enemy');

		document.getElementById("player1DamageLog").innerHTML = 'Attack roll is ' + attackRoll;
		document.getElementById("player1Damage").className = "visibleBlock";
		document.getElementById("player1Turn").className = "hidden";
	

// CRIT
	} else if (attackRoll == 20) {
		console.log('critical hit on enemy');
		document.getElementById("player1CriticalLog").innerHTML = 'You rolled 20';
		document.getElementById("player1Critical").className = "visibleBlock";
		document.getElementById("player1Turn").className = "hidden";
		
//MISS
	} else if (attackRoll <= enemy.defense)	{
		console.log(" player1 miss with " + attackRoll);
		document.getElementById("result").innerHTML = 'Miss';
		document.getElementById("tvLog").innerHTML = "pathetic...";
		document.getElementById("logSlide").className = "visibleBlock";
	};


};

function player1Damage(){
		document.getElementById("player1DamageLog").innerHTML = 'HIT';
		attackDamage = Math.floor((Math.random() * player1.weapon) + 1);
		console.log('player1 deals ' + attackDamage + ' damage');
		enemy.health = enemy.health - attackDamage;
		document.getElementById("rollResult").innerHTML = 'Your attack deals damage';
		document.getElementById("result").innerHTML = 'a deep wound';
		document.getElementById("tvLog").innerHTML = "You hit " + attackDamage + " down to " + enemy.health;
		document.getElementById("enemyHealthCounter").innerHTML = enemy.health;
		document.getElementById("logSlide").className = "visibleBlock";
		document.getElementById("player1Damage").className = "hidden";

		if (enemy.health <= 0) {
		killCount = killCount + 1;
		enemy.health = 0;
		enemy1Dead();
		console.log('killed enemy');

		document.getElementById("rollResultK").innerHTML = 'Your damage roll is ' + attackDamage + '';
		document.getElementById("resultK").innerHTML = 'oh the Blood!!';
		document.getElementById("tvLogK").innerHTML = 'Sweet Victory!  ' + attackDamage +' damage and kills the enemy';
		
		document.getElementById("killScore").innerHTML = killCount;
		document.getElementById("killpopup").innerHTML = killCount;
		document.getElementById("enemyHealthCounter").innerHTML = enemy.health;

		document.getElementById("killLog").className = "visibleBlock";
		document.getElementById("logSlide").className = "hidden";

	};
};

function player1Critical(){
	console.log("player deals critical hit");
		

		// player1 damage
		attackDamage = Math.floor((Math.random() * player1.weapon) + 1);
		console.log(attackDamage + ' x 2 player deal Damage');
		enemy.health = enemy.health - (attackDamage*2);

		document.getElementById("rollResult").innerHTML = 'Your attack deals Critical damage of';
		document.getElementById("result").innerHTML = attackDamage * 2;
		document.getElementById("tvLog").innerHTML = "hit (" + (attackDamage) + " x 2) down to " + enemy.health;
		

		document.getElementById("enemyHealthCounter").innerHTML = enemy.health;
		document.getElementById("logSlide").className = "visibleBlock";
		document.getElementById("player1Critical").className = "hidden";

		// killed him
	if (enemy.health <= 0) {
		killCount = killCount + 1;
		enemy.health = 0;
		enemy1Dead();
		console.log('killed enemy with Crit');

		document.getElementById("rollResultK").innerHTML = 'Your damage roll is ' + attackDamage;
		document.getElementById("resultK").innerHTML = 'CRITICAL HIT - Great Glory';
		document.getElementById("tvLogK").innerHTML = 'Your blow doubles to ' + (attackDamage*2) +' and kills the enemy';
		
		document.getElementById("killScore").innerHTML = killCount;
		document.getElementById("killpopup").innerHTML = killCount;
		document.getElementById("enemyHealthCounter").innerHTML = enemy.health;

		document.getElementById("killLog").className = "visibleBlock";
		document.getElementById("logSlide").className = "hidden";
		document.getElementById("player1Critical").className = "hidden";
	};	
};


function weaponPopUp(){
	document.getElementById("player1Weapon").id = "popWeaponUp";

};

function enemy1Attack(){
	document.getElementById("enemy1").id = "enemy1Attack";
};

function enemy1AttackDone(){
	document.getElementById("enemy1Attack").id = "enemy1";
};


function enemy1Dead(){
	document.getElementById("enemy1Dead").className = "visibleBlock";
	setTimeout(function(){ 
	document.getElementById("enemy1Dead").className = "hidden"
	}, 3000);

};





function changeCharacter(){
		
		currentCharCard += 1;

		if (currentCharCard >= 33) {
			currentCharCard = 1;
		}
		console.log('currentCharCard '+currentCharCard);
		document.getElementById("player1").style.backgroundImage = "url('../steve.yee/img/charCard" + currentCharCard + ".jpg')";

		
};


function changeEnemy(){
		currentEnemyCard += 1;

		if (currentEnemyCard >= 39) {
			currentEnemyCard = 1;
		}
		document.getElementById("enemy1").style.backgroundImage = "url('../steve.yee/img/enemy" + currentEnemyCard + ".jpg')";
};
