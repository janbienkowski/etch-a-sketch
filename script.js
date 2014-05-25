$(document).ready(function() {
	appendTable('#container', 4, 4);
	$('td').hover(function() {
		setColor(this);
	})
})

function appendTable(domItem, numRows, numCols){
	$(domItem).append('<table id="table">');
	for(var row=1; row<=numRows; row++){
		$('#table').append('<tr id="row' + row + '">');
		for(var col=1; col<=numCols; col++) {
			$('#row' + row).append('<td></td>');
		}
		$('#table').append('</tr>');
	}	
	$(domItem).append('</table>')	
}

function setColor(domItem) {
	var colors = ["#87FAF4", "#FA9DF8", "#5BFC21", "#FCA668", "#FCF586", "#FA1115"];
	var rand = Math.floor(Math.random()*colors.length);
	if ($(domItem).css('background-color') === 'rgb(232, 231, 230)') {
		$(domItem).css('background-color', colors[rand]);
	};
}

function newGrid() {
	var gridSize = prompt("What size of grid would you like? e.g. 4 => 4x4 grid");
	$('#table').remove();
	appendTable('#container', gridSize, gridSize);
	$('td').hover(function() {
		setColor(this);
	})
}