 const translations = {
        es: {
          metaDescription: "Portafolio de Effrey Guzmán, Desarrollador Web.",
          skipLink: "Saltar al contenido",
          goHome: "Ir al inicio",
          openMenu: "Abrir menú",
          closeMenu: "Cerrar menú",
          mainNavigation: "Navegación principal",
          availability: "Disponible para nuevos proyectos",
          navHome: "Inicio",
          navPortfolio: "Portafolio",
          navContact: "Contacto",
          heroEyebrow: "Desarrollador web · Diseñador de experiencias",
          heroTitleOne: "Construyo sitios web",
          heroTitleTwo: "claros, modernos y dinámicos.",
          viewProjects: "Ver mis proyectos",
          contactMe: "Contactarme",
          selectedWork: "Trabajo seleccionado",
          portfolioTitle: "Proyectos que combinan función y diseño.",
          portfolioIntro:
            "Cada proyecto representa una oportunidad para resolver un problema real y mejorar su experiencia como usuario.",
          openArqStudio: "Abrir proyecto ArqStudio & Design",
          arqStudioAlt: "Vista previa del sitio ArqStudio & Design",
          viewProject: "Ver proyecto",
          multiPageOne: "01 · SITIO WEB MULTIPÁGINA",
          arqStudioDescription:
            "Sitio web responsive para un estudio de arquitectura y diseño, con portafolio de proyectos, servicios, galería interactiva y formulario de contacto.",
          technologiesUsed: "Tecnologías utilizadas",
          viewWebsite: "Ver sitio",
          viewCode: "Ver código",
          openEliteTraining: "Abrir proyecto Elite Training LLC",
          eliteTrainingAlt: "Vista previa del sitio Elite Training LLC",
          multiPageTwo: "02 · SITIO WEB MULTIPÁGINA",
          eliteTrainingDescription:
            "Sitio web profesional y responsive para presentar cursos de CPR, primeros auxilios y flebotomía, con calendario de capacitaciones, testimonios y formulario de contacto.",
          contact: "Contacto",
          contactVideoLabel: "¿Tienes una idea? Trabajemos juntos",
          videoFallback: "Tu navegador no permite reproducir este video.",
          aboutMe:
            "Soy Effrey Guzmán, estudiante de desarrollo de software con experiencia creando proyectos responsive con HTML, CSS, JavaScript y Angular.",
          coreTechnologies: "Tecnologías principales",
          successTitle: "¡Mensaje enviado correctamente!",
          successThanks: "Gracias por contactarme.",
          successReply: "Le responderé lo antes posible.",
          nameLabel: "Nombre",
          namePlaceholder: "Tu nombre",
          emailLabel: "Correo electrónico",
          emailPlaceholder: "nombre@correo.com",
          messageLabel: "Mensaje",
          messagePlaceholder: "Cuéntame sobre tu proyecto…",
          sendMessage: "Enviar mensaje",
          rights: "Todos los derechos reservados.",
          backToTop: "Volver arriba ↑"
        },
        en: {
          metaDescription: "Efrey Guzmán's Portfolio , Web Developer.",
          skipLink: "Skip to content",
          goHome: "Go to home",
          openMenu: "Open menu",
          closeMenu: "Close menu",
          mainNavigation: "Main navigation",
          availability: "Available for new projects",
          navHome: "Home",
          navPortfolio: "Portfolio",
          navContact: "Contact",
          heroEyebrow: "Web Developer · Experience Designer",
          heroTitleOne: "I build websites",
          heroTitleTwo: "that are clear, modern, and dynamic.",
          viewProjects: "View my projects",
          contactMe: "Contact me",
          selectedWork: "Selected work",
          portfolioTitle: "Projects that combine function and design.",
          portfolioIntro:
            "Each project is an opportunity to solve a real problem and improve the user experience.",
          openArqStudio: "Open the ArqStudio & Design project",
          arqStudioAlt: "Preview of the ArqStudio & Design website",
          viewProject: "View project",
          multiPageOne: "01 · MULTI-PAGE WEBSITE",
          arqStudioDescription:
            "Responsive website for an architecture and design studio, featuring a project portfolio, services, an interactive gallery, and a contact form.",
          technologiesUsed: "Technologies used",
          viewWebsite: "View website",
          viewCode: "View code",
          openEliteTraining: "Open the Elite Training LLC project",
          eliteTrainingAlt: "Preview of the Elite Training LLC website",
          multiPageTwo: "02 · MULTI-PAGE WEBSITE",
          eliteTrainingDescription:
            "Professional responsive website showcasing CPR, first aid, and phlebotomy courses, with a training calendar, testimonials, and a contact form.",
          contact: "Contact",
          contactVideoLabel: "Have an idea? Let’s work together",
          videoFallback: "Your browser does not support this video.",
          aboutMe:
            "I’m Effrey Guzmán, a software development student with experience building responsive projects using HTML, CSS, JavaScript, and Angular.",
          coreTechnologies: "Core technologies",
          successTitle: "Message sent successfully!",
          successThanks: "Thank you for contacting me.",
          successReply: "I’ll get back to you as soon as possible.",
          nameLabel: "Name",
          namePlaceholder: "Your name",
          emailLabel: "Email address",
          emailPlaceholder: "name@email.com",
          messageLabel: "Message",
          messagePlaceholder: "Tell me about your project…",
          sendMessage: "Send message",
          rights: "All rights reserved.",
          backToTop: "Back to top ↑"
        }
      };

