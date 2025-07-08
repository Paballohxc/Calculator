function showBigImageFlash() {
  const flash = document.getElementById('flash-image');

  // Clear previous content
  flash.innerHTML = '';

  // Create image
  const img = document.createElement('img');
  img.src = 'https://media1.tenor.com/m/cxnn79MQgIgAAAAd/calm.gif'; // Your full-screen image/GIF URL

  flash.appendChild(img);

  // Show the image
  flash.style.opacity = '1';

  // Hide it quickly after 1 second
  setTimeout(() => {
    flash.style.opacity = '0';
  }, 3500); // 1 second
}

function playEqualSound() {
  const audio = new Audio('sounds/WhatsApp Audio 2025-07-08 at 12.50.17.ogg'); // or direct URL
  audio.play();
}

function calculate() {
  try {
    let realResult = eval(display.value);
    
    // 20% chance to mess with the answer
    if (Math.random() < 0.9) {
      // Add or subtract a small random number (1 to 5)
      let cheat = Math.floor(Math.random() * 5) + 1;
      if (Math.random() < 0.5) cheat = -cheat;
      realResult += cheat;
    }
    
    display.value = realResult;
  } catch {
    display.value = 'Error';
  }
}
