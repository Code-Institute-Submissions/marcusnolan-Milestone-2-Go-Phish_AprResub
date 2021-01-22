function sendMail(contactForm) {
    emailjs.send("service_oev3go2","go-phish", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "go_phish_level": contactForm.difficulty.value,
        "message": contactForm.message.value
    })
    .this(
        function(response) {
            console.log("success", response);
        },
        function(error) {
            console.log("failed", error);
        });
}

console.log("Hello");