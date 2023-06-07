// archivo script.js

function validarFormulario() {
  var nameInput = document.getElementById('name');
  var emailInput = document.getElementById('email');
  var messageInput = document.getElementById('message');

  if (nameInput.value.trim() === '') {
    alert('Por favor, ingresa tu nombre.');
    return false;
  }

  if (emailInput.value.trim() === '') {
    alert('Por favor, ingresa tu correo electrónico.');
    return false;
  }

  if (messageInput.value.trim() === '') {
    alert('Por favor, ingresa tu mensaje.');
    return false;
  }

  alert('Gracias por completar el formulario. ¡Nos pondremos en contacto contigo pronto!');
  return true;
}
