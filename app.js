const form = document.querySelector("#form");
// console.log(form);
const log = document.querySelector("#log");
// console.log(log);
const name = document.querySelector("#name");
// console.log(name);

function logSubmit(event) {
  event.preventDefault();
  // grab the value which is present inside input box
  console.log(name);
  const theName = name.value;
  // add the welcome message in paragrapg tag
  console.log(log);
  const welcomeMessage = `Hello ${theName}, You are logged in.`;
  log.textContent = welcomeMessage;
}

form.addEventListener("submit", logSubmit);

form.addEventListener("keyup", (evt) => {
  console.log(evt);
  console.log("key released");
});

const button = document.querySelector("#btn");
const firstName = document.querySelector("#first-name");
const surName = document.querySelector("#surname");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const collapsibleDiv = document.querySelector("#collapsible-content-open");

button.addEventListener("click", (event) => {
  event.currentTarget.textContent = "Go to bottom of page";
});

const formE1 = document.querySelector(".form-container");

formE1.addEventListener("submit-button", logSubmitSecond);

function logSubmitSecond(event) {
  event.preventDefault();
  console.log(`Form submitted! Welcome ${firstName.value}
    ${surName.value}
    ${email.value}
    ${message.value}`);
}

const toggleButton = document.querySelector("#toggle-reveal");
const collapsibleToggleDiv = document.querySelector(
  "#collapsible-content-toggle"
);

toggleButton.addEventListener("click", () => {
  collapsibleToggleDiv.classList.toggle("hide");
});
