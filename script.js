document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Анімація при прокрутці (Intersection Observer)
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // 2. Плавна прокрутка до якорів
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Обробка форми
    const form = document.getElementById('cloudForm');
    const message = document.getElementById('formMessage');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Тут можна додати логіку відправки на сервер (наприклад, через Formspree)
        
        form.style.display = 'none';
        message.classList.remove('hidden');
        
        console.log('Дані зібрано:', {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value
        });
    });
});