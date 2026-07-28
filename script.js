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
        new TypeWriter(typewriterEl, ["Fullstack Developer", "Software Developer" , "Junior Android Developer" , "Skilled in Python and...", "CSS", "Java", "HTML" , "Kotlin"]);
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

    // --- 3. AUTOMATIC NAVBAR CLOSING (INSERT HERE) ---
    const navLinks = document.querySelectorAll('.nav-link');
    const menuToggle = document.getElementById('navbarNav');
    
    // Check that the element exists to avoid errors
    if (menuToggle) {
        const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });

        navLinks.forEach((link) => {
            link.addEventListener('click', () => {
                // Closes the menu only if it's open (Bootstrap's 'show' class)
                if (menuToggle.classList.contains('show')) {
                    bsCollapse.hide();
                }
            });
        });
    }

    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    // Checks if the user had previously chosen the light theme
    if (localStorage.getItem('theme') === 'light') {
        body.classList.add('light-mode');
        if (themeIcon) themeIcon.classList.replace('fa-moon', 'fa-sun');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('light-mode');
            
            // Changes the icon and saves the preference in the browser
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