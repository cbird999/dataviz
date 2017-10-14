var lineChartObject = {
  classes : 2,
  pointsPerClass : 25,
  data : [],
  xMax : 25,
  yMax : 15,
  lineChart : chartFactory('lineChart'),
  colors : d3.scaleOrdinal(d3.schemeCategory10)
};

lineChartObject.lineChart
  .x(d3.scaleLinear().domain([0, (lineChartObject.xMax)]))
  .y(d3.scaleLinear().domain([0, (lineChartObject.yMax)]))

lineChartObject.setData = function() {
  lineChartObject.data = [];
  for (var i = 0; i < lineChartObject.classes; ++i) {
    lineChartObject.data.push(d3.range(lineChartObject.pointsPerClass).map(function (j) {
      return {x: j, y: randomVal(lineChartObject.yMax)};
    }));
  }
  lineChartObject.lineChart.addData(lineChartObject.data);
};

function renderLines(line, pathLines, _tooltip) {
  pathLines
    .enter()
      .append("path")
    .merge(pathLines)
      .style("stroke", function (d, i) {
        return lineChartObject.colors(i);
      })
      .attr("class", "line")
    .transition()
      .attr("d", function (d) { return line(d); });
}
