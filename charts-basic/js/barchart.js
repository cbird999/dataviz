var barChartObject = {
  classes : 2,
  pointsPerClass : 25,
  data : [],
  xMax : 25,
  yMax : 15,
  barChart : chartFactory('barChart'),
  colors : d3.scaleOrdinal(d3.schemeCategory10)
};

barChartObject.barChart
  .x(d3.scaleLinear().domain([0, (barChartObject.xMax)]))
  .y(d3.scaleLinear().domain([0, (barChartObject.yMax)]))

barChartObject.setData = function() {
  barChartObject.data = [];
	for (var j = 0; j < barChartObject.pointsPerClass; ++j) {
    barChartObject.data.push({x: j, y: randomVal(barChartObject.yMax)});
  }
  barChartObject.barChart.addData(barChartObject.data);
};

function renderBars(padding, bars, _x, _y, yBaseline, chartWidth, dataLength) {
  bars.enter().append("rect")
    .merge(bars)
    .attr("class", "bar")
    .transition()
    .attr("x", function (d) {
      return _x(d.x);
    })
    .attr("y", function (d) {
      return _y(d.y);
    })
    .attr("height", function (d) {
      return yBaseline - _y(d.y);
    })
    .attr("width", function(d){
      return Math.floor(chartWidth / dataLength) - padding;
    });
}
