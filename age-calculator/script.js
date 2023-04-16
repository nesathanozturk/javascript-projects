const calculateBtn = document.getElementById("calculate");
const year = document.getElementById("year");
const birthYear = document.getElementById("birthYear");
const resultText = document.getElementById("result");

calculateBtn.addEventListener("click", () => {
  let yearValue = year.value;
  let birthYearValue = birthYear.value;
  let result = yearValue - birthYearValue;

  resultText.innerHTML = `You're age is ${result}`;

  year.value = "0";
  birthYear.value = "0";
});
