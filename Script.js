// Language support
const translations = {
    en: {
        // Navigation
        "nav.about": "About Us",
        "nav.services": "Services",
        "nav.team": "Our Team",
        "nav.contact": "Contact",
        "nav.technicians": "For Technicians",

        // Language toggle
        "language.english": "EN",
        "language.spanish": "ES",

        // Hero section
        "hero.title": "Find the Right Technician for Your Home Needs",
        "hero.subtitle": "One man who has a good understanding, for all your home maintenance and labor service requirements.",
        "hero.button": "Get Started",

        // Team section
        "team.title": "Our Team",

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
        "footer.rights": "All rights reserved.",
        "footer.press": "Press",

        // CTA Section
        "cta.technicians.title": "Are You a Technician?",
        "cta.technicians.subtitle": "Join our network of professionals and grow your business with ChambaPro",
        "cta.technicians.button": "Learn More",

        // About page translations
        "about.hero.title": "Our Story",
        "about.hero.subtitle": "Connecting homeowners with trusted professionals since 2025",

        "about.story.title": "How ChambaPro Began",
        "about.story.text1": "Founded in 2025 by a group of 5 students, ChambaPro emerged from a simple observation: finding reliable home service professionals was often frustrating and time-consuming for homeowners, while skilled technicians struggled to connect with quality clients.",
        "about.story.text2": "That's when the vision for ChambaPro was born - a platform that would simplify the process for homeowners while providing technicians with a steady stream of quality work opportunities.",

        "about.mission.title": "Our Mission & Values",
        "about.values.trust.title": "Trust",
        "about.values.trust.text": "We verify all technicians through rigorous background checks and credential verification to ensure peace of mind for our customers.",
        "about.values.quality.title": "Quality",
        "about.values.quality.text": "We maintain high standards for all services provided through our platform, with customer satisfaction as our top priority.",
        "about.values.innovation.title": "Innovation",
        "about.values.innovation.text": "We continuously improve our platform to make the process of finding and hiring home service professionals seamless and efficient.",
        "about.values.community.title": "Community",
        "about.values.community.text": "We believe in building strong relationships between homeowners and technicians, creating a network of trust and reliability.",

        "about.stats.technicians": "Verified Technicians",
        "about.stats.projects": "Completed Projects",
        "about.stats.satisfaction": "% Customer Satisfaction",
        "about.stats.cities": "Cities Served",

        "about.team.title": "Meet Our Founding Team",
        "about.team.subtitle": "The passionate students who brought ChambaPro to life",
        "about.team.ctaButton": "View Full Team",

        "about.cta.title": "Ready to Experience the ChambaPro Difference?",
        "about.cta.subtitle": "Join our growing community of satisfied homeowners and skilled technicians",
        "about.cta.button1": "Find a Technician",
        "about.cta.button2": "Become a Technician",

        // Services page translations
        "services.hero.title": "Our services",
        "services.hero.subtitle": "Discover the different services offered by our technicians",
        "services.info.title": "We adapt to you",
        "services.info.text": "At ChambaPro, you can contact the technician your home needs. The platform lists professionals in various specialties, such as plumbing, electricity, painting, and more.",

        // Team page translations
        "team.hero.title": "Meet Our Team",
        "team.hero.subtitle": "The talented Software Engineering students behind ChambaPro",

        "team.founders.title": "Founding Team",
        "team.founders.subtitle": "The five students who brought ChambaPro to life",

        // Founding team members descriptions
        "team.member.werner.name": "Werner Lang Nassi",
        "team.member.werner.role": "Software Engineering Student",
        "team.member.werner.bio": "Student at Universidad Peruana de Ciencias Aplicadas (UPC), currently in 6th cycle. I'm a student who enjoys researching new things and exploring innovative solutions.",
        "team.member.werner.skill1": "Researcher",
        "team.member.werner.skill2": "Innovator",
        "team.member.werner.skill3": "Analyst",
        "team.member.werner.skill4": "Cooperative",

        "team.member.jorge.name": "Jorge Taipe Sangama",
        "team.member.jorge.role": "Software Engineering Student",
        "team.member.jorge.bio": "I'm a student who enjoys innovating and working on personal projects. I like challenging tasks and working under pressure to deliver the best results.",
        "team.member.jorge.skill1": "Perseverant",
        "team.member.jorge.skill2": "Creative",
        "team.member.jorge.skill3": "Leader",
        "team.member.jorge.skill4": "Optimistic",

        "team.member.saul.name": "Saul Ortega Muñoz",
        "team.member.saul.role": "Software Engineering Student",
        "team.member.saul.bio": "Software Engineering student in 5th cycle, responsible and proactive, with interest in developing technological solutions and strengthening my skills to contribute to each project.",
        "team.member.saul.skill1": "Responsible",
        "team.member.saul.skill2": "Loyal",
        "team.member.saul.skill3": "Curious",

        "team.member.matias.name": "Matias Armestar Heredia",
        "team.member.matias.role": "Software Engineering Student",
        "team.member.matias.bio": "Student at Universidad Peruana de Ciencias Aplicadas (UPC). I consider myself a student capable of making significant contributions to a team and working collaboratively.",
        "team.member.matias.skill1": "Cooperative",
        "team.member.matias.skill2": "Punctual",
        "team.member.matias.skill3": "Team Player",

        "team.member.emilia.name": "Emilia Duran Santander",
        "team.member.emilia.role": "Software Engineering Student",
        "team.member.emilia.bio": "Software Engineering student. I consider myself a responsible person with a desire to learn and grow professionally while contributing to meaningful projects.",
        "team.member.emilia.skill1": "Responsible",
        "team.member.emilia.skill2": "Perseverant",
        "team.member.emilia.skill3": "Committed",

        "team.values.title": "Our Team Values",
        "team.values.subtitle": "The principles that guide our work at ChambaPro",
        "team.values.innovation.title": "Innovation",
        "team.values.innovation.text": "We constantly explore new technologies and approaches to create the best solutions for our users.",
        "team.values.collaboration.title": "Collaboration",
        "team.values.collaboration.text": "We believe in the power of teamwork and the synergy that comes from diverse perspectives working together.",
        "team.values.learning.title": "Continuous Learning",
        "team.values.learning.text": "As students, we embrace the opportunity to learn and grow with every challenge we encounter.",
        "team.values.community.title": "Community Focus",
        "team.values.community.text": "We're committed to creating solutions that genuinely help homeowners and technicians in our community.",

        // Contact page translations
        "contact.hero.title": "Contact us",
        "contact.hero.subtitle": "We are here to answer your questions and help you with our services.",
        "contact.information.title": "Contact information",
        "contact.message.title": "Send us a message",
        "contact.message.name": "Full name",
        "contact.message.email": "Email address",
        "contact.message.phone": "Phone number",
        "contact.message.text": "Type your message here...",
        "contact.message.button": "Send message",

        // Technician page translations
        "technicians.hero.title": "Join Our Network of Expert Technicians",
        "technicians.hero.subtitle": "Maximize your potential and grow your business with the best market opportunities",
        "technicians.hero.button": "Apply Now",

        "technicians.benefits.title": "Exclusive Benefits for Technicians",
        "technicians.benefits.subtitle": "Discover why over 500 technicians trust us",
        "technicians.benefits.card1.title": "More Jobs",
        "technicians.benefits.card1.text": "Access a steady portfolio of clients who need your specialized services.",
        "technicians.benefits.card2.title": "Better Income",
        "technicians.benefits.card2.text": "Competitive rates and premium job opportunities with higher remuneration.",
        "technicians.benefits.card3.title": "Schedule Flexibility",
        "technicians.benefits.card3.text": "You decide when and how much to work. Control your schedule according to your availability.",
        "technicians.benefits.card4.title": "Protection and Security",
        "technicians.benefits.card4.text": "Work with peace of mind thanks to our civil liability insurance and client verification.",
        "technicians.benefits.card5.title": "Digital Tools",
        "technicians.benefits.card5.text": "Access to our platform with appointment management, automated payments, and client tracking.",
        "technicians.benefits.card6.title": "Continuous Training",
        "technicians.benefits.card6.text": "Training programs to improve your skills and learn new techniques.",

        "technicians.howitworks.title": "How It Works?",
        "technicians.howitworks.subtitle": "Join our platform in 4 simple steps",
        "technicians.howitworks.step1.title": "Sign Up",
        "technicians.howitworks.step1.text": "Complete your profile with your experience and specialties.",
        "technicians.howitworks.step2.title": "Verification",
        "technicians.howitworks.step2.text": "We validate your credentials and professional experience.",
        "technicians.howitworks.step3.title": "Receive Opportunities",
        "technicians.howitworks.step3.text": "Access jobs that match your skills and availability.",
        "technicians.howitworks.step4.title": "Work and Get Paid",
        "technicians.howitworks.step4.text": "Perform services and receive secure and timely payments.",

        "technicians.testimonials.title": "Technicians Who Trust Us",
        "technicians.testimonials.subtitle": "Real experiences from professionals in our community",
        "technicians.testimonials.card1.text": "\"Since joining ChambaPro, my monthly income increased by 40%. The platform is easy to use and the clients are excellent.\"",
        "technicians.testimonials.card1.role": "Electrician",
        "technicians.testimonials.card2.text": "\"The schedule flexibility allows me to balance my work and family. Plus, the technician support is excellent.\"",
        "technicians.testimonials.card2.role": "Plumber",
        "technicians.testimonials.card3.text": "\"The management tools save me hours of administration. Now I can focus on what I do best: repair.\"",
        "technicians.testimonials.card3.role": "Refrigeration Technician",

        "technicians.apply.title": "Ready to Join Our Community?",
        "technicians.apply.subtitle": "Start receiving jobs that match your skills and availability.",
        "technicians.apply.benefit1": "No monthly membership fees",
        "technicians.apply.benefit2": "Guaranteed and secure payments",
        "technicians.apply.benefit3": "Dedicated technical support",
        "technicians.apply.benefit4": "Free continuous training",
        "technicians.apply.formtitle": "Request Information",

        "technicians.form.name": "Full name",
        "technicians.form.email": "Email address",
        "technicians.form.phone": "Phone number",
        "technicians.form.specialty": "Select your specialty",
        "technicians.form.plumbing": "Plumbing",
        "technicians.form.electrical": "Electrical",
        "technicians.form.carpentry": "Carpentry",
        "technicians.form.painting": "Painting",
        "technicians.form.other": "Other",
        "technicians.form.submit": "Submit Application",

        // Terms of Service page translations

        // Hero section
        'terms.hero.title': 'Terms of Service',
        'terms.hero.subtitle': 'Understanding our policies and your rights',

        // Terms navigation
        'terms.nav.privacy': 'Privacy Policy',
        'terms.nav.terms': 'Terms of Use',
        'terms.nav.guarantee': 'Guarantee',

        // Common terms
        'terms.lastUpdated': 'Last updated: January 2025',

        // Privacy Policy
        'terms.privacy.title': 'Privacy Policy',
        'terms.privacy.subtitle1': '1. Information We Collect',
        'terms.privacy.text1': 'We collect information you provide directly to us, including when you create an account, request services, or communicate with us. This may include your name, email address, phone number, payment information, and details about your home service needs.',
        'terms.privacy.subtitle2': '2. How We Use Your Information',
        'terms.privacy.text2': 'We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and updates, respond to your comments and questions, and provide customer support.',
        'terms.privacy.subtitle3': '3. Information Sharing',
        'terms.privacy.text3': 'We may share your information with technicians to facilitate the services you request. We do not sell your personal information to third parties. We may share information with service providers who assist us in operating our platform.',
        'terms.privacy.subtitle4': '4. Data Security',
        'terms.privacy.text4': 'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.',
        'terms.privacy.subtitle5': '5. Your Choices',
        'terms.privacy.text5': 'You may update, correct, or delete your account information at any time by logging into your account. You can also contact us directly to exercise your privacy rights.',

        // Terms of Use
        'terms.terms.title': 'Terms of Use',
        'terms.terms.subtitle1': '1. Acceptance of Terms',
        'terms.terms.text1': 'By accessing or using ChambaPro\'s services, you agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree to these terms, please do not use our services.',
        'terms.terms.subtitle2': '2. User Accounts',
        'terms.terms.text2': 'You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must be at least 18 years old to use our services.',
        'terms.terms.subtitle3': '3. Service Booking and Payments',
        'terms.terms.text3': 'When you book a service through ChambaPro, you agree to pay all charges associated with that service. Prices are subject to change, and we reserve the right to refuse or cancel any orders.',
        'terms.terms.subtitle4': '4. User Conduct',
        'terms.terms.text4': 'You agree not to use our services to harass technicians, post false information, or engage in any illegal activities. We reserve the right to terminate accounts that violate these terms.',
        'terms.terms.subtitle5': '5. Modifications to Terms',
        'terms.terms.text5': 'We may modify these Terms of Use at any time. We will provide notice of significant changes through our website or by email. Continued use of our services constitutes acceptance of the modified terms.',

        // Guarantee
        'terms.guarantee.title': 'Satisfaction Guarantee',
        'terms.guarantee.subtitle1': '1. Our Promise',
        'terms.guarantee.text1': 'ChambaPro is committed to your satisfaction. If you\'re not happy with a service provided through our platform, we\'ll work with you and the technician to make it right.',
        'terms.guarantee.subtitle2': '2. Coverage',
        'terms.guarantee.text2': 'Our guarantee covers workmanship issues for services booked through our platform. It applies for 30 days from the service completion date. The guarantee is limited to the cost of the original service.',
        'terms.guarantee.subtitle3': '3. Making a Claim',
        'terms.guarantee.text3': 'To make a claim under our satisfaction guarantee, contact our customer support team within 30 days of service completion. Provide details about the issue and any supporting photos or documentation.',
        'terms.guarantee.subtitle4': '4. Resolution Process',
        'terms.guarantee.text4': 'Once we receive your claim, we\'ll review it and contact the technician. We may arrange for a re-service, partial refund, or full refund depending on the circumstances. Our team will mediate between you and the technician to find a fair resolution.',
        'terms.guarantee.subtitle5': '5. Exclusions',
        'terms.guarantee.text5': 'The guarantee does not cover issues resulting from unauthorized repairs, pre-existing conditions, changes made after the service, or problems unrelated to the technician\'s work. Normal wear and tear is also excluded.',


    },
    es: {
        // Navigation
        "nav.about": "Nosotros",
        "nav.services": "Servicios",
        "nav.team": "Nuestro Equipo",
        "nav.contact": "Contacto",
        "nav.technicians": "Para Técnicos",

        // Language toggle
        "language.english": "EN",
        "language.spanish": "ES",

        // Hero section
        "hero.title": "Encuentra el Técnico Ideal para las Necesidades de tu Hogar",
        "hero.subtitle": "Un profesional con amplia experiencia para todos tus requerimientos de mantenimiento y servicios para el hogar.",
        "hero.button": "Comenzar",

        // Team section
        "team.title": "Nuestro Equipo",

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
        "footer.rights": "Todos los derechos reservados.",
        "footer.press": "Prensa",

        // CTA Section
        "cta.technicians.title": "¿Eres Técnico?",
        "cta.technicians.subtitle": "Únete a nuestra red de profesionales y haz crecer tu negocio con ChambaPro",
        "cta.technicians.button": "Conoce Más",

        // About page translations
        "about.hero.title": "Nuestra Historia",
        "about.hero.subtitle": "Conectando propietarios con profesionales de confianza desde 2025",

        "about.story.title": "Cómo Comenzó ChambaPro",
        "about.story.text1": "Fundada en 2025 por un grupo de 5 estudiantes, ChambaPro surgió de una simple observación: encontrar profesionales de servicios para el hogar confiables era a menudo frustrante y requería mucho tiempo para los propietarios, mientras que los técnicos calificados luchaban por conectarse con clientes de calidad.",
        "about.story.text2": "Fue entonces cuando nació la visión de ChambaPro: una plataforma que simplificaría el proceso para los propietarios de viviendas mientras brinda a los técnicos un flujo constante de oportunidades de trabajo de calidad.",

        "about.mission.title": "Nuestra Misión y Valores",
        "about.values.trust.title": "Confianza",
        "about.values.trust.text": "Verificamos todos los técnicos mediante rigurosas verificaciones de antecedentes y credenciales para garantizar la tranquilidad de nuestros clientes.",
        "about.values.quality.title": "Calidad",
        "about.values.quality.text": "Mantenemos altos estándares para todos los servicios proporcionados a través de nuestra plataforma, with la satisfacción del cliente como nuestra principal prioridad.",
        "about.values.innovation.title": "Innovación",
        "about.values.innovation.text": "Mejoramos continuamente nuestra plataforma para que el proceso de encontrar y contratar profesionales de servicios para el hogar sea perfecto y eficiente.",
        "about.values.community.title": "Comunidad",
        "about.values.community.text": "Creemos en construir relaciones sólidas entre propietarios y técnicos, creando una red de confianza y confiabilidad.",

        "about.stats.technicians": "Técnicos Verificados",
        "about.stats.projects": "Proyectos Completados",
        "about.stats.satisfaction": "% Satisfacción del Cliente",
        "about.stats.cities": "Ciudades Atendidas",

        "about.team.title": "Conoce Nuestro Equipo Fundador",
        "about.team.subtitle": "Los estudiantes apasionados que dieron vida a ChambaPro",
        "about.team.ctaButton": "Ver Equipo Completo",

        "about.cta.title": "¿Listo para Experimentar la Diferencia ChambaPro?",
        "about.cta.subtitle": "Únete a nuestra creciente comunidad de propietarios satisfechos y técnicos calificados",
        "about.cta.button1": "Encontrar un Técnico",
        "about.cta.button2": "Convertirse en Técnico",

        // Services page translations
        "services.hero.title": "Nuestros servicios",
        "services.hero.subtitle": "Descubre los distintos servicios ofrecidos por nuestros técnicos",
        "services.info.title": "Nos adecuamos a ti",
        "services.info.text": "En ChambaPro, puedes contactar al técnico que le haga falta a tu hogar. En la plataforma se encuentran registrados profesionales de distintas especialidades como la plomería, electricidad, pintura y más.",

        // Team page translations
        "team.hero.title": "Conoce Nuestro Equipo",
        "team.hero.subtitle": "Los talentosos estudiantes de Ingeniería de Software detrás de ChambaPro",

        "team.founders.title": "Equipo Fundador",
        "team.founders.subtitle": "Los cinco estudiantes que dieron vida a ChambaPro",

        // Founding team members descriptions
        "team.member.werner.name": "Werner Lang Nassi",
        "team.member.werner.role": "Estudiante de Ingeniería de Software",
        "team.member.werner.bio": "Estudiante de la Universidad Peruana de Ciencias Aplicadas (UPC), cursando en 6.º ciclo. Soy un estudiante que le gusta investigar cosas nuevas y explorar soluciones innovadoras.",
        "team.member.werner.skill1": "Investigador",
        "team.member.werner.skill2": "Innovador",
        "team.member.werner.skill3": "Analista",
        "team.member.werner.skill4": "Cooperativo",

        "team.member.jorge.name": "Jorge Taipe Sangama",
        "team.member.jorge.role": "Estudiante de Ingeniería de Software",
        "team.member.jorge.bio": "Soy estudiante que le gusta innovar y hacer proyectos personales, me gustan las cosas desafiantes y trabajar bajo presión para entregar los mejores resultados.",
        "team.member.jorge.skill1": "Perseverante",
        "team.member.jorge.skill2": "Creativo",
        "team.member.jorge.skill3": "Líder",
        "team.member.jorge.skill4": "Optimista",

        "team.member.saul.name": "Saul Ortega Muñoz",
        "team.member.saul.role": "Estudiante de Ingeniería de Software",
        "team.member.saul.bio": "Soy estudiante de Ingeniería de Software en 5.º ciclo, responsable y proactivo, con interés en el desarrollo de soluciones tecnológicas y en fortalecer mis habilidades para aportar en cada proyecto.",
        "team.member.saul.skill1": "Responsable",
        "team.member.saul.skill2": "Leal",
        "team.member.saul.skill3": "Curioso",

        "team.member.matias.name": "Matias Armestar Heredia",
        "team.member.matias.role": "Estudiante de Ingeniería de Software",
        "team.member.matias.bio": "Estudiante de la Universidad Peruana de Ciencias Aplicadas (UPC). Me considero un estudiante capaz de aportar significativamente a un equipo y trabajar de manera colaborativa.",
        "team.member.matias.skill1": "Cooperativo",
        "team.member.matias.skill2": "Puntual",
        "team.member.matias.skill3": "Trabajo en Equipo",

        "team.member.emilia.name": "Emilia Duran Santander",
        "team.member.emilia.role": "Estudiante de Ingeniería de Software",
        "team.member.emilia.bio": "Estudiante de la carrera de Ingeniería de Software. Me considero una persona responsable y con ánimos de aprender y crecer profesionalmente mientras contribuyo a proyectos significativos.",
        "team.member.emilia.skill1": "Responsable",
        "team.member.emilia.skill2": "Perseverante",
        "team.member.emilia.skill3": "Comprometida",

        "team.values.title": "Nuestros Valores de Equipo",
        "team.values.subtitle": "Los principios que guían nuestro trabajo en ChambaPro",
        "team.values.innovation.title": "Innovación",
        "team.values.innovation.text": "Exploramos constantemente nuevas tecnologías y enfoques para crear las mejores soluciones para nuestros usuarios.",
        "team.values.collaboration.title": "Colaboración",
        "team.values.collaboration.text": "Creemos en el poder del trabajo en equipo y la sinergia que surge de diversas perspectivas trabajando juntas.",
        "team.values.learning.title": "Aprendizaje Continuo",
        "team.values.learning.text": "Como estudiantes, aprovechamos la oportunidad de aprender y crecer con cada desafío que encontramos.",
        "team.values.community.title": "Enfoque Comunitario",
        "team.values.community.text": "Estamos comprometidos a crear soluciones que genuinamente ayuden a propietarios y técnicos en nuestra comunidad.",

        // Contact page translations
        "contact.hero.title": "Contáctanos",
        "contact.hero.subtitle": "Estamos aquí para resolver tus dudas y ayudarte con nuestros servicios",
        "contact.information.title": "Información de contacto",
        "contact.message.title": "Envíanos un Mensaje",
        "contact.message.name": "Nombre completo",
        "contact.message.email": "Correo eléctronico",
        "contact.message.phone": "Teléfono",
        "contact.message.text": "Escribe tu mensaje aquí...",
        "contact.message.button": "Enviar Mensaje",

        // Technician page translations
        "technicians.hero.title": "Únete a Nuestra Red de Técnicos Expertos",
        "technicians.hero.subtitle": "Maximiza tu potencial y haz crecer tu negocio con las mejores oportunidades del mercado",
        "technicians.hero.button": "Aplicar Ahora",

        "technicians.benefits.title": "Beneficios Exclusivos para Técnicos",
        "technicians.benefits.subtitle": "Descubre por qué más de 500 técnicos confían en nosotros",
        "technicians.benefits.card1.title": "Más Trabajos",
        "technicians.benefits.card1.text": "Accede a una cartera constante de clientes que necesitan tus servicios especializados.",
        "technicians.benefits.card2.title": "Mejores Ingresos",
        "technicians.benefits.card2.text": "Tarifas competitivas y oportunidades de trabajos premium con mayor remuneración.",
        "technicians.benefits.card3.title": "Flexibilidad Horaria",
        "technicians.benefits.card3.text": "Tú decides cuándo y cuánto trabajar. Controla tu agenda según tu disponibilidad.",
        "technicians.benefits.card4.title": "Protección y Seguridad",
        "technicians.benefits.card4.text": "Trabaja con tranquilidad gracias a nuestro seguro de responsabilidad civil y verificación de clientes.",
        "technicians.benefits.card5.title": "Herramientas Digitales",
        "technicians.benefits.card5.text": "Acceso a nuestra plataforma con gestión de citas, pagos automatizados y seguimiento de clientes.",
        "technicians.benefits.card6.title": "Capacitación Continua",
        "technicians.benefits.card6.text": "Programas de formación para mejorar tus habilidades y aprender nuevas técnicas.",

        "technicians.howitworks.title": "¿Cómo Funciona?",
        "technicians.howitworks.subtitle": "Únete a nuestra plataforma en 4 sencillos pasos",
        "technicians.howitworks.step1.title": "Regístrate",
        "technicians.howitworks.step1.text": "Completa tu perfil con tu experiencia y especialidades.",
        "technicians.howitworks.step2.title": "Verificación",
        "technicians.howitworks.step2.text": "Validamos tus credenciales y experiencia profesional.",
        "technicians.howitworks.step3.title": "Recibe Oportunidades",
        "technicians.howitworks.step3.text": "Accede a trabajos que coincidan con tus habilidades y disponibilidad.",
        "technicians.howitworks.step4.title": "Trabaja y Cobra",
        "technicians.howitworks.step4.text": "Realiza los servicios y recibe pagos seguros y puntuales.",

        "technicians.testimonials.title": "Técnicos que Confían en Nosotros",
        "technicians.testimonials.subtitle": "Experiencias reales de profesionales de nuestra comunidad",
        "technicians.testimonials.card1.text": "\"Desde que me uní a ChambaPro, mi ingreso mensual aumentó en un 40%. La plataforma es fácil de usar y los clientes son excelentes.\"",
        "technicians.testimonials.card1.role": "Electricista",
        "technicians.testimonials.card2.text": "\"La flexibilidad de horarios me permite balancear mi trabajo y mi familia. Además, el soporte al técnico es excelente.\"",
        "technicians.testimonials.card2.role": "Plomera",
        "technicians.testimonials.card3.text": "\"Las herramientas de gestión me ahorran horas de administración. Ahora me puedo concentrar en lo que mejor hago: reparar.\"",
        "technicians.testimonials.card3.role": "Técnico en Refrigeración",

        "technicians.apply.title": "¿Listo para Unirte a Nuestra Comunidad?",
        "technicians.apply.subtitle": "Comienza a recibir trabajos que se adapten a tus habilidades y disponibilidad.",
        "technicians.apply.benefit1": "Sin cuotas de membresía mensuales",
        "technicians.apply.benefit2": "Pagos garantizados y seguros",
        "technicians.apply.benefit3": "Soporte técnico dedicado",
        "technicians.apply.benefit4": "Capacitación continua gratuita",
        "technicians.apply.formtitle": "Solicita Información",

        "technicians.form.name": "Nombre completo",
        "technicians.form.email": "Correo electrónico",
        "technicians.form.phone": "Teléfono",
        "technicians.form.specialty": "Selecciona tu especialidad",
        "technicians.form.plumbing": "Plomería",
        "technicians.form.electrical": "Electricidad",
        "technicians.form.carpentry": "Carpintería",
        "technicians.form.painting": "Pintura",
        "technicians.form.other": "Otra",
        "technicians.form.submit": "Enviar Solicitud",

        // Terms of Service page translations

        // Hero section
        'terms.hero.title': 'Términos de Servicio',
        'terms.hero.subtitle': 'Comprendiendo nuestras políticas y sus derechos',

        // Terms navigation
        'terms.nav.privacy': 'Política de Privacidad',
        'terms.nav.terms': 'Términos de Uso',
        'terms.nav.guarantee': 'Garantía',

        // Common terms
        'terms.lastUpdated': 'Última actualización: Enero 2025',

        // Privacy Policy
        'terms.privacy.title': 'Política de Privacidad',
        'terms.privacy.subtitle1': '1. Información que Recopilamos',
        'terms.privacy.text1': 'Recopilamos información que usted nos proporciona directamente, incluso cuando crea una cuenta, solicita servicios o se comunica con nosotros. Esto puede incluir su nombre, dirección de correo electrónico, número de teléfono, información de pago y detalles sobre sus necesidades de servicios para el hogar.',
        'terms.privacy.subtitle2': '2. Cómo Utilizamos Su Información',
        'terms.privacy.text2': 'Utilizamos la información que recopilamos para proporcionar, mantener y mejorar nuestros servicios, procesar transacciones, enviarle avisos técnicos y actualizaciones, responder a sus comentarios y preguntas, y brindar soporte al cliente.',
        'terms.privacy.subtitle3': '3. Compartición de Información',
        'terms.privacy.text3': 'Podemos compartir su información con técnicos para facilitar los servicios que solicita. No vendemos su información personal a terceros. Podemos compartir información con proveedores de servicios que nos ayudan a operar nuestra plataforma.',
        'terms.privacy.subtitle4': '4. Seguridad de Datos',
        'terms.privacy.text4': 'Implementamos medidas de seguridad apropiadas para proteger su información personal contra el acceso no autorizado, alteración, divulgación o destrucción.',
        'terms.privacy.subtitle5': '5. Sus Opciones',
        'terms.privacy.text5': 'Puede actualizar, corregir o eliminar la información de su cuenta en cualquier momento iniciando sesión en su cuenta. También puede contactarnos directamente para ejercer sus derechos de privacidad.',

        // Terms of Use
        'terms.terms.title': 'Términos de Uso',
        'terms.terms.subtitle1': '1. Aceptación de los Términos',
        'terms.terms.text1': 'Al acceder o utilizar los servicios de ChambaPro, usted acepta estar sujeto a estos Términos de Uso y nuestra Política de Privacidad. Si no está de acuerdo con estos términos, por favor no utilice nuestros servicios.',
        'terms.terms.subtitle2': '2. Cuentas de Usuario',
        'terms.terms.text2': 'Usted es responsable de mantener la confidencialidad de las credenciales de su cuenta y de todas las actividades que ocurran bajo su cuenta. Debe tener al menos 18 años de edad para utilizar nuestros servicios.',
        'terms.terms.subtitle3': '3. Reserva de Servicios y Pagos',
        'terms.terms.text3': 'Cuando reserva un servicio a través de ChambaPro, acepta pagar todos los cargos asociados con ese servicio. Los precios están sujetos a cambios y nos reservamos el derecho de rechazar o cancelar cualquier pedido.',
        'terms.terms.subtitle4': '4. Conducta del Usuario',
        'terms.terms.text4': 'Usted acepta no utilizar nuestros servicios para acosar a técnicos, publicar información falsa o participar en actividades ilegales. Nos reservamos el derecho de terminar cuentas que violen estos términos.',
        'terms.terms.subtitle5': '5. Modificaciones de los Términos',
        'terms.terms.text5': 'Podemos modificar estos Términos de Uso en cualquier momento. Notificaremos los cambios significativos a través de nuestro sitio web o por correo electrónico. El uso continuado de nuestros servicios constituye la aceptación de los términos modificados.',

        // Guarantee
        'terms.guarantee.title': 'Garantía de Satisfacción',
        'terms.guarantee.subtitle1': '1. Nuestra Promesa',
        'terms.guarantee.text1': 'ChambaPro está comprometido con su satisfacción. Si no está satisfecho con un servicio proporcionado a través de nuestra plataforma, trabajaremos con usted y el técnico para solucionarlo.',
        'terms.guarantee.subtitle2': '2. Cobertura',
        'terms.guarantee.text2': 'Nuestra garantía cubre problemas de mano de obra para servicios reservados a través de nuestra plataforma. Se aplica durante 30 días a partir de la fecha de finalización del servicio. La garantía se limita al costo del servicio original.',
        'terms.guarantee.subtitle3': '3. Hacer un Reclamo',
        'terms.guarantee.text3': 'Para hacer un reclamo bajo nuestra garantía de satisfacción, contacte a nuestro equipo de soporte al cliente dentro de los 30 días posteriores a la finalización del servicio. Proporcione detalles sobre el problema y cualquier foto o documentación de apoyo.',
        'terms.guarantee.subtitle4': '4. Proceso de Resolución',
        'terms.guarantee.text4': 'Una vez que recibamos su reclamo, lo revisaremos y contactaremos al técnico. Podemos organizar un nuevo servicio, un reembolso parcial o un reembolso completo según las circunstancias. Nuestro equipo mediará entre usted y el técnico para encontrar una solución justa.',
        'terms.guarantee.subtitle5': '5. Exclusiones',
        'terms.guarantee.text5': 'La garantía no cubre problemas resultantes de reparaciones no autorizadas, condiciones preexistentes, cambios realizados después del servicio o problemas no relacionados con el trabajo del técnico. El desgaste normal también está excluido.',

    }
};

