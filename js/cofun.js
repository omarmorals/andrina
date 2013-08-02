$(document).ready(function(){
	$('#prueba').click(leftp);
	$('#prueba2').click(rightp);
	


});

function leftp() {
	$('#pruebapanel').load('panell.html', esto) 
}

function rightp() {
	$('#pruebapanelr').load('panelr.html', esto)
}

function esto () {
	$(this).trigger('create');// body...
}

function yata () {
	$('#prueba').ready(leftp);
	$('#prueba2').ready(rightp);// body...
}