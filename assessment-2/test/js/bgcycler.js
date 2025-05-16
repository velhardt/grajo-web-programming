const header = document.getElementById("cycle");
const overlay = header.querySelector(".fade-overlay");
  const images = [
    "images/landing/spren.jpg",
    "images/landing/lightning.webp",
    "images/landing/bamboo.webp",
    "images/landing/chasmfiend.jpg",
    "images/landing/kelsier.jpg",
    "images/landing/cryptic.jpg",
    "images/landing/gates.webp",
    "images/landing/prophecy.webp",
    "images/landing/luthadel.webp",

  ];
  let index = 0;
  header.style.backgroundImage = `url(${images[index]})`;

  setInterval(() => {
    overlay.style.opacity = "1";

    setTimeout(() => {
      index = (index + 1) % images.length;
      header.style.backgroundImage = `url(${images[index]})`;
      overlay.style.opacity = "0";
    }, 1600);
  }, 10000);