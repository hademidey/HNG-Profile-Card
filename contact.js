const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");
  const success = document.getElementById("success");

  // Reset error messages
  const errors = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  // Full name validation
  if (name.value.trim() === "") {
    errors.name = "Full name is required.";
  }

  // Email validation
  if (email.value.trim() === "") {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    errors.email = "Please enter a valid email (e.g., name@example.com).";
  }

  // Subject validation
  if (subject.value.trim() === "") {
    errors.subject = "Subject is required.";
  }

  // Message validation
  if (message.value.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }

  // Display error messages
  Object.keys(errors).forEach((el) => {
    const error = document.getElementById(error-${el});
    error.textContent = errors[el];
  });

  // display success message if valid
  const hasError = Object.values(errors).some((msg) => msg !== "");

  if (!hasError) {
    success.textContent =
      "✅ Thank you! Your message has been sent successfully.";
    document.getElementById("contactForm").reset();
  } else {
    success.textContent = "";
  }
});