// Language support
const translations = {
    en: {
        // Navigation
        "nav.about": "About Us",
        "nav.services": "Services",
        "nav.team": "Our Team",
        "nav.contact": "Contact",

        // Language toggle
        "language.english": "EN",
        "language.spanish": "ES",

        // Hero section
        "hero.title": "Find the Right Technician for Your Home Needs",
        "hero.subtitle": "One man who has a good understanding, for all your home maintenance and labor service requirements.",
        "hero.button": "Get Started",

        // Team section
        "team.title": "Our Team",
        "team.role1": "-",
        "team.role2": "-",
        "team.role3": "-",
        "team.role4": "-",
        "team.role5": "-",

        // Mission section
        "mission.title": "Our Mission & Vision",
        "mission.text": "Our mission is to simplify home maintenance by providing a reliable platform that connects users with qualified technicians. We envision a future where finding the right help for your home is effortless and transparent.",

        // Benefits section
        "benefits.title": "How ChambaPro Benefits You",
        "benefits.card1.title": "Save Time",
        "benefits.card1.text": "Quickly find qualified technicians without spending hours searching and vetting.",
        "benefits.card2.title": "Fair Pricing",
        "benefits.card2.text": "Get transparent quotes and competitive pricing for all your home service needs.",
        "benefits.card3.title": "Verified Professionals",
        "benefits.card3.text": "All our technicians are thoroughly vetted and background checked for your peace of mind.",

        // Footer
        "footer.about": "About Us",
        "footer.story": "Our Story",
        "footer.howItWorks": "How It Works",
        "footer.team": "Team",
        "footer.careers": "Careers",
        "footer.services": "Services",
        "footer.plumbing": "Plumbing",
        "footer.electrical": "Electrical",
        "footer.carpentry": "Carpentry",
        "footer.painting": "Painting",
        "footer.repairs": "General Repairs",
        "footer.contact": "Contact",
        "footer.support": "Support",
        "footer.help": "Help Center",
        "footer.faq": "FAQs",
        "footer.book": "Book a Service",
        "footer.terms": "Terms of Service",
        "footer.privacy": "Privacy Policy",
        "footer.termsUse": "Terms of Use",
        "footer.cookie": "Cookie Policy",
        "footer.guarantee": "Guarantee",
        "footer.rights": "All rights reserved."
    },
    es: {
        // Navigation
        "nav.about": "Nosotros",
        "nav.services": "Servicios",
        "nav.team": "Nuestro Equipo",
        "nav.contact": "Contacto",

        // Language toggle
        "language.english": "EN",
        "language.spanish": "ES",

        // Hero section
        "hero.title": "Encuentra el Técnico Ideal para las Necesidades de tu Hogar",
        "hero.subtitle": "Un profesional con amplia experiencia para todos tus requerimientos de mantenimiento y servicios para el hogar.",
        "hero.button": "Comenzar",

        // Team section
        "team.title": "Nuestro Equipo",
        "team.role1": "-",
        "team.role2": "-",
        "team.role3": "-",
        "team.role4": "-",
        "team.role5": "-",

        // Mission section
        "mission.title": "Nuestra Misión y Visión",
        "mission.text": "Nuestra misión es simplificar el mantenimiento del hogar proporcionando una plataforma confiable que conecta a los usuarios con técnicos calificados. Visualizamos un futuro donde encontrar la ayuda adecuada para tu hogar sea sencillo y transparente.",

        // Benefits section
        "benefits.title": "Cómo ChambaPro Te Beneficia",
        "benefits.card1.title": "Ahorra Tiempo",
        "benefits.card1.text": "Encuentra rápidamente técnicos calificados sin pasar horas buscando y verificando.",
        "benefits.card2.title": "Precios Justos",
        "benefits.card2.text": "Obtén cotizaciones transparentes y precios competitivos para todas tus necesidades de servicio para el hogar.",
        "benefits.card3.title": "Profesionales Verificados",
        "benefits.card3.text": "Todos nuestros técnicos son thoroughly verificados y con antecedentes comprobados para tu tranquilidad.",

        // Footer
        "footer.about": "Nosotros",
        "footer.story": "Nuestra Historia",
        "footer.howItWorks": "Cómo Funciona",
        "footer.team": "Equipo",
        "footer.careers": "Carreras",
        "footer.services": "Servicios",
        "footer.plumbing": "Plomería",
        "footer.electrical": "Electricidad",
        "footer.carpentry": "Carpintería",
        "footer.painting": "Pintura",
        "footer.repairs": "Reparaciones Generales",
        "footer.contact": "Contacto",
        "footer.support": "Soporte",
        "footer.help": "Centro de Ayuda",
        "footer.faq": "Preguntas Frecuentes",
        "footer.book": "Reservar un Servicio",
        "footer.terms": "Términos de Servicio",
        "footer.privacy": "Política de Privacidad",
        "footer.termsUse": "Términos de Uso",
        "footer.cookie": "Política de Cookies",
        "footer.guarantee": "Garantía",
        "footer.rights": "Todos los derechos reservados."
    }
};

// Set initial language
let currentLanguage = 'en';

// Function to change language
function changeLanguage(lang) {
    currentLanguage = lang;
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update language toggle button
    const languageToggle = document.getElementById('languageToggle');
    const languageFlag = languageToggle.querySelector('.language-flag');
    const languageText = languageToggle.querySelector('.language-text');

    if (lang === 'en') {
        languageFlag.textContent = '🇺🇸';
        languageText.setAttribute('data-i18n', 'language.english');
        languageText.textContent = 'EN';
    } else {
        languageFlag.textContent = '🇪🇸';
        languageText.setAttribute('data-i18n', 'language.spanish');
        languageText.textContent = 'ES';
    }

    // Update html lang attribute
    document.documentElement.lang = lang;
}

// Language toggle functionality
document.getElementById('languageToggle').addEventListener('click', () => {
    const newLanguage = currentLanguage === 'en' ? 'es' : 'en';
    changeLanguage(newLanguage);

    // Save language preference to localStorage
    localStorage.setItem('chambapro-language', newLanguage);
});

// Check for saved language preference
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('chambapro-language');
    if (savedLanguage) {
        changeLanguage(savedLanguage);
    }

    // Mobile menu toggle functionality
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Calculate position accounting for fixed header
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add animation when elements come into view
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const elementsToAnimate = document.querySelectorAll('.team-member, .benefit-card, .mission-content');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
});