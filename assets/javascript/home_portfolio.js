document.addEventListener('DOMContentLoaded', function () {

    const projectsArray = [
        { title: 'Heat Lens', img: './assets/images/projects/heatLens.webp' },
        { title: 'Rooted Recipes', img: './assets/images/projects/rooted.webp' },
        { title: 'Hacker News feed', img: './assets/images/projects/hackerNews.webp' },
        { title: 'Typescript Store demo', img: './assets/images/projects/ts-store-demo.webp' },
        { title: 'Javascript Timer', img: './assets/images/projects/js-timer.webp' },
        { title: 'Javascript Calculator', img: './assets/images/projects/calculator.webp' },
        { title: 'Javascript Drum Machine', img: './assets/images/projects/drum_machine.webp' },
        { title: 'Markdown Previewer', img: './assets/images/projects/markdown.webp' },
        { title: 'Quote Generator', img: './assets/images/projects/quote.webp' },
        { title: 'Work Clock', img: './assets/images/projects/work clock.webp' },
        { title: 'Tecnical Documentation Page', img: './assets/images/projects/techpage.webp' },
    ];

    let currentIndex = 1;
    let current = document.querySelector('.current');
    let next = document.querySelector('.next');

    

    function swap() {
        current.classList.add('fade-out-to-left');
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

