var xCoord = 0;
var yCoord = 0;

var gridDisplay = "<div class='container'>" +
					 "<div class='row'>" +
					 	"<div class='col-md-2' id='x" + xCoord + "_y" + yCoord + "\'" + ">" +


						"</div>"	+
						"<div class='col-md-2' id='x'" + xCoord + "_y" + yCoord + ">" +
							"<div class='up-arrow'>" + 
								"<div class='icon-up-bold'>" +
								"</div>" +
							"</div>" + 
						"</div>" +	






					"</div>" + // end for class="row"
				"</div>" //end for class="container"








$(document).on('ready', function() {
$('body').append(gridDisplay);

});