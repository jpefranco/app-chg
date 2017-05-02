/**
Atributos que interaccionan con los mapas
*/

var map;
var markers;
var polygon;
var imagenURL_Caudal = "./resources/images/loc-degradado-32.png"
var imagenURL_Precipitacion = "./resources/images/map_icon_rain.png"

/**
	titulos e ids de mapas
*/

var tituloCaudalInstantaneo = 'Caudales Instantáneos';
var MapCanvasCaudalInstantaneo = 'map_canvas_caudal_instantaneo';
var tituloCaudalDiario = 'Caudales Medio Diario';
var MapCanvasCaudalDiario = 'map_canvas_caudal_diario';
var tituloPrecipitaciones = 'Precipitaciones';
var MapCanvasPrecipitaciones = 'map_canvas_precipitaciones';
var unidadesCaudales = ' m³/s';
var unidadesPrecipitaciones = ' l/m²';

var infowindow;
var infowindowString;

// Variable utilizada para saber si el mapa inicializado es el mismo que el de la ventana actual
var lastMapShow;

var idMarkerPush;

/**
Permite navegar desde la tabla al mapa tras pulsar alguna de las celdas.
	1. Si el mapa ya estaba cargado navega hacia el marker seleccionado y abre su ventana informativa
	2. Si no estaba cargado lo inicializa
*/
function goToMap( idMapCanvas,i, idMarker){

	var pageActiveID = $.mobile.activePage.attr('id');

	if(map!=null && lastMapShow!=null && lastMapShow == idMapCanvas){		
		
		$("#"+ pageActiveID +" #contenidoMapa").show();
		$("#"+ pageActiveID +" #contenidoTabla").hide();
		
		var marker = markers[idMarker];
		if(marker!=null){
			if(infowindow!=null){
				infowindow.close();
			}
			infowindow = new google.maps.InfoWindow({
				  content: infowindowString[marker.getPosition()]
			});
			infowindow.open(map,marker);
			map.panTo(marker.getPosition());	
		}		

		lastMapShow = idMapCanvas;

	}else{		
	
		idMarkerPush = idMarker;
	
		if(idMapCanvas === MapCanvasCaudalInstantaneo){
			drawMapCaudalInstantaneo(true);
		}else if(idMapCanvas === MapCanvasCaudalDiario){
			drawMapCaudalMedioDiario(true);
		}else if(idMapCanvas === MapCanvasPrecipitaciones){
			drawMapPrecipitaciones(true);
		}		
		lastMapShow = idMapCanvas;
	}
	if(i==0){
	$("#"+ pageActiveID +" #tablaBtn1").removeClass( "ui-btn-active" );
	$("#"+ pageActiveID +" #mapBtn1").addClass( "ui-btn-active" );
	}else if(i==1){
	$("#"+ pageActiveID +" #tablaBtn2").removeClass( "ui-btn-active" );
	$("#"+ pageActiveID +" #mapBtn2").addClass( "ui-btn-active" );
	}else if(i==2){
	$("#"+ pageActiveID +" #tablaBtn3").removeClass( "ui-btn-active" );
	$("#"+ pageActiveID +" #mapBtn3").addClass( "ui-btn-active" );
	}
}



/**
	Dibuja el mapa de tipo caudal instantaneo
*/
function drawMapCaudalInstantaneo(pulsadoTabla){
	var i=0;
	drawMapCaudal(i, MapCanvasCaudalInstantaneo, pulsadoTabla);
}

/**
	Dibuja el mapa de tipo caudal medio diario
*/
function drawMapCaudalMedioDiario(pulsadoTabla){
	var i=1;
	drawMapCaudal(i, MapCanvasCaudalDiario, pulsadoTabla);
}

