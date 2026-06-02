document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector('.carousel');
    if (!carousel) return;

    let isDown = false;
    let startX;
    let scrollLeft;
    let autoPlayTimer;

    // AUTO-PLAY TIMER (Loops every 3.5 seconds)
    function startAutoPlay() {
        autoPlayTimer = setInterval(() => {
            const firstItem = carousel.querySelector('div');
            if (!firstItem) return;

            const cardWidth = firstItem.offsetWidth;
            const gap = parseFloat(window.getComputedStyle(carousel).gap) || 0;
            const step = cardWidth + gap;

            // Loop back to start if at the end
            if (carousel.scrollLeft >= (carousel.scrollWidth - carousel.clientWidth - 10)) {
                carousel.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                carousel.scrollBy({ left: step, behavior: 'smooth' });
            }
        }, 3500);
    }

    function stopAutoPlay() {
        clearInterval(autoPlayTimer);
    }

    // CLICK AND DRAG LOGIC (Desktop mouse events)
    carousel.addEventListener('mousedown', (e) => {
        isDown = true;
        carousel.classList.add('dragging');
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
        stopAutoPlay(); // Pause auto-play during interaction
    });

    carousel.addEventListener('mouseleave', () => {
        if (!isDown) return;
        isDown = false;
        carousel.classList.remove('dragging');
        snapToNearest();
        startAutoPlay(); // Resume auto-play
    });

    carousel.addEventListener('mouseup', () => {
        isDown = true; // Temporary flag to handle snapping
        isDown = false;
        carousel.classList.remove('dragging');
        snapToNearest();
        startAutoPlay();
    });

    carousel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 1.5; // Drag speed multiplier
        carousel.scrollLeft = scrollLeft - walk;
    });

    // Snaps the carousel nicely onto the closest item after dragging ends
    function snapToNearest() {
        const firstItem = carousel.querySelector('div');
        if (!firstItem) return;

        const cardWidth = firstItem.offsetWidth;
        const gap = parseFloat(window.getComputedStyle(carousel).gap) || 0;
        const step = cardWidth + gap;
        
        const targetIndex = Math.round(carousel.scrollLeft / step);
        carousel.scrollTo({
            left: targetIndex * step,
            behavior: 'smooth'
        });
    }

    // Touch events start/stop autoplay on mobile
    carousel.addEventListener('touchstart', stopAutoPlay);
    carousel.addEventListener('touchend', startAutoPlay);

    // Initial Start
    startAutoPlay();
});