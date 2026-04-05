async function getWeather() {

let city = document.getElementById("city").value.trim();

let apiKey = "1283050790ecd326200b25f381b27840";

let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

try {

let response = await fetch(url);
let data = await response.json();

console.log(data);

// if API returns error
if (data.cod != 200) {
alert(data.message);
return;
}

// show weather data
document.getElementById("cityName").innerText = data.name;

document.getElementById("temp").innerText =
"Temperature: " + data.main.temp + " °C";

document.getElementById("condition").innerText =
"Weather: " + data.weather[0].main;

document.getElementById("humidity").innerText =
"Humidity: " + data.main.humidity + "%";

document.getElementById("wind").innerText =
"Wind Speed: " + data.wind.speed + " m/s";

} catch (error) {

console.log(error);
alert("Error loading weather data");

}

}