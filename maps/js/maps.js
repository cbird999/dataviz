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
