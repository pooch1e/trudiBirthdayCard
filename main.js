// Create floating balloons
function createBalloon() {
  const balloon = document.createElement('div');
  balloon.className = 'balloon';
  balloon.innerHTML = ['🎈', '🎀', '🎉', '🎊', '✨'][
    Math.floor(Math.random() * 5)
  ];
  balloon.style.left = Math.random() * 100 + '%';
  balloon.style.top = Math.random() * 100 + '%';
  balloon.style.animationDelay = Math.random() * 4 + 's';
  balloon.style.animationDuration = Math.random() * 3 + 2 + 's';
  document.body.appendChild(balloon);

  // Remove balloon after animation
  setTimeout(() => {
    if (balloon.parentNode) {
      balloon.parentNode.removeChild(balloon);
    }
  }, 8000);
}

// Create sparkles
function createSparkle() {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  sparkle.innerHTML = '✨';
  sparkle.style.left = Math.random() * 100 + '%';
  sparkle.style.top = Math.random() * 100 + '%';
  sparkle.style.animationDelay = Math.random() * 2 + 's';
  document.getElementById('sparkles').appendChild(sparkle);

  setTimeout(() => {
    if (sparkle.parentNode) {
      sparkle.parentNode.removeChild(sparkle);
    }
  }, 4000);
}

// Generate balloons and sparkles continuously
setInterval(createBalloon, 2000);
setInterval(createSparkle, 500);

// Initial burst
for (let i = 0; i < 10; i++) {
  setTimeout(() => createBalloon(), i * 200);
  setTimeout(() => createSparkle(), i * 100);
}

// Add click effects
document.addEventListener('click', function (e) {
  for (let i = 0; i < 5; i++) {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '💖';
    sparkle.style.position = 'fixed';
    sparkle.style.left = e.clientX + (Math.random() * 60 - 30) + 'px';
    sparkle.style.top = e.clientY + (Math.random() * 60 - 30) + 'px';
    sparkle.style.fontSize = '20px';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '1000';
    sparkle.style.animation = 'sparkle 1s ease-out forwards';
    document.body.appendChild(sparkle);

    setTimeout(() => {
      if (sparkle.parentNode) {
        sparkle.parentNode.removeChild(sparkle);
      }
    }, 1000);
  }
});
