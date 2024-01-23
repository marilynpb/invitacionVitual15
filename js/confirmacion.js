// Mostrar el formulario al hacer clic en el botón "Confirmar Asistencia"
document.getElementById("btnConfirmar").addEventListener("click", function() {
    document.getElementById("formularioWidget").style.display = "block";
  });

  // Cerrar el formulario o mensaje de agradecimiento
function cerrarFormulario() {
    document.getElementById("formularioWidget").style.display = "none";
    document.getElementById("mensajeAgradecimiento").style.display = "none";
  }
  

  
// Mostrar mensaje de agradecimiento
function mostrarAgradecimiento() {
    const mensajeAgradecimiento = document.getElementById("mensajeAgradecimiento");
    mensajeAgradecimiento.style.display = "block";
  }

// Confirmar asistencia y validar campos
function confirmarAsistencia() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
  
    if (nombre.trim() === "" || apellido.trim() === "") {
      alert("Por favor, completa todos los campos.");
      return;
    }
  
    // Validar duplicados
    if (validarDuplicados(nombre, apellido)) {
      alert("Ya has confirmado tu asistencia.");
      return;
    }
  
    // Ocultar formulario
    document.getElementById("formularioWidget").style.display = "none";
  
    // Mostrar mensaje de agradecimiento
    mostrarAgradecimiento();
  }
  
  // Mostrar mensaje de agradecimiento
  function mostrarAgradecimiento() {
    const mensajeAgradecimiento = document.getElementById("mensajeAgradecimiento");
    mensajeAgradecimiento.style.display = "block";
  }

  
  // Simulación de lista de invitados (puedes reemplazarlo con tu propia lógica)
  const listaInvitados = [];
  
  // Validar duplicados
  function validarDuplicados(nombre, apellido) {
    return listaInvitados.some(invitado => invitado.nombre === nombre && invitado.apellido === apellido);
  }
  

  // Función para guardar en Excel
function guardarEnExcel() {
  const data = listaInvitados.map(({ nombre, apellido }) => [nombre, apellido]);
  const ws = XLSX.utils.aoa_to_sheet([['Nombre', 'Apellido'], ...data]);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Invitados');
  XLSX.writeFile(wb, 'lista_invitados.xlsx');
}

// Esperar a que se cargue la biblioteca XLSX.js
document.addEventListener("DOMContentLoaded", function() {
  // ...

  // Agregar a la lista de invitados y guardar en Excel
  function agregarALista(nombre, apellido) {
    // Agregar a la lista de invitados
    listaInvitados.push({ nombre, apellido });
    console.log("Lista de invitados:", listaInvitados);

    // Guardar en Excel
    guardarEnExcel();
  }

});