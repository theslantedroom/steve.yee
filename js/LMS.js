
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
	weapon1: 4,
	weapon2: -1,
	armor: 6,
	damage: 0,
	attack: 0,

	health: 20,
	defense: 0,
};

var enemy = {
	name: 'Zombie',
	alive: true,
	health: 10,
	defense: 6,
	weapon: 4,
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

// Visual components
var player1CharCard = document.getElementById("player1");
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
var tableKillScore = document.getElementById("killScore");
var tableDeathScore = document.getElementById("deathScore");
var tableHighScore = document.getElementById("highScore");
var tableGamesPlayed = document.getElementById("gamesPlayed");

var tableHealthBonusSkill = document.getElementById("player1.healthBonusSkill");
var tableDamageBonusSkill = document.getElementById("player1.damageBonusSkill");
var tableAttackBonusSkill = document.getElementById("player1.attackBonusSkill");
var tableDefenseBonusSkill = document.getElementById("player1.defenseBonusSkill");
var tablePlayer1Weapon1 = document.getElementById("player1.weapon1");
var tablePlayer1Weapon2 = document.getElementById("player1.weapon2");
var tablePlayer1Armor = document.getElementById("player1.armor");

var tableEnemyWeapon = document.getElementById("enemy.weapon");

// SLIDES

var slideStart = document.getElementById("start");
var slidePlayer1Damage= document.getElementById("player1Damage");
var slidePlayer1Critical= document.getElementById("player1Critical");
var slidePlayer1Turn = document.getElementById("player1Turn");
var slideEnemy1Turn = document.getElementById("enemyTurn");
var slideLogSlide = document.getElementById("logSlide");
var slideLogSlideE = document.getElementById("logSlideE");
var slideNextEnemy = document.getElementById("nextEnemy");

var logSlideRollResult = document.getElementById("rollResult");
var logSlideResultLine2 = document.getElementById("resultLine2");
var logSlideResultLine3 = document.getElementById("resultLine3");

var logSlideRollResultE = document.getElementById("rollResultE");
var logSlideResultLine2E = document.getElementById("resultLine2E");
var logSlideResultLine3E = document.getElementById("resultLine3E");

var damageRollResultK = document.getElementById("rollResultK");
var damageResultLine2K = document.getElementById("damageResultLine2K");
var damageResultLine3K= document.getElementById("damageResultLine3K");

var slideKillLog = document.getElementById("killLog");
var slidePlayer1Dead = document.getElementById("player1Dead");
var PopUpEnemy1Dead = document.getElementById("enemy1Dead");
var deathCountPopup = document.getElementById("deathCountPopup");
var finalScorePopup = document.getElementById("finalScore");
var player1DamageLog = document.getElementById("player1DamageLog");
var player1CriticalLog = document.getElementById("player1CriticalLog");






function refresh(){

// calculate Final Stats
	player1.defense = player1.defenseBonusWeapon + player1.defenseBonusShield + player1.armor + player1.defenseBonusSkill;

	player1.damage =  player1.damageBonusWeapon + player1.damageBonusSkill;

	player1.attack =  player1.attackBonusSkill + player1.attackBonusWeapon;	

// CARD UPDATES

		player1CharCard.style.backgroundImage = "url('../steve.yee/img/charCard" + currentCharCard + ".jpg')";
		enemy1CharCard.style.backgroundImage = "url('../steve.yee/img/enemy" + currentEnemyCard + ".jpg')";
		player1Weapon1Card.style.backgroundImage = "url('../steve.yee/img/market/w" + player1Weapon + ".jpg')";
		player1ArmorCard.style.backgroundImage = "url('../steve.yee/img/market/w" + player1Armor + ".jpg')";
		player1Weapon2Card.style.backgroundImage = "url('../steve.yee/img/market/w" + player1Weapon2 + ".jpg')";
		player1HealthCard.style.backgroundImage = "url('../steve.yee/img/market/healthBonus0" + player1HealthBonus + ".jpg')";
		player1DamageCard.style.backgroundImage = "url('../steve.yee/img/market/damageBonus" + player1DamageBonus + ".jpg')";
		player1AttackCard.style.backgroundImage = "url('../steve.yee/img/market/attackBonus" + player1AttackBonus + ".jpg')";
		player1DefenseCard.style.backgroundImage = "url('../steve.yee/img/market/defenseBonus" + player1DefenseBonus + ".jpg')";
		player1DefenseCounter.innerHTML = player1.defense;
		enemy1HealthCounter.innerHTML = enemy.health;	

// Damage popup images

		logWeapon1PopUp.style.backgroundImage = "url('../steve.yee/img/market/w" + player1Weapon + ".jpg')";
		logWeapon2PopUp.style.backgroundImage = "url('../steve.yee/img/market/w" + player1Weapon2 + ".jpg')";	

// TABLE		
		tableKillScore.innerHTML = killCount;
		tableDeathScore.innerHTML = deathCount;
		tableHighScore.innerHTML = highScore;
		tableGamesPlayed.innerHTML = gamesPlayed;
		tableHealthBonusSkill.innerHTML = player1.healthBonusSkill;
		tableDamageBonusSkill.innerHTML = player1.damageBonusSkill;
		tableAttackBonusSkill.innerHTML = player1.attackBonusSkill;
		tableDefenseBonusSkill.innerHTML = player1.defenseBonusSkill;
		tablePlayer1Weapon1.innerHTML = player1.weapon1;
		tablePlayer1Weapon2.innerHTML = player1.weapon2;
		tablePlayer1Armor.innerHTML = player1.armor;
		
		tableEnemyWeapon.innerHTML = enemy.weapon;
};

refresh();

// BOOTUP
player1HealthCounter.innerHTML = player1.health;


// START
function start(){
	console.log('start');
	slideStart.className = "hidden";
	slidePlayer1Turn.className = "visibleBlock";
};

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
player1HealthCounter.innerHTML = player1.health;
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
	player1HealthCounter.innerHTML = player1.health;
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
			player1.weapon1 = -1;
	};
	if (player1Weapon == 1){
			player1.weapon1 = 4;
	};
	if (player1Weapon == 2){
			player1.weapon1 = 6;
	};
	if (player1Weapon == 3){
			player1.weapon1 = 8;
	};
	if (player1Weapon == 4){
			player1.weapon1 = 10;
	};
	if (player1Weapon == 5){
			player1.weapon1 = 12;
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
	slidePlayer1Dead.className = "hidden";
	slideLogSlideE.className = "hidden";
	slideNextEnemy.className = "hidden";
	slidePlayer1Turn.className = "hidden";
	slideStart.className = "visibleBlock";

	tableDeathScore.innerHTML = deathCount;
	tableKillScore.innerHTML = killCount;
	gamesPlayed = gamesPlayed + 1;
	refresh();
};

