const tripDateContainer = document.querySelector(".TripDate-container");

const tripStart = new Date();
tripStart.setDate(18);

const tripEnd = new Date();
tripEnd.setDate(21);

const tripStartDate = tripStart.getDate();
const tripEndDate = tripEnd.getDate();

for (let i = tripStartDate; i <= tripEndDate; i++) {
  tripDateContainer.innerHTML += `<div onclick="handleFilterMarker(${i})">${i}</div>`;
}

async function handleFilterMarker(number) {
  const filterMarker = markers.filter(
    (marker) =>
      marker.travelDate === number ||
      marker.type === "Hotel" &&
      marker.travelDate >= number
  );
  const { Map } = await google.maps.importLibrary("maps");
  map = new Map(document.getElementById("map"), {
    center: { lat: 25.045488958061224, lng: 121.51568649748022 },
    zoom: 15,
  });

  for (let i = 0; i < filterMarker.length; i++) {
    marker = new google.maps.Marker({
      position: filterMarker[i].position,
      map: map,
      title: filterMarker[i],
      icon: iconByType[filterMarker[i].type],
    });
  }
}
