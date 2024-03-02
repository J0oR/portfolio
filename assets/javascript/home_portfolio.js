document.addEventListener('DOMContentLoaded', function () {

    const projectsArray = [
        { title: 'Javascript Calculator', img: './assets/images/calculator.png' },
        { title: 'Javascript Drum Machine', img: './assets/images/drum_machine.png' },
        { title: 'Markdown Previewer', img: './assets/images/markdown.png' },
        { title: 'Quote Generator', img: './assets/images/quote.png' },
        { title: 'Work Clock', img: './assets/images/work clock.png' },
        { title: 'Tecnical Documentation Page', img: './assets/images/techpage.png' },
    ];

    let index = 1;
    let current = document.querySelector('.current');
    let next = document.querySelector('.next');

    function updateContent() {
        next.querySelector('.portfolio-preview-img').src = projectsArray[index].img;
        next.querySelector('.card-title').textContent = projectsArray[index].title;
    }

    function swap() {
        current.classList.add('left-fade-out');
        next.classList.add('right-fade-in');

        index = (index + 1) % projectsArray.length;
        updateContent();

        [current, next] = [next, current];

        current.classList.remove('left-fade-out');
        next.classList.remove('right-fade-in');
    }

    swap();
    setInterval(swap, 2000);
});