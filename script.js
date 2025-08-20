const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// YES button click → cute message
yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="text-align:center; padding:50px; color:#ff1493; font-family:'Comic Sans MS', cursive;">
      <h1>Yayyy! 🎉💖</h1>
      <p>Anjali (Rasmalai), you just made me the happiest person ever 😍🐱</p>
      <img src="https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif" width="200">
    </div>
  `;
});

// NO button hover/click → bhaag jaye 🚀
function moveNoButton() {
  const container = document.querySelector(".buttons");
  const containerRect = container.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = containerRect.width - btnRect.width;
  const maxY = containerRect.height - btnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("click", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton); // mobile ke liye
