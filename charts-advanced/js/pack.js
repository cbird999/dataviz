function pack() {
  var _chart = {};

  var _width = 900, _height = 600,
    _svg,
    _valueAccessor,
    _nodes,
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
    }

    var pack = d3.pack()
      .size([_width, _height]);

    var root = d3.hierarchy(_nodes)
      .sum(_valueAccessor)
      .sort(function(a, b) { return b.value - a.value; });

    pack(root);
    renderCircles(root.descendants());
    renderLabels(root.descendants());
  }

  function renderCircles(nodes) {
      var circles = _bodyG.selectAll("circle")
              .data(nodes);

      circles.enter().append("circle")
              .merge(circles)
              .transition()
          .attr("class", function (d) {
              return d.children ? "parent" : "child";
          })
          .attr("cx", function (d) {return d.x;})
          .attr("cy", function (d) {return d.y;})
          .attr("r", function (d) {return d.r;});

      circles.exit().transition()
              .attr("r", 0)
              .remove();
  }

  function renderLabels(nodes) {
      var labels = _bodyG.selectAll("text")
              .data(nodes);

      labels.enter().append("text")
              .attr("dy", ".35em")
              .attr("text-anchor", "middle")
          .merge(labels).transition()
              .attr("class", function (d) {
                  return d.children ? "parent" : "child";
              })
              .attr("x", function (d) {return d.x;})
              .attr("y", function (d) {return d.y;})
              .text(function (d) {return d.data.name;});

      labels.exit().remove();
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

var enclosureDiagram = pack();

function size(d) {
  return d.size;
}

function count() {
  return 1;
}

function flipEnclosure() {
  enclosureDiagram
		.valueAccessor(enclosureDiagram.valueAccessor() == size ? count : size)
		.render();
}
