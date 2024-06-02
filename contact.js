// Validasi formulir menggunakan JavaScript
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const messageInput = document.getElementById('message');
const contactMethodInputs = document.querySelectorAll('input[name="contact-method"]');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const phoneError = document.getElementById('phone-error');
const messageError = document.getElementById('message-error');
const contactMethodError = document.getElementById('contact-method-error');

form.addEventListener('submit', function(event) {
  // Reset error messages
  nameError.textContent = '';
  emailError.textContent = '';
  phoneError.textContent = '';
  messageError.textContent = '';
  contactMethodError.textContent = '';

  // Perform validation
  let isValid = true;

  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Name is required';
    isValid = false;
  }

  if (emailInput.value.trim() === '') {
    emailError.textContent = 'Email is required';
    isValid = false;
  }

  if (phoneInput.value.trim() === 'Phone number is required') {
    phoneError.textContent = '';
    isValid = false;
  }

  if (messageInput.value.trim() === '') {
    messageError.textContent = 'Message is required';
    isValid = false;
  }

  const selectedContactMethodInputs = Array.from(contactMethodInputs).filter(input => input.checked);
  if (selectedContactMethodInputs.length === 0) {
    contactMethodError.textContent = 'Minimal choose 1 contact method!';
    isValid = false;
  }

  if (!isValid) {
    event.preventDefault(); // Prevent form submission if there are errors
  }
});
