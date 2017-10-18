var scatterPlot = {};
scatterPlot.scatterPlotChart = function() {
  var _chart = {};

  var _width = 300, _height = 300,
    _margins = {top: 30, left: 30, right: 30, bottom: 30},
    _x, _y,
    _data = [],
    _colors = d3.scaleOrdinal(d3.schemeCategory10),
    _svg,
    _bodyG,
    _symbolTypes = d3.scaleOrdinal()
      .range([d3.symbolCircle,
        d3.symbolCross,
        d3.symbolDiamond,
        d3.symbolSquare,
        d3.symbolStar,
        d3.symbolTriangle,
        d3.symbolWye
      ]);

    _chart.render = function () {
        if (!_svg) {
            _svg = d3.select("#scatterplot").append("svg")
                    .attr("height", _height)
                    .attr("width", _width);

            renderAxes(_svg);

            defineBodyClip(_svg);
        }

        renderBody(_svg);
    };

    function renderAxes(svg) {
        var axesG = svg.append("g")
                .attr("class", "axes");

        renderXAxis(axesG);

        renderYAxis(axesG);
    }

    function renderXAxis(axesG){
        var xAxis = d3.axisBottom()
                .scale(_x.range([0, quadrantWidth()]));

        axesG.append("g")
                .attr("class", "x axis")
                .attr("transform", function () {
                    return "translate(" + xStart() + "," + yStart() + ")";
                })
                .call(xAxis);

        d3.selectAll("g.x g.tick")
            .append("line")
                .classed("grid-line", true)
                .attr("x1", 0)
                .attr("y1", 0)
                .attr("x2", 0)
                .attr("y2", - quadrantHeight());
    }

    function renderYAxis(axesG){
        var yAxis = d3.axisLeft()
                .scale(_y.range([quadrantHeight(), 0]));

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

    function defineBodyClip(svg) {
        var padding = 5;

        svg.append("defs")
                .append("clipPath")
                .attr("id", "body-clip")
                .append("rect")
                .attr("x", 0 - padding)
                .attr("y", 0)
                .attr("width", quadrantWidth() + 2 * padding)
                .attr("height", quadrantHeight());
    }

    function renderBody(svg) {
        if (!_bodyG)
            _bodyG = svg.append("g")
                    .attr("class", "body")
                    .attr("transform", "translate("
                        + xStart() + ","
                        + yEnd() + ")")
                    .attr("clip-path", "url(#body-clip)");

        renderSymbols();
    }

    function renderSymbols() {
        _data.forEach(function (list, i) {
            var symbols = _bodyG.selectAll("path._" + i)
                    .data(list);

            symbols.enter()
                    .append("path")
                .merge(symbols)
                    .attr("class", "symbol _" + i)
                    .classed(_symbolTypes(i), true)
                .transition()
                    .attr("transform", function(d){
                        return "translate("
                                + _x(d.x)
                                + ","
                                + _y(d.y)
                                + ")";
                    })
                    .attr("d",
                        d3.symbol()
                            .type(_symbolTypes(i))
                    );
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

    _chart.addSeries = function (series) {
        _data.push(series);
        return _chart;
    };

    return _chart;
}; // end scatterPlotChart

scatterPlot.randomData = function() {
  return Math.random() * 9;
};

scatterPlot.numberOfSeries = 5;
scatterPlot.numberOfDataPoint = 11;
scatterPlot.data = [];

scatterPlot.initData = function() {
  for (var i = 0; i < this.numberOfSeries; ++i)
    this.data.push(d3.range(this.numberOfDataPoint).map(function (i) {
      x = scatterPlot.randomData();
      y = scatterPlot.randomData();
      return {x: x, y: y};
    }));
  this.data.forEach(function (series) {
    console.log(this.chart);
      this.chart.addSeries(series);
  });
  this.chart.render();
};

scatterPlot.chart = scatterPlot.scatterPlotChart()
  .x(d3.scaleLinear().domain([0, 10]))
  .y(d3.scaleLinear().domain([0, 10]));

scatterPlot.update = function() {
  for (var i = 0; i < data.length; ++i) {
    var series = data[i];
    series.length = 0;
    for (var j = 0; j < numberOfDataPoint; ++j)
      series.push({x: randomData(), y: randomData()});
  }
  chart.render();
}
