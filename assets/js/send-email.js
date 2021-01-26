// Code below written by me from 'sending emails using EmailJS' module in interactive front-end dev
function sendMail(contactForm) {
    emailjs.send("service_oev3go2","go-phish", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "go_phish_level": contactForm.difficulty.value,
        "message": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("success", response);
        },
        function(error) {
            console.log("failed", error);
        });
        return false;
}

// Code below written by me to create alert when form has been submitted

$("form").submit(function(){
  alert("Submitted! Thank you for your valued feedback. One of the 'Go Phish' team will be in touch soon. ");
});