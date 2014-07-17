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





var Match3 = (function(){
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

	// var generateIcon = function(){
	// 	var iconStar = new NinjaStar();
	// 	var iconStarEl = iconStar.create();

	// 	var iconSword = new NinjaSword();
	// 	var iconSwordEl = iconSword.create();

	// 	var iconShadow = new NinjaShadow();
	// 	var iconShadowEl = iconShadow.create();

	// 	var iconEnergyDrink = new EnergyDrink();
	// 	var iconEnergyDrinkEl = iconEnergyDrink.create();

	// 	var iconSmokeBomb = new SmokeBomb();
	// 	var iconSmokeBombEl = iconSmokeBomb.create();

	// 	var arrayIcon = [];
	// 	arrayIcon.push(iconStarEl, iconSwordEl, iconShadowEl, iconEnergyDrinkEl, iconSmokeBombEl);

	// 	var len = arrayIcon.length;
	// 	var icon = $(arrayIcon[Math.floor(Math.random()*len)]);
	// 	return icon;
	// }

	var IconObj = function(name){
		this.type = name;

	}


	var generateIconArray = ["ninjaShadow", "ninjaStar", "ninjaSword", "smokeBomb", "energyDrink"];
	var len = generateIconArray.length;



	var randomIcon = function(){
		var iconName = generateIconArray[Math.floor(Math.random()*len)];
		var iconObj = new IconObj(iconName);
	
		return iconObj;
	}
	

	// var GenerateIconList = function(){
	// 	this.rows = [[], [], [], []];

	// }

	// var generateIconList = new GenerateIconList();

	// var rows = [[], [], [], []];
	var middleArray = [];
	var index = 0;

	var Game = function(){
	}
	Game.prototype.rows = [[], [], [], []];

	Game.prototype.generateIconList = function(){
		for(var i=0; i<ROWS; i++){
			for(var j=0; j<ROWS; j++){
				var nameClass = randomIcon();
				
				this.rows[i].push(nameClass);
				middleArray.push(nameClass);
			}
		}
	}

	Game.prototype.renderIcons = function(){

		$('.empty').each(function(index, item){		
			// var ans = generateIcon();

			var ans = middleArray[index].type;

			if( ans === "ninjaStar"){
				var tile = new NinjaStar();
				var tileEl = tile.create();
			}
			else if( ans === "ninjaSword"){
				var tile = new NinjaSword();
				var tileEl = tile.create();
			}
			else if( ans === "ninjaShadow"){
				var tile = new NinjaShadow();
				var tileEl = tile.create();
			}
			else if( ans === "energyDrink"){
				var tile = new EnergyDrink();
				var tileEl = tile.create();
			}
			else {
				var tile = new SmokeBomb();
				var tileEl = tile.create();
			}


			index++;


			$(item).append(tileEl);
			$(item).removeClass('empty').addClass('full');

			// var iconObj = $(ans).attr('class');
		 //  	middleArray.push(iconObj); 
			// generateIconList(iconObj);

		})
	}

	Game.prototype.checkMatches = function(){
		var len = ROWS - 2;
		var numOfMatches;
		var matchedTilesCoordArray = [];
		
		//check for horizontal matches
		for( var i=0; i<ROWS; i++){
			var row = this.rows[i];
			
			for( var n=0; n<len; n++){
				numOfMatches = 1;

				for( var m=1; m<ROWS-n; m++){
					if (row[n].type === row[m+n].type){
						numOfMatches += 1;
					}
					else{
						break;
					}					
				}
				if (numOfMatches >= 3 ){
					// for(var z=n; z<numOfMatches+n; z++){
					// 	row[z].matched = true;
					// }
					row.slice(n, n+numOfMatches).forEach(function(tile){
						tile.matched = true;
						console.log("horizontal", i, n, numOfMatches)
					})

					var dummy = n;
					for(n; n<dummy+numOfMatches; n++){
						matchedTilesCoordArray.push([i, n]);
					}

					n += numOfMatches;
				}				
			}
		}

		//check for vertical matches
		var array = this.rows; // this.rows is the entire array/list
		var column = [];
		matchedTilesCoordArray = [];


		for( var index=0; index<ROWS; index++){	

			for( var i=0; i<ROWS; i++){
				column.push(array[i][index]);  //pushing the array item into column(array)
			}

			for( var n=0; n<len; n++){
				numOfMatches = 1;

				for( var m=1; m<ROWS-n; m++){
					if (column[n].type === column[m+n].type){
						numOfMatches += 1;
					}
					else{
						break;
					}					
				}
				if ( numOfMatches >= 3 ){
					// for(var z=n; z<numOfMatches+n; z++){
					// 	row[z].matched = true;
					// }
					column.slice(n, n+numOfMatches).forEach(function(tile){
						tile.matched = true;
						console.log("vertical", index, n, numOfMatches, tile.type)
					})

					var dummy = n;
					for(n; n<dummy+numOfMatches; n++){
						matchedTilesCoordArray.push([index, n]);
					}

					n += numOfMatches;
				}				
			}
			column = []; // empty column so to get the next index column in the array/index	
		}
	}

	// Game.prototype.fillInTiles = function(){
	// 	var matchedTiles = 

	// }



	Game.prototype.shiftLeft = function(){

	}
	Game.prototype.shiftRight = function(){

	}
	Game.prototype.shiftUp = function(){

	}
	Game.prototype.shiftDown = function() {

	};

	var init = function(){

		var game = new Game();

		game.generateIconList();
		game.renderIcons();
		game.checkMatches();
	}




	return {
		init: init
		


	}


})();


$(document).on('ready', function() {
	// var ninjashadow = new Game.NinjaShadow();
	// $('#x0_y1').append(ninjashadow.create());
	// $('#x1_y1').append(ninjashadow.create());
	 // Game.init();
	 Match3.init();

});