/**
	Dibuja el mapa de tipo caudal pasandole la url del webservice y el id del div del mapa donde se debe pintar
		1. urlXML: URL del webservice de donde obtiene los datos
		2. idMapCanvas: Id del div del mapa donde debe pintar el mapa
*/
function drawMapCaudal(i, idMapCanvas, pulsadoTabla){

		var pageActiveID = $.mobile.activePage.attr('id');
		$("#"+ pageActiveID +" #contenidoMapa").show();
		$("#"+ pageActiveID +" #contenidoTabla").hide();
		if(i==0){
		$("#"+ pageActiveID +" #tablaBtn1").removeClass( "ui-btn-active" );
		$("#"+ pageActiveID +" #mapBtn1").addClass( "ui-btn-active" );
		}else if(i==1){
		$("#"+ pageActiveID +" #tablaBtn2").removeClass( "ui-btn-active" );
		$("#"+ pageActiveID +" #mapBtn2").addClass( "ui-btn-active" );
		}
		var defaultLatLng = new google.maps.LatLng(37.745580, -4.986594);  // Default
		markers = [];
		var myOptions = {
			zoom: 8,
			center: defaultLatLng,
			mapTypeId: google.maps.MapTypeId.HYBRID
		};
		map = new google.maps.Map(document.getElementById(idMapCanvas), myOptions);
                
       /* var ctaLayer = new google.maps.KmlLayer({
                    url:'http://demogfisur.gfi.es/kml/guadalquivir.kml',
					//url:'http://172.16.98.14:8081/kml/guadalquivir.kml',
					//url: 'http://www.lookingformaps.com/get-kml.php?mapa=Cazorla-Nacimiento-Rio-Guadalquivir',
                    //url:'http://gmaps-samples.googlecode.com/svn/trunk/ggeoxml/cta.kml', 
                    preserveViewport: true
                    });
        ctaLayer.setMap(map);*/
		
		var ctaLayer1 = new google.maps.KmlLayer({
                    url: configOptions.urlKML_1,
                    preserveViewport: true
                    });
		
		var ctaLayer2 = new google.maps.KmlLayer({
                    url: configOptions.urlKML_2,
                    preserveViewport: true
                    });

		
		var ctaLayer3 = new google.maps.KmlLayer({
                    url: configOptions.urlKML_3,
                    preserveViewport: true
                    });
		
		var ctaLayer4 = new google.maps.KmlLayer({
                    url: configOptions.urlKML_4,
                    preserveViewport: true
                    });
					
		ctaLayer1.setMap(map);
        ctaLayer2.setMap(map);
        ctaLayer3.setMap(map);
        ctaLayer4.setMap(map);
		
		google.maps.event.addListenerOnce(map, 'idle', function() {
		   google.maps.event.trigger(map, 'resize');
		});
	
                var georssLayer = new google.maps.KmlLayer({
                      url: './resources/demoCHG_WS/kml-prueba.kml'
                });
                georssLayer.setMap(map);
                
		 $.ajax({
			type: "GET",
			url: configOptions.urlWebserviceCaudales,
			dataType: "xml",
			success: function(xml){
				
				infowindowString = new Object();
				$(xml).find("caudal").each(function () {
				
				
				
						//Obtenemos parametros del xml						
						var nombre = $(this).find("nombre").text();
						var instantaneo = $(this).find("instantaneo").text();
						var diario = $(this).find("diario").text();
						var latitud = $(this).find("latitud").text();
						var longitud = $(this).find("longitud").text();
				
						var redLatLng = new google.maps.LatLng(latitud, longitud);

						 var iconMap = new google.maps.MarkerImage(imagenURL_Caudal,
						  // This marker is 20 pixels wide by 32 pixels tall.
						  new google.maps.Size(40, 32),
						  // The origin for this image is 0,0.
						  new google.maps.Point(0,0),
						  // The anchor for this image is the base of the flagpole at 0,32.
						  new google.maps.Point(0, 32));
						

						
						var marker = new google.maps.Marker({
									position: redLatLng,
									map: map,
									title: nombre,
									icon: iconMap,
								});
						
						markers.push(marker);
						if(i==0){
						 var contentString = '<div id="content">'+
						  '<div id="siteNotice">'+
							  '</div>'+
								  '<div id="bodyContent" class="contenidoTablaMapInfo">'+								  
										'<table  data-role="table" class="ui-responsive table-stroke ui-table tablaInfo">'+
										  '<tbody>' +
											'<tr class="activo">'+
												'<td >'+nombre+'</td>'+
											'</tr>'+
											'<tr>'+
											
													  '<td >'+instantaneo+unidadesCaudales+'</td>'+
											
											'</tr>'+
											'</tbody>'+
										'</table>'							   
							   '</div>'+
						  '</div>';
						} else if(i==1){
							var contentString = '<div id="content">'+
						  '<div id="siteNotice">'+
							  '</div>'+
								  '<div id="bodyContent" class="contenidoTablaMapInfo">'+								  
										'<table  data-role="table" class="ui-responsive table-stroke ui-table tablaInfo">'+
										  '<tbody>' +
											'<tr class="activo">'+
												'<td >'+nombre+'</td>'+
											'</tr>'+
											'<tr>'+
													  '<td >'+diario+unidadesCaudales+'</td>'+
											'</tr>'+
											'</tbody>'+
										'</table>'							   
							   '</div>'+
						  '</div>';
						}  
						
						infowindowString[marker.getPosition()] = contentString;
												
						google.maps.event.addListener(marker, 'click', function() {
						
							if(infowindow!=null){
								infowindow.close();
							}
							infowindow = new google.maps.InfoWindow({
								  content: infowindowString[marker.getPosition()]
							});
							infowindow.open(map,marker);
							map.panTo(marker.getPosition());
							//map.setCenter(marker.getPosition());
						});	
					});	
				
				if(pulsadoTabla){
					goToMap(idMapCanvas, i,idMarkerPush);
				}
				
			},
			error: function(e){
				//alert("error: " + JSON.stringify(e, null, 2));
			}			
		});						
	
		
}

