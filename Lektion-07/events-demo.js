/*************************************
 * 
 * Arbeta med Events i JavaScript
 * 
 *************************************/ 

 // 1. HTML Event Attributes
function getTime() {
  document.getElementById("time").innerHTML = 
  new Date().toTimeString().substring(0, 8);
}

// 2. Standard DOM Events
let elUser = document.getElementById("username");
elUser.onblur = checkUsername; // OBS! Inga parenteser

let login = document.getElementById("login");
login.onclick = checkUsername; // OBS! Inga parenteser

function checkUsername() {
  let elMsg = document.getElementById("feedback");

  if (elUser.value.length < 5) {
    elMsg.textContent = "Username must be 5 characters or more!";
  } else {
    elMsg.textContent = " OK ";
  }
}

// 3. Event Listeners
let btn = document.getElementById("btnDate");
btn.addEventListener("click", displayDate); // OBS! Inga parenteser

function displayDate() {
  document.getElementById("date").innerHTML = 
  new Date().toLocaleDateString();
}