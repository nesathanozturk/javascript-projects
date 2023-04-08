// Elements:
const container = document.querySelector(".container");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("search-btn");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");
const notFound = document.querySelector(".not-found");
const image = document.getElementById("weatherImg");
const locationName = document.querySelector("#locationName");
const lon = document.querySelector("#lon");
const lat = document.querySelector("#lat");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("windSpeed");
const pressure = document.getElementById("pressure");

searchBtn.addEventListener("click", async () => {
  let term = searchInput.value;
  const API_KEY = "895284fb2d2c50a520ea537456963d9c";
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${term}&units=metric&appid=${API_KEY}`;

  try {
    if (term.trim() === "") {
      alert("Please enter a location.");
      return;
    } else {
      await fetch(API_URL)
        .then((res) => res.json())
        .then((json) => {
          if (json.cod === "404") {
            container.style.height = "400px";
            weatherBox.style.display = "none";
            weatherDetails.style.display = "none";
            notFound.style.display = "block";
            notFound.classList.add("fadeIn");
            return;
          } else {
            notFound.style.display = "none";
            notFound.classList.remove("fadeIn");

            switch (json.weather[0].main) {
              case "Clear":
                image.src = "assets/clear.png";
                break;

              case "Clouds":
                image.src = "assets/cloud.png";
                break;

              case "Rain":
                image.src = "assets/rain.png";
                break;

              case "Wind":
                image.src = "assets/wind.png";
                break;

              case "Snow":
                image.src = "assets/snow.png";
                break;

              default:
                image.src = "";
            }

            locationName.innerHTML = `${json.name}`;
            lon.innerHTML = `${json.coord.lon}`;
            lat.innerHTML = `${json.coord.lat}`;
            temperature.innerHTML = `${parseInt(
              json.main.temp
            )}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;
            pressure.innerHTML = `${json.main.pressure}`;
            weatherBox.style.display = "";
            weatherDetails.style.display = "";
            weatherBox.classList.add("fadeIn");
            weatherDetails.classList.add("fadeIn");
            container.style.height = "550px";
          }
        });
      searchInput.value = "";
    }
  } catch (e) {
    console.log(e);
  }
});
