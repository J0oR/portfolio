const burgerButton = document.querySelector(".burger-button");
const navbar = document.querySelector('.nav');
const navMenu = document.querySelector(".nav-links-container");
const overlayNavMenu = document.querySelector(".overlay-menu");
const overlayNavLinks = document.querySelectorAll(".overlay-nav-link");
const closeBtn = document.querySelector(".close-btn");
const backUpBtn = document.querySelector(".back-up-button");

function toggleOverlayNavMenu() {
    overlayNavMenu.classList.toggle("show-fullscreen");
    closeBtn.classList.toggle("show-btn");
    document.documentElement.classList.toggle('no-scroll');
}


document.addEventListener("DOMContentLoaded", function () {

    burgerButton.addEventListener("click", function () {
        toggleOverlayNavMenu()
    });

    closeBtn.addEventListener("click", function () {
        toggleOverlayNavMenu()
    });

    // Add event listener to each .nav-link inside navMenu
    overlayNavLinks.forEach(function (navLink) {
        navLink.addEventListener("click", function () {
            toggleOverlayNavMenu();
        });
    });
});



/****************** HANDLE NAV ON SCROLLING *******************/

function showBurgerMenu() {
    burgerButton.classList.add('show');
    navMenu.classList.add('nav-links-container-hide');
    navMenu.classList.remove('nav-links-container-show');
    //navbar.style.backgroundColor = '#131e23'; // Change to your desired background color
    navbar.classList.add('visible');
    navbar.classList.remove('transparent');
}

function showNavLinks() {
    burgerButton.classList.remove('show');
    navMenu.classList.add('nav-links-container-show');
    navMenu.classList.remove('nav-links-container-hide');
    //navbar.style.backgroundColor = 'transparent';
    navbar.classList.remove('visible');
    navbar.classList.add('transparent');

}

document.addEventListener('scroll', function () {

    var scrollPosition = window.scrollY;
    // Adjust this value to determine when the background color should change
    var scrollThreshold = 50;
    var upBtnScrollThreshold = 800;

    (scrollPosition > scrollThreshold) ? showBurgerMenu() : showNavLinks();
    backUpBtn.style.display = scrollPosition > upBtnScrollThreshold ? "block" : "none";
});



/****************** SCROLL UP BUTTON ******************/

document.addEventListener("DOMContentLoaded", function () {
    backUpBtn.addEventListener("click", function () {
        //document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

    });
});