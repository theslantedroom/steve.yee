

//var attackRoll = Math.round(Math.random()*10);

var player1 = {
	name: 'player1',

	

	healthBonusArmor: 0,
	damageBonusWeapon: 0,
	attackBonusWeapon: 0,
	defenseBonusWeapon: 0,
	defenseBonusShield: 0,
	damageBonusShield: 0,

	healthBonusSkill: 0,
	damageBonusSkill: 0,
	attackBonusSkill: 0,
	defenseBonusSkill: 0,
	weapon: 4,
	weapon2: -1,
	armor: 6,
	damage: 0,
	attack: 0,



	health: 20,
	defense: 0,

	stats: function(){
		alert(player1.name+ ' has ' + player1.health + '/' + player1.healthMa +' health');
	},
};



var enemy = {
	name: 'Zombie',
	alive: true,
	health: 20,
	defense: 6,
	weapon: 4,

	stats: function(){
		alert(player1.name+ ' has ' + player1.health + '/' + player1.healthMa +' health');
	},
};

var player1HealthBonus = 0;
var player1DamageBonus = 0;
var player1AttackBonus = 0;
var player1DefenseBonus = 0;
var player1Weapon = 1;
var player1Weapon2 = 0;
var player1Armor = 41;

var killCount = 0;
var deathCount = 0;
var highScore = 0;
var gamesPlayed = 0;

var attackRollE = 0;
var attackRoll = 0;
var attackDamage = 0;
var attackDamageE = 0;
var currentCharCard = 1;
var currentEnemyCard = 3;





// weapon swap

function refresh(){

	// calculate Final Stats
	player1.defense = player1.defenseBonusWeapon + player1.defenseBonusShield + player1.armor + player1.defenseBonusSkill;

	player1.damage =  player1.damageBonusWeapon + player1.damageBonusSkill;

	player1.attack =  player1.attackBonusSkill + player1.attackBonusWeapon;

	// player1.health =  20 + player1.healthBonusArmor + player1.healthBonusSkill;
	

//BACKGROUND IMAGES
		document.getElementById("player1").style.backgroundImage = "url('../steve.yee/img/charCard" + currentCharCard + ".jpg')";
		
		document.getElementById('player1Weapon').style.backgroundImage = "url('../steve.yee/img/market/w" + player1Weapon + ".jpg')";
		document.getElementById('player1Weapon2').style.backgroundImage = "url('../steve.yee/img/market/w" + player1Weapon2 + ".jpg')";
		
		document.getElementById('player1DamageBonus').style.backgroundImage = "url('../steve.yee/img/market/damageBonus" + player1DamageBonus + ".jpg')";
		document.getElementById('player1AttackBonus').style.backgroundImage = "url('../steve.yee/img/market/attackBonus" + player1AttackBonus + ".jpg')";
		document.getElementById('player1DefenseBonus').style.backgroundImage = "url('../steve.yee/img/market/defenseBonus" + player1DefenseBonus + ".jpg')";

		document.getElementById('player1HealthBonus').style.backgroundImage = "url('../steve.yee/img/market/healthBonus0" + player1HealthBonus + ".jpg')";
		document.getElementById('player1Armor').style.backgroundImage = "url('../steve.yee/img/market/w" + player1Armor + ".jpg')";

// popup images


		document.getElementById('logWeaponPopUp').style.backgroundImage = "url('../steve.yee/img/market/w" + player1Weapon + ".jpg')";
		document.getElementById('logWeapon2PopUp').style.backgroundImage = "url('../steve.yee/img/market/w" + player1Weapon2 + ".jpg')";
		document.getElementById("player1DefenseCounter").innerHTML = player1.defense;
		document.getElementById("enemyHealthCounter").innerHTML = enemy.health;

// TABLE		
		document.getElementById("killScore").innerHTML = killCount;
		document.getElementById("deathScore").innerHTML = deathCount;
		document.getElementById("highScore").innerHTML = highScore;
		document.getElementById("gamesPlayed").innerHTML = gamesPlayed;
		document.getElementById("enemy.weapon").innerHTML = enemy.weapon;
		document.getElementById("player1.damageBonusSkill").innerHTML = player1.damageBonusSkill;
		document.getElementById("player1.attackBonusSkill").innerHTML = player1.attackBonusSkill;
		document.getElementById("player1.defenseBonusSkill").innerHTML = player1.defenseBonusSkill;
		document.getElementById("player1.weapon").innerHTML = player1.weapon;
		document.getElementById("player1.weapon2").innerHTML = player1.weapon2;
		document.getElementById("player1.armor").innerHTML = player1.armor;
		document.getElementById("player1.healthBonusSkill").innerHTML = player1.healthBonusSkill;

};

