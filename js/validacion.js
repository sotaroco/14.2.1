function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('registrationForm');
    const nombreInput = document.getElementById('nombre');
    const apellidoInput = document.getElementById('apellido');
    const emailInput = document.getElementById('email');
    const password1Input = document.getElementById('password1');
    const password2Input = document.getElementById('password2');
    const termsCheckbox = document.getElementById('terminos');
    const regBtn = document.getElementById('regBtn');
  
    // Validación del formulario al hacer clic en el botón de registro
    regBtn.addEventListener('click', (event) => {
      event.preventDefault(); // Previene el envío por defecto
  
      // Validar el formulario manualmente
      if (form.checkValidity() && password1Input.value === password2Input.value) {
        showAlertSuccess();
      } else {
        form.classList.add('was-validated'); // Muestra los mensajes de error
        if (password1Input.value !== password2Input.value) {
          password2Input.setCustomValidity('Las contraseñas no coinciden.');
        } else {
          password2Input.setCustomValidity('');
        }
        showAlertError();
      }
    });
  
    // Validación en tiempo real para el campo de repetir contraseña
    password2Input.addEventListener('input', () => {
      if (password1Input.value !== password2Input.value) {
        password2Input.setCustomValidity('Las contraseñas no coinciden.');
      } else {
        password2Input.setCustomValidity('');
      }
    });
  
    // Validación personalizada del checkbox
    termsCheckbox.addEventListener('change', () => {
      if (!termsCheckbox.checked) {
        termsCheckbox.setCustomValidity('Debe aceptar los términos y condiciones.');
      } else {
        termsCheckbox.setCustomValidity('');
      }
    });
  });