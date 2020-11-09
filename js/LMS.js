


var player1 = {
	name: 'player1',
	alive: true,
	healthMa: 20,
	health: 20,
	defense: 4,
	attackRoll: 0,
	damageBonus: 0,
	weapon: 'none',

	stats: function(){
		alert(player1.name+ ' has ' + player1.health + '/' + player1.healthMa +' health');
	},
};

var p1h = 20;

function peasantTalk(){
	document.getElementById("tvLog").innerHTML = "The peasant hits you 2";

	alert('The peasant hits you 2');

	player1.health = player1.health - 2;

	document.getElementById("tvLog").innerHTML = "You got hit, Your health is down to " + player1.health;

	document.getElementById("p1health").innerHTML = player1.health;
};


//var randomNumber = Math.round(Math.random()*10);

function rollDie(){
	randomNumber = Math.floor((Math.random() * 20) + 1);
	console.log(randomNumber);
	document.getElementById("rollResult").innerHTML = randomNumber;
}
