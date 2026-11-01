let inp = document.querySelector("#inp");
let btn = document.querySelector("#btn");

btn.addEventListener("click", (ev) => {
  // 1. Get the city name
  let city = inp.value;
  // 2. API call to get lat and lon
  let apiKey = "68eb9a82e650df54c98feebbf88e20d7";
  let url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`;

  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      console.log(res[0]);
      let lat = res[0].lat;
      let lon = res[0].lon;
      let newUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
      fetch(newUrl)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          let temp = res.main.temp;
          let description = res.weather[0].description;
          console.log(temp, description);

          let li = document.createElement("li");
          li.innerHTML = `
            <div>
                <div>Temp: ${temp}</div>
                <div>Description : ${description}</div>
            </div>
          `;
          let details = document.querySelector(".details");
          details.appendChild(li);
        });
    });

  // 3. API call to get the weather
});
