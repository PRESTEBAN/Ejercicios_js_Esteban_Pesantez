function agregarTarea() {
  var campo = document.getElementById("nuevaTarea");
  var mensaje = document.getElementById("mensaje");
  var texto = campo.value.trim();   

  if (texto === "") {
    mensaje.textContent = "Escribe una tarea antes de agregarla.";
    return;
  }
  mensaje.textContent = "";


  var li = document.createElement("li");

  var casilla = document.createElement("input");
  casilla.type = "checkbox";

  var span = document.createElement("span");
  span.textContent = " " + texto;

  casilla.addEventListener("change", function () {
    if (casilla.checked) {
      span.classList.add("completada");
    } else {
      span.classList.remove("completada");
    }
  });

  li.appendChild(casilla);
  li.appendChild(span);
  document.getElementById("lista").appendChild(li);

  campo.value = "";
}
