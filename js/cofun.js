$(document).ready(function(){
 function platillos (precio, nombre, descripcion){
        this.precio = precio;
        this.nombre = nombre;
        this.descripcion = descripcion;

    }
    var a = 6.25
    var ap1 = new platillos (9.25, " Egg Roll ", "savory bits of beef and pork sauteed with chinese vegetables in a crispy golden wrapper. ");
    var ap2 = new platillos (8.25, "shrimp roll");

 $(".price").text(ap1.precio);
 $(".name").text(ap1.nombre);
 $(".descripcion").text(ap1.descripcion);
});