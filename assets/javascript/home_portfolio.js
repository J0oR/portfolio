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

function swap(){
    current.classList.add('animate-left');
    next.classList.add('animate-right');

    index = (index + 1) % projectsArray.length;
    next.querySelector('img').src = projectsArray[index].img;
    next.querySelector('figcaption').textContent = projectsArray[index].title;

    [current, next] = [next, current];
    
    current.classList.remove('animate-left');
    next.classList.remove('animate-right');
}

swap();
setInterval(swap, 3000);