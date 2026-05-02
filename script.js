const btn = document.getElementById("enterBtn");
const intro = document.getElementById("introText");
const carousel = document.getElementById("carousel");
const message = document.getElementById("message");
const music = document.getElementById("music");

btn.addEventListener("click", start);

function start() {
  btn.style.display = "none";

  // تشغيل الأغنية
  music.play();

  // كتابة Happy Birthday
  intro.style.opacity = 1;
  intro.innerText = "🎉 HAPPY BIRTHDAY MOHAMED 🎉";

  // صور 3D (12 صورة)
  for (let i = 1; i <= 12; i++) {
    let img = document.createElement("img");
    img.src = `img${i}.jpg`;

    let angle = (i * 360) / 12;
    img.style.transform = `rotateY(${angle}deg) translateZ(250px)`;

    carousel.appendChild(img);
  }

  // الرسالة
  setTimeout(() => {
    message.innerText = "🔥 كل سنة وانت طيب يا محمد 🔥";
  }, 2000);

  // قلوب
  setInterval(() => {
    let heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");

    heart.style.left = Math.random() * window.innerWidth + "px";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }, 300);
}