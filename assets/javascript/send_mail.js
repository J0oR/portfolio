(function () {
    emailjs.init('gbYsKvUM-MpMbsFwL');
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Your additional form handling logic goes here
    // For example, you can send an AJAX request or perform client-side validation
});

function validateForm() {
    var userFirstName = document.getElementById("user_firstname").value;
    var userLastName = document.getElementById("user_lastname").value;
    var userEmail = document.getElementById("user_email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    if (userFirstName && userLastName && userEmail && subject && message) {
        // All fields are filled, you can proceed to send the email or perform other actions
        sendMail();
        alert("Email sent!");
    } else {
        // Not all fields are filled, show an alert or perform other validation logic
        alert("Please fill in all required fields");
    }
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