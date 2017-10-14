var bubbleChartObject = {
  classes : 2,
  pointsPerClass : 9,
  data : [],
  xMax : 25,
  yMax : 15,
	rMax : 7,
  bubbleChart : chartFactory('bubbleChart'),
  colors : d3.scaleOrdinal(d3.schemeCategory10)
};

bubbleChartObject.bubbleChart
  .x(d3.scaleLinear().domain([0, (bubbleChartObject.xMax)]))
  .y(d3.scaleLinear().domain([0, (bubbleChartObject.yMax)]))

bubbleChartObject.setData = function() {
  bubbleChartObject.data = [];
	for (var i = 0; i < bubbleChartObject.classes; ++i) {
    bubbleChartObject.data.push(d3.range(bubbleChartObject.pointsPerClass).map(function (i) {
      return {x: randomVal(bubbleChartObject.xMax), y: randomVal(bubbleChartObject.yMax), r: randomVal(bubbleChartObject.rMax)};
    }));
  }
  bubbleChartObject.bubbleChart.addData(bubbleChartObject.data);
};


function renderBubbles(r, bubbles, _x, _y, i) {
  bubbles.enter().append("circle")
    .merge(bubbles)
      .attr("class", "bubble _" + i)
      .style("stroke", function (d, j) {
        return bubbleChartObject.colors(j);
      })
      .style("fill", function (d, j) {
        return bubbleChartObject.colors(j);
      })
    .transition()
      .attr("cx", function (d) {
        return _x(d.x);
      })
      .attr("cy", function (d) {
        return _y(d.y);
      })
      .attr("r", function (d) {
        return r(d.r);
      });
}
