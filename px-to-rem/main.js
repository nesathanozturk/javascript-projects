// Elements:
const pxInput = document.getElementById("px");
const remInput = document.querySelector("#rem");
const calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", calculateRem);

function calculateRem() {
  let pxValue = pxInput.value;
  let result = pxValue / 16;
  remInput.value = result;

  if (pxValue.trim() === "") {
    alert("Please enter a number!");
  }
}
