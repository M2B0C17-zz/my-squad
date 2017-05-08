function MiembroSquad(nombre,edad,hobbie,imagen){
    this.nombre = nombre;
    this.edad = edad;
    this.hobbie = hobbie;
    this.imagen = imagen;

}
var bere = new MiembroSquad('Berenisse Rios','28', 'Yoga','bere.jpg');
var su = new MiembroSquad('Susana Arce','28', 'Dar golpesitos con cariño','susa.jpg');
var dani = new MiembroSquad('Daniela Medina','20', 'Ir al kioskito','dani.jpg');
var rata = new MiembroSquad('Andrea Ratika','24', 'Dibujar','ratita.jpg');
var nico = new MiembroSquad('Nicole Aliste','32', 'Comida China','nicole.jpg');
var clau = new MiembroSquad('Claudia Rivera','33', 'Patinar', 'clau.png');
var fran = new MiembroSquad('Francisca Ruiz-Tagle','35', 'Manualidades', 'fran.png');

/*
// Enlace es el corazon de like
 // se coloca += para que no sobreescriba arriba
*/

var objeto = [bere, su, dani, rata, nico, clau, fran];
var impre2 = document.getElementById('list');
var coment = [];

var impre = objeto.forEach(function(elemento){
    var elementosSquad =  "<br> <img width='200' src= 'Imagen/" + elemento.imagen + "'/>" + "<br> Nombre: " + elemento.nombre + "<br>" + "Edad: " + elemento.edad +  "<br>" + "Hobbie: " + elemento.hobbie + "<br>" + "<br>" + "<textarea name='textarea' id='comentariosTarea' rows='9' cols='60'>Comenta AQUI!</textarea>" + "<br>" + ' <input id="campo7" name="enviar" type="submit" value="Envia tu comentario"/><br>';
    impre2.innerHTML += elementosSquad;
    coment.push(elementosSquad);

});


// Códigos para los comentarios

/* Intento fallido u.u

class Comentario {
  constructor(id_miembro,comentario,likes) {
    this.id_miembro = id_miembro;
    this.comentario = [];
    this.likes = 0;
    this.obtener = function(coment){
      this.comentario.push(coment);
      return this.comentario;
    }
    this.incremento = function(likeEn0){
      this.likes.push(likeEn0);
      return this.likes;
    }
    }
  }

var comentBere = new Comentario(document.getElementById('bereTTarea'), document.getElementsByTagName('textarea'), 0++);

*/

function comprobarComentario(){
   var comentario = document.comentss.value;
   var likes = document.comentss.value;}
