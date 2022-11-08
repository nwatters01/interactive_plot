


// let data_url = "https://raw.githubusercontent.com/nwatters01/interactive_plot/master/data/factorization_1.00.json";

// Plotly.d3.json(data_url, function(raw){

// 	console.log("sup");
// 	console.log("hi");
// 	console.log(data_url);

// 	var trace1 = {
// 		x: raw.x,
// 		y: raw.y,
// 		z: raw.z,
// 		mode: 'markers',
// 		marker: {
// 			size: 12,
// 			color: raw.color,
// 			line: {color: raw.color, width: 0.5},
// 			opacity: 0.8},
// 		type: 'scatter3d'
// 	};

// 	var layout = {margin: {
// 		l: 0,
// 		r: 0,
// 		b: 0,
// 		t: 0
// 	}};
// 	Plotly.newPlot('myDiv', [trace1], layout);
// });


let data_url = "https://raw.githubusercontent.com/nwatters01/interactive_plot/master/data/factorization_1.00.json";

// var f_1
Plotly.d3.json(data_url, function(raw){
	f_1 = raw
});

console.log("sup");
console.log(f_1);
console.log(data_url);

var trace1 = {
	x: f_1.x,
	y: f_1.y,
	z: f_1.z,
	mode: 'markers',
	marker: {
		size: 12,
		color: f_1.color,
		line: {color: f_1.color, width: 0.5},
		opacity: 0.8},
	type: 'scatter3d'
};

var layout = {margin: {
	l: 0,
	r: 0,
	b: 0,
	t: 0
}};
Plotly.newPlot('myDiv', [trace1], layout);