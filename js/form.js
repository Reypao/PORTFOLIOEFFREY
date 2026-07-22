const EMAILJS_PUBLIC_KEY = 'i6LntRa1AcwDE_FCw';
const EMAILJS_SERVICE_ID = 'service_familia';
const EMAILJS_TEMPLATE_ID = 'template_8itc9a9';

const contactForm = document.querySelector('#contact-form');
const submitButton = document.querySelector('#submit-button');
const formStatus = document.querySelector('#form-status');
const successOverlay = document.querySelector('#form-success-overlay');

emailjs.init({
    publicKey: EMAILJS_PUBLIC_KEY
});

const originalButtonContent = submitButton.innerHTML;

let messageWasSent = false;

contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (messageWasSent) {
        return;
    }

    submitButton.disabled = true;
    submitButton.setAttribute('aria-busy', 'true');
    submitButton.textContent = 'Enviando...';

    formStatus.textContent = 'Enviando mensaje...';

    try {
        await emailjs.sendForm(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            contactForm
        );

        messageWasSent = true;
        contactForm.reset();
        formStatus.textContent = '';

        const formControls = contactForm.querySelectorAll(
            'input, textarea, button'
        );

        formControls.forEach((control) => {
            control.disabled = true;
        });

        successOverlay.classList.add('is-visible');
        successOverlay.setAttribute('aria-hidden', 'false');
        successOverlay.focus();
    } catch (error) {
        console.error('Error al enviar el formulario:', error);

        formStatus.textContent =
            'No se pudo enviar el mensaje. Inténtalo nuevamente.';
    } finally {
        if (!messageWasSent) {
            submitButton.disabled = false;
            submitButton.removeAttribute('aria-busy');
            submitButton.innerHTML = originalButtonContent;
        }
    }
});

