// Capturamos el botón y el input
const buttonText = document.getElementById('buttonText');
const inputText = document.getElementById('inputText');

// Agregamos un event listener para cuando se haga clic en el botón
buttonText.addEventListener('click', function() {
    // Obtenemos el valor ingresado en el input
    const textValue = inputText.value;

    // Almacenamos el valor en el localStorage
    localStorage.setItem('storedText', textValue);

    // Limpiamos el campo de texto después de guardar
    inputText.value = '';
});