


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
            /* else{
                phase.classList.remove("marked-phase");

            } */
        });
    }



    // Attach the handleScroll function to the scroll event
    document.addEventListener('scroll', markTimelinePhase);

    // Initial check on page load
    markTimelinePhase();
