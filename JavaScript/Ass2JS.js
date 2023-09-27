    // Intercept form submission and handle it with a delay
    document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
    validateForm(); // Validate the form
    });
    function validateForm(){
    // Get the values entered in the fields
   var nameField = document.getElementById("name").value;
   var emailField = document.getElementById("FormInputEmail1").value;
   var phoneField = document.getElementById("phone").value;
   //Define a regular expression pattern for a valid name. It only has letters and spaces in it.
   var namePattern = /^[a-zA-Z\s]+$/;
   // Define a regular expression pattern for a valid email address
   var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
   // Define a regular expression pattern for a valid international phone number in nz.
   var phonePattern1 = /^\+?\d{1,3}[-.\s]?\d{3}[-.\s]?\d{3}[-.\s]?\d{4}$/;
   //Define a regular expression pattern for a cell phone number in nz, such as 0221667194.
   var phonePattern2 = /^\d{1,3}[-.s]?\d{3}[-.s]?\d{4}$/;
   // Check if the name field is empty
   if (nameField === "") {
    alert("Please enter your name.");
    return false; // Prevent the form from submitting
   }
   //Check if name has only letters and spaces in it.
   if (!namePattern.test(nameField)){
     alert("The name should only contain letters and spaces");
     return false; //Prevent form submission
   }
    // Check if the email Field is empty
   if (emailField === "") {
     alert("Please enter you email address");
     return false; //stops the form from submitting
   }
   // Check if the email field fits the email pattern
   if (!emailPattern.test(emailField)){
     alert("Please enter a valid email address");
     return false; //prevent the form from submitting
   }
   //Check if the phone number fits the pattern
   if (phoneField === "") {
      alert("Please enter your phone number.");
      return false; // Prevent the form from submitting
    }
    if ((!phonePattern1.test(phoneField)) && (!phonePattern2.test(phoneField))){
      alert("Please enter a valid phone number.");
      return false; // Prevent the form from submitting
    }
    // Check if all inputs are valid
    if (namePattern.test(nameField) && emailPattern.test(emailField) && (phonePattern1.test(phoneField) || phonePattern2.test(phoneField))) {
    // Display the success message
    console.log("Success message should be displayed"); 
    var successMessage = document.getElementById("successMessage");
    successMessage.style.display = "block";

    //set a timer to hide the success message after 3 seconds
    // Set a timer to hide the success message after 3 seconds (3000 milliseconds)
    setTimeout(function () {
      successMessage.style.display = "none";

      // Allow the form to submit after the delay
      submitForm();
    }, 3000); // 3000 milliseconds (3 seconds)

    // Prevent the form from submitting immediately
    return false;
    }
    // If any validation fails, prevent form submission
    return false; 
}
// Function to submit the form
function submitForm() {
  var contactForm = document.getElementById("contactForm");
  contactForm.submit(); // This will submit the form
}
