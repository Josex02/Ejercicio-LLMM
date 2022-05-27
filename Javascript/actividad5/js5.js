// Cambiar estilo de la fuente 

function botonP1() {
    document.getElementById("parrafo1").style.fontFamily = "Times New Roman";
}

function botonP2() {
    document.getElementById("parrafo2").style.fontFamily = "Arial";
}

function botonP3() {
    document.getElementById("parrafo3").style.fontFamily = "Verdana";
}

// Cambiar imagen

function cambiaIMG(nombre) {
    document.getElementById('imagen').src = nombre;   
}

// Cambiar <div>
var texto = "Soy ElXokas"
var numeros = "1991"
var textoNUM = "Me llamo Mariano Rajoy y tengo 20 años, nací en 2012 y soy peruano"

function div1() {
    document.getElementById("LMAR").innerHTML = texto;
}

function div2() {
    document.getElementById("LMAR1").innerHTML = numeros;
}

function div3() {
    document.getElementById("LMAR2").innerHTML = textoNUM;
}