function treemapChart() {
  var _chart = {};

  var _width = 800, _height = 400,
          _colors = d3.scaleOrdinal(d3.schemeCategory20c),
          _svg,
          _nodes,
          _valueAccessor,
          _treemap,
          _bodyG;

  _chart.render = function (id) {
      if (!_svg) {
          _svg = d3.select('#' + id).append("svg")
                  .attr("height", _height)
                  .attr("width", _width);
      }

      renderBody(_svg);
  };

  function renderBody(svg) {
      if (!_bodyG) {
          _bodyG = svg.append("g")
                  .attr("class", "body");

          _treemap = d3.treemap() //<-A
                  .size([_width, _height])
                  .round(true)
                  .padding(1);
      }

      var root = d3.hierarchy(_nodes)
              .sum(_valueAccessor)
              .sort(function(a, b) { return b.value - a.value; });

      _treemap(root); //<-C

      var cells = _bodyG.selectAll("g")
              .data(root.leaves(), function(d){console.log(d.data.name);return d.data.name;});

      renderCells(cells);
  }

  function renderCells(cells) {
      var cellEnter = cells.enter().append("g")
              .merge(cells)
              .attr("class", "cell")
              .attr("transform", function (d) {
                  return "translate(" + d.x0 + "," + d.y0 + ")"; //<-E
              });

      renderRect(cellEnter, cells);

      renderText(cellEnter, cells);

      cells.exit().remove();
  }

  function renderRect(cellEnter, cells) {
      cellEnter.append("rect");
      cellEnter.merge(cells)
        //.transition()
        .select("rect")
        .attr("width", function (d) { //<-F
            return d.x1 - d.x0;
        })
        .attr("height", function (d) {
            return d.y1 - d.y0;
        })
				.on('mouseenter', function(d,i) {
					/*console.log(d3.select(this).attr('width'));
					var w = d3.select(this).attr('width') + 10,
						h = d3.select(this).attr('height') + 10,
						x = d3.select(this).attr('x') - 5,
						y = d3.select(this).attr('y') - 5
					d3.select(this)
						.attr("width", w)
						.attr("height", h)
						.attr("x", x)
						.attr("y", y)*/
				})
				.on('mouseout', function(d,i) {
					/*var w = d3.select(this).attr('width') - 10,
						h = d3.select(this).attr('height') - 10,
						x = d3.select(this).attr('x') + 5,
						y = d3.select(this).attr('y') + 5
					d3.select(this)
						.attr("width", w)
						.attr("height", h)
						.attr("x", x)
						.attr("y", y)*/
				})
        .style("fill", function (d) {
            return _colors(d.parent.data.name); //<-G
        });
  }

  function renderText(cellEnter, cells) {
      cellEnter.append("text");

      cellEnter.merge(cells)
              .select("text") //<-H
              .style("font-size", 9)
              .attr("x", function (d) {
                  return (d.x1 - d.x0) / 2;
              })
              .attr("y", function (d) {
                  return (d.y1 - d.y0) / 2;
              })
              .attr("text-anchor", "middle")
              .text(function (d) {
                  return d.data.name;
              })
              .style("opacity", function (d) {
                  d.w = this.getComputedTextLength();
                  return d.w < (d.x1 - d.x0) ? 1 : 0; //<-I
              });
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

  _chart.colors = function (c) {
      if (!arguments.length) return _colors;
      _colors = c;
      return _chart;
  };

  _chart.nodes = function (n) {
      if (!arguments.length) return _nodes;
      _nodes = n;
      return _chart;
  };

  _chart.valueAccessor = function (fn) {
      if (!arguments.length) return _valueAccessor;
      _valueAccessor = fn;
      return _chart;
  };

  return _chart;
}

var treeMapChart = treemapChart();

function size(d) {
  return d.size;
}

function count() {
  return 1;
}

function flip() {
  treeMapChart
		.valueAccessor(treeMapChart.valueAccessor() == size ? count : size)
		.render();
}
