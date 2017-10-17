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

function randomVal(val) {
  return Math.random() * (val - 1);
}

initChart = function(id) {
  if (id=='pieChart') {
    pieChart.render(id)
  } else if (id=='stackedAreaChart') {
    stackedAreaChart1.render(id);
  } else if (id=='expandedAreaChart') {
    expandedAreaChart.render(id)
  } else if (id=='streamGraph') {
    streamGraph.render(id)
  } else if (id=='treeMap') {
    d3.json("../data/flare.json", function (nodes) {
  		treeMapChart
  			.nodes(nodes)
  			.valueAccessor(size)
  			.render(id);
    });
  } else if (id=='treeGraph') {
    d3.json("../data/flare.json", function (nodes) {
      treeGraph
  			.nodes(nodes)
  			.render(id);
    });
  }
}

update = function(id) {
  if (id=='pieChart') {
    var updateData = d3.range(pie.numberOfDataPoint).map(function (i) {
  		return {
        id: i,
        value: randomPieVal(pie.maxVal, pie.minVal)
      };
  	});
  	pieChart.data(updateData);
  	pieChart.render(id)
  } else if (id=='stackedAreaChart') {
    var updateData = d3.range(sac.numberOfDataPoint).map(function (i) {
  	  return {
        value1: randomVal(sac.maxVal),
        value2: randomVal(sac.maxVal),
        value3: randomVal(sac.maxVal)
      };
  	});
  	stackedAreaChart1.data(updateData);
  	stackedAreaChart1.render(id);
  } else if (id=='expandedAreaChart') {
    var updateData = d3.range(eac.numberOfDataPoint).map(function (i) {
      return {
        value1: randomVal(eac.maxVal),
        value2: randomVal(eac.maxVal),
        value3: randomVal(eac.maxVal)
      };
    });
  	expandedAreaChart.data(updateData);
  	expandedAreaChart.render(id);
  } else if (id=='streamGraph') {
    var updateData = d3.range(sac.numberOfDataPoint).map(function (i) {
      return {
    		value1: randomVal(sac.maxVal),
    		value2: randomVal(sac.maxVal),
    		value3: randomVal(sac.maxVal),
    		value4: randomVal(sac.maxVal),
    		value5: randomVal(sac.maxVal),
    		value6: randomVal(sac.maxVal)
    	};
    });
  	streamGraph.data(updateData);
  	streamGraph.render(id);
  }
}
