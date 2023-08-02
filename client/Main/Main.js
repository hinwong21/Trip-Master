const countdownContainer = document.querySelector(".Countdown-container");

// countdown the coming trip  
const present = new Date();
const presentDate = present.getTime();

const tripStart = new Date();
tripStart.setDate(18);
tripStart.setMonth(7);
tripStart.setFullYear(2023);

const tripStartDate = tripStart.getTime();

const countDown = tripStart - presentDate;
const countDownDate = Math.floor(countDown / (24 * 60 * 60 * 1000));

countdownContainer.innerHTML = `<div>距離台灣之旅還有${countDownDate}日</div>`;