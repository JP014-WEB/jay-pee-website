function order(service) {
  // EDIT YOUR WHATSAPP NUMBER HERE - format 254714838764
  let myNumber = "254700000000";
  let msg = "Hi Jay Pee, I want " + service;
  window.open("https://wa.me/" + myNumber + "?text=" + encodeURIComponent(msg));
}
// SLIDESHOW - Photos keep changing
let photos = [
  "images/photo 1.jpg",
  "images/photo2.jpg",
  "images/photo3.jpg",
  "images/photo4.jpg",
  "images/photo5.jpg",
  "images/photo6.jpg"
];

let current = 0;

setInterval(function() {
  current = current + 1;
  if (current >= photos.length) {
    current = 0;
  }
  document.getElementById("slideshow").src = photos[current];
}, 3500); // 3000 = changes every 3 seconds
// ===== HAMBURGER MENU =====
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

// Close menu when you click a link
document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("navLinks").classList.remove("show");
  });
});