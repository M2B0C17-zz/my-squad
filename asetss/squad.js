function MiembroSquad(nombre,edad,hobbie){
    this.nombre = nombre;
    this.edad = edad;
    this.hobbie = hobbie;

}
var bere = new MiembroSquad('Berenisse Rios','28', 'Yoga');
var su = new MiembroSquad('Susana Arce','28', 'Dar golpesitos con cariño');
var dani = new MiembroSquad('Daniela Medina','20', 'Ir al kioskito');
var rata = new MiembroSquad('Andrea Ratika','24', 'Dibujar');
var nico = new MiembroSquad('Nicole Aliste','32', 'Comida China');
var clau = new MiembroSquad('Claudia Rivera','33', 'Patinar');
var fran = new MiembroSquad('Francisca Ruiz-Tagle','35', 'Manualidades');

var impre = document.getElementById('listita');

var res1 = "<b><li>Nombre y Apellido: </b>" + bere.nombre + "<br></li><b><li>Edad: </b>" + bere.edad + "<br></li><b><li>Hobbie: </b>" + bere.hobbie
    + "<br><br>";
var res2 = "<b><li>Nombre y Apellido: </b>" + su.nombre + "<br></li><b><li>Edad: </b>" + su.edad + "<br></li><b><li>Hobbie: </b>" + su.hobbie
    + "<br><br>";
var res3 = "<b><li>Nombre y Apellido: </b>" + dani.nombre + "<br></li><b><li>Edad: </b>" + dani.edad + "<br></li><b><li>Hobbie: </b>" + dani.hobbie
    + "<br><br>";
var res4 = "<b><li>Nombre y Apellido: </b>" + rata.nombre + "<br></li><b><li>Edad: </b>" + rata.edad + "<br></li><b><li>Hobbie: </b>" + rata.hobbie
    + "<br><br>";
var res5 = "<b><li>Nombre y Apellido: </b>" + nico.nombre + "<br></li><b><li>Edad: </b>" + nico.edad + "<br></li><b><li>Hobbie: </b>" + nico.hobbie
    + "<br><br>";
var res6 = "<b><li>Nombre y Apellido: </b>" + clau.nombre + "<br></li><b><li>Edad: </b>" + clau.edad + "<br></li><b><li>Hobbie: </b>" + clau.hobbie
    + "<br><br>";
var res7 = "<b><li>Nombre y Apellido: </b>" + fran.nombre + "<br></li><b><li>Edad: </b>" + fran.edad + "<br></li><b><li>Hobbie: </b>" + fran.hobbie
    + "<br><br>";

var resComprimido = res1 + res2 + res3 + res4 + res5 + res6 + res7;


impre.innerHTML = resComprimido;
