
document.addEventListener('DOMContentLoaded', function() {
const features = document.querySelectorAll('.feature');
let f_index = 0;

function updateFontSize() {

    features.forEach((feature, i) => {
        feature.style.transform = (i === f_index) ? 'scale(1.4)' : 'scale(1)';
        feature.style.fontWeight += (i === f_index) ? 100 : -100;
    });

    f_index = (f_index + 1) % features.length;
}

// Initial call to set the initial font size
updateFontSize();
// Call the updateFontSize function every 3 seconds
setInterval(updateFontSize, 3000);
});







document.addEventListener('DOMContentLoaded', function() {

var images = document.getElementsByClassName("test");
for (var i = 0; i < images.length; ++i) {
    images[i].style.opacity = 1;
}

const imgIndexes = [0, 1, 2];
const zindexs = [0, 1, 2];
var currentImg = imgIndexes[2];
var coveredImg;

setInterval(changeImage, 3000);

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
    console.log(imgIndexes);
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
                return;
            }
        }
    })
}
});








/* 
 startImageTransition();

function startImageTransition() {
    var images = document.getElementsByClassName("test");

    for (var i = 0; i < images.length; ++i) {
        images[i].style.opacity = 1;
    }

    var top = 1;

    var cur = images.length - 1;

    setInterval(changeImage, 3000);

    async function changeImage() {

        var nextImage = (1 + cur) % images.length;

        images[nextImage].style.zIndex = top;
        images[cur].style.zIndex = top + 1;
        

        await transition();

        images[cur].style.zIndex = top;
        images[cur].style.opacity = 1;
        images[nextImage].style.zIndex = top + 1;
        top++;

        

        cur = nextImage;

    }

    function transition() {
        return new Promise(function (resolve, reject) {
            var del = 0.1;

            var id = setInterval(changeOpacity, 100);

            function changeOpacity() {
                images[cur].style.opacity -= del;
                if (images[cur].style.opacity <= 0) {
                    clearInterval(id);
                    resolve();
                }
            }

        })
    }
}  */