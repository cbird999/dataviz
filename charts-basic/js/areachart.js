var areaChartObject = {
  classes : 2,
  pointsPerClass : 25,
  data : [],
  xMax : 25,
  yMax : 15,
  areaChart : chartFactory('areaChart'),
  colors : d3.scaleOrdinal(d3.schemeCategory10)
};

areaChartObject.areaChart
  .x(d3.scaleLinear().domain([0, (areaChartObject.xMax)]))
  .y(d3.scaleLinear().domain([0, (areaChartObject.yMax)]))

areaChartObject.setData = function() {
  areaChartObject.data = [];
  for (var i = 0; i < areaChartObject.classes; ++i) {
    areaChartObject.data.push(d3.range(areaChartObject.pointsPerClass).map(function (j) {
      return {x: j, y: randomVal(areaChartObject.yMax)};
    }));
  }
  areaChartObject.areaChart.addData(areaChartObject.data);
};

function renderAreas(area, pathAreas) {
  pathAreas.enter()
    .append("path")
    .merge(pathAreas)
    .style("fill", function (d, i) {
      return areaChartObject.colors(i);
    })
    .attr("class", "area")
  	.transition()
    .attr("d", function (d) {
      return area(d);
    });
}
