const bodyColor = document.getElementById("color");

function getRandomColor() {
  let characters = "0123456789ABCDEF";
  let hex = "";

  for (let i = 0, c = characters.length; i < 6; i++) {
    hex += characters.charAt(Math.floor(Math.random() * c));
  }

  bodyColor.innerText = `Color Hex: #${hex}`;
  document.querySelector("body").style.backgroundColor = `#${hex}`;
}
