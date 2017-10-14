var scatterPlotObject = {
  classes : 5,
  pointsPerClass : 15,
  data : [],
  xMax : 25,
  yMax : 15,
  spChart : chartFactory('scatterPlot'),
  colors : d3.scaleOrdinal(d3.schemeCategory10)
};

scatterPlotObject.spChart
  .x(d3.scaleLinear().domain([0, (scatterPlotObject.xMax)]))
  .y(d3.scaleLinear().domain([0, (scatterPlotObject.yMax)]))

scatterPlotObject.setData = function() {
  scatterPlotObject.data = [];
  for (var i = 0; i < scatterPlotObject.classes; ++i) {
    scatterPlotObject.data.push(d3.range(scatterPlotObject.pointsPerClass).map(function (i) {
      return {x: randomVal(scatterPlotObject.xMax), y: randomVal(scatterPlotObject.yMax)};
    }));
  }
  scatterPlotObject.spChart.addData(scatterPlotObject.data);
};

function renderCircles(circles, i, _tooltip, _x, _y) {
  circles.enter().append("circle")
  .merge(circles)
  .attr("class", "circle _" + i)
  .attr('color-class', i)
  .style('fill', function(d) { return scatterPlotObject.colors(i) })
  .call(d3.drag()
    .on("start", dragstarted)
    .on("drag", dragged)
    .on("end", dragended)
  )
  .on('mouseover', function(d) {
    thisColor = scatterPlotObject.colors(d3.select(this).attr('color-class'));
    d3.select(this)
      .transition().duration(250)
      .attr('r', 6)
    _tooltip
      .style('opacity', 1)
      .style('left', (event.pageX + 10) + 'px')
      .style('top', event.pageY + 'px')
      .text(function(d, i) {
        return 'This data point belongs to color class ' + thisColor + '.';
      })
      .style('color', thisColor);
  })
  .on('mouseout', function(d) {
    d3.select(this)
      .transition().duration(250)
      .attr('r', 4)
      _tooltip
        .style('opacity', 0)
  })
  .transition().duration(1200).ease(d3.easeCircle)
  .attr('cx', function(d) { return _x(d.x); })
  .attr('cy', function(d) { return _y(d.y); })
  .attr('r', 4);
}

function dragstarted(d) {
  d3.select(this).raise().classed("active", true);
}

function dragged(d) {
  d3.select(this)
  .attr("cx", d.x = d3.mouse(this)[0])
  .attr("cy", d.y = d3.mouse(this)[1]);
}

function dragended(d) {
  d3.select(this).classed("active", false);
}
