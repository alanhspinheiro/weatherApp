const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");

search.addEventListener("click", () => {
  const APIKey = "be5e896391cf135f4b8d3baa8f92ba9f";
  const city = document.querySelector(".search-box input").value;

  if (city =='') return;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metrics&appid=${APIKey}`
  )
    .then((response) => response.json())
    .then((json) => {
      const image = document.querySelector(".weather-box img");
      const temperature = document.querySelector(".weather-box .temperature");
      const description = document.querySelector(".weather-box .description");
      const humidity = document.querySelector(".weather-details .humidity span");
      const wind = document.querySelector(".weather-details .wind span");

      switch (json.weather[0].main) {
        case "Clear":
          image.src = "images/clear.png";

          break;

        case "Rain":
          image.src = "images/rain.png";

          break;

        case "Snow":
          image.src = "images/snow.png";

          break;

        case "Clouds":
          image.src = "images/cloud.png";

          break;

        case "Mist":
          image.src = "images/mist.png";

          break;

        case "Haze":
          image.src = "images/mist.png";

          break;

        default:
          image.src = "images/cloud.png";
      }
    });
});
