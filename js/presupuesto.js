document.addEventListener('DOMContentLoaded', () => {
  const formulario = document.getElementById('formulario');
  const producto = document.getElementById('producto');
  const plazo = document.getElementById('plazo');
  const extras = document.querySelectorAll('.extra');
  const total = document.getElementById('total');
  const condiciones = document.getElementById('condiciones');

  // Función para calcular el total
  function calcularTotal() {
    let precioBase = parseFloat(producto.value);
    let precioExtras = 0;

    extras.forEach((extra) => {
      if (extra.checked) {
        precioExtras += parseFloat(extra.value);
      }
    });

    let precioFinal = precioBase + precioExtras;

    // Si el plazo es mayor a 30 días, descuento del 10%
    if (parseInt(plazo.value) > 30) {
      precioFinal *= 0.9;
    }

    total.innerText = precioFinal.toFixed(2);
  }

  // Escuchar cambios en los inputs
  producto.addEventListener('change', calcularTotal);
  plazo.addEventListener('input', calcularTotal);
  extras.forEach((e) => e.addEventListener('change', calcularTotal));

  // Validación al enviar
  formulario.addEventListener('submit', (e) => {
    const nombre = document.getElementById('nombre');
    const apellidos = document.getElementById('apellidos');
    const telefono = document.getElementById('telefono');
    const email = document.getElementById('email');

    const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/;
    const soloNumeros = /^[0-9]{9}$/;

    if (!soloLetras.test(nombre.value)) {
      alert("El nombre debe contener solo letras.");
      e.preventDefault();
      return;
    }

    if (!soloLetras.test(apellidos.value)) {
      alert("Los apellidos deben contener solo letras.");
      e.preventDefault();
      return;
    }

    if (!soloNumeros.test(telefono.value)) {
      alert("El teléfono debe tener 9 cifras.");
      e.preventDefault();
      return;
    }

    if (!email.value.includes("@")) {
      alert("Introduce un correo electrónico válido.");
      e.preventDefault();
      return;
    }

    if (!condiciones.checked) {
      alert("Debes aceptar las condiciones.");
      e.preventDefault();
      return;
    }

    alert("Formulario enviado correctamente. Total: €" + total.innerText);
  });

  // Calcular total al cargar
  calcularTotal();
});