function logSlide(){
	console.log('logSlide close / open "enemyTurn"');
	slideLogSlide.className = "hidden";
	slideEnemy1Turn.className = "visibleBlock";
	enemy1Attack();
};

function logSlideE(){
	console.log('logSlideE close / open "player1Turn"');
	slideLogSlideE.className = "hidden";
	slidePlayer1Turn.className = "visibleBlock";
};

// next enemy popup
function nextEnemy(){
	console.log('next enemy');
	enemy.health = 20;
	enemy1HealthCounter.innerHTML = enemy.health;
	logSlideRollResult.innerHTML = '...';
	logSlideResultLine2.innerHTML = 'You look around..';
	logSlideResultLine3.innerHTML = "and see an angry peasant";
	slideNextEnemy.className = "visibleBlock";
	slideKillLog.className = "hidden";
	tableDeathScore.innerHTML = deathCount;
	tableKillScore.innerHTML = killCount;
};

function fightNext(){
	slidePlayer1Turn.className = "visibleBlock";
	slideNextEnemy.className = "hidden";
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
	PopUpEnemy1Dead.className = "visibleBlock";
	setTimeout(function(){ 
	PopUpEnemy1Dead.className = "hidden"
	}, 1000);
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
		enemy1CharCard.style.backgroundImage = "url('../steve.yee/img/enemy" + currentEnemyCard + ".jpg')";
};



