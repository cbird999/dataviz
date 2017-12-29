<!DOCTYPE HTML>
<!-- HTML5 Boilerplate -->
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->

<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">



<meta name="viewport" content="width=device-width">

<meta charset="utf-8">
<!-- Always force latest IE rendering engine & Chrome Frame -->
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

<title>Institut nordique du Québec</title>

<meta name="description" content="L’Institut nordique du Québec (INQ) regroupe les expertises nordiques au service du développement durable du Nord dans un centre d’innovation et de recherche interdisciplinaire et interinstitutionnelle situé sur le campus de l’Université Laval.">
<meta name="keywords" content="Institut, Nord, Québec, développement durable, recherche, communautés nordiques, Université Laval, Institut national de la recherche scientifique">

<meta http-equiv="cleartype" content="on">
<meta name="format-detection" content="telephone=no" />

<!-- Responsive and mobile friendly stuff -->
<meta name="HandheldFriendly" content="True">
<meta name="MobileOptimized" content="320">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />


<!-- CSS FILES -->
<link rel="stylesheet" href="https://inq.ulaval.ca/css/html5reset.css" media="all">
<link rel="stylesheet" href="https://inq.ulaval.ca/css/columns.css" media="all">
<link rel="stylesheet" href="https://inq.ulaval.ca/css/custom.css" media="all">
<link rel="stylesheet" href="https://inq.ulaval.ca/css/style.css" media="all"><!-- goes with slicknav menu -->
<link rel="stylesheet" href="https://inq.ulaval.ca/css/menu.css" media="all"><!-- goes with slicknav.css -->
<link rel="stylesheet" href="https://inq.ulaval.ca/css/slicknav.css" media="all"><!-- slicknav menu -->

<!-- Responsive Stylesheets  -->
<link rel="stylesheet" media="only screen and (max-width: 950px) and (min-width: 769px)" href="https://inq.ulaval.ca/css/laptop.css">
<link rel="stylesheet" media="only screen and (max-width: 768px) and (min-width: 481px)" href="https://inq.ulaval.ca/css/tablet.css">
<link rel="stylesheet" media="only screen and (max-width: 480px) and (min-width: 320px)" href="https://inq.ulaval.ca/css/phone.css">

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remodal/1.1.0/remodal-default-theme.min.css" />
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remodal/1.1.0/remodal.min.css" />

<!-- LEAFLET MAPPING -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0-beta.2/leaflet.css" />
<link rel="stylesheet" href="https://inq.ulaval.ca/map/MarkerCluster.css" />
<link rel="stylesheet" href="https://inq.ulaval.ca/map/MarkerCluster.Default.css" />

<!-- Google font -->
<link href='https://fonts.googleapis.com/css?family=Lato:400,300' rel='stylesheet' type='text/css'>

<script src="https://inq.ulaval.ca/js/modernizr-2.5.3-min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.9.2/jquery-ui.min.js"></script>

<!-- LEAFLET MAPPING -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0-beta.2/leaflet.js"></script>
<script src="https://inq.ulaval.ca/map/leaflet.markercluster-src.js"></script>
<script src="https://inq.ulaval.ca/js/data.js"></script>

<!-- Boostrap JS -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/remodal/1.1.0/remodal.min.js"></script>

