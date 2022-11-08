



// let data_url = "https://raw.githubusercontent.com/nwatters01/interactive_plot/master/data/factorization_data.json";

// Plotly.d3.json(data_url, function(raw){

// 	console.log("sup");
// 	console.log("hi");
// 	console.log(data_url);
// 	console.log(raw["0.84"]);

// 	var f_0_72 = raw["0.72"]
// 	var f_0_76 = raw["0.76"]
// 	var f_0_80 = raw["0.80"]
// 	var f_0_84 = raw["0.84"]
// 	var f_0_88 = raw["0.88"]
// 	var f_0_92 = raw["0.92"]
// 	var f_0_96 = raw["0.96"]
// 	var f_1_00 = raw["1.00"]

// 	var trace1 = {
// 		x: f_0_72.x,
// 		y: f_0_72.y,
// 		z: f_0_72.z,
// 		mode: 'markers',
// 		marker: {
// 			size: 12,
// 			color: f_0_72.color,
// 			line: {color: f_0_72.color, width: 0.5},
// 			opacity: 0.8},
// 		type: 'scatter3d'
// 	};

// 	// var layout = {margin: {
// 	// 	l: 0,
// 	// 	r: 0,
// 	// 	b: 0,
// 	// 	t: 0
// 	// }};
// 	// Plotly.newPlot('myDiv', [trace1], layout);





// 	Plotly.newPlot('myDiv', {
// 		data: [{
// 			x: f_0_72.x,
// 			y: f_0_72.y,
// 			z: f_0_72.z,
// 			mode: 'markers',
// 			marker: {
// 				size: 12,
// 				color: f_0_72.color,
// 				line: {color: f_0_72.color, width: 0.5},
// 				opacity: 0.8},
// 			type: 'scatter3d'
// 		}],
// 		layout: {
// 		  sliders: [{
// 			pad: {t: 30},
// 			x: 0.05,
// 			len: 0.95,
// 			currentvalue: {
// 			  xanchor: 'right',
// 			  prefix: 'color: ',
// 			  font: {
// 				color: '#888',
// 				size: 20
// 			  }
// 			},
// 			transition: {duration: 500},
// 			// By default, animate commands are bound to the most recently animated frame:
// 			steps: [{
// 			  label: '0.72',
// 			  method: 'animate',
// 			  args: [['0.72'], {
// 				mode: 'immediate',
// 				frame: {redraw: true, duration: 500},
// 				transition: {duration: 500}
// 			  }]
// 			}, {
// 			  label: '0.84',
// 			  method: 'animate',
// 			  args: [['0.84'], {
// 				mode: 'immediate',
// 				frame: {redraw: true, duration: 500},
// 				transition: {duration: 500}
// 			  }]
// 			}, {
// 			  label: '0.88',
// 			  method: 'animate',
// 			  args: [['0.88'], {
// 				mode: 'immediate',
// 				frame: {redraw: true, duration: 500},
// 				transition: {duration: 500}
// 			  }]
// 			}]
// 		  }],
// 		  updatemenus: [{
// 			type: 'buttons',
// 			showactive: false,
// 			x: 0.05,
// 			y: 0,
// 			xanchor: 'right',
// 			yanchor: 'top',
// 			pad: {t: 60, r: 20},
// 			buttons: [{
// 			  label: 'Play',
// 			  method: 'animate',
// 			  args: [null, {
// 				fromcurrent: true,
// 				frame: {redraw: true, duration: 1000},
// 				transition: {duration: 500}
// 			  }]
// 			}]
// 		  }]
// 		},
// 		// The slider itself does not contain any notion of timing, so animating a slider
// 		// must be accomplished through a sequence of frames. Here we'll change the color
// 		// and the data of a single trace:
// 		frames: [{
// 			name: '0.72',
// 			x: f_0_72.x,
// 			y: f_0_72.y,
// 			z: f_0_72.z,
// 			mode: 'markers',
// 			marker: {
// 				size: 12,
// 				color: f_0_72.color,
// 				line: {color: f_0_72.color, width: 0.5},
// 				opacity: 0.8},
// 			type: 'scatter3d'
// 		}, {
// 			name: '0.84',
// 			x: f_0_84.x,
// 			y: f_0_84.y,
// 			z: f_0_84.z,
// 			mode: 'markers',
// 			marker: {
// 				size: 12,
// 				color: f_0_84.color,
// 				line: {color: f_0_84.color, width: 0.5},
// 				opacity: 0.8},
// 			type: 'scatter3d'
// 		}, {
// 			name: '0.88',
// 			x: f_0_88.x,
// 			y: f_0_88.y,
// 			z: f_0_88.z,
// 			mode: 'markers',
// 			marker: {
// 				size: 12,
// 				color: f_0_88.color,
// 				line: {color: f_0_88.color, width: 0.5},
// 				opacity: 0.8},
// 			type: 'scatter3d'
// 		}]
// 	  });
	
	

