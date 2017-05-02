function openUrl(url){
      window.open(url,"_blank","location=yes","closebuttoncaption=Volver");
      //window.open("http://www.wemobile.es","_blank","location=yes","closebuttoncaption=Volver");
}


/*
	Transforma fechas
*/
function convertDate(pubDate){
	var date = new Date(pubDate);

	var months = Array("Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic");
	var dateTransform = date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();
	var time = date.getHours()+":"+date.getMinutes();

	return dateTransform + " " + time; 
}