document.addEventListener("DOMContentLoaded", function () {
    const burgerButton = document.getElementById("burger-button");
    const navMenu = document.querySelector(".nav-links-container");
    const navLinks = document.querySelectorAll(".nav-link");
    const closeBtn = document.querySelector(".close-btn");

    burgerButton.addEventListener("click", function () {
        toggleNavMenu()
    });

    closeBtn.addEventListener("click", function () {
        toggleNavMenu()
    });

    // Add event listener to each .nav-link inside navMenu
    navLinks.forEach(function(navLink) {
        navLink.addEventListener("click", function () {
            toggleNavMenu();
        });
    });

    function toggleNavMenu() {
        navMenu.classList.toggle("show");
        closeBtn.classList.toggle("show-btn");
    }
    
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
