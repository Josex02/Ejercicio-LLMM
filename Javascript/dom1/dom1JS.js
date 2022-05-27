const elements = document.getElementsByTagName("p");

function mostrar() {
    document.getElementById("demo").innerHTML = elements[0].innerHTML;
}   