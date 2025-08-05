// app.js

// Lógica para validar transferencias
document.getElementById('form-transferencia').addEventListener('submit', function (e) {
  e.preventDefault();
  const monto = parseFloat(document.getElementById('monto').value);
  const cuenta = document.getElementById('cuenta').value.trim();
  let mensaje = '';

  if (monto < 0) {
    mensaje = 'Monto inválido';
  } else if (cuenta === '000000000') {
    mensaje = 'Cuenta destino no válida';
  } else {
    mensaje = 'Transferencia exitosa';
  }

  const resultadoDiv = document.getElementById('resultado-transferencia');
  resultadoDiv.textContent = mensaje;
  resultadoDiv.className = monto < 0 || cuenta === '000000000'
    ? 'text-danger'
    : 'text-success';
});

// Lógica para imprimir datos de usuario desde la tabla
document.getElementById('btn-imprimir-datos').addEventListener('click', function () {
  const filas = document.querySelectorAll('#tabla-datos tr');
  filas.forEach(row => {
    const campo = row.children[0].textContent;
    const valor = row.querySelector('input').value;
    console.log(`${campo}: ${valor}`);
  });
});
