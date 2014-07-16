// var xCoord = 0;
// var yCoord = 0;

// var gridDisplay = "<div class='container'>" +
// 					 "<div class='row'>" +
// 					 	"<div class='col-md-2' id='x" + xCoord + "_y" + yCoord + "\'" + ">" +
// 						"</div>"	+
// 						"<div class='col-md-2' id='x'" + xCoord + "_y" + yCoord + ">" +
// 							"<div class='up-arrow'>" + 
// 								"<div class='icon-up-bold'>" +
// 								"</div>" +
// 							"</div>" + 
// 						"</div>" +	
// 					"</div>" + // end for class="row"
// 				"</div>" //end for class="container"





var Game = (function(){
	var ONE_SIDE_GRID = 6;  //currently the grid is hard-coded with 6x6(including
						// all the arrows; so actually only 4x4 real contents) 
	var ROWS = 4;

	// var UpArrow = function(){

	// }
	// UpArrow.prototype.create = function(){
	// 	this.el = $('<i class="icon-up-bold"></i>');
	// 	return this.el;
	// }
	// var DownArrow = function(){
	// }
	// DownArrow.prototype.create = function(){
	// 	this.el = $('<i class="icon-down-bold"></i>');
	// 	return this.el;
	// }
	// var LeftArrow = function(){
	// }
	// LeftArrow.prototype.create = function(){
	// 	this.el = $('<i class="icon-left-bold"></i>');
	// 	return this.el;
	// }
	// var RightArrow = function(){
	// }
	// RightArrow.prototype.create = function(){
	// 	this.el = $('<i class="icon-right-bold"></i>');
	// 	return this.el;
	// }

	var NinjaStar = function(){
	}
	NinjaStar.prototype.create = function(){
		this.el = $('<div class="ninjaStar"><img src="ninja_star.jpg"></div>');
		return this.el;
	}

	var NinjaSword = function(){
	}
	NinjaSword.prototype.create = function(){
		this.el = $('<div class="ninjaSword"><img src="ninja_sword.jpg"></div>');
		return this.el;
	}

	var NinjaShadow = function(){
	}
	NinjaShadow.prototype.create = function(){
		this.el = $('<div class="ninjaShadow"><img src="ninja_shadow.jpg"></div>');
		return this.el;
	}

	var EnergyDrink = function(){
	}
	EnergyDrink.prototype.create = function(){
		this.el = $('<div class="energyDrink"><img src="energy_drink.jpg"></div>');
		return this.el;
	} 

	var SmokeBomb = function(){
	}
	SmokeBomb.prototype.create = function(){
		this.el = $('<div class="smokeBomb"><img src="smoke_bomb.png"></div>');
		return this.el;
	} 

	var generateIcon = function(){
		var iconStar = new NinjaStar();
		var iconStarEl = iconStar.create();

		var iconSword = new NinjaSword();
		var iconSwordEl = iconSword.create();

		var iconShadow = new NinjaShadow();
		var iconShadowEl = iconShadow.create();

		var iconEnergyDrink = new EnergyDrink();
		var iconEnergyDrinkEl = iconEnergyDrink.create();

		var iconSmokeBomb = new SmokeBomb();
		var iconSmokeBombEl = iconSmokeBomb.create();
;
		var arrayIcon = [];
		arrayIcon.push(iconStarEl, iconSwordEl, iconShadowEl, iconEnergyDrinkEl, iconSmokeBombEl);

		var len = arrayIcon.length;
		var icon = $(arrayIcon[Math.floor(Math.random()*len)]);
		return icon;
	}

	

	// var GenerateIconList = function(){
	// 	this.rows = [[], [], [], []];

	// }

	// var generateIconList = new GenerateIconList();

	var rows = [[], [], [], []];
	var middleArray = [];
	var index = 0;

	var generateIconList = function(){
		for(var i=0; i<ROWS; i++){
			for(var j=0; j<ROWS; j++){
				rows[i].push(middleArray[index]);
				index++;

			}
		}
	}



	var renderIcon = function(){
		$('.empty').each(function(index, item){		
			var ans = generateIcon();
			$(item).append(ans);
			$(item).removeClass('empty').addClass('full');

			var iconObj = $(ans).attr('class');
		  	middleArray.push(iconObj); 
			// generateIconList(iconObj);

		})
		

	}

	// var generateIconList = function(){
	// 	$('.full').each(function(index, item){
	// 		var ans = $(item).children().attr('class');


	// 	})
	// }


// document.getElementById("Target").className;

	var init = function(){
		renderIcon();
	}


	

	


	this.shiftUp = function(){

	}
	this.shiftDown = function(){

	}
	this.shiftLeft = function(){

	}
	this.shiftRight = function(){

	}


	return {
		init: init,
		generateIconList: generateIconList


	}


})();


$(document).on('ready', function() {
	// var ninjashadow = new Game.NinjaShadow();
	// $('#x0_y1').append(ninjashadow.create());
	// $('#x1_y1').append(ninjashadow.create());
	 // Game.init();
	 Game.init();
	 Game.generateIconList();

});