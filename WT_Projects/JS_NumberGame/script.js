const homePage = document.getElementById("homePage");
const gamePage = document.getElementById("gamePage");
const scoreboard = document.getElementById("scoreboard");

// Navbar section switching
function showSection(sectionId) {
  homePage.style.display = "none";
  gamePage.style.display = "none";
  scoreboard.style.display = "none";

  document.getElementById(sectionId).style.display = "block";
}

// Home button → goes to Play
function startHomeGame() {
  showSection("gamePage");
}

console.log("Main logic loaded (navbar, home, scoreboard).");
