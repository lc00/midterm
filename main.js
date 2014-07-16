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

	var UpArrow = function(){

	}
	UpArrow.prototype.create = function(){
		this.el = $('<i class="icon-up-bold"></i>');
		return this.el;
	}
	var DownArrow = function(){
	}
	DownArrow.prototype.create = function(){
		this.el = $('<i class="icon-down-bold"></i>');
		return this.el;
	}
	var LeftArrow = function(){
	}
	LeftArrow.prototype.create = function(){
		this.el = $('<i class="icon-left-bold"></i>');
		return this.el;
	}
	var RightArrow = function(){
	}
	RightArrow.prototype.create = function(){
		this.el = $('<i class="icon-right-bold"></i>');
		return this.el;
	}

	var NinjaStar = function(){
	}
	NinjaStar.prototype.create = function(){
		this.el = $('<div class="ninjaStar"><img src="ninja_star.jpg"></div>');
		return this.el;
	}

	var NinjaSword = function(){
	}
	NinjaSword.prototype.create = function(){
		this.el = $('<div class="icon ninjaSword"><img src="ninja_sword.jpg"></div>');
		return this.el;
	}

	var NinjaShadow = function(){
	}
	NinjaShadow.prototype.create = function(){
		this.el = $('<div class="icon ninjaShadow"><img src="ninja_shadow.jpg"></div>');
		return this.el;
	}

	var EnergyDrink = function(){
	}
	EnergyDrink.prototype.create = function(){
		this.el = $('<div class="icon energyDrink"><img src="energy_drink.jpg"></div>');
		return this.el;
	} 

	var SmokeBomb = function(){
	}
	SmokeBomb.prototype.create = function(){
		this.el = $('<div class="icon smokeBomb"><img src="smoke_bomb.png"></div>');
		return this.el;
	} 


	var rows = [];


	var init = function(){


		

		
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
		init: init
	


	}


})();


$(document).on('ready', function() {
	// var ninjashadow = new Game.NinjaShadow();
	// $('#x0_y1').append(ninjashadow.create());
	// $('#x1_y1').append(ninjashadow.create());
	 Game.init();

});