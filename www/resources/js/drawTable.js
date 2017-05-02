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

/**
	Dibuja la tabla de tipo caudal instantaneo 
*/
function drawTableCaudalInstantaneo(){
	var i=0;
	drawTableCaudales(i, tituloCaudalInstantaneo, MapCanvasCaudalInstantaneo);
}

/**
	Dibuja la tabla de tipo caudal medio diario 
*/
function drawTableCaudalMedioDiario(){
	var i=1;
	drawTableCaudales(i, tituloCaudalDiario, MapCanvasCaudalDiario);
}

/**
	Dibuja la tabla de tipo caudal pasandole la url del webservice
		1. urlXML: URL del webservice de donde obtiene los datos
		2. tituloCabecera: Titulo de la cabecera que se pinta en la tabla para poder reutilizar codigo
		3. idMapCanvas: Id del div del mapa donde debe pintar al navegar pinchando en una de las celdas
*/
function drawTableCaudales(i, tituloCabecera, idMapCanvas){

		var pageActiveID = $.mobile.activePage.attr('id');
		$("#"+ pageActiveID +" #contenidoTabla").show();
		$("#"+ pageActiveID +" #contenidoMapa").hide();
		if(i==0){
		$("#"+ pageActiveID +" #tablaBtn1").addClass( "ui-btn-active" );
		$("#"+ pageActiveID +" #mapBtn1").removeClass( "ui-btn-active" );
		}else if(i==1){
		$("#"+ pageActiveID +" #tablaBtn2").addClass( "ui-btn-active" );
		$("#"+ pageActiveID +" #mapBtn2").removeClass( "ui-btn-active" );
		}
		 $.ajax({
			type: "GET",
			url: configOptions.urlWebserviceCaudales,
			dataType: "xml",
			beforeSend:function(){
			if(i==0){
				//error de beforeSend dentro de los if
			$('#errormessage1').css('display','none');
			$('#loadingmessage1').css('display','block');
			}else{
			$('#errormessage2').css('display','none');
			$('#loadingmessage2').css('display','block');}
			},
			success: function(xml){
				
				var contentString = '<table  data-role="table" class="ui-responsive table-stroke ui-table tablaInfo letraTabla">'+
						  '<thead>'+
							  '<th colspan="2">'+tituloCabecera+'</th>'+
						  '</thead>'+
						  '<tbody>';
				
				var par = true;
				var posMarker = 0;
				
				$(xml).find("caudal").each(function () {
				
						//Obtenemos parametros del xml						
						var nombre = $(this).find("nombre").text();
						var instantaneo = $(this).find("instantaneo").text();
						var diario = $(this).find("diario").text();
						var latitud = $(this).find("latitud").text();
						var longitud = $(this).find("longitud").text();
						
						if(instantaneo!=null && instantaneo.length > 0) instantaneo = Number(instantaneo.toString().match(/^\d+(?:\.\d{0,2})?/));
						if(diario!=null && diario.length > 0) diario = Number(diario.toString().match(/^\d+(?:\.\d{0,2})?/));
						
						if(i==0){
							if(par){
								contentString += '<tr onclick="goToMap(\''+ idMapCanvas + '\',\''+i+'\',\'' + posMarker +'\')">'+
												  '<td >'+nombre+'</td>'+
												  '<td >'+instantaneo+unidadesCaudales+'</td>'+
											 '</tr>';
								par = false;
							}else{
								contentString += '<tr class="activo" onclick="goToMap(\'' + idMapCanvas + '\',\''+i+'\',\'' + posMarker +'\')">'+
												  '<td >'+nombre+'</td>'+
												  '<td >'+instantaneo+unidadesCaudales+'</td>'+
											 '</tr>';
								par = true;
							}
						}else if(i==1){
							if(par){
								contentString += '<tr onclick="goToMap(\''+ idMapCanvas + '\',\''+i+'\',\'' + posMarker +'\')">'+
												  '<td >'+nombre+'</td>'+
												  '<td >'+diario+unidadesCaudales+'</td>'+
											 '</tr>';
								par = false;
							}else{
								contentString += '<tr class="activo" onclick="goToMap(\''+  idMapCanvas + '\',\'' +i+'\',\'' + posMarker +'\')">'+
												  '<td >'+nombre+'</td>'+
												  '<td >'+diario+unidadesCaudales+ '</td>'+
											 '</tr>';
								par = true;
							}
						}
						
						posMarker++;
				});	
					  
				contentString += '</tbody>'+
								'</table>';
				$("#"+ pageActiveID +" #contenidoTablaInfo").html(contentString);
				if(i==0){
				$('#loadingmessage1').css('display','none');
				}else if(i==1){
				$('#loadingmessage2').css('display','none');
				}
			},
			error: function(e){
			if(i==0){
			$('#loadingmessage1').css('display','none');
			$('#errormessage1').css('display','block');
			}else if(i==1){
			$('#loadingmessage2').css('display','none');
			$('#errormessage2').css('display','block');
			}
				//alert("error: " + JSON.stringify(e, null, 2));
			},			
		});									
}

