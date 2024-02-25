(function () {
    emailjs.init('gbYsKvUM-MpMbsFwL');
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Your additional form handling logic goes here
    // For example, you can send an AJAX request or perform client-side validation
});


function sendMail(){

    scrollToMessageArea();

    var params = {
        from_name: document.getElementById("form_name").value + " " + document.getElementById("form_lastname").value,
        email_id: document.getElementById("form_email").value,
        subject: document.getElementById("form_subject").value,
        message: document.getElementById("form_message").value
    };

    if (validateForm()){
        emailjs.send('service_oy42a15', 'template_xdjh6jr', params).then(function () {
            console.log('SUCCESS!');
        }, function (error) {
            console.log('FAILED...', error);
        });
    }
}

function scrollToMessageArea(){
    var targetElement = document.getElementById('message_area');

    var offset = targetElement.offsetTop;

    // If you are scrolling within a container, replace document.documentElement with your container element
    document.documentElement.scrollTop = offset - 250;
}




/* VALIDATION */


function sanitizeInput(input) {
    // Replace HTML tags with empty strings
    return input.replace(/<[^>]*>/g, '');
}

function validateForm() {
    var name = sanitizeInput(document.getElementById("form_name").value);
    var surname = sanitizeInput(document.getElementById("form_lastname").value);
    var email = sanitizeInput(document.getElementById("form_email").value);
    var subject = sanitizeInput(document.getElementById("form_subject").value);
    var message = sanitizeInput(document.getElementById("form_message").value);
    var input_error = document.getElementById("form_input_error");
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    // Simple checks for empty fields
    if (name === "") {
        input_error.innerHTML = "Name must be filled out";
        return false;
    }
    
    else if (surname === "") {
        input_error.innerHTML = "Surname must be filled out";
        return false;
    }
    else if (email === "") {
        input_error.innerHTML = "Email must be filled out";
        return false;
    }
    else if (!emailRegex.test(email)) {
        input_error.innerHTML = "Invalid email format";
        return false;
    }
    else if (subject === "") {
        input_error.innerHTML = "Subject must be filled out";
        return false;
    }
    else if (message === "") {
        input_error.innerHTML = "Message must be filled out";
        return false;
    }

    // Additional checks for email format
    

    // You can add more checks for other fields if needed

    // If all checks pass, the form is valid
    return true;
}


/* input error reset */
document.getElementById('contact-form').addEventListener('input', function(event) {
    // Check if the target of the event is an input element
    if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
        console.log("jh");
        document.getElementById("form_input_error").innerHTML = "";

    }
});