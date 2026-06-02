const userIcon = document.getElementById('user');
const noUserIcon = document.getElementById('no-user');

const user = sessionStorage.getItem('user_email');

if (user) {
    // console.log('hello from use')
    noUserIcon.classList.add('hidden');
    userIcon.classList.remove('hidden');
} else {
    userIcon.classList.add('hidden');
    noUserIcon.classList.remove('hidden');
}



// marque
function Marquee(selector, speed) {
    const parent = document.querySelector(selector);
    if (!parent) return;

    // Get the width of the container (the screen/wrapper width)
    const containerWidth = parent.parentElement.offsetWidth;

    // Start the text completely off the screen to the right
    let position = containerWidth;

    function animate() {
        position -= speed;

        // parent.offsetWidth is the exact width of your text.
        // If position is less than negative text width, it means 
        // the entire text has completely scrolled past the left edge.
        if (position < -parent.offsetWidth) {
            position = containerWidth; // Reset back to the far right side
        }

        parent.style.transform = `translateX(${position}px)`;

        requestAnimationFrame(animate);
    }

    animate();
}

// Runs instantly when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    Marquee('.marquee', 1.2);
});
