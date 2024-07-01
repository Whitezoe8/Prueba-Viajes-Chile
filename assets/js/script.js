//Funcion smooth scroll Navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//Funcion en seccion "Contacto", para rellenar casillas y enviar
document.getElementById('submitBtn').addEventListener('click', function () {
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const mensaje = document.getElementById('mensaje').value;

//Mensajes alert
    if (nombre && correo && mensaje) {
        alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
    } else {
        alert('Por favor, completa todos los campos antes de enviar.');
    }
});