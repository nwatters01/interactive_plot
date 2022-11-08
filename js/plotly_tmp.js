d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/3d-scatter.csv', function(err, rows){

var trace1 = {
	x: [1, 2, 3, 4, 5, 6],
	y: [5, 2, 3, 4, 6, 2],
	z: [1, 5, 2, 4, 3, 2],
	mode: 'markers',
	marker: {
		size: 12,
		line: {
		color: 'rgba(217, 217, 217, 0.14)',
		width: 0.5},
		opacity: 0.8},
	type: 'scatter3d'
};


var data = [trace1];
var layout = {margin: {
	l: 0,
	r: 0,
	b: 0,
	t: 0
  }};
Plotly.newPlot('myDiv', data, layout);
});