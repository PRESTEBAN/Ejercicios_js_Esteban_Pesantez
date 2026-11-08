
var notas = [8, 6, 9, 7, 5, 10, 4, 7];

function analizar() {
  var suma = 0;
  var maxima = notas[0];
  var minima = notas[0];
  var aprobadas = 0;
  var noAprobadas = 0;


  for (var i = 0; i < notas.length; i++) {
    var nota = notas[i];

    suma = suma + nota;          

    if (nota > maxima) {      
      maxima = nota;
    }
    if (nota < minima) {
      minima = nota;
    }

    if (nota >= 7) {            
      aprobadas++;
    } else {
      noAprobadas++;
    }
  }

  var promedio = suma / notas.length;

  var div = document.getElementById("resultado");
  div.innerHTML =
    "<p>Calificaciones: " + notas.join(", ") + "</p>" +
    "<p>Promedio: " + promedio.toFixed(2).replace(".", ",") + "</p>" +
    "<p>Nota más alta: " + maxima + "</p>" +
    "<p>Nota más baja: " + minima + "</p>" +
    "<p>Aprobadas: " + aprobadas + "</p>" +
    "<p>No aprobadas: " + noAprobadas + "</p>";
}