refresh();


// BOOTUP
document.getElementById("enemy1").style.backgroundImage = "url('../steve.yee/img/enemy" + currentEnemyCard + ".jpg')";
document.getElementById("player1HealthCounter").innerHTML = player1.health;



function nextArmor(){
	player1Armor += 1;
	if (player1Armor >= 48) {
		player1Armor = 41;
	};
	
if (player1Armor == 41){
		player1.armor = 6;
};
if (player1Armor == 42){
		player1.armor = 7;
};
if (player1Armor == 43){
		player1.armor = 8;
};
if (player1Armor == 44){
		player1.armor = 9;
};
if (player1Armor == 45){
		player1.armor = 10;
};
if (player1Armor == 46){
		player1.armor = 11;
};
if (player1Armor == 47){
		player1.armor = 12;
};

console.log('armor = ' + player1.armor)
player1.health =  20 + player1.healthBonusArmor + player1.healthBonusSkill;
document.getElementById("player1HealthCounter").innerHTML = player1.health;
refresh();
};



function nextHealthBonus(){
	player1HealthBonus += 1;
	if (player1HealthBonus >= 4) {
		player1HealthBonus = 0;
	};

	if (player1HealthBonus == 0){
			player1.healthBonusSkill = 0;
	};
	if (player1HealthBonus == 1){
			player1.healthBonusSkill = 4;
	};
	if (player1HealthBonus == 2){
			player1.healthBonusSkill = 8;
	};

	if (player1HealthBonus == 3){
			player1.healthBonusSkill = 12;
	};

	console.log('nextHealthBonus');

	player1.health =  20 + player1.healthBonusArmor + player1.healthBonusSkill;
	document.getElementById("player1HealthCounter").innerHTML = player1.health;
	refresh();
};


function nextDamageBonus(){
	player1DamageBonus += 1;
	if (player1DamageBonus >= 4) {
		player1DamageBonus = 0;
	};

	if (player1DamageBonus == 0){
			player1.damageBonusSkill = 0;
	};
	if (player1DamageBonus == 1){
			player1.damageBonusSkill = 1;
	};
	if (player1DamageBonus == 2){
			player1.damageBonusSkill = 2;
	};

	if (player1DamageBonus == 3){
			player1.damageBonusSkill = 3;
	};
	refresh();
	console.log('nextDamageBonus');
};


function nextAttackBonus(){
	player1AttackBonus += 1;
	if (player1AttackBonus >= 4) {
		player1AttackBonus = 0;
	};

	if (player1AttackBonus == 0){
			player1.attackBonusSkill = 0;
	};
	if (player1AttackBonus == 1){
			player1.attackBonusSkill = 1;
	};
	if (player1AttackBonus == 2){
			player1.attackBonusSkill = 2;
	};

	if (player1AttackBonus == 3){
			player1.attackBonusSkill = 3;
	};
	refresh();

	console.log('nextattackBonus = ' + player1.attackBonus);
};


