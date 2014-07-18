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

	var index = 0;
													// middleArray declaration
	var Game = function(){
	}
	Game.prototype.rows = [[], [], [], []];

	Game.prototype.generateIconList = function(){  // this is the array/list
		for(var r=0; r<ROWS; r++){
			for(var c=0; c<ROWS; c++){
				var obj = randomIcon();
				
				this.rows[r].push(obj);
												// middleArray
			}
		}
	}

	// Game.prototype.emptyIcons = function(){
	// 	$('.grid').empty();
	// 	console.log("yes")
	// }


	// var firstTimeRender = true;

	Game.prototype.renderIcons = function(){		// rendering Icons to the grid display

		$('.grid').empty();

			for(var r=0; r<ROWS; r++){
				for(var c=0; c<ROWS; c++){

					var ans = this.rows[r][c].type;  // get an element from array

					if( ans === "ninjaStar"){
						var tile = new NinjaStar();
					}
					else if( ans === "ninjaSword"){
						var tile = new NinjaSword();
					}
					else if( ans === "ninjaShadow"){
						var tile = new NinjaShadow();
					}
					else if( ans === "energyDrink"){
						var tile = new EnergyDrink();
					}
					else {
						var tile = new SmokeBomb();
					}

					var tileEl = tile.create();

					$('#x' + r + '_y' + c).append(tileEl); 															
					
				}
			}
			// $(item).removeClass('empty').addClass('full');
		
			// var iconObj = $(ans).attr('class');
		 //  	middleArray.push(iconObj); 
			// generateIconList(iconObj);
	
		// Match3.firstTimeRender = false;

	}

	var matchedList = [];

	Game.prototype.checkMatches = function(){
		var len = ROWS - 2;
		var numOfMatches_horizontal;
		var numOfMatches_vertical;
		var numOfMatches_total = 0;
		
		//check for horizontal matches
		for( var i=0; i<ROWS; i++){
			var row = this.rows[i];
			
			for( var n=0; n<len; n++){
				numOfMatches_horizontal = 1;

				for( var m=1; m<ROWS-n; m++){
					if (row[n].type === row[m+n].type){
						numOfMatches_horizontal += 1;
					}
					else{
						break;
					}					
				}
				if (numOfMatches_horizontal >= 3 ){
					// for(var z=n; z<numOfMatches_horizontal+n; z++){
					// 	row[z].matched = true;
					// }
					row.slice(n, n+numOfMatches_horizontal).forEach(function(tile){						
						tile.matched = true;
						console.log("horizontal", i, n, numOfMatches_horizontal, tile.type)					
					})

					for(var num=n; num<n+numOfMatches_horizontal; num++){	 //pushes matched tile coord					
						matchedList.push( [i, num] );						 // into matchedList array
					}

					n += numOfMatches_horizontal;
					numOfMatches_total += numOfMatches_horizontal;
				}				
			}
		}

		//check for vertical matches
		var array = this.rows; // this.rows is the entire array/list
		var column = [];

		for( var index=0; index<ROWS; index++){	

			for( var i=0; i<ROWS; i++){
				column.push(array[i][index]);  //pushing the array item into column(array)
			}

			for( var n=0; n<len; n++){
				numOfMatches_vertical = 1;

				for( var m=1; m<ROWS-n; m++){
					if (column[n].type === column[m+n].type){
						numOfMatches_vertical += 1;
					}
					else{
						break;
					}					
				}
				if ( numOfMatches_vertical >= 3 ){
					// for(var z=n; z<numOfMatches_vertical+n; z++){
					// 	row[z].matched = true;
					// }
					column.slice(n, n+numOfMatches_vertical).forEach(function(tile){
						tile.matched = true;
						console.log("vertical", index, n, numOfMatches_vertical, tile.type)
					})

					for(var num=n; num<n+numOfMatches_vertical; num++){	 //pushes matched tile coord					
						matchedList.push( [index, num] );						 // into matchedList array
					}

					n += numOfMatches_vertical;
					numOfMatches_total += numOfMatches_vertical;

				}				
			}
			column = []; // empty column so to get the next index column in the array/index	
		}
		return numOfMatches_total;
	}

	Game.prototype.highlight = function(){
		for(var i=0; i<matchedList.length; i++){
			var coord = matchedList[i];
			$('#x' + coord[0] + '_y' + coord[1]).addClass('highlight');
			console.log($('#x' + coord[0] + '_y' + coord[1]));
		}
	}


	Game.prototype.fillInTiles = function(){  // this is to replace the icon objects that are 
		this.rows.forEach(function(row){		// matched/flagged with newly generated icon objects 
			row.forEach(function(tile, c){		// in the array
				if(tile.matched){
					row[c] = randomIcon();
				}
			})
		})

	}


	Game.prototype.shiftLeft = function(index){   // operation on the array
		var row = this.rows[index];
		var shifted = row.shift();
		row.push(shifted);

	}

	Game.prototype.shiftRight = function(index){
		var row = this.rows[index];
		var popped = row.pop();
		row.unshift(popped);
	}
	
	Game.prototype.shiftUp = function(index){
		var array = this.rows; // grab the array
		var m = 0;			
		var temp = array[m][index];

		for(var n=1; n<ROWS; n++ ){
			array[m][index] = array[n][index];
			m += 1;

		}
		array[m][index] = temp;
		
	}
	
	Game.prototype.shiftDown = function(index) {
		var array = this.rows; // grab the array
		var m = 3;			
		var temp = array[m][index];

		for(var n=ROWS-2; n>=0; n-- ){
			array[m][index] = array[n][index];
			m -= 1;

		}
		array[m][index] = temp;

	};

	var game = new Game();

	var init = function(){


		game.generateIconList();
		game.renderIcons();
		var thereIsMatches = game.checkMatches();
		if (thereIsMatches > 1){
			game.fillInTiles();
			game.renderIcons();
		}
	}




	return {
		init: init,
		game: game

		


	}


})();


