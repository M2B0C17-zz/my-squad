# my-squad
Ejercicio práctico 2 - Objetos - Squad

#### Material de apoyo:
**Para el diseño ->** http://librosweb.es/libro/javascript/capitulo_11/ejercicio_6.html
**Para el ejercicio -->** https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Trabajando_con_objectos
                    -->** https://developer.mozilla.org/es/docs/Web/HTML/Elemento/div


**Entre otros**




### Ejercicio Práctico 2 - Mi Squad!

## HTML:
1º Se crearon en el HTML, etiquetas div, para agrupar el contenido de mis compañeras de Squad dentro de div.

                                                [ <div id='listita'></div> ]


2º Conectamos ambos archivos (.html y .js) con la etiqueta script.

                                          [ <script src='asetss/squad.js'></script> ]
                                                     

## Javascript:
1º Se crea el objeto constructor con los datos que queremos obtener.

                                        [ function MiembroSquad(nombre,edad,hobbie){} ]

2º Se agregan a las 7 compañeras de mi Squad. Se crean en variables y con sus respectivos valores.

                               [ var clau = new MiembroSquad('Claudia Rivera','33', 'Patinar'); ]
                                          
3º Se crea la variable donde queremos que vayan nuestros datos al html, en este caso al div con id "listita"

                                      [ var impre = document.getElementById('listita'); ]
                                                 [ <div id='listita'></div> ]
                                          
4º Se crean 7 variables con los textos que se desean imprimir.

                     [ var res3 = "...<li>Nombre y Apellido: </b>" + dani.nombre + "<br></li>... + "<br><br>"; ]
                                           
5º Finalmente se se crea la variable en donde hacemos un comprimido de los 7 anteriores, y se imprime con innerHTML.

                                               [ impre.innerHTML = resComprimido; ]


Vista Previa del Ejercicio --> https://m2b0c17.github.io/my-squad/
