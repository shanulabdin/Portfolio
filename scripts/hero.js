const scrollText = document.getElementById("scroll-text");

let index = 0;
const total = scrollText.children.length;

setInterval(() => {
  index = (index + 1) % total;
  scrollText.style.transform = `translateY(-${index * 33}%)`;
}, 1800);