// Elements:
const keyDOM = document.querySelector("#eventKey");
const keyCodeDOM = document.querySelector("#keyCode");
const codeDOM = document.querySelector("#code");

window.addEventListener("keydown", (e) => {
  if (e.key === "" || e.key === "Spacebar") {
    keyDOM.innerText = "Space";
  } else {
    keyDOM.innerText = e.key;
  }
  keyCodeDOM.innerText = e.keyCode;
  codeDOM.innerText = e.code;
});
