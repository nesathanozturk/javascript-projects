const upBtn = document.getElementById("upBtn");
const body = document.querySelector("body");

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    upBtn.classList.add("active");
  } else {
    upBtn.classList.remove("active");
  }

  //   if (window.scrollY > 700) {
  //     upBtn.style.opacity = 1;
  //     upBtn.style.cursor = "pointer";
  //   } else {
  //     upBtn.style.opacity = 0;
  //   } It can be like this.
});

upBtn.addEventListener("click", () => {
  document.body.scrollTop = 0; // It works only for Safari.
  document.documentElement.scrollTop = 0; // This code works for Chrome, Firefox and Opera. If you dont write this code, it will not work for Chrome, Firefox and Opera.
});
