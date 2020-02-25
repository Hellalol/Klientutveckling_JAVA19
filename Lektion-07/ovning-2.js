// Övning
// 1. Skapa en konstruktor som besrkiver en punkt
// 2. Skapa en metod som beräknar avståndet mellan två punkter.
function Point(x, y) {
  this.x = x;
  this.y = y;
  this.distance = function(p) {
    const dx = this.x - p.x;
    const dy = this.y - p.y;
    return Math.sqrt(dx ** 2 + dy ** 2);
  };
}

function calcuate() {
  // 3. Skapa två punkter(två objekt).
  const p1 = new Point(
    document.querySelector("#x1").value, 
    document.querySelector("#y1").value
  );
  const p2 = new Point(
    document.querySelector("#x2").value, 
    document.querySelector("#y2").value
  );

  // 4. Beräkna avståndet mellan punkterna.
  const distance = p1.distance(p2);
  document.querySelector("#result").textContent = 
  "Avståndet: " + distance.toFixed(2);
}

// Koppla händelselyssnare (Event Listeners)
const button = document.querySelector("#button");
button.addEventListener("click", calcuate);