/**
	Dibuja el mapa de tipo precipitacion pasandole la url del webservice y el id del div del mapa donde se debe pintar
*/
function drawMapPrecipitaciones(pulsadoTabla){

		i=2;

		var pageActiveID = $.mobile.activePage.attr('id');
		$("#"+ pageActiveID +" #contenidoMapa").show();
		$("#"+ pageActiveID +" #contenidoTabla").hide();
		$("#"+ pageActiveID +" #tablaBtn3").removeClass( "ui-btn-active" );
		$("#"+ pageActiveID +" #mapBtn3").addClass( "ui-btn-active" );

		var defaultLatLng = new google.maps.LatLng(37.745580, -4.986594);  // Default
		markers = [];
		var myOptions = {
			zoom: 8,
			center: defaultLatLng,
			mapTypeId: google.maps.MapTypeId.HYBRID
		};
		
		
		map = new google.maps.Map(document.getElementById(MapCanvasPrecipitaciones), myOptions);
		
		/*var ctaLayer = new google.maps.KmlLayer({
                    url: 'http://www.lookingformaps.com/get-kml.php?mapa=Cazorla-Nacimiento-Rio-Guadalquivir',
                    //url:'http://gmaps-samples.googlecode.com/svn/trunk/ggeoxml/cta.kml', 
                    preserveViewport: true
                    });
        ctaLayer.setMap(map);*/
		
       /* var ctaLayer = new google.maps.KmlLayer({
                    url:'http://demogfisur.gfi.es/kml/guadalquivir.kml',
					//url:'http://172.16.98.14:8081/kml/guadalquivir.kml',
					//url: 'http://www.lookingformaps.com/get-kml.php?mapa=Cazorla-Nacimiento-Rio-Guadalquivir',
                    //url:'http://gmaps-samples.googlecode.com/svn/trunk/ggeoxml/cta.kml', 
                    preserveViewport: true
                    });
        ctaLayer.setMap(map);*/
		
		var ctaLayer1 = new google.maps.KmlLayer({
                    url: configOptions.urlKML_1,
                    preserveViewport: true
                    });
		
		var ctaLayer2 = new google.maps.KmlLayer({
                    url: configOptions.urlKML_2,
                    preserveViewport: true
                    });

		
		var ctaLayer3 = new google.maps.KmlLayer({
                    url: configOptions.urlKML_3,
                    preserveViewport: true
                    });
		
		var ctaLayer4 = new google.maps.KmlLayer({
                    url: configOptions.urlKML_4,
                    preserveViewport: true
                    });
					
		ctaLayer1.setMap(map);
        ctaLayer2.setMap(map);
        ctaLayer3.setMap(map);
        ctaLayer4.setMap(map);		
		
		google.maps.event.addListenerOnce(map, 'idle', function() {
		   google.maps.event.trigger(map, 'resize');
		});
	
		 $.ajax({
			type: "GET",
			url: configOptions.urlWebservicePrecipitaciones,
			dataType: "xml",
			success: function(xml){
				
				infowindowString = new Object();
				
				$(xml).find("pluviometro").each(function () {
				
						//Obtenemos parametros del xml						
						var nombre = $(this).find("remota").text();
						var hora_actual = $(this).find("horaactual").text();
						var hora_anterior = $(this).find("horaanterior").text();
						var acum_hoy = $(this).find("acumhoy").text();
						var acum_ayer = $(this).find("acumayer").text();
					    var latitud = $(this).find("latitud").text();
						var longitud = $(this).find("longitud").text();
				
						var hora_actual_float = parseFloat(hora_actual);
						//if(hora_actual_float > 0){
							var redLatLng = new google.maps.LatLng(latitud, longitud);
						if(hora_actual_float > 0){
							 var iconMap = new google.maps.MarkerImage(imagenURL_Precipitacion,
							 // This marker is 20 pixels wide by 32 pixels tall.
							  new google.maps.Size(40, 32),
							  // The origin for this image is 0,0.
							  new google.maps.Point(0,0),
							  // The anchor for this image is the base of the flagpole at 0,32.
							  new google.maps.Point(0, 32));
						} else{
							var iconMap = new google.maps.MarkerImage(imagenURL_Caudal,
						  // This marker is 20 pixels wide by 32 pixels tall.
						  new google.maps.Size(40, 32),
						  // The origin for this image is 0,0.
						  new google.maps.Point(0,0),
						  // The anchor for this image is the base of the flagpole at 0,32.
						  new google.maps.Point(0, 32));
							
						}
							  
							
							var marker = new google.maps.Marker({
										position: redLatLng,
										map: map,
										title: nombre,
										icon: iconMap,
									});
							
							markers.push(marker);
							
							var contentString = '<div id="content">'+
							  '<div id="siteNotice">'+
								  '</div>'+
									  '<div id="bodyContent" class="contenidoTablaMapInfo">'+								  
											'<table  data-role="table" class="ui-responsive table-stroke ui-table tablaInfo">'+
											  '<tbody>' +
												'<tr class="activo">'+
														'<td >'+nombre+'</td>'+
												'</tr>'+
												'<tr>'+
														'<td >'+hora_actual+ ' ' + unidadesPrecipitaciones + '</td>'+
												'</tr>'+
												'</tbody>'+
											'</table>'							   
								   '</div>'+
							 '</div>';
							  
							
							infowindowString[marker.getPosition()] = contentString;
			
							google.maps.event.addListener(marker, 'click', function() {
							
								if(infowindow!=null){
									infowindow.close();
								}
								infowindow = new google.maps.InfoWindow({
									  content: infowindowString[marker.getPosition()]
								});
								
								infowindow.open(map,marker);
								map.panTo(marker.getPosition());
								//map.setCenter(marker.getPosition());
							});	
						//}			
							
					});	
		
		
				if(pulsadoTabla){
					goToMap(MapCanvasPrecipitaciones,i, idMarkerPush);
				}
				
			},
			error: function(e){
				//alert("error: " + JSON.stringify(e, null, 2));
			}			
		});									
		
}



