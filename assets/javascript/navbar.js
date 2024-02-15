const burgerButton = document.getElementById("burger-button");
const navMenu = document.querySelector(".nav-links-container");
const navLinks = document.querySelectorAll(".nav-link");
const closeBtn = document.querySelector(".close-btn");
const backUpBtn = document.querySelector(".back-up-button");
const upBtn = document.querySelector(".back-up-button");

function toggleNavMenu() {
    navMenu.classList.toggle("show-fullscreen");
    closeBtn.classList.toggle("show-btn");
}


document.addEventListener("DOMContentLoaded", function () {
   

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

    
    
});

document.addEventListener('scroll', function() {
    var navbar = document.querySelector('.nav-container');
    var scrollPosition = window.scrollY;

    // Adjust this value to determine when the background color should change
    var scrollThreshold = 100;
    var upBtnScrollThreshold = 800;

    if (scrollPosition > scrollThreshold) {
        navbar.style.backgroundColor = '#8CB9BD'; // Change to your desired background color
        burgerButton.classList.add('show');
        navMenu.classList.add('nav-links-hide');
        navMenu.classList.remove('nav-links-show');
    } else {
        navbar.style.backgroundColor = 'transparent';
        burgerButton.classList.remove('show');
        navMenu.classList.add('nav-links-show');
        navMenu.classList.remove('nav-links-hide');
    }

    if (scrollPosition > upBtnScrollThreshold) {
        upBtn.style.display = "block";
    }
    else {
        upBtn.style.display = "none";
    }


});


document.addEventListener("DOMContentLoaded", function () {
    backUpBtn.addEventListener("click", function () {
        //document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

    });
});