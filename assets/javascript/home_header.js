/****************** FEATURES ANIMATIONS ******************/


document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.features-box').classList.add('fade-in-bottom');
    const features = document.querySelectorAll('.feature');
    let f_index = 0;

    function updateFontSize() {
        features.forEach((feature, i) => {
            feature.classList.toggle("marked", i === f_index);
        });
        f_index = (f_index + 1) % features.length;
    }

    updateFontSize();
    setInterval(updateFontSize, 1500);
});


/****************** PHOTO ANIMATIONS ******************/


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('scroll-image').classList.add('fade-in-top');
    var images = document.getElementsByClassName("header-img");
    var imgIndexes = [0, 1, 2];
    var currentImg, coveredImg;

    // set initial opacity
    for (var i = 0; i < images.length; ++i) {
        images[i].style.opacity = 1;
    }

    async function changeImage() {
        //select current top image and put it on top with z-index
        currentImg = imgIndexes[2];
        images[currentImg].style.zIndex = 2;

        // rearrange the images indexes order
        imgIndexes = imgIndexes.map(index => (index + 1) % 3);

        // select the next image  and put it behind
        coveredImg = imgIndexes[2];
        images[coveredImg].style.zIndex = 1;

        await transition();

        // put faded image at stack's bottom and reset its opacity for the next round
        images[currentImg].style.zIndex = 0;
        images[currentImg].style.opacity = 1;
    }


    // reduce current image opacity gradually down to 0
    function transition() {
        return new Promise(resolve => {

            var id = setInterval(changeOpacity, 50);

            function changeOpacity() {
                images[currentImg].style.opacity -= 0.1;
                if (images[currentImg].style.opacity <= 0) {
                    clearInterval(id);
                    resolve();
                }
            }
        })
    }

    changeImage();
    setInterval(changeImage, 1500);
});



/****************** INTRO SLIDING ANIMATION ******************/

document.addEventListener('scroll', function () {
    const element = document.querySelector('.rectangle');
    const text = document.querySelector('.intro-text');

    function isInViewport(element, margin = 300) {
        const rect = element.getBoundingClientRect();
        const centerY = window.innerHeight / 2;
        const centerX = window.innerWidth / 2;

        return (
            rect.top <= centerY + margin &&
            rect.bottom >= centerY - margin &&
            rect.left <= centerX + margin &&
            rect.right >= centerX - margin
        );
    }

    function handleScroll() {
        if (isInViewport(element)) {
            element.classList.add('right-fade-in');
            text.classList.add('right-fade-in');
        }
    }

    // Initial check
    handleScroll();
/* 
    // Listen for scroll events
    window.addEventListener('scroll', handleScroll); */
});
