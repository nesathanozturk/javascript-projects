// Elements:
const passwordInput = document.querySelector("#password");
const hiddenIcon = document.getElementById("hidden-icon");

hiddenIcon.addEventListener("click", () => {
  if (passwordInput.type == "password") {
    passwordInput.setAttribute("type", "text");
    hiddenIcon.classList.add("fa-eye-slash");
    hiddenIcon.classList.remove("fa-eye");
  } else {
    hiddenIcon.classList.remove("fa-eye-slash");
    hiddenIcon.classList.add("fa-eye");
    passwordInput.setAttribute("type", "password");
  }
});
