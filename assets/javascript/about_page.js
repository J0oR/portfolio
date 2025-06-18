function isInViewport(element, height = 1) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;
    const centerY = windowHeight / 2;

    return (
        rect.top <= centerY + height / 2 &&
        rect.bottom >= centerY - height / 2 &&
        rect.left <= windowWidth &&
        rect.right >= 0
    );
}


let lastScrollY = window.scrollY;

function markTimelinePhase() {
    const currentScrollY = window.scrollY;
    const scrollingDown = currentScrollY > lastScrollY;
    const scrollingUp = currentScrollY < lastScrollY;

    const phases = document.querySelectorAll('.timeline-item');
    const tagsContainer = document.querySelector('.tags-list');
    const tags = document.querySelectorAll('.tag');

    phases.forEach((phase) => {
        if (scrollingDown && isInViewport(phase, 10)) {
            // Scroll verso il basso: aggiungo la classe se entra nel viewport
            phase.classList.add("reached-phase");
        } else if (scrollingUp && isInViewport(phase, 1)) {
            // Scroll verso l'alto: rimuovo la classe se esce dal viewport
            phase.classList.remove("reached-phase");
        }
    });

    // Per i tag: se entra nel viewport, aggiungo e lascio lì (non rimuovo mai)
    if (isInViewport(tagsContainer, 500)) {
        tags.forEach((tag) => {
            tag.classList.add("fade-tag-in");
        });
    }

    lastScrollY = currentScrollY;
}

document.addEventListener('scroll', markTimelinePhase);
markTimelinePhase();
