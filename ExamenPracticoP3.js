function agregarTarea() {
  const input = document.getElementById('nuevaTarea');
  const texto = input.value.trim();

  if (texto === '') {
    alert('Por favor, escribe una tarea.');
    return;
  }

  const li = document.createElement('li');
  li.innerHTML = `
    <span>${texto}</span>
    <button class="ok-btn" onclick="eliminarTarea(this)">Ok</button>
  `;

  document.getElementById('listaTareas').appendChild(li);
  input.value = '';
}

function eliminarTarea(boton) {
  const li = boton.parentElement;
  li.remove();
}
