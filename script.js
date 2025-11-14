// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Contact button click effect
document.querySelectorAll('.contact-links a').forEach(button => {
    button.addEventListener('click', () => {
        button.style.transform = 'scale(0.95)';
        setTimeout(() => button.style.transform = 'scale(1)', 150);
    });
});

// Optional: Console message for branding
console.log('%cFlash USDT - Fast & Secure Crypto Transfers', 'color: #0d6efd; font-size: 16px; font-weight: bold;');