function nextDefenseBonus(){
	player1DefenseBonus += 1;
	if (player1DefenseBonus >= 4) {
		player1DefenseBonus = 0;
	};

	if (player1DefenseBonus == 0){
			player1.defenseBonusSkill = 0;
	};
	if (player1DefenseBonus == 1){
			player1.defenseBonusSkill = 1;
	};
	if (player1DefenseBonus == 2){
			player1.defenseBonusSkill = 2;
	};

	if (player1DefenseBonus == 3){
			player1.defenseBonusSkill = 3;
	};
	refresh();
	console.log('nextattackBonus = ' + player1.attackBonus);
};



function nextWeapon(){
	player1Weapon += 1;
	if (player1Weapon >= 6) {
		player1Weapon = 0;
	};

	if (player1Weapon == 0){
			player1.weapon = -1;
	};
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
	refresh();
	console.log('weapon 1 = ' + player1Weapon)
};



function nextWeapon2(){
	player1Weapon2 += 1;
	if (player1Weapon2 >= 6) {
		player1Weapon2 = 0;
	};

	if (player1Weapon2 == 0){
			player1.weapon2 = -1;
	};
	if (player1Weapon2 == 1){
			player1.weapon2 = 4;
	};
	if (player1Weapon2 == 2){
			player1.weapon2 = 6;
	};
	if (player1Weapon2 == 3){
			player1.weapon2 = 8;
	};
	if (player1Weapon2 == 4){
			player1.weapon2 = 10;
	};
	if (player1Weapon2 == 5){
			player1.weapon2 = 12;
	};
	refresh();
	console.log('weapon 2 = ' + player1Weapon2)
};




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
	refresh();
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

	// attackRollE = 20; 

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
		console.log(attackDamageE + ' x 2 player Damage');
		player1.health = player1.health - (attackDamageE*2);

		document.getElementById("tvLogE").innerHTML = "hit (" + (attackDamageE) + " x 2)="+ (attackDamageE*2) +", down to " + player1.health;
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
		// player1.health = 0;

		document.getElementById("player1HealthCounter").innerHTML = player1.health;
		document.getElementById("tvLog").innerHTML = "YOUR DEAD";
		document.getElementById("tvLog").innerHTML = 'You have been killed ' + deathCount + ' times';
		document.getElementById("deathPopup").innerHTML = deathCount;
		document.getElementById("finalScore").innerHTML = killCount;
		document.getElementById("deathScore").innerHTML = deathCount;
		document.getElementById("logSlideE").className = "hidden";
		document.getElementById("player1Dead").className = "visibleBlock";
		console.log('player dead');
	};
	// document.getElementById("logSlideE").className = "visibleBlock";
	// document.getElementById("enemyTurn").className = "hidden";
};




