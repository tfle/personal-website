document.addEventListener('DOMContentLoaded', () => {
    const phrases = [
        "full-stack developer",
        "design enthusiast",
        "seeking grad roles",
    ];

    const TYPE_SPEED_MS = 100;
    const DELETE_SPEED_MS = 50;
    const PAUSE_MS = 1000;

    const typingElement = document.querySelector('.typing-effect');
    if (!typingElement) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        typingElement.textContent = phrases[0];
        const cursor = document.querySelector('.cursor');
        if (cursor) cursor.style.display = 'none';
        return;
    }

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentPhrase = phrases[phraseIndex];
        typingElement.textContent = currentPhrase.substring(0, charIndex);

        if (!isDeleting && charIndex < currentPhrase.length) {
            // Type the next character
            charIndex++;
            setTimeout(type, TYPE_SPEED_MS);
        } else if (isDeleting && charIndex > 0) {
            // Delete the last character
            charIndex--;
            setTimeout(type, DELETE_SPEED_MS);
        } else {
            isDeleting = !isDeleting;   // Toggle between typing and deleting
            if (!isDeleting) {
                // Move to the next phrase after finishing typing
                phraseIndex = (phraseIndex + 1) % phrases.length;
            }
            setTimeout(type, PAUSE_MS);
        }
    }

    type();
});
