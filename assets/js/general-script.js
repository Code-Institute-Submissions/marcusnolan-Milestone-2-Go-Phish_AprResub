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


// code below written with help from W3 schools
window.onscroll = function() {myFunction()};

var header = document.getElementById("navbar");

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}