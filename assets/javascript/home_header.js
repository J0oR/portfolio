    const features = document.querySelectorAll('.feature');
    let f_index = 0;

    function updateFontSize() {
        // Reset font size for all features

      

       

        setTimeout(() => {
            const fontSizeBase = '16px';
            const fontWeightBase = '400';
            const fontSizeActive = '25px';
            const fontWeightActive = '500';
        
            features.forEach((feature, i) => {
                feature.style.fontSize = (i === f_index) ? fontSizeActive : fontSizeBase;
                feature.style.fontWeight = (i === f_index) ? fontWeightActive : fontWeightBase;
            });
        
            f_index = (f_index + 1) % features.length;
        }, 1000);
}

    // Initial call to set the initial font size
    updateFontSize();

    // Call the updateFontSize function every 3 seconds
    setInterval(updateFontSize, 3000);