/*********************
METODOS SIN USO, SOLO PARA FUTURO
*********************/
/*function initiMap(){
	var defaultLatLng = new google.maps.LatLng(37.745580, -4.986594);  // Default
	markers = [];
	var myOptions = {
		zoom: 9,
		center: defaultLatLng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	
	google.maps.event.addListenerOnce(map, 'idle', function() {
	   google.maps.event.trigger(map, 'resize');
	});
	
	
	Localizacion de la posicion actual del usuario
	
	if ( navigator.geolocation ) {
		function success(pos) {
			// Location found, show map with these coordinates
			drawMarker(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude), "Ústed se encuentra aquí!");
		}
		function fail(error) {
			alert("error: " + error);
			//drawMarker(defaultLatLng, false);  // Failed to find location, show default map
		}
		// Find the users current position.  Cache the location for 5 minutes, timeout after 6 seconds
		navigator.geolocation.getCurrentPosition(success, fail, {maximumAge: 500000, enableHighAccuracy:true, timeout: 6000});
	} else {
		alert("no location");
	}
}


function drawMarker(latlang, text) {
	for (var i = 0; i < markers.length; i++) {
		markers[i].setMap(null);
	}
	markers = [];

	if(polygon!=null){
		polygon.setMap(null);
		polygon=null;
	}
	
	var marker = new google.maps.Marker({
			position: latlang,
			map: map,
			title: text,
		});
	map.panTo(latlang);
	markers.push(marker);
	
	//$("#latitud").val(latlang.lat());
	//$("#longitud").val(latlang.lng());
}

function drawMarkerPoligon(latlang) {

	if(polygon!=null){
		polygon.setMap(null);
		for (var i = 0; i < markers.length; i++) {
			markers[i].setMap(null);
		}
		markers = [];		
		polygon=null;
	}
	
	var marker = new google.maps.Marker({
			position: latlang,
			map: map
		});
		
	markers.push(marker);
}

function drawPolygon() {

	if(polygon!=null){
		polygon.setMap(null);
	}
 
	/*var poligonMarkers = [
		new google.maps.LatLng(37.397638, -5.984915),
		new google.maps.LatLng(37.394467, -5.992425),
		new google.maps.LatLng(37.390478, -5.978821),
		new google.maps.LatLng(37.397399, -5.978177),
		new google.maps.LatLng(37.397638, -5.984915)
	];
  
	var poligonMarkers = [];
  
  	for (var i = 0; i < markers.length; i++) {
		poligonMarkers.push(new google.maps.LatLng(markers[i].getPosition().lat(), markers[i].getPosition().lng()));
	}
	
	poligonMarkers.push(new google.maps.LatLng(markers[0].getPosition().lat(), markers[0].getPosition().lng()));

	
  
	//TODO CERRAR POLIGONO
  
	// Construct the polygon.
	polygon = new google.maps.Polygon({
		paths: poligonMarkers,
		strokeColor: '#FF0000',
		strokeOpacity: 0.8,
		strokeWeight: 2,
		fillColor: '#FF0000',
		fillOpacity: 0.35
	});
	polygon.setMap(map);

}*/
/*********************
	END
*********************/