let currentLanguage = 'en';

function changeLanguage(lang) {
    currentLanguage = lang;
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    translateFormPlaceholders();

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

    document.documentElement.lang = lang;
}

function translateFormPlaceholders() {
    document.querySelectorAll('[data-i18n-ph]').forEach(element => {
        const key = element.getAttribute('data-i18n-ph');
        if (translations[currentLanguage].technicians && translations[currentLanguage].technicians[key]) {
            element.placeholder = translations[currentLanguage].technicians[key];
        }
    });

    const specialtySelect = document.querySelector('select');
    if (specialtySelect) {
        const options = specialtySelect.querySelectorAll('option');
        options.forEach(option => {
            if (option.hasAttribute('data-i18n')) {
                const key = option.getAttribute('data-i18n');
                if (translations[currentLanguage].technicians && translations[currentLanguage].technicians[key]) {
                    option.textContent = translations[currentLanguage].technicians[key];
                }
            }
        });

        const defaultOption = specialtySelect.querySelector('option[disabled]');
        if (defaultOption && defaultOption.hasAttribute('data-i18n')) {
            const key = defaultOption.getAttribute('data-i18n');
            if (translations[currentLanguage].technicians && translations[currentLanguage].technicians[key]) {
                defaultOption.textContent = translations[currentLanguage].technicians[key];
            }
        }
    }
}

