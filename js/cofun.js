$(document).ready(function(){
 function platillos (precio, nombre, descripcion){
        this.precio = precio;
        this.nombre = nombre;
        this.descripcion = descripcion;

    }
    var a = 6.25
    var ck1 = new platillos (9.25, " Egg Roll ", "savory bits of beef and pork sauteed with chinese vegetables in a crispy golden wrapper. mas text a ver asta donde llega el footer y mas texto para saber hasto donde llega el foote");
    var ap2 = new platillos (8.25, "shrimp roll");

 $(".pck1").text(ck1.precio);
 $(".nck1").text(ck1.nombre);
 $(".dck1").text(ck1.descripcion);
 $("#hola").text(ck1.precio + ck1.nombre + ck1.descripcion);
});