<style>
	body {
    padding: 0;
    margin: 0;
}
html, body, #map {
    height: 100vh;
    width: 100vw;
}
	/*#markerTable{
		z-index: 9999999;
		background: white;
		text-align: left;
	}*/
	/*.markerData{
		border: 1px solid #c80000;
		height: 40px;
		width:40px;
		background: #c80000;
		border-radius: 6px;
		box-shadow: 2px 2px 4px #c0c0c0;
		cursor: pointer;
		transition: all 0.1s;
		position: absolute;
		bottom: 10px;
		left: 10px;
		z-index: 999;
	}
	.markerData:hover{
		transform: scale(1.1);
	}
	.markerData img{
		position: relative;
		top: 10px;
		left: 10px;*/
	}
	p.opaque {
  /* Theoretically for IE 8 & 9 (more valid) */
  /* ...but not required as filter works too */
  /* should come BEFORE filter */
  -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=30)"; // IE8

  /* This works in IE 8 & 9 too */
  /* ... but also 5, 6, 7 */
  filter: alpha(opacity=30); // IE 5-7
  
  /* Modern Browsers */
  opacity: 0.3;
  z-index: 10000; position: relative; margin: 12px auto; width: 250px; padding: 10px 10px; display: block; background-color: #000; border-radius: 6px; color: #fff; text-align: center;
}
	
input[type=text] {
    width: 260px;
    padding: 6px;
    margin: 4px 0;
    box-sizing: border-box;
	border: 2px solid #BFBFBF;
	font-family: Lucida Grande, Lucida Sans Unicode, Lucida Sans, DejaVu Sans, Verdana," sans-serif";
	font-size: 14px;
}
	
.ui-tooltip {
    background: #fff;
    color: #000;
    /*box-shadow: 0 0;*/
}
.ui-autocomplete {
    background: #fff;
    border-radius: 2px;
	width: 260px;
	border: 2px solid #B6B6B6;
	font-size: 14px;
	padding: 3px 6px;
	font-family: Lucida Grande, Lucida Sans Unicode, Lucida Sans, DejaVu Sans, Verdana," sans-serif";
	max-height: 200px;
    overflow-y: auto;
    /* prevent horizontal scrollbar */
    overflow-x: hidden;
}
.ui-menu .ui-menu-item a {
    color: #000;
    border-radius: 0px;
}
.ui-menu .ui-menu-item a:hover {
    background: #fff;
    color: #000
}
.ui-menu .ui-menu-item a:active {
    box-shadow: 0 0 30px #000
}
	
.leaflet-control-layers label {
	/*display: block;*/
	color: #000;
	font-size:15px;
	}
	
/* Added by Chris C */
.map-menu.dropdown {
	margin-top: 15px;
}
.dropdown-toggle {
	padding: 3px 6px;
	font-family: Lucida Grande, Lucida Sans Unicode, Lucida Sans, DejaVu Sans, Verdana," sans-serif";
}
.dropdown-toggle img {
  height: 20px;
}
.layer-toggle input {
	margin: 0 5px 2px 15px;
}
.layer-toggle label {
	font-weight: normal;
  line-height: 1em;
}
.leaflet-right .markerData {
	text-align: center;
	width: 50%;
	height: 1.75em;
	line-height: 1.75em;
	cursor: pointer;
	background-color: yellow;
	position: fixed;
	bottom: 0;
	left: 25%;
	margin: 0;
	font-weight: bold;
}
/*.map-menu.dropdown .dropdown-toggle {
	position: relative;
  padding-left: 1.25em;
}
.map-menu.dropdown .dropdown-toggle:before {
	content: "";
  position: absolute;
  left: 0;
  top: 0.25em;
  width: 1em;
  height: 0.15em;
  background: black;
  box-shadow: 
    0 0.25em 0 0 black,
    0 0.5em 0 0 black;
}*/

</style>


</head>

<body>
<!-- Google Analytics -->

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-68952411-1', 'auto');
  ga('send', 'pageview');

</script><!-- //////////////// -->

<!--<div><p class="opaque">INQ - Cartographie des chercheurs</p></div>-->    

<!-- <div style="top: 140;"> -->
<div>
<div id="map" style="position: absolute; top: 0; left: 0;"></div>
</div>    

<script type="text/javascript">
// JavaScript Document

	

	
	
var markerData;

////////////////////////
// MAP INIT ////////////
var tiles = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/' + 
        'World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
  maxZoom: 18,
  attribution: 'Tiles © <a href="http://services.arcgisonline.com/ArcGIS/' +
  'rest/services/World_Topo_Map/MapServer">ArcGIS</a>'
});