const languageButtons = document.querySelectorAll(".language-btn");

function changeLanguage(language) {
    const selectedTranslations = translations[language];

    if (!selectedTranslations) {
        return;
    }

    document.documentElement.lang =
        language === "es" ? "es-CO" : "en-US";

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;

        if (selectedTranslations[key]) {
            element.textContent = selectedTranslations[key];
        }
    });

    document.querySelectorAll("[data-i18n-text]").forEach((element) => {
        const key = element.dataset.i18nText;
        const translation = selectedTranslations[key];

        if (!translation) {
            return;
        }

        const textNode = Array.from(element.childNodes).find(
            (node) =>
                node.nodeType === Node.TEXT_NODE &&
                node.textContent.trim()
        );

        if (textNode) {
            const hasLeadingSpace = /^\s/.test(textNode.textContent);
            const hasTrailingSpace = /\s$/.test(textNode.textContent);

            textNode.textContent =
                `${hasLeadingSpace ? " " : ""}` +
                `${translation}` +
                `${hasTrailingSpace ? " " : ""}`;
        }
    });

    document
        .querySelectorAll("[data-i18n-placeholder]")
        .forEach((element) => {
            const key = element.dataset.i18nPlaceholder;

            if (selectedTranslations[key]) {
                element.placeholder = selectedTranslations[key];
            }
        });

    document
        .querySelectorAll("[data-i18n-aria-label]")
        .forEach((element) => {
            const key = element.dataset.i18nAriaLabel;

            if (selectedTranslations[key]) {
                element.setAttribute(
                    "aria-label",
                    selectedTranslations[key]
                );
            }
        });

    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
        const key = element.dataset.i18nAlt;

        if (selectedTranslations[key]) {
            element.alt = selectedTranslations[key];
        }
    });

    document
        .querySelectorAll("[data-i18n-content]")
        .forEach((element) => {
            const key = element.dataset.i18nContent;

            if (selectedTranslations[key]) {
                element.setAttribute(
                    "content",
                    selectedTranslations[key]
                );
            }
        });

    const menuToggle = document.querySelector(".menu-toggle");

    if (menuToggle?.classList.contains("is-active")) {
        menuToggle.setAttribute(
            "aria-label",
            selectedTranslations.closeMenu
        );
    }

    languageButtons.forEach((button) => {
        const isActive = button.dataset.language === language;

        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });

    localStorage.setItem("portfolio-language", language);
}

languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
        changeLanguage(button.dataset.language);
    });
});

const savedLanguage =
    localStorage.getItem("portfolio-language") || "es";

changeLanguage(savedLanguage);