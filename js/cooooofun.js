$(document).ready(function(){
	$.get("panell.html", function (data) {
        $("#pruebapanel").append(data);
              });

});
