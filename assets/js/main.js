document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const responseMessage = document.getElementById('formResponse');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        console.log("Datos capturados:", data);
        responseMessage.textContent = "Enviando mensaje...";
        responseMessage.className = "form-message";
        setTimeout(() => {
            responseMessage.textContent = "¡Gracias! Tu mensaje ha sido enviado con éxito.";
            responseMessage.classList.add('success');
            contactForm.reset();
        }, 1500);
    });
});