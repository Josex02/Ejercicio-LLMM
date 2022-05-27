function numMayor(num1, num2) {
    var x;
    if (num1 > num2)
        x = num1;
    else 
        x = num2;
    return x;
}

function mostrarMayor() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    document.getElementById("resultado").innerHTML = numMayor(num1, num2);
}

function numMayor1(nume1, nume2, num3) {
    var y;
    if (nume1 > nume2)
        y = nume1;
    else if (nume2 > num3)
        y = nume2;
    else
        y = num3
    return y;
}

function mostrarMayor1() {
    var nume1 = document.getElementById('nume1').value;
    var nume2 = document.getElementById('nume2').value;
    var num3 = document.getElementById('num3').value;
    document.getElementById("resultado1").innerHTML = numMayor1(nume1, nume2, num3);
}

// Ejercicio B
maxOfThree(5, 4, 6);
function maxOfThree(a, b, c) {
  if (a > b) {
    document.getElementById("resultado2").innerHTML = `El resultado es: ${a}`;
    if (a < c) {
      document.getElementById("resultado2").innerHTML = `El resultado es: ${c}`;
    } else {
      document.getElementById("resultado2").innerHTML = `El resultado es: ${a}`;
    }
  } else if (b > a) {
    document.getElementById("resultado2").innerHTML = `El resultado es: ${b}`;
    if (b < c) {
      document.getElementById("resultado2").innerHTML = `El resultado es: ${c}`;
    } else {
      document.getElementById("resultado2").innerHTML = `El resultado es: ${b}`;
    }
  }
}

// EJercicio C
esVocal("b");
function esVocal(a) {
  if (
    a == "a" ||
    a == "e" ||
    a == "i" ||
    a == "o" ||
    a == "u" ||
    a == "A" ||
    a == "E" ||
    a == "I" ||
    a == "O" ||
    a == "U"
  ) {
    document.getElementById(
      "resultado3"
    ).innerHTML = `El valor ${a} es una vocal`;
  } else {
    document.getElementById(
      "resultado3"
    ).innerHTML = `El valor ${a} no es una vocal`;
  }
}


// Ejercicio E
sum();
mul();
function sum() {
  const lista = [1, 2, 3, 4];
  let res = lista.reduce((a, b) => {
    return a + b;
  });
  document.getElementById('resultado5suma').innerHTML = `Resultado de la suma: ${res}`
}

function mul() {
  const lista = [1, 2, 3, 4];
  let res = lista.reduce((a, b) => {
    return a * b;
  });
  document.getElementById('resultado5multi').innerHTML = `Resultado de la multiplicación: ${res}`
}


// Ejercicio F
document.getElementById('resultadof').innerHTML = reversa('Texto al revés')
function reversa(s) {
  return s.split("").reverse().join('')
}