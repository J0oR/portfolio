/****************** FEATURES ANIMATIONS ******************/


document.addEventListener('DOMContentLoaded', function () {
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


let imagesArray = [
    { title: 'Y', img: './assets/images/hero/blue.webp' },
    { title: 'G', img: './assets/images/hero/green.webp' },
    { title: 'B', img: './assets/images/hero/pink.webp' }
]

document.addEventListener('DOMContentLoaded', function () {

    var currentImg = document.querySelector('.top');
    var coveredImg = document.querySelector('.bottom');

    async function changeImage() {
        currentImg.style.zIndex = 1;
        currentImg.classList.add('header-image-fade-out');
        coveredImg.style.zIndex = 0;
        coveredImg.classList.add('header-image-fade-in');

        rearrangeImagesArray(imagesArray);

        coveredImg.src = imagesArray[1].img;
        coveredImg.style.zIndex = 1;
        coveredImg.classList.remove('header-image-fade-out');
        currentImg.style.zIndex = 0;
        currentImg.classList.remove('header-image-fade-in');

        [currentImg, coveredImg] = [coveredImg, currentImg];

    }

    function rearrangeImagesArray(arr) {
        const firstElement = arr.pop();
        arr.unshift(firstElement);
    }

    changeImage();
    setInterval(changeImage, 1500);
});


/****************** INTRO SLIDING ANIMATION ******************/


document.addEventListener('scroll', function () {
    const intro_text_container = document.querySelector('.rectangle');
    const fading_animation = "growFromRight 1s ease-in-out forwards";

    if (isInViewport(intro_text_container)) {
        intro_text_container.style.animation = fading_animation;
    }
});


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
