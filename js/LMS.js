


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