var map = L.map('map')
map.addLayer(tiles);
// END MAP INIT ////////
////////////////////////
	

////////////////////////
// SEARCH //////////////
var search = L.control({
  position : 'topleft'
});
	
search.onAdd = function(map) {
  this._div = L.DomUtil.create('div', 'Searcher');//Formerly 'Searcher' 
  var search_input = "<div><input type=\"text\" id=\"searcher_field\" placeholder=\"Recherche\" onkeydown=\"research(this)\" /></div>";

  $(this._div).html(search_input);
  L.DomEvent.disableClickPropagation(this._div);
  return this._div;
}

search.addTo(map);
// END SEARCH //////////
////////////////////////
	
	
//Config du zoom
map.zoomControl.setPosition('bottomleft');
map._layersMaxZoom=15

//Gestion Markers
var markers = L.markerClusterGroup({singleMarkerMode: true});      
map.addLayer(markers);

//Init
$(document).ready(function() { // On attend que tous soit loader
  table_data = tableArray(geojsonData);
  auto_complete_data = autocompleteArray(table_data);
  setTimeout(function() { // Le timeout 0 est juste pour s'assurer d'etre a fin de la pile d'événement
    $( "#searcher_field" ).autocomplete({
      source: auto_complete_data,
      delay: 200,
      messages: {
        noResults: '',
        results: function() {}
      },
      select: function (event, ui) {
        research(ui.item)
      }
    });

    renderTable(table_data);
    renderMarker(geojsonData);

		var inst = $('[data-remodal-id=modal]').remodal();
		$(".markerData").click(function(){
			inst.open();
		});	
  }, 0);
  $('body').on('touchstart.dropdown', '.dropdown-menu', function (e) { 
    e.stopPropagation(); 
	});
})


//Util
/**
 * On veu principalement sortir les données de géolocation ici pour simplifier la logique ensuite
 */
function tableArray(geo_data) {
  var table = [];
  for(var i in geo_data.features){ // le in keyword nous donne la clé and i. Marche sur objet et array
    var props = geo_data.features[i].properties
    table.push(props);
  }
  return table;
}

function autocompleteArray(data){
  var autoObj = {}; //on commence avec un objet
  for(var i in data) {
    for(var o in data[i]) {
      autoObj[data[i][o]] = "";
    }
  }
  return Object.keys(autoObj); // on vas chercher les clé, unique rendu ici
}

function renderTable(data){
  var $table = $("#markerTable .table");
  $table.html(''); // on vide pour commencer
  if(data.length > 0){
    first_row = data[0]
    var html="<tbody><tr>";
    for(var o in first_row){
      html += "<th>" + o + "</th>";
    }
    html+= "</tr>";

    for(var i in data){
      html += "<tr>";
      for(var o in data[i]){
        html += "<td>" + data[i][o] + "</td>";
      }
      html += "</tr>";
    }
    html += "</tbody>";
    $table.html(html)
  }
}

/**
 * On vas faire le nouvelle objet de markers et remplacer le courant dans la map
 */
function renderMarker(geo_data){
  var markers_set = L.markerClusterGroup({singleMarkerMode: true});     
  var geoJsonLayer = L.geoJson(geo_data, {
    onEachFeature: function (feature, layer) {		
      markerData = geo_data;	
      if (feature.properties) {
        var popupcontent;
        popupcontent = "<p style='padding: 0; margin: 3px 0;'>Nom: " + feature.properties.name + "</p>" + "<p style='padding: 0; margin: 3px 0;'>Emplacement: " + feature.properties.locale + "</p>" + "<p style='padding: 0; margin: 3px 0;'>Thème: " + feature.properties.theme + "</p>";            
      }
      layer.bindPopup(popupcontent);
    }
  });
  markers_set.addLayer(geoJsonLayer);
  map.removeLayer(markers)
  markers = markers_set; // Pas besoin d'un copy car on se trouve dans le scope de la fonction pour difinir markers_set
  map.addLayer(markers)
  map.fitBounds(markers.getBounds());
}

