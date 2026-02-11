const text = "Will you be my Valentine, Shiana? 💖";
let index = 0;
const typingEl = document.getElementById("typingText");

function typeText() {
  if (index < text.length) {
    typingEl.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 60);
  }
}
typeText();

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const bgMusic = document.getElementById("bgMusic");
let scale = 1;

yesBtn.addEventListener("click", () => {
  scale += 0.2;
  yesBtn.style.transform = `scale(${scale})`;

  if (scale > 2) {
    document.querySelector(".container").innerHTML = `
      <div class="envelope-wrapper">
        <div class="envelope">
          <div class="seal">💖</div>
          <div class="letter">
            <h2>To My Shiana 💌</h2>
            <p id="loveText"></p>
            <p class="signature">Forever yours ❤️</p>
          </div>
        </div>
      </div>
    `;

    bgMusic.volume = 0.5;
    bgMusic.play();

    typeLetter();
  }
});

function typeLetter() {
  const message = "Loving you isn’t just a feeling — it’s the safest place I’ve ever known. You’ve become my calm in chaos, my light in dark days, and the reason I smile without even realizing it. I don’t just love you for who you are… I love you for how I become better because of you. And if I had to choose again, in every lifetime, I would still choose you. Always. 💖";

  let i = 0;
  const loveText = document.getElementById("loveText");

  function typing() {
    if (i < message.length) {
      loveText.textContent += message.charAt(i);
      i++;
      setTimeout(typing, 35);
    } else {
      setTimeout(showRing, 800);
    }
  }

  setTimeout(typing, 1200);
}

function showRing() {
  const ring = document.createElement("div");
  ring.classList.add("ring");
  ring.innerHTML = "💍";

  const foreverText = document.createElement("div");
  foreverText.classList.add("forever-text");

  document.body.appendChild(ring);
  document.body.appendChild(foreverText);

  setTimeout(() => {
    ring.classList.add("ring-drop");
    launchFireworks();
    animateForeverText(foreverText);
    bgMusic.volume = 1;
  }, 100);
}

function animateForeverText(element) {
  const sentence = "In every lifetime, in every universe… it will always be you. ❤️";
  const words = sentence.split(" ");
  let index = 0;

  element.classList.add("show-forever");

  function showWord() {
    if (index < words.length) {
      const span = document.createElement("span");
      span.textContent = words[index] + " ";
      span.classList.add("fade-word");
      element.appendChild(span);
      index++;
      setTimeout(showWord, 350);
    }
  }

  showWord();
}

function launchFireworks() {
  for (let i = 0; i < 40; i++) {
    const spark = document.createElement("div");
    spark.classList.add("firework");
    spark.style.left = Math.random() * 100 + "vw";
    spark.style.top = Math.random() * 60 + "vh";
    spark.style.background = `hsl(${Math.random() * 360}, 100%, 60%)`;
    document.body.appendChild(spark);

    setTimeout(() => spark.remove(), 1000);
  }
}

noBtn.addEventListener("mouseenter", moveNoBtn);
noBtn.addEventListener("click", moveNoBtn);

function moveNoBtn() {
  const container = document.querySelector(".container");
  const rect = container.getBoundingClientRect();

  const x = Math.random() * (rect.width - 100);
  const y = Math.random() * (rect.height - 50);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
    }
