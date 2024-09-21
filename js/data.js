// Capturamos el elemento <span> donde queremos mostrar el dato
const displayData = document.getElementById('data');

// Recuperamos el valor almacenado en el localStorage
const storedText = localStorage.getItem('storedText');

// Verificamos si existe algún dato en el localStorage
if (storedText) {
    // Si existe, lo mostramos en el <span>
    displayData.textContent = storedText;
} else {
    // Si no existe, mostramos un mensaje alternativo
    displayData.textContent = 'No hay datos guardados.';
}