const buttons = document.querySelectorAll(".buttons");
// const downBtn = document.querySelector(".fa-chevron-down");
// const accordionText = document.querySelector("#text");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.parentNode.classList.toggle("active"); // parentNode'a eklememizin sebebi; biz "active" class'ını buttonların parent elementi olan accordion'a ekledik.
  });
});

// downBtn.addEventListener("click", () => {
//   accordionText.classList.toggle("active");
// });
