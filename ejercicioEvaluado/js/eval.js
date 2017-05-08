function MiembroSquad(nombre,edad,hobbie,imagen,id){
    this.nombre = nombre;
    this.edad = edad;
    this.hobbie = hobbie;
    this.imagen = imagen;
    this.id = id;
}

var bere = new MiembroSquad('Berenisse Rios','28', 'Yoga','bere.jpg',1);
var su = new MiembroSquad('Susana Arce','28', 'Dar golpesitos con cariño','susa.jpg',2);
var dani = new MiembroSquad('Daniela Medina','20', 'Ir al kioskito','dani.jpg',3);
var rata = new MiembroSquad('Andrea Ratika','24', 'Dibujar','ratita.jpg',4);
var nico = new MiembroSquad('Nicole Aliste','32', 'Comida China','nicole.jpg',5);
var clau = new MiembroSquad('Claudia Rivera','33', 'Patinar', 'clau.png',6);
var fran = new MiembroSquad('Francisca Ruiz-Tagle','35', 'Manualidades', 'fran.png',7);



var objeto = [bere, su, dani, rata, nico, clau, fran];
var impre2 = document.getElementById('list');
var coment = [];

var impre = objeto.forEach(function(elemento){
    var elementosSquad =  "<br> <img width='200' src= 'Imagen/" + elemento.imagen + "'/>" + "<br> Nombre: " + elemento.nombre + "<br>" + "Edad: " + elemento.edad +  "<br>" + "Hobbie: " + elemento.hobbie + "<br>" + "<br>" + "<textarea name='textarea' id='comentariosTarea' rows='9' cols='60'>Comenta AQUI!</textarea>" + "<br>" + ' <input id="campo7" name="enviar" type="submit" value="Envia tu comentario"/><br>';
    impre2.innerHTML += elementosSquad;
    coment.push(elementosSquad);

});

// Códigos para los comentarios - Cueck!
/*

var cajaDeComentarios = document.getElementById('incorporardatos');
var comentariosInput = [];

class Comentario {
  constructor(id_miembro,comentario,likes) {
    this.id_miembro = id_miembro;
    this.comentario = comentario;
    this.likes = 0;
  }

  for (var i = 0; i < objeto[i].length; i++) {
      impre2 += '<li>' + objeto[i] + '</li>';
  }
*/
/* Intento fallido u.u - Comentarios

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

//Intento 2 -.-
function MiembroSquad(nombre,edad,hobbie,imagen,comentt){
    this.nombre = nombre;
    this.edad = edad;
    this.hobbie = hobbie;
    this.imagen = imagen;
    this.comentt = function obtenerCment(){
    	var entrada = document.getElementById("comentarioID");
      var textComent = document.getElementsByClassName("ComentarioEnList");
    	textComent[0].innerHTML += input.value + "<br>";
    	input.value = "";
    }

function comprobarComentario(){
   var entrada = document.getElementById('coment')
   var comentario = document.getElementsByClassName('comentlist');
   comentario[0].innerHTML += entrada.value + "<br>";
   entrada.value = "";

   */