document.getElementById('languageToggle').addEventListener('click', () => {
    const newLanguage = currentLanguage === 'en' ? 'es' : 'en';
    changeLanguage(newLanguage);

    localStorage.setItem('chambapro-language', newLanguage);
});

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks) {
            navLinks.classList.remove('active');
        }
    });
});

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

function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;
        const increment = Math.ceil(target / speed);

        if (count < target) {
            counter.innerText = Math.min(count + increment, target);
            setTimeout(() => animateCounters(), 1);
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('chambapro-language');
    if (savedLanguage) {
        changeLanguage(savedLanguage);
    }

    const elementsToAnimate = document.querySelectorAll('.team-member, .benefit-card, .mission-content, .step, .testimonial-card, .value-card');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });

    translateFormPlaceholders();

    const technicianForm = document.getElementById('technicianForm');
    if (technicianForm) {
        technicianForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert(currentLanguage === 'es' ?
                '¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.' :
                'Thank you for your interest! We will contact you soon.');
            technicianForm.reset();
        });
    }

    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if ((currentPage === 'index.html' || currentPage === '') && linkPage === '#') {
            link.classList.add('active');
        } else if (linkPage === currentPage) {
            link.classList.add('active');
        } else if (currentPage === 'technicians.html' && linkPage === 'technicians.html') {
            link.classList.add('active');
        } else if (currentPage === 'about.html' && linkPage === 'about.html') {
            link.classList.add('active');
        }
    });

    if (document.querySelector('.stats-section')) {
        setTimeout(animateCounters, 500);
    }

    if (document.querySelector('.terms-tabs')) {
        initTermsTabs();
    }
});

function initTermsTabs() {
    const tabs = document.querySelectorAll('.term-tab');
    const sections = document.querySelectorAll('.terms-section');

    if (tabs.length > 0 && sections.length > 0) {
        const hash = window.location.hash;
        let activeTab = null;

        if (hash) {
            activeTab = document.querySelector(`.term-tab[href="${hash}"]`);
        }

        if (!activeTab) {
            activeTab = tabs[0];
            window.location.hash = activeTab.getAttribute('href');
        }

        function activateTab(tab) {
            tabs.forEach(t => t.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));

            tab.classList.add('active');

            const targetId = tab.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        }

        activateTab(activeTab);

        tabs.forEach(tab => {
            tab.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                window.location.hash = targetId;
                activateTab(this);
            });
        });

        window.addEventListener('hashchange', function() {
            const hash = window.location.hash;
            const tab = document.querySelector(`.term-tab[href="${hash}"]`);
            if (tab) {
                activateTab(tab);
            }
        });
    }
}
