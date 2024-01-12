
const projectsArray = [
    { title: 'Javascript Calculator', img: './assets/images/calculator.png' },
    { title: 'Javascript Drum Machine', img: './assets/images/drum_machine.png' },
    { title: 'Markdown Previewer', img: './assets/images/markdown.png' },
    { title: 'Quote Generator', img: './assets/images/quote.png' },
    { title: 'Work Clock', img: './assets/images/work clock.png' },
    { title: 'Tecnical Documentation Page', img: './assets/images/techpage.png' },
];

// Get the h1 element by its ID
const project = document.getElementById('project-preview');
const title = document.getElementById('project-title');
const image = document.getElementById('project-img');

let index = 0;

function updateProject() {

    // Fade out
    project.style.opacity = 0;

    setTimeout(() => {

        // update content
        title.innerHTML = projectsArray[index].title;
        image.src = projectsArray[index].img;

        // Fade in
        project.style.opacity = 1;
        // Increment index or reset to 0 if it reaches the end of the array
        index = (index + 1) % projectsArray.length;
    }, 1000);


};
updateProject();
// Call the updateH1 function every 3 second
setInterval(updateProject, 3000);