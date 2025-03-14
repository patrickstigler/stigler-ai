function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16); // 60 FPS
    let current = start;
    
    const updateCounter = () => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            return;
        }
        element.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
    };
    
    updateCounter();
}

document.addEventListener('DOMContentLoaded', function() {
    // Warte kurz, damit die Animation nach dem Seitenaufbau startet
    setTimeout(() => {
        const yearsStat = document.querySelector('[data-counter="years"]');
        const projectsStat = document.querySelector('[data-counter="projects"]');
        
        if (yearsStat) animateCounter(yearsStat, 15);
        if (projectsStat) animateCounter(projectsStat, 100);
    }, 500);
}); 