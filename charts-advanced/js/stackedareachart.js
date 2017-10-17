function stackedAreaChart() {
	var _chart = {};

  var _width = 600, _height = 300,
		_margins = {top: 30, left: 30, right: 30, bottom: 30},
    _data = [],
		_x, _y,
    _colors = d3.scaleOrdinal(d3.schemeCategory10),
    _svg,
    _bodyG,
		_line,
		_offsetMode,
		_keys,
		_id,
		_curve;

  _chart.render = function (id) {
		_id = id;
    if (!_svg) {
      _svg = d3.select('#' + id).append("svg")
        .attr("height", _height)
        .attr("width", _width);
				renderAxes(_svg);
    }
    renderBody(_svg);
  };

	function renderAxes(svg) {
    var axesG = svg.append("g")
        .attr("class", "axes");
    renderXAxis(axesG);
    renderYAxis(axesG);
  }

  function renderXAxis(axesG) {
    var xAxis = d3.axisBottom()
      .scale(_x.range([0, quadrantWidth()]));

    axesG.append("g")
      .attr("class", "x axis")
      .attr("transform", function () {
          return "translate(" + xStart() + "," + yStart() + ")";
      })
      .call(xAxis);

			if (_id != 'streamGraph') {
				d3.selectAll("g.x g.tick")
		      .append("line")
		      .classed("grid-line", true)
		      .attr("x1", 0)
		      .attr("y1", 0)
		      .attr("x2", 0)
		      .attr("y2", -quadrantHeight());
			}
  }

  function renderYAxis(axesG) {
    var yAxis = d3.axisLeft()
      .scale(_y.range([quadrantHeight(), 0]));

		if (_id != 'streamGraph') {
			axesG.append("g")
	      .attr("class", "y axis")
	      .attr("transform", function () {
	          return "translate(" + xStart() + "," + yEnd() + ")";
	      })
	      .call(yAxis);

	    d3.selectAll("g.y g.tick")
	      .append("line")
	      .classed("grid-line", true)
	      .attr("x1", 0)
	      .attr("y1", 0)
	      .attr("x2", quadrantWidth())
	      .attr("y2", 0);
		}

  }

  function renderBody(svg) {
    if (!_bodyG)
			_bodyG = svg.append("g")
				.attr("class", "body")
				.attr("transform", "translate("
					+ xStart() + ","
					+ yEnd() + ")")

		var stack = d3.stack()
	      .keys(_keys)
	      .offset(_offsetMode);

    var series = stack(_data);
    console.log(series);

		if (_id != 'streamGraph') {
			renderLines(series);
		}
    renderAreas(series);
  }

	function renderLines(series) {
		_line = d3.line()
		  .x(function (d, i) {
		      return _x(i); //<-C
		  })
		  .y(function (d) {
		      return _y(d[1]); //<-D
		  });

		var linePaths = _bodyG.selectAll("path.line")
		  .data(series);

		linePaths.enter()
		.append("path")
		.merge(linePaths)
		.style("stroke", function (d, i) {
		    return _colors(i);
		})
		.attr("class", "line")
		.transition()
		.attr("d", function (d) {
		    return _line(d);
		});
	}

	function renderAreas(series) {
    var area = d3.area()
			.curve(_curve)
      .x(function (d, i) {
          return _x(i);
      })
      .y0(function(d){return _y(d[0]);}) //<-F
      .y1(function (d) {
          return _y(d[1]);
            });

    var areaPaths = _bodyG.selectAll("path.area")
      .data(series);

    areaPaths.enter()
	    .append("path")
	    .merge(areaPaths)
      .style("fill", function (d, i) {
          return _colors(i);
      })
      .attr("class", "area")
		  .transition()
      .attr("d", function (d) {
          return area(d);
      });
  }

	function xStart() {
      return _margins.left;
  }

  function yStart() {
      return _height - _margins.bottom;
  }

  function xEnd() {
      return _width - _margins.right;
  }

  function yEnd() {
      return _margins.top;
  }

  function quadrantWidth() {
      return _width - _margins.left - _margins.right;
  }

  function quadrantHeight() {
      return _height - _margins.top - _margins.bottom;
  }

  _chart.width = function (w) {
    if (!arguments.length) return _width;
    _width = w;
    return _chart;
  };

  _chart.height = function (h) {
    if (!arguments.length) return _height;
    _height = h;
    return _chart;
  };

	_chart.margins = function (m) {
    if (!arguments.length) return _margins;
    _margins = m;
    return _chart;
  };

  _chart.colors = function (c) {
    if (!arguments.length) return _colors;
    _colors = c;
    return _chart;
  };

	_chart.x = function (x) {
    if (!arguments.length) return _x;
    _x = x;
    return _chart;
  };

  _chart.y = function (y) {
    if (!arguments.length) return _y;
    _y = y;
    return _chart;
  };

  _chart.data = function (data) {
    if (!arguments.length) return _data;
    _data = data;
    return _chart;
	}

	_chart.curve = function (curve) {
    if (!arguments.length) return _curve;
    _curve = curve;
    return _chart;
	}

	_chart.keys = function (keys) {
    if (!arguments.length) return _keys;
    _keys = keys;
    return _chart;
	}

	_chart.offsetMode = function (offsetMode) {
    if (!arguments.length) return _offsetMode;
    _offsetMode = offsetMode;
    return _chart;
	}

  return _chart;
}

var sac = {
	numberOfDataPoint : 31,
	maxVal : 11,
	data : []
};
sac.data = d3.range(sac.numberOfDataPoint).map(function (i) {
  return {value1: randomVal(sac.maxVal), value2: randomVal(sac.maxVal), value3: randomVal(sac.maxVal)};
});

var eac = {
	numberOfDataPoint : 31,
	maxVal : 11,
	data : []
}
eac.data = d3.range(eac.numberOfDataPoint).map(function (i) {
  return {value1: randomVal(eac.maxVal), value2: randomVal(eac.maxVal), value3: randomVal(eac.maxVal)};
});

var sg = {
	numberOfDataPoint : 31,
	maxVal : 15,
	data : []
};
sg.data = d3.range(sac.numberOfDataPoint).map(function (i) {
  return {
		value1: randomVal(sac.maxVal),
		value2: randomVal(sac.maxVal),
		value3: randomVal(sac.maxVal),
		value4: randomVal(sac.maxVal),
		value5: randomVal(sac.maxVal),
		value6: randomVal(sac.maxVal)
	};
});

var stackedAreaChart1 = stackedAreaChart()
	.x(d3.scaleLinear().domain([0, sac.numberOfDataPoint - 1]))
  .y(d3.scaleLinear().domain([0, sac.maxVal * 3]))
	.curve(d3.curveLinear)
	.keys(['value1', 'value2', 'value3'])
	.offsetMode(d3.stackOffsetNone)
	.data(sac.data);

var expandedAreaChart = stackedAreaChart()
	.x(d3.scaleLinear().domain([0, eac.numberOfDataPoint - 1]))
  .y(d3.scaleLinear().domain([0, 1]))
	.curve(d3.curveLinear)
	.keys(['value1', 'value2', 'value3'])
	.offsetMode(d3.stackOffsetExpand)
	.data(eac.data);

var streamGraph = stackedAreaChart()
	.x(d3.scaleLinear().domain([0, sg.numberOfDataPoint - 1]))
  .y(d3.scaleLinear().domain([-30, sg.maxVal * 4]))
	.curve(d3.curveCardinal)
	.keys(['value1', 'value2', 'value3', 'value4', 'value5', 'value6'])
	.offsetMode(d3.stackOffsetWiggle)
	.data(sg.data);
