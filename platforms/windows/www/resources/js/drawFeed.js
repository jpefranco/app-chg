/**
	Dibuja las noticias de la pagina principal
*/
function drawFeedNoticias(){
	

		$('#loadingmessage').css('display','block');
		var pageActiveID = "";
		if($.mobile.activePage!=null){
			pageActiveID = $.mobile.activePage.attr('id');
		}
		if(pageActiveID === "indexPage"){
			 $.ajax({
				type: "GET",
				url: configOptions.urlWebserviceFeed,
				dataType: "xml",
				success: function(xml){		
					var contentString = '<ul data-role="listview" data-inset="true" data-theme="a" class="ui-listview ui-listview-inset ui-corner-all ui-shadow ui-group-theme-a">';
					
					var index = 0;
					var lengthItems = ($(xml).find("entry").length) - 1;
					$(xml).find("entry").each(function () {
										
							//Obtenemos parametros del xml						
							var titulo = $(this).find("title").text();
							var fecha = $(this).find("published").text();
							//var link = $(this).find("link").text();
							var link = $(this).find("id").text();
							//var descripcion = $(this).find("description").text();
												
							if(index == 0){
								contentString += '<li class="ui-first-child">';
							}else if(index == lengthItems){
								contentString += '<li class="ui-last-child">';
							}else{
								contentString += '<li>';
							}
							
							/*contentString += 	'<a href="'+ link + '" class="ui-btn ui-btn-icon-right ui-icon-carat-r">'+
													'<p class="noticias_date">'+ convertDate(fecha) + '</p>'+
													'<h2 class="ui-li-heading noticias_head">'+ titulo +'</h2>'+
												'</a>'+
											'</li>';*/ 
											
							contentString += 	'<a onclick="openUrl(\''+ link + '\')" class="ui-btn ui-btn-icon-right ui-icon-carat-r">'+
													'<p class="noticias_date">'+ convertDate(fecha) + '</p>'+
													'<h2 class="ui-li-heading noticias_head">'+ titulo +'</h2>'+
												'</a>'+
											'</li>';										
						
						index++;
					});	
					
					contentString += '</ul>'+
					$("#"+ pageActiveID +" #noticiasMenu").html(contentString);
					$('#loadingmessage').css('display','none');
				 },	
				error: function(e){				  
					$('#loadingmessage').css('display','none');
					$('#errormessage').css('display','block');
				}		
			});						
		}		
}
