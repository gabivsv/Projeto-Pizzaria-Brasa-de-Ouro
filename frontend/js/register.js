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

/*MUDANÇA DE TELA*/
document.addEventListener('DOMContentLoaded', () => {
  const modalRegister = document.getElementById('modal-2');
  const modalLogin = document.getElementById('modal-login');

  const linkLogin = document.querySelector('#link-login');
  const linkRegister = document.querySelector('#link-register');

  const btnAbrirRegister = document.querySelector('[data-open="register"]');
  const btnAbrirLogin = document.querySelector('[data-open="login"]');

  const btnFechar = document.querySelectorAll('.close-modal');

  // Abre modal de cadastro 
  if (btnAbrirRegister) {
    btnAbrirRegister.addEventListener('click', () => {
      modalRegister.showModal();
    });
  }

  // Abre modal de login 
  if (btnAbrirLogin) {
    btnAbrirLogin.addEventListener('click', () => {
      modalLogin.showModal();
    });
  }

  // Fechar qualquer modal
  btnFechar.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const modalId = btn.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      if (modal) modal.close();
    });
  });

  // Trocar para login
  if (linkLogin) {
    linkLogin.addEventListener('click', (e) => {
      e.preventDefault();
      modalRegister.close();
      modalLogin.showModal();
    });
  }

  // Trocar para cadastro
  if (linkRegister) {
    linkRegister.addEventListener('click', (e) => {
      e.preventDefault();
      modalLogin.close();
      modalRegister.showModal();
    });
  }
});
