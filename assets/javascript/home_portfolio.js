document.addEventListener('DOMContentLoaded', function () {

    const projectsArray = [
        { title: 'Javascript Calculator', img: './assets/images/calculator.png' },
        { title: 'Javascript Drum Machine', img: './assets/images/drum_machine.png' },
        { title: 'Markdown Previewer', img: './assets/images/markdown.png' },
        { title: 'Quote Generator', img: './assets/images/quote.png' },
        { title: 'Work Clock', img: './assets/images/work clock.png' },
        { title: 'Tecnical Documentation Page', img: './assets/images/techpage.png' },
    ];

    let currentIndex = 1;
    let current = document.querySelector('.current');
    let next = document.querySelector('.next');

    

    function swap() {
        current.classList.add('fade-out-to-left');
        current.style.zIndex = 1;
        next.classList.add('fade-in-from-right');
        current.style.zIndex = 1;

        currentIndex = (currentIndex + 1) % projectsArray.length;
        updateContent(currentIndex);

        [current, next] = [next, current];

        current.classList.remove('fade-out-to-left');
        current.style.zIndex = 2;
        next.style.zIndex = 1;
        next.classList.remove('fade-in-from-right');
    }

    function updateContent(index) {
        next.querySelector('.portfolio-preview-img').src = projectsArray[index].img;
        next.querySelector('.card-title').textContent = projectsArray[index].title;
    }

    // Preload images
    projectsArray.forEach(project => {
        const img = new Image();
        img.src = project.img;
    });

    swap();
    setInterval(swap, 2000);
});

