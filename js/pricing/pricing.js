document.addEventListener('DOMContentLoaded', function () {
 const form = document.getElementById('membershipForm');
 const submitBtn = document.getElementById('submitBtn');
 const inputs = form.querySelectorAll('input, select, textarea');
 const successMessage = document.getElementById('successMessage');

 // Enable submit button when form is valid
 inputs.forEach(input => {
     input.addEventListener('input', () => {
         if (form.checkValidity()) {
             submitBtn.disabled = false;
         } else {
             submitBtn.disabled = true;
         }
     });
 });

 // Handle form submission
 form.addEventListener('submit', function (event) {
     event.preventDefault(); // Prevent the default form submission
     
     // Display success message
     successMessage.style.display = 'block';
     const formData = new FormData(form);
     formData.forEach((value, key) => {
         console.log(`${key}: ${value}`);
     });
     // Clear the form fields
     form.reset();

  setTimeout(() => {
   successMessage.style.display = 'none';
  }, 2000);
     // Disable submit button after reset
     submitBtn.disabled = true;
 });
});
