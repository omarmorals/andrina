
	$('div:jqmData(role="page")').live('pagebeforeshow', listo);
    // code to execute on each page change
    function listo () {
    	alert('si sale este alerta es para probar que los js externos se cargan. si los paneles no se cargans es por same orgin policy')
    	// body...
    
	$('.prueba').ready(leftp);
	$('.prueba2').ready(rightp);
	}
  

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