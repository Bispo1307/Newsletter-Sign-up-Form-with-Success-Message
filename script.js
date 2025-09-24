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
    textConfirmation.innerHTML = `A confirmation email has been sent to <strong>${valueEmail}</strong>. Please open it and click the button inside to confirm your subscription.`;
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
