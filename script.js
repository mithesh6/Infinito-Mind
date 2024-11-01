// JavaScript to add interactivity and animations
document.addEventListener('DOMContentLoaded', function () {
    // Animate service section on scroll
    const services = document.querySelectorAll('.service');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });
    services.forEach(service => {
        observer.observe(service);
    });
});


// Newsletter Subscription
document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    alert(`Thank you for subscribing, ${email}!`);
    event.target.reset();
});
