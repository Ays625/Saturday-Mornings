const keys = document.querySelectorAll('.key');
let body = document.querySelectorAll("body")[0];

function bodyColor(keyAttribute) {
  console.log(keyAttribute);
  if (keyAttribute.toUpperCase()=="A") {
    body.style.background = "orange";
  }
}

function playSound(keyAttribute) {
  const audio = document.querySelector(`audio[data-key="${keyAttribute.toUpperCase()}"]`);
  const key = document.querySelector(`.key[data-key="${keyAttribute.toUpperCase()}"]`);
  if (!audio) return; // Stop the function if the key doesn't have an associated audio

  key.classList.add('active');
  audio.currentTime = 0; // Rewind to the start
  audio.play();

  setTimeout(() => {
      key.classList.remove('active');
  }, 100);
}

window.addEventListener('keydown', function(event) {
    console.log(event.key);
    playSound(event.key);
    bodyColor(event.key);
});

keys.forEach(key => {
  key.addEventListener('click', function() {
      const keyAttribute = this.getAttribute('data-key');
      playSound(keyAttribute);
  });
});