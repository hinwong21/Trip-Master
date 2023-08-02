const footerContainer = document.querySelector(".Footer-container");

// footerContainer.innerHTML = ` <i class="fa-solid fa-plane-departure"></i>
//       <i class="fa-solid fa-earth-asia"></i>
//       <i class="fa-solid fa-cart-shopping"></i>`;

const mainPage = document.querySelector(".MainPage")
const tripPage = document.querySelector(".TripPage");

function handleToMainPage() {
    window.location.href = "../Main/Main.html";
}

function handleToTripPage() {
  window.location.href = "../Trip/Trip.html";
}

