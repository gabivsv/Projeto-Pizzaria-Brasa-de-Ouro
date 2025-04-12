const openButtons = document.querySelectorAll('.open-modal');
const form = document.querySelector("form");
const password = document.querySelector("#password");
const confirm = document.querySelector("#confirm");
const errorPassword = document.querySelector("#errorPassword");

openButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.showModal();
    });
});

const closeButtons = document.querySelectorAll('.close-modal');
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.close();
    });
});

form.addEventListener("submit", function(e) {
  if (password.value !== confirm.value) {
    e.preventDefault();
    errorPassword.style.display = "block";
  } else {
    errorPassword.style.display = "none";
  }
});