$(document).on('ready', function() {
	// var ninjashadow = new Game.NinjaShadow();
	// $('#x0_y1').append(ninjashadow.create());
	// $('#x1_y1').append(ninjashadow.create());
	 // Game.init();
	 Match3.init();

	 $('.left').click(function(){
	 	var index = $(this).data('index');
	 	Match3.game.shiftLeft(index);  // shiftLeft row in the array

	 	var matchesAreFound = true;

	 	while( matchesAreFound ){
			var thereIsMatches = Match3.game.checkMatches();  // check matches in the array
			
			if (thereIsMatches > 1){
				Match3.game.fillInTiles();  // in the array
				Match3.game.renderIcons();
				  // in the grid display
			}

			else {
				Match3.game.renderIcons();  // render grid display based on the left shift in 
				matchesAreFound = false;	// the array; 
			}
		}	
	 // 	if (thereIsMatches > 1){

	 // 		// Match3.game.highlight();		//highlight matched tiles in the grid

		// 	Match3.game.fillInTiles();
		// 	// Match3.game.renderIcons();
		// }

	 // 	else{
	 // 		Match3.game.renderIcons();
	 // 		console.log("wow")
	 // 	}
	 });

	 $('.right').click(function(){
	 	var index = $(this).data('index');
	 	Match3.game.shiftRight(index);  // array

	 	var matchesAreFound = true;

	 	while( matchesAreFound ){
			var thereIsMatches = Match3.game.checkMatches();  // check matches in the array
			
			if (thereIsMatches > 1){
				Match3.game.fillInTiles();  // in the array
				Match3.game.renderIcons();
				  // in the grid display
			}

			else {
				Match3.game.renderIcons();  // render grid display based on the left shift in 
				matchesAreFound = false;	// the array; 
			}
		}	
	 });

	 $('.up').click(function(){
	 	var index = $(this).data('index');
	 	Match3.game.shiftUp(index);

		var matchesAreFound = true;

	 	while( matchesAreFound ){
			var thereIsMatches = Match3.game.checkMatches();  // check matches in the array
			
			if (thereIsMatches > 1){
				Match3.game.fillInTiles();  // in the array
				Match3.game.renderIcons();
				  // in the grid display
			}

			else {
				Match3.game.renderIcons();  // render grid display based on the left shift in 
				matchesAreFound = false;	// the array; 
			}
		}	
	 });

	 $('.down').click(function(){
	 	var index = $(this).data('index');
	 	Match3.game.shiftDown(index);

		var matchesAreFound = true;

	 	while( matchesAreFound ){
			var thereIsMatches = Match3.game.checkMatches();  // check matches in the array
			
			if (thereIsMatches > 1){
				Match3.game.fillInTiles();  // in the array
				Match3.game.renderIcons();
				  // in the grid display
			}

			else {
				Match3.game.renderIcons();  // render grid display based on the left shift in 
				matchesAreFound = false;	// the array; 
			}
		}	
	 });

});