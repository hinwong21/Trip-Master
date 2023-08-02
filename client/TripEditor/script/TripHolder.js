const tripContainer = document.querySelector(".TripHolder-container");
tripContainer.addEventListener("click", rotateTripHolder);
function rotateTripHolder() {
  var tripHolder = document.querySelector(".TripHolder");
  var isRotated = tripHolder.style.transform === "rotateY(180deg)";

  if (isRotated) {
    tripHolder.style.transform = "rotateY(0deg)";
  } else {
    tripHolder.style.transform = "rotateY(180deg)";
  }
}
