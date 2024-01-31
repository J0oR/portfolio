document.addEventListener("DOMContentLoaded", function () {
    const burgerButton = document.getElementById("burger-button");
    const navMenu = document.querySelector(".nav-links-container");

    burgerButton.addEventListener("click", function () {
        navMenu.classList.toggle("show");
    });
});