$( "#tabs" ).tabs({
  active: false,
	collapsible: true,
	hide: true,
	show: false,
	activate: function( event, ui ) {
		var thisID = ui.newPanel.attr('id');
		chartDivID = $('#' + thisID + ' > div:first-child').attr('id');
		initChart(chartDivID);
	}
}).addClass( "ui-tabs-vertical ui-helper-clearfix" );
$( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );

function chartFactory(type = 'scatterPlot') {
  var _chart = {},
    _chartType = type;

  var _width = 500, _height = 300,
    _margins = {top: 30, left: 30, right: 30, bottom: 30},
    _x, _y,
    _data = [],
    _colors = d3.scaleOrdinal(d3.schemeCategory10),
    _svg,
    _chartG,
    _tooltip;

    _chart.render = function(id) {
      if (!_svg) {
        _svg = d3.select(id).append("svg")
          .attr("height", _height)
          .attr("width", _width);
          _tooltip = d3.select("#scatterPlot").append("div")
            .attr('class', 'tooltip')
            .style('position', 'absolute')
            .style('opacity', '0')
            .style('background-color', '#ddd')
            .style('border-radius', '4px')
            .style('padding', '5px');
        renderAxes(_svg);
      }
      renderChart(_svg);
    };

    function renderAxes(svg) {
      var axesG = svg.append("g")   // create G element to hold both axes
        .attr("class", "axes");
      //renderXAxis(axesG);
      //renderYAxis(axesG);

			_x.range( [0, (_width - _margins.left - _margins.right)] );
      var xAxis = d3.axisBottom()
        .scale(_x);

      axesG.append("g")
        .attr("class", "x axis")
        .attr("transform", function () {
          return "translate(" +
            _margins.left + "," +
            (_height - _margins.bottom) + ")";
        })
        .call(xAxis);

      d3.selectAll("g.x g.tick")
        .append("line")
          .classed("grid-line", true)
          .attr("x1", 0)
          .attr("y1", 0)
          .attr("x2", 0)
          .attr("y2", -(_height - _margins.top - _margins.bottom));

			_y.range([ (_height - _margins.top - _margins.bottom), 0] )
      var yAxis = d3.axisLeft()
        .scale(_y);

        axesG.append("g")
          .attr("class", "y axis")
          .attr("transform", function () {
              return "translate(" + _margins.left + "," + _margins.top + ")";
          })
          .call(yAxis);

         d3.selectAll("g.y g.tick")
          .append("line")
          .classed("grid-line", true)
          .attr("x1", 0)
          .attr("y1", 0)
          .attr("x2", (_width - _margins.left - _margins.right))
          .attr("y2", 0);
    }

    function renderChart(svg) {
      if (!_chartG) {
        _chartG = svg.append("g")
          .attr("class", "body")
          .attr("transform", "translate("
            + _margins.left + ","
            + _margins.top + ")")
          .attr("clip-path", "url(#body-clip)");
      }
      if (_chartType == 'scatterPlot') {
				_data.forEach(function (list, i) {
			    var circles = _chartG.selectAll("circle._" + i)
			      .data(list);
        		renderCircles(circles, i, _tooltip, _x, _y);
				});
      } else if (_chartType == 'lineChart') {
				var line = d3.line()
					.x(function (d) { return _x(d.x); })
					.y(function (d) { return _y(d.y); });
				var pathLines = _chartG.selectAll("path.line")
					.data(_data);
				renderLines(line, pathLines, _tooltip);

				_data.forEach(function (list, i) {
			    var circles = _chartG.selectAll("circle._" + i)
			      .data(list);
        		renderCircles(circles, i, _tooltip, _x, _y);
				});
			} else if (_chartType == 'areaChart') {
				var line = d3.line()
					.x(function (d) { return _x(d.x); })
					.y(function (d) { return _y(d.y); });
				var pathLines = _chartG.selectAll("path.line")
					.data(_data);
				renderLines(line, pathLines, _tooltip);

				var area = d3.area()
			    .x(function(d) { return _x(d.x); })
			    .y0(_height - _margins.top - _margins.bottom)
			    .y1(function(d) { return _y(d.y); });
			  var pathAreas = _chartG.selectAll("path.area")
			    .data(_data);
				renderAreas(area, pathAreas);

				_data.forEach(function (list, i) {
			    var circles = _chartG.selectAll("circle._" + i)
			      .data(list);
        		renderCircles(circles, i, _tooltip, _x, _y);
				});
			} else if (_chartType == 'barChart') {
				var padding = 2,
					yBaseline = _height - _margins.top - _margins.bottom,
					chartWidth = _width - _margins.left - _margins.right,
					dataLength = _data.length;
			  var bars = _chartG.selectAll("rect.bar")
			    .data(_data);
				renderBars(padding, bars, _x, _y, yBaseline, chartWidth, dataLength);
			} else if (_chartType == 'bubbleChart') {
				var r = d3.scalePow()
					.exponent(2)
					.domain([0, 10])
					.range([0, 50]);
				_data.forEach(function (list, i) {
			    var bubbles = _chartG.selectAll("circle._" + i)
			      .data(list);
					renderBubbles(r, bubbles, _x, _y, i);
				});
			}
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

    _chart.addSeries = function (series) {
      _data.push(series);
      return _chart;
    };

		_chart.addData = function (data) {
      _data = data;
      return _chart;
    };

    return _chart;
} // end chartFactory

var initChart = function(chartType) {
	if (chartType == 'scatterPlot') {
		scatterPlotObject.setData();
	  scatterPlotObject.spChart.render('#scatterPlot');
	} else if (chartType == 'lineChart') {
		lineChartObject.setData();
	  lineChartObject.lineChart.render('#lineChart');
	} else if (chartType == 'areaChart') {
		areaChartObject.setData();
	  areaChartObject.areaChart.render('#areaChart');
	} else if (chartType == 'barChart') {
		barChartObject.setData();
	  barChartObject.barChart.render('#barChart');
	} else if (chartType == 'bubbleChart') {
		bubbleChartObject.setData();
	  bubbleChartObject.bubbleChart.render('#bubbleChart');
	}
}

function update(chartType) {
	if (chartType == 'scatterPlot') {
		initChart('scatterPlot');
	} else if (chartType == 'lineChart') {
		initChart('lineChart');
	} else if (chartType == 'areaChart') {
		initChart('areaChart');
	} else if (chartType == 'barChart') {
		initChart('barChart');
	} else if (chartType == 'bubbleChart') {
		initChart('bubbleChart');
	}
}

function randomVal(val) {
  return Math.random() * (val - 1);
}

/*initChart('scatterPlot');
initChart('lineChart');
initChart('areaChart');
initChart('barChart');
initChart('bubbleChart');*/
