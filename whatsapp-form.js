document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Previene el envío normal del formulario

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // **IMPORTANTE: Reemplaza TU_NUMERO_DE_WHATSAPP con tu número real, incluyendo el código de país.**
            const whatsappNumber = '924996961'; 

            // Construye el mensaje para WhatsApp
            const whatsappMessage = `Hola, mi nombre es ${name}.%0AEmail: ${email}%0AMensaje: ${message}`;

            // Codifica el mensaje para la URL
            const encodedMessage = encodeURIComponent(whatsappMessage);

            // Crea la URL de WhatsApp
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

            // Abre WhatsApp en una nueva pestaña
            window.open(whatsappURL, '_blank');

            // Opcional: Puedes limpiar el formulario después de enviarlo
            contactForm.reset();
        });
    }
});