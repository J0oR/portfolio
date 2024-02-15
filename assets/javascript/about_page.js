/****************** FEATURES ANIMATION ******************/

document.addEventListener('DOMContentLoaded', function() {
    const phases = document.querySelectorAll('.horizontal');
    let f_index = 0;
    
     function markPhase() {
        phases.forEach((phase, i) => {
            phase.classList.toggle("marked-phase", i === f_index);
        });
        f_index = (f_index + 1) % phases.length;
    } 
    

    // Initial call to set the initial font size
    markPhase();
    // Call the updateFontSize function every 3 seconds
    setInterval(markPhase, 2000);

    
    });
    