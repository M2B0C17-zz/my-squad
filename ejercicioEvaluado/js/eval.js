function MiembroSquad(nombre,edad,hobbie,imagen){
    this.nombre = nombre;
    this.edad = edad;
    this.hobbie = hobbie;
    this.imagen = imagen;

}
var bere = new MiembroSquad('Berenisse Rios','28', 'Yoga','bere.jpg');
var su = new MiembroSquad('Susana Arce','28', 'Dar golpesitos con cariño', 'susa.jpg');
var dani = new MiembroSquad('Daniela Medina','20', 'Ir al kioskito', 'dani.jpg');
var rata = new MiembroSquad('Andrea Ratika','24', 'Dibujar', 'rata.jpg');
var nico = new MiembroSquad('Nicole Aliste','32', 'Comida China');
var clau = new MiembroSquad('Claudia Rivera','33', 'Patinar', 'clau.png');
var fran = new MiembroSquad('Francisca Ruiz-Tagle','35', 'Manualidades');

/*
// textlargo buscar la caja de texto en hmtl

// Enlace es el corazon de like

 // se coloca += para que no sobreescriba arriba
*/ 

var objeto = [bere, su, dani, rata, nico, clau, fran];
var impre2 = document.getElementById('list');
var coment = [];

var impre = objeto.forEach(function(elemento){
    var elementosSquad =  " <img width='200' src= 'Imagen/" + elemento.imagen + "'/>" + "<br>Nombre: " + elemento.nombre + "<br>" + "Edad: " + elemento.edad +  "<br>" + "Hobbie: " + elemento.hobbie + "<br>" + "<br>" + "<textarea name='textarea' rows='9' cols='60'>Comenta AQUI!</textarea>" + ' <input id="campo7" name="enviar" type="submit" value="Envia tu comentario"/>';
    impre2.innerHTML += elementosSquad;
    coment.push(elementosSquad);

});
