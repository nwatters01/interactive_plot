

let data_url = "https://raw.githubusercontent.com/nwatters01/interactive_plot/master/data/factorization_data.json";

Plotly.d3.json(data_url, function(raw_data){
	// raw_data is a dictionary {factorization_score: data} for a variety of
	// factorization scores. data is of the form
	// {x: [...], y: [...], z: [...], color: [...]}

	// Create data containing the specifications for one plot, in this case
	// randomly choosing factorizations core 0.72. The data will be overwritten
	// by the slider.
	var data = [{
		x: raw_data["0.72"].x,
		y: raw_data["0.72"].y,
		z: raw_data["0.72"].z,
		mode: 'markers',
		marker: {
			size: 12,
			color: raw_data["0.72"].color,
			line: {color: raw_data["0.72"].color, width: 0.5},
			opacity: 1.0},
		type: 'scatter3d'
	}];

	// Create frames containing only the data we need to change for each slider
	// step
	var frames = [];
	for (const [key, value] of Object.entries(raw_data)) {
		frames.push({
			name: key,
			data: [{
				x: value.x,
				y: value.y,
				z: value.z,
			}]
		})
	}

	// Create slider steps
	var sliderSteps = [];
	for (const key in raw_data) {
		sliderSteps.push({
			label: key,
			method: 'animate',
			args: [
				[key], {
				mode: 'immediate',
				frame: {redraw: true, duration: 500},
				transition: {duration: 500}
				}
			]
		})
	}

	// Create layout with slider
	var layout = {
		autosize: false,
		width: 800,
		height: 800,
		sliders: [{
			pad: {l: 0, t: 55},
			currentvalue: {
				visible: true,
				prefix: 'Factorization Score:   ',
				xanchor: 'center',
				font: {size: 20, color: '#666'}
			},
			steps: sliderSteps,
			name: "SLIDER"
		}]
	};
		
	// Create plot
	Plotly.newPlot('myDiv', {
		data: data,
		layout: layout,
		frames: frames,
	});

});
