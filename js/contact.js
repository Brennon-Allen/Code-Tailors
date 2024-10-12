(function() {
    emailjs.init("brennon.t.allen@gmail.com"); // Replace with your EmailJS user ID
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {

    // Send the email
    emailjs.sendForm('service_64wugof', 'template_xglxnu8', this)
        .then(function() {
            alert('Your message has been sent!');
        }, function(error) {
            alert('Failed to send message: ' + JSON.stringify(error));
        });
});