// PLAYER ATTACK
function player1AttackRoll(){
	document.getElementById("player1Turn").className = "hidden";
	attackRoll = Math.floor((Math.random() * 20) + 1);
	// attackRoll = 20;

	refresh();
	console.log('player1AttackRoll ' + attackRoll);
	document.getElementById("rollResult").innerHTML = 'Your attack total is ' + attackRoll + ' (+ ' + player1.attack +' skill)';
// HIT enemy
	if (attackRoll > (enemy.defense - player1.attack) && attackRoll != 20) {
		console.log('hit enemy');

		document.getElementById("player1DamageLog").innerHTML = 'Attack total is ' + (attackRoll + player1.attack) +'  (' + attackRoll + ' + ' + player1.attack +' skill)';
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
		player1weapon1Damage = Math.floor((Math.random() * player1.weapon) + 1);
		player1weapon2Damage = Math.floor((Math.random() * player1.weapon2) + 1);
		attackDamage = player1weapon1Damage + player1weapon2Damage;
		console.log('player1 deals ' + player1weapon1Damage + ' ' + player1weapon2Damage +' = '+ attackDamage +' damage');
		enemy.health = enemy.health - attackDamage;
		enemy.health = enemy.health - player1.damage;

		document.getElementById("player1DamageLog").innerHTML = 'HIT';
		document.getElementById("rollResult").innerHTML = 'Your attack deals ' + player1weapon1Damage + ' + ' + player1weapon2Damage + ' (weapons) + ' + player1.damage + ' (bonus)';
		document.getElementById("result").innerHTML = 'a deep wound (' + (attackDamage + player1.damage) +')' ;
		document.getElementById("tvLog").innerHTML = "You hit " + (attackDamage + player1.damage) + " down to " + enemy.health;
		document.getElementById("enemyHealthCounter").innerHTML = enemy.health;
		document.getElementById("logSlide").className = "visibleBlock";
		document.getElementById("player1Damage").className = "hidden";

		if (enemy.health <= 0) {
		killCount = killCount + 1;
		enemy.health = 0;
		enemy1Dead();
		console.log('killed enemy');

		document.getElementById("rollResultK").innerHTML = 'Your damage roll is ' + player1weapon1Damage + ' + ' + player1weapon2Damage + ' damage';
		document.getElementById("resultK").innerHTML = 'oh the Blood!!';
		document.getElementById("tvLogK").innerHTML = 'Sweet Victory!  ' + attackDamage +' damage kills the enemy';
		
		document.getElementById("killScore").innerHTML = killCount;
		document.getElementById("killpopup").innerHTML = killCount;
		document.getElementById("enemyHealthCounter").innerHTML = enemy.health;

		document.getElementById("killLog").className = "visibleBlock";
		document.getElementById("logSlide").className = "hidden";

	};
};

function player1Critical(){
	console.log("player deals critical hit");
		player1weapon1Damage = Math.floor((Math.random() * player1.weapon) + 1);
		player1weapon2Damage = Math.floor((Math.random() * player1.weapon2) + 1);
		attackDamage = 2 * (player1weapon1Damage + player1weapon2Damage);
		console.log('player1 deals crit (' + player1weapon1Damage + ' ' + player1weapon2Damage +') x 2 = '+ attackDamage +' damage');
		enemy.health = enemy.health - (attackDamage);
		enemy.health = enemy.health - player1.damage;

		document.getElementById("rollResult").innerHTML = 'Your attack deals ' + player1weapon1Damage + ' + ' + player1weapon2Damage + ' (weapons)';
		document.getElementById("result").innerHTML = 'Critical hit DOUBLES damage to ' + attackDamage + ', (+ ' + player1.damage + ' skill)';
		document.getElementById("tvLog").innerHTML = "The enemy is crippled by " + (attackDamage+player1.damage) +" down to " + enemy.health + ' health';
		

		document.getElementById("enemyHealthCounter").innerHTML = enemy.health;
		document.getElementById("logSlide").className = "visibleBlock";
		document.getElementById("player1Critical").className = "hidden";

		// killed him
	if (enemy.health <= 0) {
		killCount = killCount + 1;
		enemy.health = 0;
		enemy1Dead();
		console.log('killed enemy with Crit');

		document.getElementById("rollResultK").innerHTML = 'Your damage roll is (' + player1weapon1Damage + ' + ' + player1weapon2Damage +') = ' + (attackDamage / 2) ;
		document.getElementById("resultK").innerHTML = 'CRITICAL HIT - Great Glory';
		document.getElementById("tvLogK").innerHTML = 'Your blow DOUBLES to ' + (attackDamage) +' and kills the enemy';
		
		document.getElementById("killScore").innerHTML = killCount;
		document.getElementById("killpopup").innerHTML = killCount;
		document.getElementById("enemyHealthCounter").innerHTML = enemy.health;

		document.getElementById("killLog").className = "visibleBlock";
		document.getElementById("logSlide").className = "hidden";
		document.getElementById("player1Critical").className = "hidden";
	};	
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
		refresh();

		
};


function changeEnemy(){
		currentEnemyCard += 1;

		if (currentEnemyCard >= 39) {
			currentEnemyCard = 1;
		}
		console.log('change Enemy  '+currentEnemyCard);
		document.getElementById("enemy1").style.backgroundImage = "url('../steve.yee/img/enemy" + currentEnemyCard + ".jpg')";
};
