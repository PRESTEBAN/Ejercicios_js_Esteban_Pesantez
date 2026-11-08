function verificar() {
  var clave = document.getElementById("clave").value;

  var tieneLongitud = clave.length >= 8;

  var tieneDigito = false;
  for (var i = 0; i < clave.length; i++) {
    if (clave[i] >= "0" && clave[i] <= "9") {
      tieneDigito = true;
    }
  }

  var sinEspacios = !clave.includes(" ");

  var lista = document.getElementById("reglas");
  lista.innerHTML = "";
  mostrarRegla(lista, "Tiene al menos 8 caracteres", tieneLongitud);
  mostrarRegla(lista, "Contiene al menos un dígito (0-9)", tieneDigito);
  mostrarRegla(lista, "No contiene espacios", sinEspacios);

  var mensaje = document.getElementById("mensaje");
  if (tieneLongitud && tieneDigito && sinEspacios) {
    mensaje.textContent = "Cumple todas las reglas";
  } else {
    mensaje.textContent = "";
  }
}

function mostrarRegla(lista, texto, cumple) {
  var li = document.createElement("li");
  if (cumple) {
    li.textContent = "✔ " + texto + ": se cumple";
    li.className = "cumple";
  } else {
    li.textContent = "✘ " + texto + ": NO se cumple";
    li.className = "no-cumple";
  }
  lista.appendChild(li);
}
