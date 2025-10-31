const form = document.getElementById("form");
const inputEmail = document.getElementById("input-email");
const mainModal = document.querySelector(".main-modal");
const thanksModal = document.querySelector(".thanks-modal");
const btnCancel = document.getElementById("btn-cancel");

const emailProvided = document.getElementById("email-provided");

const textConfirmation = document.getElementById("text-confirmation");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (validatedEmail()) {
    const valueEmail = inputEmail.value.trim();

    mainModal.classList.add("remove");
    thanksModal.classList.add("show");
    emailProvided.textContent = valueEmail;
    textConfirmation.innerHTML = `Um e-mail de confirmação foi enviado para <strong>${valueEmail}</strong>. Abra-o e clique no botão para confirmar sua inscrição.`;
  }
});

inputEmail.addEventListener("blur", validatedEmail);

btnCancel.addEventListener("click", () => {
  dismissMessage();
});

function validatedEmail() {
  const formItem = inputEmail.parentElement;
  const valueEmail = inputEmail.value.trim();
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (valueEmail === "" || !regexEmail.test(valueEmail)) {
    formItem.classList.add("error");
    return false;
  } else {
    formItem.classList.remove("error");
    return true;
  }
}

function dismissMessage() {
  mainModal.classList.remove("remove");
  thanksModal.classList.remove("show");
  form.reset();
}

const body = document.body;
const switchTheme = document.querySelector(".switch-theme");

switchTheme.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});
