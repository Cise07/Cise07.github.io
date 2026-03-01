// --- 1. TYPEWRITER ---
class TypeWriter {
    constructor(el, texts, options = {}) {
        this.el = el;
        this.texts = texts;
        this.speed = options.speed || 100;
        this.textIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        this.type();
    }
    type() {
        const currentText = this.texts[this.textIndex];
        this.el.textContent = this.isDeleting 
            ? currentText.substring(0, this.charIndex - 1) 
            : currentText.substring(0, this.charIndex + 1);
        
        this.charIndex = this.isDeleting ? this.charIndex - 1 : this.charIndex + 1;

        if (!this.isDeleting && this.charIndex === currentText.length) {
            setTimeout(() => this.isDeleting = true, 250);
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.textIndex = (this.textIndex + 1) % this.texts.length;
        }
        setTimeout(() => this.type(), this.isDeleting ? this.speed / 2 : this.speed);
    }
}

// --- 2. INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    // Start Typewriter
    const typewriterEl = document.getElementById('typewriter');
    if (typewriterEl) {
        new TypeWriter(typewriterEl, ["Fullstack Developer", "IoT Enthusiast", "Python", "CSS", "Java", "HTML"]);
    }

    // Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // --- 3. CHIUSURA AUTOMATICA NAVBAR (DA INSERIRE QUI) ---
    const navLinks = document.querySelectorAll('.nav-link');
    const menuToggle = document.getElementById('navbarNav');
    
    // Controlliamo che l'elemento esista per evitare errori
    if (menuToggle) {
        const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });

        navLinks.forEach((link) => {
            link.addEventListener('click', () => {
                // Chiude il menu solo se è aperto (classe 'show' di Bootstrap)
                if (menuToggle.classList.contains('show')) {
                    bsCollapse.hide();
                }
            });
        });
    }

    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    // Controlla se l'utente aveva già scelto il tema chiaro in precedenza
    if (localStorage.getItem('theme') === 'light') {
        body.classList.add('light-mode');
        if (themeIcon) themeIcon.classList.replace('fa-moon', 'fa-sun');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('light-mode');
            
            // Cambia l'icona e salva la preferenza nel browser
            if (body.classList.contains('light-mode')) {
                if (themeIcon) themeIcon.classList.replace('fa-moon', 'fa-sun');
                localStorage.setItem('theme', 'light');
            } else {
                if (themeIcon) themeIcon.classList.replace('fa-sun', 'fa-moon');
                localStorage.setItem('theme', 'dark');
            }
        });
    }
});

