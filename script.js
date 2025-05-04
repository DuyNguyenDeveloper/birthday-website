const wishes = [
  {
    name: "Dear Sin",
    message:
      "Chúc em một sinh nhật thật rực rỡ, luôn hạnh phúc và tràn đầy năng lượng như ánh nắng ban mai! 🌞",
    background: "linear-gradient(45deg, #40e0d0, #ffb6c1, #fffacd)",
  },
  {
    name: "My Princess",
    message:
      "Mong em luôn cười thật tươi và nhận được thật nhiều yêu thương từ mọi người. 💕",
    background: "linear-gradient(45deg, #ff69b4, #ffd700, #b0e0e6)",
  },
  {
    name: "My love",
    message:
      "Cảm ơn ông trời cho đã anh được gặp em! Anh mong mỗi ngày của em đều là một hành trình đẹp, đầy ắp niềm vui và kỷ niệm đáng nhớ. Anh yêu em! ❤️",
    background: "linear-gradient(45deg, #dda0dd, #f0e68c, #afeeee)",
  },
];

let currentWishIndex = 0;

function fireworks() {
  const defaults = {
    startVelocity: 30,
    spread: 360,
    ticks: 60,
    zIndex: 4,
    scalar: 1.2,
  };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  setInterval(function () {
    confetti({
      ...defaults,
      particleCount: 80,
      spread: 60,
      origin: { y: 0.85, x: randomInRange(0.3, 0.7) },
      colors: ["#40E0D0", "#FFB6C1", "#FFFACD"],
    });

    confetti({
      ...defaults,
      particleCount: 40,
      angle: randomInRange(55, 125),
      spread: randomInRange(40, 60),
      origin: { x: randomInRange(0.3, 0.7), y: 0.9 },
      colors: ["#40E0D0", "#FFB6C1", "#FFFACD"],
    });
  }, 400);
}

function createSunflowerEffect() {
  const fallingStars = document.querySelector(".falling-stars");
  fallingStars.innerHTML = ""; // Xóa các ngôi sao cũ

  // Tạo các ngôi sao cho cánh hoa (12 cánh)
  for (let i = 0; i < 12; i++) {
    const star = document.createElement("div");
    star.classList.add("star", "petal-star");
    star.style.setProperty("--angle", `${i * 30}deg`); // Mỗi cánh cách nhau 30 độ
    star.style.setProperty("--delay", `${i * 0.2}s`); // Delay để các cánh xuất hiện tuần tự
    fallingStars.appendChild(star);
  }

  // Tạo các ngôi sao cho tâm hoa
  for (let i = 0; i < 20; i++) {
    const star = document.createElement("div");
    star.classList.add("star", "center-star");
    star.style.setProperty("--offset", `${Math.random() * 30 - 15}px`); // Tạo độ lệch ngẫu nhiên trong tâm
    star.style.setProperty("--delay", `${Math.random() * 2}s`);
    fallingStars.appendChild(star);
  }
}

function createRosePetals() {
  // Xóa các cánh hoa cũ nếu có
  const existingPetals = document.querySelector(".rose-petals");
  if (existingPetals) {
    existingPetals.remove();
  }

  const rosePetals = document.createElement("div");
  rosePetals.classList.add("rose-petals");
  document.body.appendChild(rosePetals);
  for (let i = 0; i < 10; i++) {
    const petal = document.createElement("div");
    petal.classList.add("rose-petal");
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.animationDelay = `${Math.random() * 5}s`;
    rosePetals.appendChild(petal);
  }
}

function createFloatingHearts() {
  // Xóa các trái tim cũ nếu có
  const existingHearts = document.querySelector(".floating-hearts");
  if (existingHearts) {
    existingHearts.remove();
  }

  const hearts = document.createElement("div");
  hearts.classList.add("floating-hearts");
  document.body.appendChild(hearts);
  for (let i = 0; i < 5; i++) {
    const heart = document.createElement("div");
    heart.classList.add("floating-heart");
    heart.style.left = `${Math.random() * 80 + 10}%`;
    heart.style.animationDelay = `${Math.random() * 3}s`;
    hearts.appendChild(heart);
  }
}

