// d3.json("samples.json").then((data) => {
// 	var resultArray = data
// 	.samples
// 	.filter(sampleObj => {
// 	  return sampleObj.id == sample
// 	});
	
// 	var result = resultArray[0];
	
// 	var otu_ids = result.otu_ids.map(numericIds => {
// 	  return numericIds;
// 	}).reverse();
	
// 	var sample_values = result.sample_values.reverse();
// 	var otu_labels = result.otu_labels.reverse();
	
// 	var bubble_trace = {
	  
// 	  x: otu_ids,  
// 	  y: sample_values,
// 	  text: otu_labels,
// 	  mode: 'markers',
// 	  marker: {
// 		color: otu_ids,
// 		size: sample_values

// 	  }
// 	};


let data_url = "https://raw.githubusercontent.com/nwatters01/interactive_plot/master/data/test_data.json";

Plotly.d3.json(data_url, function(raw){

	console.log("sup");

	var trace1 = {
		x: raw["x"],
		y: raw.y,
		z: raw.z,
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