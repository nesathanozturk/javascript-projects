// Elements:
const passwordInput = document.getElementById("passwordInput");
const copyText = document.getElementById("passwordInput");
const createBtn = document.getElementById("createBtn");
const copyBtn = document.getElementById("copyBtn");
const autoTextEffect = document.getElementById("auto-text");

// Auto Text:
const text = "Create your password swiftly and easily!";
let i = 1;

autoText();

function autoText() {
  autoTextEffect.innerText = text.slice(0, i);
  i++;

  if (i > text.length) {
    i = 1;
  }

  setTimeout(autoText, 100);
}

// Event Listeners:
createBtn.addEventListener("click", createRandomPassword);
copyBtn.addEventListener("click", copyPassword);

passwordInput.value = "";

function createRandomPassword() {
  const characters =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+-._";
  const passwordLength = 10; // I want to password length to be 10 characters. But you can do whatever you want.
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }

  passwordInput.value = password;
}

function copyPassword() {
  copyText.select();
  copyText.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(copyText.value);
  alert("Password copied to clipboard!");
}
