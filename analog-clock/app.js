const sec = document.querySelector(".secs");
const min = document.querySelector(".mins");
const hours = document.querySelector(".hours");

function clock() {
  let hour = new Date().getHours();
  let minute = new Date().getMinutes();
  let second = new Date().getSeconds();

  // min, sec = 60;
  // hour = 12;

  hours.style.transform = `rotate(${180 + hour * 30}deg)`;
  min.style.transform = `rotate(${180 + minute * 6}deg)`;
  sec.style.transform = `rotate(${180 + second * 6}deg)`;
}

setInterval(clock, 1000);
