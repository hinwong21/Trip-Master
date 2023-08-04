const footerContainer = document.querySelector(".Footer-container");

function handleToMainPage() {
  window.location.href = "../Main/Main.html";
}

function handleToTripPage() {
  window.location.href = "../Trip/Trip.html";
}

const plane = document.querySelector(".fa-plane-departure");
const earth = document.querySelector(".fa-earth-asia");
const shopping = document.querySelector(".fa-cart-shopping");

if (window.location.href.includes("Main")) {
  earth.style.color = "black";
} else if (window.location.href.includes("Trip")) {
  plane.style.color = "black";
}
// not already write the third page