/**
	Dibuja la tabla de tipo precipitacion 
*/
function drawTablePrecipitaciones(){
		var i=2;
		var idMapCanvas = MapCanvasPrecipitaciones;	

		var pageActiveID = $.mobile.activePage.attr('id');
		$("#"+ pageActiveID +" #contenidoTabla").show();
		$("#"+ pageActiveID +" #contenidoMapa").hide();
		$("#"+ pageActiveID +" #tablaBtn3").addClass( "ui-btn-active" );
		$("#"+ pageActiveID +" #mapBtn3").removeClass( "ui-btn-active" );
		$('#errormessage3').css('display','none');
		 $.ajax({
			type: "GET",
			url: configOptions.urlWebservicePrecipitaciones,
			dataType: "xml",
			beforeSend: function(){$('#loadingmessage3').css('display','block');},
			success: function(xml){
				
				var contentString = '<table  data-role="table" class="ui-responsive table-stroke ui-table tablaInfo letraTabla" data-theme="a">'+		
						   '<thead>'+
							  '<tr>'+
							  '<th colspan="5">Precipitaciones</th>'+
							  '</tr>'+
							  '<tr>'+
								'<th>Remota</th>'+
								'<th data-priority="1">Hora Actual</th>'+
								'<th data-priority="1">Hora Anterior</th>'+
								'<th data-priority="2">Acum. Hoy</th>'+
								'<th data-priority="2">Acum. Ayer</th>'+
								
							  '</tr>'+
						  '</thead>'+
						  '<tbody>';
				
				var par = true;
				var posMarker = 0;
				$(xml).find("pluviometro").each(function () {
				
				
						//Obtenemos parametros del xml						
						var nombre = $(this).find("remota").text();
						var hora_actual = $(this).find("horaactual").text();
						var hora_anterior = $(this).find("horaanterior").text();
						var acum_hoy = $(this).find("acumhoy").text();
						var acum_ayer = $(this).find("acumayer").text();
						
						if(acum_hoy!=null && acum_hoy.length > 0) acum_hoy = Number(acum_hoy.toString().match(/^\d+(?:\.\d{0,2})?/));
						if(acum_ayer!=null && acum_ayer.length > 0) acum_ayer = Number(acum_ayer.toString().match(/^\d+(?:\.\d{0,2})?/));
						
						if(par){
							contentString += '<tr onclick="goToMap(\'' + idMapCanvas + '\',\''+i+'\',\'' + posMarker +'\')">'+
											  '<td class="letraRemota">'+nombre+'</td>'+
											  '<td >'+hora_actual+unidadesPrecipitaciones+'</td>'+
											  '<td >'+hora_anterior+unidadesPrecipitaciones+'</td>'+
											  '<td >'+acum_hoy+unidadesPrecipitaciones+'</td>'+
											  '<td >'+acum_ayer+unidadesPrecipitaciones+'</td>'+
										 '</tr>';
							par = false;
						}else{
							contentString += '<tr class="activo" onclick="goToMap(\'' + idMapCanvas + '\',\''+i+'\',\'' + posMarker +'\')">'+
											  '<td class="letraRemota">'+nombre+'</td>'+
											  '<td >'+hora_actual+unidadesPrecipitaciones+'</td>'+
											  '<td >'+hora_anterior+unidadesPrecipitaciones+'</td>'+
											  '<td >'+acum_hoy+unidadesPrecipitaciones+'</td>'+
											  '<td >'+acum_ayer+unidadesPrecipitaciones+'</td>'+
										 '</tr>';
							par = true;
						}
						posMarker++;
				});	
						
				contentString += '</tbody>'+
								'</table>';
						
				if(posMarker == 0){
					contentString = "<p style='color:#194b7e !important'>En esto momento no hay datos referentes a precipitaciones</p>";
				}
														
								
				$("#"+ pageActiveID +" #contenidoTablaInfo").html(contentString);
				$('#loadingmessage3').css('display','none');
			},
			error: function(e){
				$('#loadingmessage3').css('display','none');
				$('#errormessage3').css('display','block');
				//alert("error: " + JSON.stringify(e, null, 2));
			}			
		});			
		
}


