// Smooth scroll behavior for navigation links
document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu if open (for mobile responsiveness)
            document.body.classList.remove('menu-open');
        }
    });
});

// Navbar active link highlighting
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and items for animation
document.querySelectorAll('.case-study, .about-card, .skill-category, .experience-item').forEach(el => {
    el.classList.add('observe');
    observer.observe(el);
});

// Add CSS for fade-in animations
const style = document.createElement('style');
style.textContent = `
    .observe {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .observe.fade-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .nav-menu a.active {
        color: #0099ff;
        font-weight: 700;
    }
`;
document.head.appendChild(style);

// Scroll to top button functionality
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 300) {
        document.body.classList.add('scroll-active');
    } else {
        document.body.classList.remove('scroll-active');
    }
});

// Log initialization
console.log('Portfolio script loaded successfully!');