/**
 * Ici on veu garde le format mais retirer les champs pas dans 
 */
function geoJsonFilter(geo_data, search) {
  var geo_obj = JSON.parse(JSON.stringify(geo_data)); // copy pas mal hacky
  var lower_search = search.toLowerCase() // dans le cas ou autocomplete non utilisé
  var features = []; // Liste des valides

  for(var i in geo_data.features){
    var properties = geo_data.features[i].properties
    found = false;
    for(var o in properties){
      var prop_value = properties[o].toLowerCase()
      if(prop_value.includes(lower_search)){
        found = true
      }
    }
    if(found){
      features.push(geo_data.features[i])
    }
  }

  geo_obj.features = features; // On garde seulement les valides
  return geo_obj;
}

//Evenement appeler par le Dom
function research(ele){
  setTimeout(function(){ // Pour detecter le backspace il me faut keydown donc on s'assure du timing en placant le code à la fin de la file d'événement
    if(ele.value != "") {
      geo_data = geoJsonFilter(geojsonData, ele.value);
      table_data = tableArray(geo_data);
      renderTable(table_data);
      renderMarker(geo_data);
    }else{
      reset();
    }
  }, 0)
  
}

function reset(){
  table_data = tableArray(geojsonData);
  renderTable(table_data);
  renderMarker(geojsonData);
} 
	
function clearMap(){
	map.removeLayer(markers);
}
	
function link(){
	
	window.location = "https://inq.ulaval.ca"
}
	


//////////////
// SILA MARKER
//////////////
	
var silaIcon = L.Icon.extend({
   options: {
      iconUrl: 'markerYellow.png' 
   }
});
	
var newSilaIcon = new silaIcon();			
	
	
	
/////////////////////
// LAYER  ///////////
/////////////////////
	
var sila = new L.LayerGroup();

L.marker([60.81738, -78.15498], {icon: newSilaIcon}).bindPopup('Akulivik_HT-162').addTo(sila),
L.marker([60.78333, -78.2], {icon: newSilaIcon}).bindPopup('Akulivik_HT-183').addTo(sila),
L.marker([62.19481, -75.63619], {icon: newSilaIcon}).bindPopup('Akulivik_HT-230').addTo(sila),
L.marker([60.78, -78.21], {icon: newSilaIcon}).bindPopup('Akulivik_HT-232').addTo(sila);
L.marker([61.107, -94.076], {icon: newSilaIcon}).bindPopup('Arviat').addTo(sila),
L.marker([58.28333, -69.58333], {icon: newSilaIcon}).bindPopup('Aupaluk_HT-294').addTo(sila),
L.marker([58.28, -69.58], {icon: newSilaIcon}).bindPopup('Aupaluk_HT-298').addTo(sila),
L.marker([59.29925, -69.59965], {icon: newSilaIcon}).bindPopup('Aupaluk_HT-299').addTo(sila);
L.marker([56.61027, -76.21288], {icon: newSilaIcon}).bindPopup('BGR').addTo(sila),
L.marker([57.1702, -76.5825], {icon: newSilaIcon}).bindPopup('Biscarat').addTo(sila),
L.marker([51.49993, -57.15352], {icon: newSilaIcon}).bindPopup('Blanc_Sablon').addTo(sila),
L.marker([57.72818, -76.08452], {icon: newSilaIcon}).bindPopup('Boniface_Foret').addTo(sila);
L.marker([57.72686, -76.08697], {icon: newSilaIcon}).bindPopup('Boniface_SILA_Foret').addTo(sila),
L.marker([57.73131, -76.07858], {icon: newSilaIcon}).bindPopup('Boniface_SILA_Toundra').addTo(sila),
L.marker([57.73167, -76.0775], {icon: newSilaIcon}).bindPopup('Boniface_Toundra').addTo(sila),
L.marker([57.72818, -80.00403], {icon: newSilaIcon}).bindPopup('Bylot_Lac_aux_Goelands').addTo(sila);
L.marker([73.15597, -79.95694], {icon: newSilaIcon}).bindPopup('Bylot_Lac_du_Camp').addTo(sila),
L.marker([73.14033, -79.9215], {icon: newSilaIcon}).bindPopup('Bylot_Montagne_a_Jack').addTo(sila),
L.marker([73.15633, -79.9855], {icon: newSilaIcon}).bindPopup('Bylot_Polygones_bombes').addTo(sila);
L.marker([73.15027, -80.00488], {icon: newSilaIcon}).bindPopup('Bylot_Polygones_deprimes').addTo(sila)

