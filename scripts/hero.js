const words = ["Websites", "Apps", "Videos"];
let index = 0;
const text = document.getElementById("changing-text");

setInterval(() => {
  text.style.opacity = 0;

  setTimeout(() => {
    index = (index + 1) % words.length;
    text.textContent = words[index];
    text.style.opacity = 1;
  }, 400);

}, 2000);