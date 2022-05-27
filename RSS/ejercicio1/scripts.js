function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      myFunction(this);
    }
    xhttp.open("GET", "champions.xml");
    xhttp.send();
  }
  function myFunction(xml) {
    const xmlDoc = xml.responseXML;
    const x = xmlDoc.getElementsByTagName("item");
    let txt="";
    for (let i = 0; i <x.length; i++) { 
      txt += x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue + "<br>"
      x[i].getElementsByTagName("description")[0].childNodes[0].nodeValue;
    }
    document.getElementById("demo").innerHTML = txt;
  }