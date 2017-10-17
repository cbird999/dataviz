function pieChart() {
	var _chart = {};

  var _width = 300, _height = 300,
    _data = [],
    _colors = d3.scaleOrdinal(d3.schemeCategory10),
    _svg,
    _bodyG,
    _pieG,
    _radius = 150,
    _innerRadius = 100,
    _duration = 1000;

  _chart.render = function (id) {
    if (!_svg) {
      _svg = d3.select('#' + id).append("svg")
        .attr("height", _height)
        .attr("width", _width);
    }
    renderBody(_svg);
  };

  function renderBody(svg) {
    if (!_bodyG)
      _bodyG = svg.append("g")
        .attr("class", "body");
    renderPie();
  }

  function renderPie() {
    var pie = d3.pie()
      .sort(function (d) {
        return d.id;
      })
      .value(function (d) {
        return d.value;
      });

    var arc = d3.arc()
      .outerRadius(_radius)
      .innerRadius(_innerRadius);

    if (!_pieG)
      _pieG = _bodyG.append("g")
        .attr("class", "pie")
        .attr("transform", "translate("
            + _radius
            + ","
            + _radius + ")");

    renderSlices(pie, arc);
    renderLabels(pie, arc);
  }

  function renderSlices(pie, arc) {
		console.log(_data);
    var slices = _pieG.selectAll("path.arc")
      .data(pie(_data));

    slices.enter()
      .append("path")
      .merge(slices)
        .attr("class", "arc")
        .attr("fill", function (d, i) {
					console.log(d);
          return _colors(i);
        })
      .transition()
      .duration(_duration)
      .attrTween("d", function (d) {
          var currentArc = this.__current__;
          if (!currentArc)
            currentArc = {startAngle: 0, endAngle: 0};
          var interpolate = d3.interpolate(currentArc, d);
          this.__current__ = interpolate(1);
          return function (t) {
            return arc(interpolate(t));
          };
      });
  }

  function renderLabels(pie, arc) {
    var labels = _pieG.selectAll("text.label")
      .data(pie(_data));

    labels.enter()
    .append("text")
    .merge(labels)
    .attr("class", "label")
    .transition()
    .duration(_duration)
    .attr("transform", function (d) {
      return "translate("
          + arc.centroid(d) + ")";
    })
    .attr("dy", ".35em")
    .attr("text-anchor", "middle")
    .text(function (d) {
        return d.data.id;
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

	_chart.radius = function (r) {
    if (!arguments.length) return _radius;
    _radius = r;
    return _chart;
	};

  _chart.innerRadius = function (r) {
    if (!arguments.length) return _innerRadius;
    _innerRadius = r;
    return _chart;
  };

  _chart.data = function (d) {
    if (!arguments.length) return _data;
    _data = d;
    return _chart;
  };

  return _chart;
}

function randomPieVal(maxVal, minVal) {
  return Math.random() * (maxVal - minVal) + minVal;
}

var pie = {
	numberOfDataPoint : 6,
	maxVal : 22,
	minVal : 5,
	data : []
}
pie.data = d3.range(pie.numberOfDataPoint).map(function (i) {
	return {id: i, value: randomPieVal(pie.maxVal, pie.minVal)};
});

var pieChart = pieChart()
	.data(pie.data);
