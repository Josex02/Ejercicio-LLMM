function muestra() {
    f = document.getElementById("tbf").value;
    c = toCelsius(f)
    document.getElementById("tbc").value = c;
}
 
function toCelsius(f) {
  return (5/9) * (f-32);
}

function toFarenhein(g) {
    return (9/5 * g) + 32;
  }

function muestra2() {
    g = document.getElementById("tbc").value;
    h = toFarenhein(g) 
    document.getElementById("tbf").value = h;
}