//---------- Below JS was written with guidance from emailJS tutorial if Interactive Frontend module ---------
function sendMail(contactForm) {
    emailjs.send("service_oev3go2","go-phish", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "go_phish_level": contactForm.difficulty.value,
        "message": contactForm.message.value
    })
    .then(
        function(response) {
            alert("Thanks for contacting Go Phish! We'll be in touch soon.");
            window.location.replace("/");
        },
        function(error) {
            alert("Whoops! Please try again.");
        });
        return false;
}

// ---------- code below written with help from W3 schools ----------
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