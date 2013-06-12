$(document).ready(function(){
	$('#prueba').click(function(){
		$('#pruebapanel').load('panell.html', function () {
    		$(this).trigger('create');
		});
	});

	$('#prueba2').click(function(){
		$('#pruebapanelr').load('panelr.html', function () {
    		$(this).trigger('create');
		});

	});
	


}); 