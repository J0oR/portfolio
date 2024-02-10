document.addEventListener("DOMContentLoaded", function () {
    const burgerButton = document.getElementById("burger-button");
    const navMenu = document.querySelector(".nav-links-container");

    burgerButton.addEventListener("click", function () {
        navMenu.classList.toggle("show");
    });
});

document.addEventListener('scroll', function() {
    var navbar = document.querySelector('.nav-container');
    var scrollPosition = window.scrollY;

    // Adjust this value to determine when the background color should change
    var scrollThreshold = 100;

    if (scrollPosition > scrollThreshold) {
        navbar.style.backgroundColor = '#8CB9BD'; // Change to your desired background color
    } else {
        navbar.style.backgroundColor = 'transparent';
    }
});
