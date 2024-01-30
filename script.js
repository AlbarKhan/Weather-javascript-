"use strict";

const apiKey = "42a03fdda88fafef99ea3d19267f02eb";
const city = "Mumbai";
function getWeather() {
  //   const city = document.getElementById("city").value;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      displayWeather(data);
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}

function displayWeather(data) {
  console.log(data);
}

getWeather();
