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
    var params = {
        from_name: document.getElementById("user_name").value,
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