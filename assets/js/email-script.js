const emailForm = document.getElementById("emailForm");
const emailLoading = document.getElementById("email-loading");
const emailError = document.getElementById("email-error");
const emailSent = document.getElementById("email-sent");

function sendEmail(e) {
  e.preventDefault();

  emailLoading.style.display = "block";

  const serviceID = "service_608irdj";
  const templateID = "template_co83mja";
  const templateParams = e.target;
  const userID = "user_LijNmGcB7C2xlUx1qTOoG";

  emailjs.sendForm(serviceID, templateID, templateParams, userID).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
      emailLoading.style.display = "none";
      emailSent.style.display = "block";
      setTimeout(() => {
        emailSent.style.display = "none";
      }, 4000);
    },
    function (error) {
      console.log("FAILED...", error);
      emailLoading.style.display = "none";
      emailError.style.display = "block";
      setTimeout(() => {
        emailError.style.display = "none";
      }, 7000);
    }
  );
}

emailForm.addEventListener("submit", sendEmail);