// Keep track of layer state in the map object
var layerGroups = {};
layerGroups['sila'] = sila;
// We're not adding a Leaflet overlay anymore
/*var overlays = {
	"Sila": sila
};

L.control.layers(null, overlays).addTo(map);*/

// We're adding a map menu with links and checkboxes
L.Control.MapMenu = L.Control.extend({
	onAdd: function(map) {
		var container = L.DomUtil.create('div', 'map-menu dropdown leaflet-bar leaflet-control leaflet-control-custom'),
			menuHTML = '' +
				'<button class="btn btn-default dropdown-toggle" type="button" id="mapmenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">' +
					'<img src="Mobile-Menu-Icon.png" alt="">' +
    			//'<span class="caret"></span>' +
  			'</button>' +
				'<ul class="dropdown-menu dropdown-menu-right" aria-labelledby="mapmenu1">' +
					'<li><a href="https://inq.ulaval.ca/">Home</a></li>' +
					'<li><a href="#" id="showData">Show data</a></li>' +
					'<li><a href="#" id="showAllMarkers">Show points on map</a></li>' +
					'<li><a href="#" id="removeAllMarkers">Hide points on map</a></li>' +
					'<li role="separator" class="divider"></li>' +
					'<li class="dropdown-header">Select one or more layers to show</li>' +
					'<li class="layer-toggle"><input type="checkbox" id="sila"><label for="sila">Sila</label></li>' +
					'<li class="layer-toggle"><input type="checkbox" id="sila2"><label for="sila2">Sila2</label></li>' +
					'<li class="layer-toggle"><input type="checkbox" id="sila3"><label for="sila3">Sila3</label></li>' +
				'</ul>';
		container.innerHTML = menuHTML;

		return container;
	},
	onRemove: function(map) {
		// Nothing to do here
	}
});
L.control.mapmenu = function(opts) {
    return new L.Control.MapMenu(opts);
}
L.control.mapmenu({ position: 'topright' }).addTo(map);
// END LAYER ////////
/////////////////////

// Map Menu on click events
$('a#removeAllMarkers').on('click', function(event) { 
	event.preventDefault();
	clearMap(); 
});
$('a#showAllMarkers').on('click', function() { 
	event.preventDefault();
	reset(); 
});
$('a#showData').on('click', function() { 
	event.preventDefault();
	$('[data-remodal-id=modal]').remodal().open();
});
$('.layer-toggle input').on('click', function(event) {
	var layerName = $(this).attr('id'),
		layerGroup = layerGroups[layerName];
	if (this.checked) {
		if (!map.hasLayer(layerGroup)) {
			map.addLayer(layerGroup)
		}
	} else if (map.hasLayer(layerGroup)) {
		map.removeLayer(layerGroup);
	}
});
$('.dropdown-menu').each(function(i,el) {
	L.DomEvent.disableClickPropagation(el);
});
// Cause dropdown menu to close when anchor elements within it are clicked
/*$('.dropdown-menu a').on('click', function(event) { 
	$('.dropdown-toggle').dropdown('toggle') 
});*/