//enemy ATTACK
function enemyAttack(){
	enemy1AttackDone();
	slideEnemy1Turn.className = "hidden";
	attackRollE = Math.floor((Math.random() * 20) + 1);

	// attackRollE = 20; 

	console.log('enemy Attackroll ' + attackRollE);
	logSlideRollResultE.innerHTML = 'Enemy attack roll is ' + attackRollE;

// hit player
	if (attackRollE > player1.defense && attackRollE != 20) {
		console.log("hit player with attackroll " + attackRollE);
		logSlideResultLine2E.innerHTML = 'OUCH!!';

		attackDamageE = Math.floor((Math.random() * enemy.weapon) + 1);
		console.log('enemy deals ' + attackDamageE +' Damage');
		player1.health = player1.health - attackDamageE;

		logSlideResultLine3E.innerHTML = "You  got hit " + attackDamageE +" down to " + player1.health;
		player1HealthCounter.innerHTML = player1.health;	
		slideLogSlideE.className = "visibleBlock";

		// CRIT
	} else if (attackRollE == 20) {
		console.log("Enemy deals critical hit");
		logSlideResultLine2E.innerHTML = 'CRITICAL HIT';

		// Enemy Deals damage
		attackDamageE = Math.floor((Math.random() * enemy.weapon) + 1);
		console.log(attackDamageE + ' x 2 player Damage');
		player1.health = player1.health - (attackDamageE*2);

		logSlideResultLine3E.innerHTML = "hit (" + (attackDamageE) + " x 2)="+ (attackDamageE*2) +", down to " + player1.health;
		player1HealthCounter.innerHTML = player1.health;
		slideLogSlideE.className = "visibleBlock";

//enemy miss
	} else if (attackRollE <= player1.defense)	{
		console.log(" enemy miss with " + attackRollE);
		logSlideResultLine2E.innerHTML = 'Enemy misses..';
		logSlideResultLine3E.innerHTML = "lucky for you";
		slideLogSlideE.className = "visibleBlock";
	};

	// killed player dead
	if (player1.health <= 0) {
		deathCount = deathCount + 1;
		// player1.health = 0;

		player1HealthCounter.innerHTML = player1.health;
		logSlideResultLine3.innerHTML = 'You have been killed ' + deathCount + ' times';
		deathCountPopup.innerHTML = deathCount;
		finalScorePopup.innerHTML = killCount;
		tableDeathScore.innerHTML = deathCount;
		slideLogSlideE.className = "hidden";
		slidePlayer1Dead.className = "visibleBlock";
		console.log('player dead');
	};
};




// PLAYER ATTACK
function player1AttackRoll(){
	slidePlayer1Turn.className = "hidden";
	attackRoll = Math.floor((Math.random() * 20) + 1);
	// attackRoll = 20;

	refresh();
	console.log('player1AttackRoll ' + attackRoll);
	logSlideRollResult.innerHTML = 'Your attack total is ' + attackRoll + ' (+ ' + player1.attack +' skill)';
// HIT enemy
	if (attackRoll > (enemy.defense - player1.attack) && attackRoll != 20) {
		console.log('hit enemy');

		player1DamageLog.innerHTML = 'Attack total is ' + (attackRoll + player1.attack) +'  (' + attackRoll + ' + ' + player1.attack +' skill)';
		slidePlayer1Damage.className = "visibleBlock";
		slidePlayer1Turn.className = "hidden";
	

// CRIT
	} else if (attackRoll == 20) {
		console.log('critical hit on enemy');
		player1CriticalLog.innerHTML = 'You rolled 20';
		slidePlayer1Critical.className = "visibleBlock";
		slidePlayer1Turn.className = "hidden";
		
//MISS
	} else if (attackRoll <= enemy.defense)	{
		console.log(" player1 miss with " + attackRoll);
		logSlideResultLine2.innerHTML = 'Miss';
		logSlideResultLine3.innerHTML = "pathetic...";
		slideLogSlide.className = "visibleBlock";
	};


};

