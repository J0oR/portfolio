document.addEventListener("DOMContentLoaded", function() {
    var elements = document.querySelectorAll('.portfolio-project-img');

    elements.forEach(function(element, index) {
        element.style.animation = "horizontalLoop 6s linear infinite";
        element.style.animationDelay = (index * 0.5) + "s";
    });
});