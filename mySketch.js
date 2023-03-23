let numero = 1;  //declaramos las variables
let idioma = 0;
/*var mySound1;
var mySound2;
var mySound3;
var mySound4;
var mySound5;
var mySound6;

function preload() {  //con esta función cargamos todos los sonidos que utilizaremos
	//Sonidos en español
 mySound1 = loadSound('https://openprocessing-usercontent.s3.amazonaws.com/files/user359413/visual1839453/hee426762a8290a981241f5fcb3429e65/23%20feb%2012.44%E2%80%8B.aac');
 mySound2 = loadSound('https://openprocessing-usercontent.s3.amazonaws.com/files/user359413/visual1839453/hee426762a8290a981241f5fcb3429e65/23%20feb%2012.44%E2%80%8B(2).aac');
 mySound3 = loadSound('https://openprocessing-usercontent.s3.amazonaws.com/files/user359413/visual1839453/hee426762a8290a981241f5fcb3429e65/23%20feb%2012.45%E2%80%8B.aac');
 mySound4 = loadSound('https://openprocessing-usercontent.s3.amazonaws.com/files/user359413/visual1839453/hee426762a8290a981241f5fcb3429e65/23%20feb%2012.45%E2%80%8B(2).aac');
 mySound5 = loadSound('https://openprocessing-usercontent.s3.amazonaws.com/files/user359413/visual1839453/hee426762a8290a981241f5fcb3429e65/23%20feb%2012.45%E2%80%8B(3).aac');
 mySound6 = loadSound('https://openprocessing-usercontent.s3.amazonaws.com/files/user359413/visual1839453/hee426762a8290a981241f5fcb3429e65/23%20feb%2012.46%E2%80%8B.aac');
	//Sonidos en inglés
 mySound1_1 = loadSound('Dado_1.aac');
 mySound2_2 = loadSound('Dado_2.aac');
 mySound3_3 = loadSound('Dado_3.aac');
 mySound4_4 = loadSound('Dado_4.aac');
 mySound5_5 = loadSound('Dado_5.aac');
 mySound6_6 = loadSound('Dado_6.aac');

}
*/
function setup() { //inicializamos
 boton2 = createButton('Inglés');  //creamos el botón para cambiar el idioma
	//Crearemos una variable idioma la cual cuando tenga el valor 0 utilizaremos los sonidos en español y cuando valga 1 en inglés
 boton2.size(100, 50);
 boton2.mousePressed(ingles);
 boton3 = createButton('Español');
 boton3.size(100, 50);
 boton3.mousePressed(español);
 createCanvas(600, 300);  //creamos el lienzo
 background(100);  //establecemos el color de fondo
}
function ingles(){
	idioma = 1;  //damos a la variable idioma el siguiente valor
}
function español(){
	idioma = 0;
}
function cambiarNumero() {
 numero = random(0, 6);  //damos a la variable numero un valor entre 0 y 6
 dado = new Dado(6, numero);  //creamos unn nuevo dado de 6 caras con el valor de numero
 dado.mostrar();  

}
function mousePressed() {//cuando apretemos el ratón, lanzaremos el dado
  cambiarNumero();
}
class Dado {
 constructor(_caras, _numero) {  //creamos una nueva clase con estos atributos
  this.caras = _caras;  //clonamos las variables para guardar el valor anterior
  this.numero = _numero;
 }
 mostrar() {
  if (this.numero > 0 && this.numero < 1) {  //si se cumplen ambas condiciones
	if (idioma == 0){ //siempre que idioma valga 0 el sonido suena en español
		fill(100);
		rect(300, 86, 260, 86);
   	textSize(60);
		fill(255);
		text("Uno",350,150);
	 } else{  //en caso contrario suena en inglés
		fill(100);
		rect(300, 86, 260, 86);
   	textSize(60);
		fill(255);
		text("One",350,150);
	 }
   fill(255);  //color del dado
   rect(20, 20, 260, 260, 50);  //forma del dado
   fill(0);  //color de los puntos
   ellipse(150, 150, 50, 50);  //puntos del dado
  }
  if (this.numero > 1 && this.numero < 2) {
	 if (idioma == 0){
		fill(100);
		rect(300, 86, 260, 86);
   	textSize(60);
		fill(255);
		text("Dos",350,150);
	 } else{
		fill(100);
		rect(300, 86, 260, 86);
   	textSize(60);
		fill(255);
		text("Two",350,150);
	 }
   fill(255);
   rect(20, 20, 260, 260, 50);
   fill(0);
   ellipse(100, 100, 50, 50);
   ellipse(200, 200, 50, 50);
  }
  if (this.numero > 2 && this.numero < 3) {
		if (idioma == 0){
 		fill(100);
		rect(300, 86, 260, 86);
   	textSize(60);
		fill(255);
		text("Tres",350,150);
	 } else{
		fill(100);
		rect(300, 86, 260, 86);
   	textSize(60);
		fill(255);
		text("Three",350,150);
	 }
   fill(255);
   rect(20, 20, 260, 260, 50);
   fill(0);
   ellipse(75, 75, 50, 50);
   ellipse(150, 150, 50, 50);
   ellipse(225, 225, 50, 50);
  }
  if (this.numero > 3 && this.numero < 4) {
		if (idioma == 0){
  		fill(100);
			rect(300, 86, 260, 86);
   		textSize(60);
			fill(255);
			text("Cuatro",350,150);
	 } else{
			fill(100);
			rect(300, 86, 260, 86);
   		textSize(60);
			fill(255);
			text("Four",350,150);
	 }
   fill(255);
   rect(20, 20, 260, 260, 50);
   fill(0);
   ellipse(100, 100, 50, 50);
   ellipse(100, 200, 50, 50);
   ellipse(200, 100, 50, 50);
   ellipse(200, 200, 50, 50);
  }
  if (this.numero > 4 && this.numero < 5) {
	if (idioma == 0){
 		fill(100);
		rect(300, 86, 260, 86);
   	textSize(60);
		fill(255);
		text("Cinco",350,150);
	 } else{
		fill(100);
		rect(300, 86, 260, 86);
   	textSize(60);
		fill(255);
		text("Five",350,150);
	 }
   fill(255);
   rect(20, 20, 260, 260, 50);
   fill(0);
   ellipse(75, 75, 50, 50);
   ellipse(75, 225, 50, 50);
   ellipse(150, 150, 50, 50);
   ellipse(225, 75, 50, 50);
   ellipse(225, 225, 50, 50);
  }
  if (this.numero > 5 && this.numero < 6) {
	if (idioma == 0){
		fill(100);
		rect(300, 86, 260, 86);
   	textSize(60);
		fill(255);
		text("Seis",350,150);
	 } else{
		fill(100);
		rect(300, 86, 260, 86);
   	textSize(60);
		fill(255);
		text("Six",350,150);
	 }
   fill(255);
   rect(20, 20, 260, 260, 50);
   fill(0);
   ellipse(75, 75, 50, 50);
   ellipse(75, 150, 50, 50)
   ellipse(75, 225, 50, 50);
   ellipse(225, 150, 50, 50);
   ellipse(225, 75, 50, 50);
   ellipse(225, 225, 50, 50);
  }
 }
}





