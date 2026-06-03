async function getWeather() {

    const city = document.getElementById("city").value;

    if(city === ""){
        alert("Enter a city name");
        return;
    }

    const apiKey = "f6daa1b2234f993df3da6d839498d158";

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        const response = await fetch(url);
        const data = await response.json();

        document.getElementById("weatherResult").innerHTML = `
            <h2>${data.name}</h2>
            <p>🌡 Temperature: ${data.main.temp}°C</p>
            <p>☁ Weather: ${data.weather[0].main}</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
            <p>🌬 Wind: ${data.wind.speed} m/s</p>
        `;

    } catch(error) {
        document.getElementById("weatherResult").innerHTML =
        "City not found!";
    }
}