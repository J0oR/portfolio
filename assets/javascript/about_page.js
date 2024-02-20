/****************** FEATURES ANIMATION ******************/
/* 
document.addEventListener('DOMContentLoaded', function() {
    const phases = document.querySelectorAll('.horizontal');
    let f_index = 0;

    var scrollPosition = window.scrollY;
    // Adjust this value to determine when the background color should change
    var scrollThreshold = 100;
    var upBtnScrollThreshold = 500;

    (scrollPosition > scrollThreshold)
    
     function markPhase() {
        phases.forEach((phase, i) => {
            if (isInViewport(phase))
            {
                phase.classList.add("marked-phase");
            }
            else{
                phase.classList.remove("marked-phase");

            }
        });
        f_index = (f_index + 1) % phases.length;
    } 
    

    // Initial call to set the initial font size
    markPhase();
    // Call the updateFontSize function every 3 seconds
    setInterval(markPhase, 2000);

    
    });
    

 */


    function isInViewport(element, margin = 20) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const windowWidth = window.innerWidth || document.documentElement.clientWidth;
        const centerY = windowHeight / 2;
        const centerX = windowWidth / 2;

        return (
            rect.top <= centerY + margin &&
            rect.bottom >= centerY - margin &&
            rect.left <= centerX + margin &&
            rect.right >= centerX - margin
        );
    }


    function markTimelinePhase() {
        const phases = document.querySelectorAll('.horizontal');


        

        phases.forEach((phase, i) => {
            if (isInViewport(phase))
            {
                phase.classList.add("marked-phase");
            }
            else{
                phase.classList.remove("marked-phase");

            }
        });
    }



    // Attach the handleScroll function to the scroll event
    document.addEventListener('scroll', markTimelinePhase);

    // Initial check on page load
    markTimelinePhase();
