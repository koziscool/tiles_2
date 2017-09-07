    

var colors = [ 'lightgray','orange', 'darkkhaki', 'firebrick', 'lightgreen', 'deepskyblue', 
        'goldenrod', 'red', 'gray', 
        'blue', 'purple', 'brown', 'black', 'darkgreen', 'lightblue', 'pink'];

var numTiles = 16

var addTilesToGrid = function(  ) {
	console.log('here');
	var $grid = $('.grid'), row, col;
	for( var i = 0; i < numTiles; i++ ){
		var $tileDiv = $("<div><div class='name'>" + i + "</div></div>");
		$tileDiv.addClass('tile');
		row = Math.floor( i / 4 );
		col = i % 4;
		$tileDiv.css({
			left: col*128,
			top: row*128,
			background: colors[i]
		});
		$grid.append( $tileDiv );
	}
};


$(document).ready( function() {
	addTilesToGrid();
});
