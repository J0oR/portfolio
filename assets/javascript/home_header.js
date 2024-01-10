const features = document.querySelectorAll('.feature');
let f_index = 0;

function updateFontSize() {

    setTimeout(() => {
        const fontWeightBase = '400';
        const fontWeightActive = '500';

        features.forEach((feature, i) => {
            feature.style.transform = (i === f_index) ? 'scale(1.4)' : 'scale(1)';
            feature.style.fontWeight = (i === f_index) ? fontWeightActive : fontWeightBase;
        });

        f_index = (f_index + 1) % features.length;
    }, 1000);
}

// Initial call to set the initial font size
updateFontSize();

// Call the updateFontSize function every 3 seconds
setInterval(updateFontSize, 3000);

