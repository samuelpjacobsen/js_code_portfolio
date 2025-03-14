// Technologies Array
const technologies = [
    {
        name: "JavaScript",
        icon: "fab fa-js",
        description: "Modern JavaScript for dynamic web applications"
    },
    {
        name: "TypeScript",
        icon: "fab fa-js",
        description: "Type-safe JavaScript for scalable applications"
    },
    {
        name: "Java",
        icon: "fab fa-java",
        description: "Enterprise-grade applications and systems"
    },
    {
        name: "Spring Boot",
        icon: "fas fa-leaf",
        description: "Java-based framework for microservices"
    },
    {
        name: "React",
        icon: "fab fa-react",
        description: "Component-based UI library for modern interfaces"
    },
    {
        name: "React Native",
        icon: "fab fa-react",
        description: "Cross-platform mobile application development"
    },
    {
        name: "Next.js",
        icon: "fab fa-react",
        description: "React framework for production-ready applications"
    },
    {
        name: "Flowise",
        icon: "fas fa-robot",
        description: "AI workflow automation platform"
    },
    {
        name: "n8n",
        icon: "fas fa-network-wired",
        description: "Workflow automation tool for integrations"
    },
    {
        name: "AI",
        icon: "fas fa-brain",
        description: "Artificial Intelligence technologies and models"
    },
    {
        name: "RPA",
        icon: "fas fa-robot",
        description: "Robotic Process Automation solutions"
    },
    {
        name: "Python",
        icon: "fab fa-python",
        description: "Versatile language for AI, data science, and web"
    },
    {
        name: "FastAPI",
        icon: "fas fa-bolt",
        description: "Modern API framework for Python"
    },
    {
        name: "Django",
        icon: "fab fa-python",
        description: "High-level Python web framework"
    },
    {
        name: "Angular",
        icon: "fab fa-angular",
        description: "Platform for building mobile and desktop web apps"
    },
    {
        name: "MongoDB",
        icon: "fas fa-database",
        description: "NoSQL database for modern applications"
    },
    {
        name: "PostgreSQL",
        icon: "fas fa-database",
        description: "Powerful, open-source object-relational database"
    },
    {
        name: "SQL",
        icon: "fas fa-database",
        description: "Structured Query Language for database management"
    },
    {
        name: "SOLID Principles",
        icon: "fas fa-code",
        description: "Software design principles for maintainable code"
    },
    {
        name: "Express",
        icon: "fab fa-node-js",
        description: "Web application framework for Node.js"
    },
    {
        name: "C#",
        icon: "fas fa-hashtag",
        description: "Language for building Windows and web applications"
    },
    {
        name: ".NET",
        icon: "fab fa-microsoft",
        description: "Framework for building Windows and web applications"
    }
];

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
const navLinks = document.querySelectorAll('.nav ul li a');
const techCarouselWrapper = document.querySelector('.tech-carousel .swiper-wrapper');

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    hamburger.addEventListener('click', function() {
        nav.classList.toggle('active');
        this.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Active link based on scroll position
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;

        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // Generate technology cards
    technologies.forEach(tech => {
        const techCard = document.createElement('div');
        techCard.className = 'swiper-slide';
        techCard.innerHTML = `
            <div class="tech-card">
                <i class="${tech.icon} tech-icon"></i>
                <h3>${tech.name}</h3>
                <p>${tech.description}</p>
            </div>
        `;
        techCarouselWrapper.appendChild(techCard);
    });

    // Initialize Swiper
    const swiper = new Swiper('.tech-carousel', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
        },
    });

    // Typing effect for hero section
    const roles = ['Full Stack Software Engineer', 'AI Developer', 'RPA Specialist', 'Course Instructor'];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typedText = document.querySelector('.typed-text');
    const typingSpeed = 150;
    const erasingSpeed = 75;
    const newTextDelay = 2000;

    function type() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typedText.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedText.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        // Speed control
        let typeSpeed = isDeleting ? erasingSpeed : typingSpeed;

        // If completed typing current text
        if (!isDeleting && charIndex === currentRole.length) {
            typeSpeed = newTextDelay;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }

        setTimeout(type, typeSpeed);
    }

    // Start typing effect
    setTimeout(type, newTextDelay);

    // Form submission (prevent default for demonstration)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! This is a demo form.');
            this.reset();
        });
    }
});
