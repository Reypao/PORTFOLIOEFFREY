const menuButton = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.menu-overlay');
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('main section[id]');
const contactForm = document.querySelector('.contact-form');
const formStatus = document.querySelector('.form-status');

function setMenu(open) {
    sidebar.classList.toggle('is-open', open);
    overlay.classList.toggle('is-visible', open);
    menuButton.classList.toggle('is-active', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    document.body.classList.toggle('menu-is-open', open);
}

menuButton.addEventListener('click', () => {
    setMenu(!sidebar.classList.contains('is-open'));
});

overlay.addEventListener('click', () => setMenu(false));
navLinks.forEach((link) => link.addEventListener('click', () => setMenu(false)));

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenu(false);
});

// Indica automáticamente qué sección está viendo el usuario.
const sectionObserver = new IntersectionObserver((entries) => {
    const visibleSection = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visibleSection) return;

    navLinks.forEach((link) => {
        const isCurrent = link.getAttribute('href') === `#${visibleSection.target.id}`;
        link.classList.toggle('active', isCurrent);
        if (isCurrent) link.setAttribute('aria-current', 'page');
        else link.removeAttribute('aria-current');
    });
}, {
    rootMargin: '-20% 0px -65%',
    threshold: [0.05, 0.25, 0.5]
});

sections.forEach((section) => sectionObserver.observe(section));

// Validación visual. Aquí puedes conectar EmailJS, Formspree o tu backend.
contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formStatus.textContent = '¡Gracias! El formulario está validado y listo para conectar a tu correo.';
    contactForm.reset();
});
