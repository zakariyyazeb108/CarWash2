// Wait for the DOM to fully load before attaching event listeners
document.addEventListener("DOMContentLoaded", function () {
  // Select all forms with the class 'contact-form'
  document.querySelectorAll(".contact-form").forEach(function (form) {
    // Attach a submit event listener to each form
    form.addEventListener("submit", function (event) {
      // Prevent the form from submitting in the traditional way
      event.preventDefault();

      // Extract values from the form's input fields
      var name = encodeURIComponent(this.querySelector('[name="name"]').value);
      var email = encodeURIComponent(
        this.querySelector('[name="email"]').value
      );
      var message = encodeURIComponent(
        this.querySelector('[name="message"]').value
      );

      // Construct the mailto link with subject and body
      var mailtoLink = `mailto:carwashing699@outlook.com?subject=Contact from ${name}&body=Name: ${name}%0DEmail: ${email}%0DMessage: ${message}`;

      // Use window.location.href to open the user's default mail client
      window.location.href = mailtoLink;
    });
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the default link behavior
    const targetId = link.getAttribute("href").substring(1); // Get the target element's ID
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" }); // Scroll smoothly to the target element
  });
});
