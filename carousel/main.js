// Elements:
const images = document.getElementById("images");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const image = document.querySelectorAll("img");

let i = 0;
let interval = setInterval(run, 3000);

function run() {
  i++;
  changeImage();
}

function changeImage() {
  if (i > image.length - 1) {
    i = 0;
  } else if (i < 0) {
    i = image.length - 1;
  }

  images.style.transform = `translateX(${-i * 500}px)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 3000);
}

prevBtn.addEventListener("click", () => {
  i--;
  changeImage();
  resetInterval();
});

nextBtn.addEventListener("click", () => {
  i++;
  changeImage();
  resetInterval();
});
