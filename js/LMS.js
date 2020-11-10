


var player1 = {
	name: 'player1',
	alive: true,
	healthMa: 20,
	health: 20,
	defense: 10,
	attackRoll: 'n/a',
	damageBonus: 'n/a',
	weapon: 'Long Sword 1d8',

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
	weapon: 'Dagger 1d4',

	stats: function(){
		alert(player1.name+ ' has ' + player1.health + '/' + player1.healthMa +' health');
	},
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



var killCount = 0;
var deathCount = 0;

// enemyturn popup
function enemyTurn(){
	console.log('enemyturn');
};

function tryAgain(){
	console.log('tryagain');
	nextEnemy();
	var killCount = 0;
	var deathCount = 0;
	player1.health = 20;
	document.getElementById("player1HealthCounter").innerHTML = player1.health;
	document.getElementById("player1Dead").className = "hidden";

};

//enemy ATTACK

function enemyAttack(){
	console.log('enemyattack');
	document.getElementById("enemyTurn").className = "hidden";
	randomNumber = Math.floor((Math.random() * 20) + 1);
	console.log(randomNumber);
	document.getElementById("rollResult").innerHTML = 'Enemy attack roll is ' + randomNumber;

	if (randomNumber > player1.defense ) {
		console.log("hit  player with " + randomNumber);
		document.getElementById("result").innerHTML = 'You are HIT';
		player1.health = player1.health - 5;
		document.getElementById("tvLog").innerHTML = "You  got hit, health is down to " + player1.health;
		document.getElementById("player1HealthCounter").innerHTML = player1.health;
	
// MIss
	} else	{
		console.log("miss with " + randomNumber);
		document.getElementById("result").innerHTML = 'A fiercy attack from the peasant';
		document.getElementById("tvLog").innerHTML = "luckily you dodged the blow";
	};


	// killed player dead
	if (player1.health <= 0) {
		deathCount = deathCount + 1;
		player1.health = 0;

		document.getElementById("player1HealthCounter").innerHTML = player1.health;
		document.getElementById("tvLog").innerHTML = "YOUR DEAD";
		document.getElementById("tvLog").innerHTML = 'You have been killed ' + deathCount + ' times';
		document.getElementById("deathPopup").innerHTML = deathCount;
		document.getElementById("player1Dead").className = "visibleBlock";
		console.log('player dead');
	} 


};


// next enemy popup
function nextEnemy(){
	enemy.health = 20;
	document.getElementById("enemyHealthCounter").innerHTML = enemy.health;
	document.getElementById("rollResult").innerHTML = '...';
	document.getElementById("next").className = "hidden";
	document.getElementById("result").innerHTML = 'You look around..';
	document.getElementById("tvLog").innerHTML = "and see an angry peasant";

};




//var randomNumber = Math.round(Math.random()*10);
// PLAYER ATTACK

function rollDie(){
	randomNumber = Math.floor((Math.random() * 20) + 1);
	console.log(randomNumber);
	document.getElementById("rollResult").innerHTML = 'Your attack roll is ' + randomNumber;

// HIT
	if (randomNumber > enemy.defense ) {
		console.log("hit with " + randomNumber);
		document.getElementById("result").innerHTML = 'HIT';
		enemy.health = enemy.health - 5;
		document.getElementById("tvLog").innerHTML = "You  hit the peasant 5, health is down to " + enemy.health;
		document.getElementById("enemyHealthCounter").innerHTML = enemy.health;
	
// MIss
	} else	{
		console.log("miss with " + randomNumber);
		document.getElementById("result").innerHTML = 'Miss';
		document.getElementById("tvLog").innerHTML = "pathetic...";
	};


// killed him
	if (enemy.health <= 0) {
		killCount = killCount + 1;
		enemy.health = 0;
		document.getElementById("enemyHealthCounter").innerHTML = enemy.health;
		document.getElementById("tvLog").innerHTML = "Killed him!";
		document.getElementById("tvLog").innerHTML = 'The peasant is DEAD, you have killed ' + killCount + ' peasants';
		document.getElementById("killpopup").innerHTML = killCount;
		document.getElementById("next").className = "visibleBlock";
		console.log('killed enemy');
	} else {

// enemy turn
		console.log('enemyturn');
		document.getElementById("enemyTurn").className = "visibleBlock";


	};


	
};



// change Sex
function changeSexMaleP1(){
		console.log('change sex');
		document.getElementById("player1").className = "player01a";
		document.getElementById("genderButtonM").innerHTML = 'You the MAN';
		document.getElementById("genderButtonF").innerHTML = 'woman weak';
};

function changeSexFemaleP1(){
		console.log('change sex');
		document.getElementById("player1").className = "player01b";
		document.getElementById("genderButtonM").innerHTML = 'man weak';
		document.getElementById("genderButtonF").innerHTML = 'You the WOMAN';
};



function peasantTalk(){
	document.getElementById("tvLog").innerHTML = "The peasant hits you 10";
	// alert('The peasant hits you 10');
	player1.health = player1.health - 10;
	document.getElementById("tvLog").innerHTML = "You got hit, Your health is down to " + player1.health;
	document.getElementById("player1HealthCounter").innerHTML = player1.health;

	// killed player dead
	if (player1.health <= 0) {
		deathCount = deathCount + 1;
		player1.health = 0;

		document.getElementById("player1HealthCounter").innerHTML = player1.health;
		document.getElementById("tvLog").innerHTML = "YOUR DEAD";
		document.getElementById("tvLog").innerHTML = 'You have been killed ' + deathCount + ' times';
		document.getElementById("deathPopup").innerHTML = deathCount;
		document.getElementById("player1Dead").className = "visibleBlock";
		console.log('player dead');
	} ;

	};
