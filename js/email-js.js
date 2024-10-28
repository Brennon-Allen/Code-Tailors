// Function to handle form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault() // Prevent default form submission behavior

    // Get form data
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    // Send email via EmailJS
    emailjs.send("service_64wugof", "template_xglxnu8", formData)
        .then(function(response) {
            alert("Message sent!");
            console.log("Email sent:", response.status, response.text);
            document.getElementById("contactForm").reset(); // Reset the form
        }, function(error) {
            alert("Error sending message. Please try again.");
            console.error("EmailJS error:", error);
        });
});

