function calcularTotal() {
  var textoPrecio = document.getElementById("precio").value;
  var textoCantidad = document.getElementById("cantidad").value;
  var resultado = document.getElementById("resultado");


  if (textoPrecio === "" || textoCantidad === "") {
    resultado.className = "error";
    resultado.textContent = "Error: todos los campos son obligatorios.";
    return;
  }

  var precio = Number(textoPrecio);
  var cantidad = Number(textoCantidad);

  if (precio <= 0) {
    resultado.className = "error";
    resultado.textContent = "Error: el precio debe ser mayor que cero.";
    return;
  }

  if (!Number.isInteger(cantidad) || cantidad <= 0) {
    resultado.className = "error";
    resultado.textContent = "Error: la cantidad debe ser un número entero positivo.";
    return;
  }

  var total = precio * cantidad;
  var totalTexto = total.toFixed(2).replace(".", ",");
  resultado.className = "correcto";
  resultado.textContent = "Total: $" + totalTexto;
}
