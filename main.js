// Validación visual de Bootstrap
const form = document.getElementById('formContacto');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const exito = document.getElementById('exito');
    if (form.checkValidity()) {
      exito.classList.remove('d-none');
      form.reset();
      form.classList.remove('was-validated');
    } else {
      exito.classList.add('d-none');
      form.classList.add('was-validated');
    }
  });
}