function openGift() {
  const giftBox = document.querySelector(".gift-box");
  const container = document.querySelector(".container");
  const loading = document.querySelector(".loading");
  const imageFrame = document.querySelector(".image-frame");

  giftBox.classList.add("open");

  confetti({
    particleCount: 50,
    spread: 60,
    origin: { x: 0.5, y: 0.5 },
    colors: ["#FFD700", "#FF69B4", "#40E0D0"],
    scalar: 0.8,
    zIndex: 25,
  });

  setTimeout(() => {
    giftBox.classList.add("hidden");
    loading.style.display = "flex";
    loading.classList.add("visible");

    setTimeout(() => {
      loading.classList.remove("visible");
      loading.style.display = "none";
      container.style.display = "flex";
      container.classList.add("visible");

      // Hiển thị lời chúc đầu tiên ngay khi mở quà
      const nameElement = document.getElementById("name");
      const messageElement = document.querySelector(".blink-text");
      const wish = wishes[currentWishIndex]; // Lấy lời chúc đầu tiên
      nameElement.textContent = wish.name;
      messageElement.textContent = wish.message;
      document.body.style.background = wish.background;

      imageFrame.classList.add("fade-in-up");
      nameElement.style.opacity = "1";
      nameElement.style.transform = "translateX(0)";
      messageElement.style.opacity = "1";
      messageElement.style.transform = "translateX(0)";
      imageFrame.style.backgroundImage = "url('images/2.jpg')";
      fireworks();
      createSunflowerEffect(); // Kích hoạt hiệu ứng hoa hướng dương
      createRosePetals(); // Thêm hiệu ứng cánh hoa hồng
      createFloatingHearts(); // Thêm hiệu ứng trái tim bay lên
    }, 2000);
  }, 800);
}

function transitionImages(imageFrame, callback) {
  const images = [
    "url('images/1.jpg')",
    "url('images/2.jpg')",
    "url('images/3.jpg')",
    "url('images/4.jpg')",
    "url('images/5.jpg')",
    "url('images/6.jpg')",
  ];
  let index = 0;

  function showNextImage() {
    if (index < images.length) {
      imageFrame.style.backgroundImage = images[index];
      imageFrame.classList.remove("fade-in-up");
      void imageFrame.offsetWidth;
      imageFrame.classList.add("fade-in-up");
      index++;
      setTimeout(showNextImage, 1500);
    } else {
      imageFrame.style.backgroundImage = "url('images/6.jpg')";
      imageFrame.classList.remove("fade-in-up");
      void imageFrame.offsetWidth;
      imageFrame.classList.add("fade-in-up");
      imageFrame.style.transition = "transform 1s ease";
      imageFrame.style.transform = "scale(1.0) translate(-50%, -50%)";
      imageFrame.style.position = "fixed";
      imageFrame.style.top = "50%";
      imageFrame.style.left = "50%";
      imageFrame.style.width = "100vw";
      imageFrame.style.height = "100vh";
      imageFrame.style.zIndex = "1000";
      callback();
    }
  }

  showNextImage();
}

function createCollage(imageFrame) {
  imageFrame.classList.add("collage");
  imageFrame.style.backgroundImage = "none";
  imageFrame.innerHTML = `
    <div class="collage-image center" style="background-image: url('images/1.jpg');"></div>
    <div class="collage-image top-left" style="background-image: url('images/2.jpg');"></div>
    <div class="collage-image top-right" style="background-image: url('images/3.jpg');"></div>
    <div class="collage-image bottom-left" style="background-image: url('images/4.jpg');"></div>
    <div class="collage-image bottom-right" style="background-image: url('images/5.jpg');"></div>
  `;

  imageFrame.style.transition = "width 2s ease, height 2s ease";
  imageFrame.style.width = "100vw";
  imageFrame.style.height = "100vh";
  imageFrame.style.position = "fixed";
  imageFrame.style.top = "0";
  imageFrame.style.left = "0";
  imageFrame.style.zIndex = "1000";
}

