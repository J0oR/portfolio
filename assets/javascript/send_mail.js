(function () {
    emailjs.init('gbYsKvUM-MpMbsFwL');
})();

document.getElementById('contact-form').addEventListener('submit', function (event) {
    // Prevent the default form submission
    event.preventDefault();
});

document.getElementById('contact-form').setAttribute('autocomplete', 'off');


function sendMail() {

    scrollToMessageArea();

    var input_error = document.querySelector(".form_input_error");

    var params = {
        from_name: sanitizeInput(document.getElementById("form_name").value) + " " + sanitizeInput(document.getElementById("form_lastname").value),
        email_id: sanitizeInput(document.getElementById("form_email").value),
        subject: sanitizeInput(document.getElementById("form_subject").value),
        message: sanitizeInput(document.getElementById("form_message").value)
    };

    if (validateForm()) {
        emailjs.send('service_oy42a15', 'template_xdjh6jr', params).then(function () {
            input_error.textContent = encodeHTML("Message sent!");
            input_error.classList.add("form_input_error_visible");
            input_error.classList.add("success");
            resetForm();
        }, function (error) {
            input_error.classList.remove("success");
            input_error.classList.add("form_input_error_visible");
            input_error.textContent = encodeHTML("There was an error while sending your message!\nPlease try again.");
        });
    }
}

function encodeHTML(input) {
    return input.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}


function scrollToMessageArea() {
    var targetElement = document.querySelector('.form_input_error');

    var offset = targetElement.offsetTop;

    document.documentElement.scrollTop = offset + 400;
}




/* VALIDATION */

function sanitizeInput(input) {
    return input.replace(/<[^>]*>/g, '')
                .replace(/[&<>"'`=\/\\]/g, '');
}


function validateForm() {
    var name = sanitizeInput(document.getElementById("form_name").value);
    var surname = sanitizeInput(document.getElementById("form_lastname").value);
    var email = sanitizeInput(document.getElementById("form_email").value);
    var subject = sanitizeInput(document.getElementById("form_subject").value);
    var message = sanitizeInput(document.getElementById("form_message").value);
    var input_error = document.querySelector(".form_input_error");
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    input_error.textContent = "";
    // Simple checks for empty fields
    if (name === "") {
        input_error.textContent = encodeHTML("Name must be filled out");
        document.getElementById("form_name").focus();
    }

    else if (surname === "") {
        input_error.textContent = encodeHTML("Surname must be filled out");
        document.getElementById("form_lastname").focus();
    }
    else if (email === "") {
        input_error.textContent = encodeHTML("Email must be filled out");
        document.getElementById("form_email").focus();
    }
    else if (!emailRegex.test(email)) {
        input_error.textContent = encodeHTML("Invalid email format");
        document.getElementById("form_email").focus();
    }
    else if (subject === "") {
        input_error.textContent = encodeHTML("Subject must be filled out");
        document.getElementById("form_subject").focus();
    }
    else if (message === "") {
        input_error.textContent = encodeHTML("Message must be filled out");
        document.getElementById("form_message").focus();
    }

    if (input_error.innerHTML != "") {
        input_error.classList.add("form_input_error_visible");
        input_error.classList.remove("success");
        return false;
    }

    // If all checks pass, the form is valid
    return true;
}


/*************************** INPUT ERROR RESET *************************/

document.getElementById('contact-form').addEventListener('input', function (event) {
    resetError(event.target);
});

document.getElementById('contact-form').addEventListener('click', function (event) {
    resetError(event.target);
});

function resetError(target) {
    var input_error = document.querySelector(".form_input_error");

    if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        input_error.textContent = "";
        input_error.classList.remove("form_input_error_visible");
        input_error.classList.remove("success");
    }
}


function resetForm() {
    document.getElementById("form_name").value = "";
    document.getElementById("form_lastname").value = "";
    document.getElementById("form_email").value = "";
    document.getElementById("form_subject").value = "";
    document.getElementById("form_message").value = "";
}


/************** ONLINE PROFILES ************/

document.addEventListener('DOMContentLoaded', function () {
    const profiles = document.querySelectorAll('.online-profile');

    profiles.forEach(profile => {

        // Listen for the animationend event
        profile.addEventListener('animationend', () => {
            // Remove the animation class after the animation is complete
            profile.classList.add('after-animation-end');
        });
    });

});