// });






d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/gapminderDataFiveYear.csv', function (err, data) {
  // Create a lookup table to sort and regroup the columns of data,
  // first by year, then by continent:
  var lookup = {};
  function getData(year, continent) {
    var byYear, trace;
    if (!(byYear = lookup[year])) {;
      byYear = lookup[year] = {};
    }
	 // If a container for this year + continent doesn't exist yet,
	 // then create one:
    if (!(trace = byYear[continent])) {
      trace = byYear[continent] = {
        x: [],
        y: [],
        id: [],
        text: [],
        marker: {size: []}
      };
    }
    return trace;
  }

  // Go through each row, get the right trace, and append the data:
  for (var i = 0; i < data.length; i++) {
    var datum = data[i];
    var trace = getData(datum.year, datum.continent);
    trace.text.push(datum.country);
    trace.id.push(datum.country);
    trace.x.push(datum.lifeExp);
    trace.y.push(datum.gdpPercap);
    trace.marker.size.push(datum.pop);
  }

  // Get the group names:
  var years = Object.keys(lookup);
  // In this case, every year includes every continent, so we
  // can just infer the continents from the *first* year:
  var firstYear = lookup[years[0]];
  var continents = Object.keys(firstYear);

  // Create the main traces, one for each continent:
  var traces = [];
  for (i = 0; i < continents.length; i++) {
    var data = firstYear[continents[i]];
	 // One small note. We're creating a single trace here, to which
	 // the frames will pass data for the different years. It's
	 // subtle, but to avoid data reference problems, we'll slice
	 // the arrays to ensure we never write any new data into our
	 // lookup table:
    traces.push({
      name: continents[i],
      x: data.x.slice(),
      y: data.y.slice(),
      id: data.id.slice(),
      text: data.text.slice(),
      mode: 'markers',
      marker: {
        size: data.marker.size.slice(),
        sizemode: 'area',
        sizeref: 200000
      }
    });
  }

  // Create a frame for each year. Frames are effectively just
  // traces, except they don't need to contain the *full* trace
  // definition (for example, appearance). The frames just need
  // the parts the traces that change (here, the data).
  var frames = [];
  for (i = 0; i < years.length; i++) {
    frames.push({
      name: years[i],
      data: continents.map(function (continent) {
        return getData(years[i], continent);
      })
    })
  }

  // Now create slider steps, one for each frame. The slider
  // executes a plotly.js API command (here, Plotly.animate).
  // In this example, we'll animate to one of the named frames
  // created in the above loop.
  var sliderSteps = [];
  for (i = 0; i < years.length; i++) {
    sliderSteps.push({
      method: 'animate',
      label: years[i],
      args: [[years[i]], {
        mode: 'immediate',
        transition: {duration: 300},
        frame: {duration: 300, redraw: false},
      }]
    });
  }

  var layout = {
    xaxis: {
      title: 'Life Expectancy',
      range: [30, 85]
    },
    yaxis: {
      title: 'GDP per Capita',
      type: 'log'
    },
    hovermode: 'closest',
	 // We'll use updatemenus (whose functionality includes menus as
	 // well as buttons) to create a play button and a pause button.
	 // The play button works by passing `null`, which indicates that
	 // Plotly should animate all frames. The pause button works by
	 // passing `[null]`, which indicates we'd like to interrupt any
	 // currently running animations with a new list of frames. Here
	 // The new list of frames is empty, so it halts the animation.
    updatemenus: [{
      x: 0,
      y: 0,
      yanchor: 'top',
      xanchor: 'left',
      showactive: false,
      direction: 'left',
      type: 'buttons',
      pad: {t: 87, r: 10},
      buttons: [{
        method: 'animate',
        args: [null, {
          mode: 'immediate',
          fromcurrent: true,
          transition: {duration: 300},
          frame: {duration: 500, redraw: false}
        }],
        label: 'Play'
      }, {
        method: 'animate',
        args: [[null], {
          mode: 'immediate',
          transition: {duration: 0},
          frame: {duration: 0, redraw: false}
        }],
        label: 'Pause'
      }]
    }],
	 // Finally, add the slider and use `pad` to position it
	 // nicely next to the buttons.
    sliders: [{
      pad: {l: 130, t: 55},
      currentvalue: {
        visible: true,
        prefix: 'Year:',
        xanchor: 'right',
        font: {size: 20, color: '#666'}
      },
      steps: sliderSteps
    }]
  };

  // Create the plot:
  Plotly.newPlot('myDiv', {
    data: traces,
    layout: layout,
    frames: frames,
  });
});
