const keys = document.querySelectorAll('.key');

function playSound(keyAttribute) {
  const audio = document.querySelector(`audio[data-key="${keyAttribute.toUpperCase()}"]`);
  const key = document.querySelector(`.key[data-key="${keyAttribute.toUpperCase()}"]`);
  console.log("You Clicked", audio, key);
  if (!audio) return; // Stop the function if the key doesn't have an associated audio

  key.classList.add('active');
  audio.currentTime = 0; // Rewind to the start
  audio.play();

  setTimeout(() => {
      key.classList.remove('active');
  }, 100);
}

window.addEventListener('keydown', function(event) {
    playSound(event.key);
});

keys.forEach(key => {
  key.addEventListener('click', function() {
      const keyAttribute = this.getAttribute('data-key');
      playSound(keyAttribute);
  });
});