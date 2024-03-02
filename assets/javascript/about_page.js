function isInViewport(element, height = 500) {
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


function markTimelinePhase() {

    const phases = document.querySelectorAll('.horizontal');
    const tagsContainer = document.querySelector('.tags-list');

    phases.forEach((phase, i) => {
        if (isInViewport(phase, 100)) {
            phase.classList.add("line-fade-in");
        }
    });

    if (isInViewport(tagsContainer, 500)) {
        const tags = document.querySelectorAll('.tag');
        // Loop through each child of tagsContainer
        tags.forEach((tag) => {
            tag.classList.add("fade-tag-in");
        });
    }

}

// Attach the handleScroll function to the scroll event
document.addEventListener('scroll', markTimelinePhase);

// Initial check on page load
markTimelinePhase();