function player1Damage(){
		player1weapon1Damage = Math.floor((Math.random() * player1.weapon1) + 1);
		player1weapon2Damage = Math.floor((Math.random() * player1.weapon2) + 1);
		attackDamage = player1weapon1Damage + player1weapon2Damage;
		console.log('player1 deals ' + player1weapon1Damage + ' ' + player1weapon2Damage +' = '+ attackDamage +' damage');
		enemy.health = enemy.health - attackDamage;
		enemy.health = enemy.health - player1.damage;

		player1DamageLog.innerHTML = 'HIT';
		logSlideRollResult.innerHTML = 'Your attack deals ' + player1weapon1Damage + ' + ' + player1weapon2Damage + ' (weapons) + ' + player1.damage + ' (bonus)';
		logSlideResultLine2.innerHTML = 'a deep wound';
		logSlideResultLine3.innerHTML = "You hit " + (attackDamage + player1.damage) + " down to " + enemy.health;
		enemy1HealthCounter.innerHTML = enemy.health;
		slideLogSlide.className = "visibleBlock";
		slidePlayer1Damage.className = "hidden";


// Killed Enemy
		if (enemy.health <= 0) {
		killCount = killCount + 1;
		enemy.health = 0;
		enemy1Dead();
		console.log('killed enemy');

		damageRollResultK.innerHTML = 'Your damage roll is ' + player1weapon1Damage + ' + ' + player1weapon2Damage + ' damage';
		damageResultLine2K.innerHTML = 'oh the Blood!!';
		damageResultLine3K.innerHTML = 'Sweet Victory!  ' + attackDamage +' damage kills the enemy';
		
		tableKillScore.innerHTML = killCount;
		document.getElementById("killpopup").innerHTML = killCount;
		enemy1HealthCounter.innerHTML = enemy.health;

		slideKillLog.className = "visibleBlock";
		slideLogSlide.className = "hidden";

	};
};

function player1Critical(){
	console.log("player deals critical hit");
		player1weapon1Damage = Math.floor((Math.random() * player1.weapon1) + 1);
		player1weapon2Damage = Math.floor((Math.random() * player1.weapon2) + 1);
		attackDamage = 2 * (player1weapon1Damage + player1weapon2Damage);
		console.log('player1 deals crit (' + player1weapon1Damage + ' ' + player1weapon2Damage +') x 2 = '+ attackDamage +' damage');
		enemy.health = enemy.health - (attackDamage);
		enemy.health = enemy.health - player1.damage;

		logSlideRollResult.innerHTML = 'Your attack deals ' + player1weapon1Damage + ' + ' + player1weapon2Damage + ' (weapons)';
		logSlideResultLine2.innerHTML = 'Critical hit DOUBLES damage to ' + attackDamage + ', (+ ' + player1.damage + ' bonus)';
		logSlideResultLine3.innerHTML = "The enemy is crippled by " + (attackDamage+player1.damage) +" down to " + enemy.health + ' health';
		
		enemy1HealthCounter.innerHTML = enemy.health;
		slideLogSlide.className = "visibleBlock";
		slidePlayer1Critical.className = "hidden";

// killed him Critical
	if (enemy.health <= 0) {
		killCount = killCount + 1;
		enemy.health = 0;
		enemy1Dead();
		console.log('killed enemy with Crit');

		damageRollResultK.innerHTML = 'Your damage roll is (' + player1weapon1Damage + ' + ' + player1weapon2Damage +') = ' + (attackDamage / 2) ;
		damageResultLine2K.innerHTML = 'CRITICAL HIT - Great Glory';
		damageResultLine3K.innerHTML = 'Your blow DOUBLES to ' + (attackDamage) +' and kills the enemy';
		
		tableKillScore.innerHTML = killCount;
		document.getElementById("killpopup").innerHTML = killCount;
		enemy1HealthCounter.innerHTML = enemy.health;

		slideKillLog.className = "visibleBlock";
		slideLogSlide.className = "hidden";
		slidePlayer1Critical.className = "hidden";
	};	
};



