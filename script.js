"use strict";

const apiKey = "42a03fdda88fafef99ea3d19267f02eb";
// const city = "Mumbai";
function getWeather(cityname) {
  //   const city = document.getElementById("city").value;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apiKey}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      displayWeather(data);
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}

const city = document.querySelector(".city");
const submitBtn = document.querySelector(".submit");
const degreetext = document.querySelector(".degree");
const weatherIcon = document.querySelector(".fa-sun");
const weatherDescription = document.querySelector(".description");
const feelsLike = document.querySelector(".feel");
const time = document.querySelector(".time");
const windText = document.querySelector(".wind");
const humidityText = document.querySelector(".humidity");
const visibilityText = document.querySelector(".visibility");
const pressureText = document.querySelector(".pressure");

// weatherIcon.addEventListener("click", () => console.log("kk"));
function displayWeather(data) {
  console.log(data);
  // getting current Temperature
  const currentTemperature = Math.trunc(data.main.temp - 273.15);
  const feelsLikeTemperature = Math.trunc(data.main.feels_like - 273.15);

  // getting currentTime
  const getTime = data.dt;
  displayTime(getTime, time);

  // Convertng wind from meter per second to km/hr
  const windSpeedInMetersPerSecond = data.wind.speed;
  const windSpeedInKilometersPerHour = windSpeedInMetersPerSecond * 3.6;
  windText.textContent = windSpeedInKilometersPerHour.toFixed(2);

  // Getting Humidity
  const getHumidity = data.main.humidity;
  humidityText.textContent = `${getHumidity}%`;

  // getting visibility
  const getVisibility = data.visibility / 1000;
  console.log(getVisibility);
  visibilityText.textContent = `${getVisibility.toFixed(2)} k`;

  // getting Pessure
  const getPressure = data.main.pressure;
  pressureText.textContent = `${getPressure} hPa`;
  if (currentTemperature < 15) {
    weatherIcon.className = "fa-regular fa-snowflake";
  } else {
    weatherIcon.className = "fa-regular fa-sun";
  }
  degreetext.textContent = currentTemperature;
  weatherDescription.textContent = data.weather[0].description;
  feelsLike.textContent = feelsLikeTemperature;
}

// getWeather(city);
submitBtn.addEventListener("click", function () {
  const cityName = document.getElementById("cityName").value;
  getWeather(cityName);
  city.textContent = cityName;
});

function displayTime(date, element) {
  const ddate = new Date(date * 1000);
  const hours = ddate.getHours();
  const minutes = ddate.getMinutes();
  if (element) element.textContent = `${hours}:${minutes}`;
}
