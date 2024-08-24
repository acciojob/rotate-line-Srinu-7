//your JS code here. If required.
const line = document.getElementById('line');
let angle = 0;

function rotateLine() {
  // Increment the angle by 2 degrees
  angle += 2;

  // Apply the rotation transformation
  line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
}

// Set an interval to rotate the line every 20 milliseconds
setInterval(rotateLine, 20);
