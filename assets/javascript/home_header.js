const features = document.querySelectorAll('.feature');
let f_index = 0;

function updateFontSize() {

    const fontWeightBase = '400';
    const fontWeightActive = '500';

    features.forEach((feature, i) => {
        feature.style.transform = (i === f_index) ? 'scale(1.4)' : 'scale(1)';
        feature.style.fontWeight = (i === f_index) ? fontWeightActive : fontWeightBase;
    });

    f_index = (f_index + 1) % features.length;
}

// Initial call to set the initial font size
updateFontSize();

// Call the updateFontSize function every 3 seconds
setInterval(updateFontSize, 3000);








startImageTransition();

function startImageTransition() {
    var images = document.getElementsByClassName("test");

    const imgIndexes = [0, 1, 2];
    const zindexs = [0, 1, 2];

    for (var i = 0; i < images.length; ++i) {
        images[i].style.opacity = 1;
    }

    var currentImg = 2, coveredImg;

    setInterval(changeImage, 3000);

    async function changeImage() {

        stack();

        coveredImg = imgIndexes[2];
        images[currentImg].style.zIndex = zindexs[2] + 1;
        images[coveredImg].style.zIndex = zindexs[2];

        await transition();

        images[currentImg].style.opacity = 1;
        images[currentImg].style.zIndex = zindexs[0];
        
        currentImg = imgIndexes[2];


    }

    function stack(){
        for (let j = 0; j < 3; j ++)
        {
            imgIndexes[j] = (1 + imgIndexes[j]) % 3;
        }
        console.log(imgIndexes);
    }

    function transition() {
        return new Promise(function (resolve, reject) {
            var del = 0.1;

            var id = setInterval(changeOpacity, 100);

            function changeOpacity() {
                images[currentImg].style.opacity -= del;
                if (images[currentImg].style.opacity <= 0) {
                    clearInterval(id);
                    resolve();
                }
            }

        })
    }
}
 





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