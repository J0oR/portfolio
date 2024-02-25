/****************** FEATURES ANIMATION ******************/

//document.addEventListener('DOMContentLoaded', function() {
const features = document.querySelectorAll('.feature');
let f_index = 0;

function updateFontSize() {
    features.forEach((feature, i) => {
        feature.classList.toggle("marked", i === f_index);
    });
    f_index = (f_index + 1) % features.length;
}

// Initial call to set the initial font size
updateFontSize();
// Call the updateFontSize function every 3 seconds
setInterval(updateFontSize, 2000);
//});






/****************** PHOTO FADING ANIMATION ******************/


//document.addEventListener('DOMContentLoaded', function() {

var images = document.getElementsByClassName("test");
for (var i = 0; i < images.length; ++i) {
    images[i].style.opacity = 1;
}

const imgIndexes = [0, 1, 2];
var currentImg = imgIndexes[2];
var coveredImg;

setInterval(changeImage, 2000);

async function changeImage() {

    stack();

    coveredImg = imgIndexes[2];
    images[currentImg].style.zIndex = 2;
    images[coveredImg].style.zIndex = 1;

    await transition();

    /* reset the opacity of the image we just made disappear  */
    images[currentImg].style.opacity = 1;
    /* put the image at the bottom of the stack  */
    images[currentImg].style.zIndex = 0;

    /* update the stack top image */
    currentImg = imgIndexes[2];
}

/* rearrange the images index order */
function stack() {
    for (let j = 0; j < 3; j++) {
        imgIndexes[j] = (1 + imgIndexes[j]) % 3;
    }
}

/* reduce gradually current image transiton down to 0 */
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
//});



/****************** PHOTO SLIDING ANIMATION ******************/


document.addEventListener('DOMContentLoaded', function() {
    // Trigger the animation when the DOM is fully loaded
    var imageBox = document.getElementById('scroll-image');
    var featuresBox = document.querySelector('.features-box');
    imageBox.classList.add('animate-topdown');
    featuresBox.classList.add('animate-bottomup');
});



/****************** INTRO SLIDING ANIMATION ******************/

document.addEventListener('DOMContentLoaded', function () {
    const element = document.querySelector('.home-intro-section');
  
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function handleScroll() {
      if (isInViewport(element)) {
        element.classList.add('rightSlide');
      } else {
        element.classList.remove('in-viewport');
      }
    }
  
    // Initial check
    handleScroll();
  
    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);
  });
  