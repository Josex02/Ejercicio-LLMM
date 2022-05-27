var citas =  ["¿Ustedes piensan antes de hablar o hablan tras pensar?",
"Haré todo lo que pueda y un poco más de lo que pueda si es que eso es posible, y haré todo lo posible e incluso lo imposible si también lo imposible es posible",
"ETA es una gran nación","Los chuches, nos suben hasta el IVA de los chuches","Lo que nosotros hemos hecho, cosa que no hizo usted, es engañar a la gente",
"Hay que fabricar máquinas que nos permitan seguir fabricando máquinas, porque lo que no va a hacer nunca la máquina es fabricar máquinas",
"Es el alcalde el que quiere que sean los vecinos el alcalde","Un vaso es un vaso y un plato es un plato",
"Esto se acabó y aquí ya no se pasa por ninguna","Dije que bajaría los impuestos y los estoy subiendo"]


function CitaNueva() {
    var numeroRandom = Math.floor(Math.random() * (citas.length));
    document.getElementById("quotes").innerHTML = citas[numeroRandom];
}