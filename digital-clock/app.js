const container = document.querySelector(".container");
const hr = document.getElementById("hr");
const mn = document.getElementById("mn");
const sc = document.getElementById("sc");

function getDate() {
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const second = new Date().getSeconds();

  hr.innerText = hours;
  mn.innerText = minutes;
  sc.innerText = second;
}

setInterval(getDate, 1000);
