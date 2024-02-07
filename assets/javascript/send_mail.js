(function () {
    emailjs.init('gbYsKvUM-MpMbsFwL');
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Your additional form handling logic goes here
    // For example, you can send an AJAX request or perform client-side validation
});



/* function validateForm() {
    var userFirstName = document.getElementById("user_firstname").value;
    var userLastName = document.getElementById("user_lastname").value;
    var userEmail = document.getElementById("user_email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // TODO check every field


    if (userFirstName && userLastName && userEmail && subject && message) {
        // All fields are filled, you can proceed to send the email or perform other actions
        sendMail();
        alert("Email sent!");
    } else {
        // Not all fields are filled, show an alert or perform other validation logic
        alert("Please fill in all required fields");
    }
} */




function sanitizeInput(input) {
    // Replace HTML tags with empty strings
    return input.replace(/<[^>]*>/g, '');
}

function validateForm() {
    var name = sanitizeInput(document.getElementById("name").value);
    var surname = sanitizeInput(document.getElementById("surname").value);
    var email = sanitizeInput(document.getElementById("email").value);
    var subject = sanitizeInput(document.getElementById("subject").value);
    var message = sanitizeInput(document.getElementById("message").value);

    // Simple checks for empty fields
    if (name === "") {
        document.getElementById("nameError").innerHTML = "Name must be filled out";
        return false;
    }

    if (surname === "") {
        document.getElementById("surnameError").innerHTML = "Surname must be filled out";
        return false;
    }

    if (email === "") {
        document.getElementById("emailError").innerHTML = "Email must be filled out";
        return false;
    }

    if (subject === "") {
        document.getElementById("subjectError").innerHTML = "Subject must be filled out";
        return false;
    }

    if (message === "") {
        document.getElementById("messageError").innerHTML = "Message must be filled out";
        return false;
    }

    // Additional checks for email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("emailError").innerHTML = "Invalid email format";
        return false;
    }

    // You can add more checks for other fields if needed

    // If all checks pass, the form is valid
    return true;
}






function sendMail(){
    var params = {
        from_name: document.getElementById("user_firstname").value + " " + document.getElementById("user_lastname").value,
        email_id: document.getElementById("user_email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    // these IDs from the previous steps
    emailjs.send('service_oy42a15', 'template_xdjh6jr', params).then(function () {
        console.log('SUCCESS!');
    }, function (error) {
        console.log('FAILED...', error);
    });
}