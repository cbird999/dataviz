$( "#tabs" ).tabs({
  active: false,
	collapsible: true,
	hide: true,
	show: false,
	activate: function( event, ui ) {
		//var thisID = ui.newPanel.attr('id');
		//chartDivID = $('#' + thisID + ' > div:first-child').attr('id');
    //console.log(chartDivID);
    //initChart(chartDivID);
	}
}).addClass( "ui-tabs-vertical ui-helper-clearfix" );
$( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );

function noForce(viz) {
	var currentViz = vizContainer[viz];
	currentViz.force().force("charge", null);
	currentViz.force().force("x", null);
	currentViz.force().force("y", null);
	currentViz.force().restart();
}

function repulsion(viz) {
	var currentViz = vizContainer[viz];
	currentViz.force().force("charge", d3.forceManyBody().strength(-10));
	currentViz.force().force("x", null);
	currentViz.force().force("y", null);
	currentViz.force().restart();
}

function gravity(viz) {
	var currentViz = vizContainer[viz];
	currentViz.force().force("charge", d3.forceManyBody().strength(1));
	currentViz.force().force("x", null);
	currentViz.force().force("y", null);
	currentViz.force().restart();
}

function positioningWithGravity(viz) {
	var currentViz = vizContainer[viz];
	currentViz.force().force("charge", d3.forceManyBody().strength(0.5));
	currentViz.force().force("x", d3.forceX(currentViz.width() / 2));
	currentViz.force().force("y", d3.forceY(currentViz.height() / 2));
	currentViz.force().restart();
	}

function positioningWithRepulsion(viz) {
	var currentViz = vizContainer[viz];
	currentViz.force().force("charge", d3.forceManyBody().strength(-20));
	currentViz.force().force("x", d3.forceX(currentViz.width() / 2));
	currentViz.force().force("y", d3.forceY(currentViz.height() / 2));
	currentViz.force().restart();
}
