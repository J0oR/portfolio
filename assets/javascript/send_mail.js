(function () {
    emailjs.init('gbYsKvUM-MpMbsFwL');
})();

document.getElementById('contact-form').addEventListener('submit', function (event) {
    // Prevent the default form submission
    event.preventDefault();
});

document.getElementById('contact-form').setAttribute('autocomplete', 'off');


var firstName, lastName, email, subject, message;
const inputError = document.querySelector('.form_input_error');



/*************************** UTILITY FUNCTIONS *************************/


function sanitizeInput(input) {
    return input.replace(/<[^>]*>/g, '').replace(/[&<>"'`=\/\\]/g, '');
}

function encodeHTML(input) {
    return input.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function scrollToMessageArea() {
    const offset = inputError.offsetTop;
    document.documentElement.scrollTop = offset + 400;
}


function showMessage(message, outcome){
    inputError.textContent = encodeHTML(message);
    inputError.classList.toggle('success', outcome);
    inputError.classList.add("form_input_error_visible");
    scrollToMessageArea();
}


function getInput() {
    firstName = document.getElementById("form_name").value;
    lastName = document.getElementById("form_lastname").value;
    email = document.getElementById("form_email").value;
    subject = document.getElementById("form_subject").value;
    message = document.getElementById("form_message").value;
}


/*************************** Main Function *************************/


function sendMail() {

    getInput();
    const passed = validateForm();

    if (passed) {

        const params = {
            from_name: sanitizeInput(firstName) + " " + sanitizeInput(lastName),
            email_id: sanitizeInput(email),
            subject: sanitizeInput(subject),
            message: sanitizeInput(message)
        };

        emailjs.send('service_oy42a15', 'template_xdjh6jr', params)
        .then(() => {
            showMessage("Message sent!", true);
            resetForm();
        })
        .catch((error) => {
            showMessage("There was an error while sending your message!\nPlease try again.", false);
        });
    }
}


/************************************ VALIDATION ***********************************/


function validateInput(value, regex, fieldName, fieldId) {
    let errorMessage = "";
    
    if (value === "") {
        errorMessage = `${fieldName} must be filled out.`;
    } else if (!regex.test(value)) {
        errorMessage = `Invalid ${fieldName} format.`;
    }

    if (errorMessage) {
        document.getElementById(fieldId).focus();
        showMessage(errorMessage, false);
        return false;
    }
    return true;
}

function validateForm() {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const nameRegex = /^[a-zA-Z\s]+$/;
    const subjectRegex = /^[a-zA-Z0-9\s]+$/;
    const messageRegex = /^[\s\S]*$/;

    if (!validateInput(firstName, nameRegex, "Name", "form_name") ||
        !validateInput(lastName, nameRegex, "Last name", "form_lastname") ||
        !validateInput(email, emailRegex, "Email", "form_email") ||
        !validateInput(subject, subjectRegex, "Subject", "form_subject") ||
        !validateInput(message, messageRegex, "Message", "form_message")) {
        return false;
    }

    // If all checks pass, the form is valid
    return true;
}


/*************************** RESET FORM AND OUTCOME MESSAGE *************************/


document.querySelectorAll('input, textarea').forEach(function (element) {
    element.addEventListener('input', resetError);
    element.addEventListener('click', resetError);
});

function resetError() {
    inputError.classList.remove('form_input_error_visible', 'success');
}

function resetForm() {
    const inputFields = ['form_name', 'form_lastname', 'form_email', 'form_subject', 'form_message'];
    inputFields.forEach(field => {
        document.getElementById(field).value = '';
    });
}


/******************************** ONLINE PROFILES *********************************/


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