function nextWish() {
  const nameElement = document.getElementById("name");
  const messageElement = document.querySelector(".blink-text");
  const finalWishElement = document.querySelector(".final-wish");
  const nextWishButton = document.querySelector(".next-wish-btn");
  const imageFrame = document.querySelector(".image-frame");
  const wishFrame = document.querySelector(".wish-frame");

  currentWishIndex++;

  confetti({
    particleCount: 30,
    spread: 60,
    origin: { x: 0.5, y: 0.7 },
    colors: ["#FF69B4", "#FFD700"],
    scalar: 0.6,
    shapes: ["circle", "square"],
    zIndex: 20,
    gravity: -0.2,
    ticks: 100,
  });

  if (currentWishIndex < wishes.length) {
    const wish = wishes[currentWishIndex];
    nameElement.style.opacity = "0";
    nameElement.style.transform = "translateX(-100px)";
    messageElement.style.opacity = "0";
    messageElement.style.transform = "translateX(-100px)";
    setTimeout(() => {
      nameElement.textContent = wish.name;
      messageElement.textContent = wish.message;
      if (currentWishIndex === 1) {
        imageFrame.style.backgroundImage = "url('images/3.jpg')";
      } else if (currentWishIndex === 2) {
        imageFrame.style.backgroundImage = "url('images/4.jpg')";
      }
      nameElement.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      messageElement.style.transition =
        "opacity 0.5s ease, transform 0.5s ease";
      wishFrame.classList.remove("fade-in-scale");
      void wishFrame.offsetWidth;
      wishFrame.classList.add("fade-in-scale");
      if (currentWishIndex === 1) {
        nameElement.style.transform = "scale(0.8)";
        messageElement.style.transform = "scale(0.8)";
        nameElement.style.opacity = "0";
        messageElement.style.opacity = "0";
        setTimeout(() => {
          nameElement.style.opacity = "1";
          nameElement.style.transform = "scale(1)";
          messageElement.style.opacity = "1";
          messageElement.style.transform = "scale(1)";
          createRosePetals(); // Thêm hiệu ứng cánh hoa hồng
          createFloatingHearts(); // Thêm hiệu ứng trái tim bay lên
        }, 50);
      } else if (currentWishIndex === 2) {
        nameElement.style.transform = "translateY(100px)";
        messageElement.style.transform = "translateY(100px)";
        nameElement.style.opacity = "0";
        messageElement.style.opacity = "0";
        setTimeout(() => {
          nameElement.style.opacity = "1";
          nameElement.style.transform = "translateY(0)";
          messageElement.style.opacity = "1";
          messageElement.style.transform = "translateY(0)";
          createRosePetals(); // Thêm hiệu ứng cánh hoa hồng
          createFloatingHearts(); // Thêm hiệu ứng trái tim bay lên
        }, 50);
      }
    }, 500);
    document.body.style.background = wish.background;
    finalWishElement.style.display = "none";
    nameElement.style.display = "block";
    messageElement.style.display = "block";
    nextWishButton.style.display = "block";
  } else {
    nameElement.style.display = "none";
    messageElement.style.display = "none";
    nextWishButton.style.display = "none";
    finalWishElement.style.display = "block";
    finalWishElement.style.opacity = "1";
    finalWishElement.style.transform = "rotate(0)";
    finalWishElement.style.fontSize = "3em";
    finalWishElement.style.position = "static";
    finalWishElement.style.top = "auto";
    finalWishElement.style.left = "auto";
    finalWishElement.style.transform = "rotate(0)";
    imageFrame.style.backgroundImage = "url('images/5.jpg')";
    document.body.style.background =
      "linear-gradient(45deg, #ff69b4, #ffd700, #b0e0e6)";
    confetti({
      particleCount: 200,
      spread: 120,
      origin: { y: 0.85 },
      colors: ["#FF69B4", "#FFD700", "#40E0D0"],
      scalar: 1.5,
      zIndex: 4,
    });

    setTimeout(() => {
      wishFrame.style.display = "none";
      transitionImages(imageFrame, () => {
        imageFrame.style.backgroundImage = "url('images/6.jpg')";
        imageFrame.classList.remove("fade-in-up");
        void imageFrame.offsetWidth;
        imageFrame.classList.add("fade-in-up");
        imageFrame.style.transition = "transform 1s ease";
        imageFrame.style.transform = "scale(1.0) translate(-50%, -50%)";
        imageFrame.style.position = "fixed";
        imageFrame.style.top = "50%";
        imageFrame.style.left = "50%";
        imageFrame.style.width = "100vw";
        imageFrame.style.height = "100vh";
        imageFrame.style.zIndex = "1000";
      });
    }, 3000);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");
  container.style.display = "none";
});