/*var dropdown = $('.dropdown-menu'); 
 // "a:not([data-toggle])" - to avoid issues caused
 // when you have dropdown inside navbar
 dropdown.on("click", "a:not([data-toggle])", null, function () {
		 dropdown.collapse('hide');
 }); */
	
	
////////////////////////////////////////////
// CUSTOM CONTROL REMOVE ALL MARKERS ///////
////////////////////////////////////////////	
// Not needed anymore
/*var removeAllMarkers = L.Control.extend({
  options: {
    position: 'bottomright' 
    //control position - allowed: 'topleft', 'topright', 'bottomleft', 'bottomright'
  },
onAdd: function (map) {
    var containerAllMarkers = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
    containerAllMarkers.style.backgroundColor = 'red';
    containerAllMarkers.style.width = '30px';
    containerAllMarkers.style.height = '30px';
	containerAllMarkers.style.cursor = 'pointer';
 
	containerAllMarkers.onclick = function(){
		clearMap();
    }
    return containerAllMarkers;
  } 
});
map.addControl(new removeAllMarkers());	*/
	
	
	
	
	
	
//////////////////////////////////////////
// CUSTOM CONTROL SHOW ALL MARKERS ///////
//////////////////////////////////////////
// Not needed anymore
/*var showAllMarkers = L.Control.extend({
  options: {
    position: 'bottomright' 
    //control position - allowed: 'topleft', 'topright', 'bottomleft', 'bottomright'
  },
onAdd: function (map) {
    var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
    container.style.backgroundColor = 'green';
    container.style.width = '30px';
    container.style.height = '30px';
	container.style.cursor = 'pointer';
	container.onclick = function(){
    	reset();
    }
    return container;
  } 
});
map.addControl(new showAllMarkers());	*/
	
	
	
	
	
//////////////////////////////////////////
// CUSTOM CONTROL SHOW DATA ///////
//////////////////////////////////////////	
// create the control
var showData = L.Control.extend({
 
  options: {
    position: 'bottomright' 
    //control position - allowed: 'topleft', 'topright', 'bottomleft', 'bottomright'
  },
 
onAdd: function (map) {
   // var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
    var div = L.DomUtil.create('div', 'markerData leaflet-bar leaflet-control leaflet-control-custom');
		//div.style.backgroundColor = 'yellow';
		//div.style.backgroundImage = 'data.jpg';
		//div.style.width = '100%';
		//div.style.height = '1.5em';
		//div.style.cursor = 'pointer';
		var divContent = 'Data';
		div.innerHTML = divContent;
 
    return div;
  } 
});
map.addControl(new showData());	
	
	
//////////////////////////////////////////
// CUSTOM CONTROL GO BACK TO INQ WEBSITE//
//////////////////////////////////////////	
// create the control
// Not needed anymore
/*var inqWebsite = L.Control.extend({
  options: {
    position: 'bottomright' 
    //control position - allowed: 'topleft', 'topright', 'bottomleft', 'bottomright'
  },
onAdd: function (map) {
   // var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
    var div = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
	div.style.backgroundColor = 'white';
    //div.innerHTML = '<a href="http://www.inq.ulaval.ca">&nbsp;</a>';
	div.style.width = '30px';
    div.style.height = '30px';
	div.style.cursor = 'pointer';
	div.onclick = function(){
    	link();
    }
    return div;
  } 
});
map.addControl(new inqWebsite());	*/

	
</script>					
							
<div id="markerTable" data-remodal-id="modal">
	<button data-remodal-action="close" class="remodal-close"></button>
	<div class="table-responsive">
	  <table class="table table-hover">
	  	<tr><th>Name</th><th>Locale</th><th>Theme</th></tr>
	  </table>
	</div>
</div>



<!--New code-->



    </body>
</html>