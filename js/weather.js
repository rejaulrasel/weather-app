const loadWeatherData = () => {
    const searchCityValue = document.getElementById('searchCity').value;
    document.getElementById('searchCity').value = ''
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchCityValue}&appid=15b585d189905c07c856dbbe4d2baf2b`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayWeather(data));
        document.getElementById('spinner').classList.remove('d-none');
}

const displayWeather = weatherData => {
    
    console.log(weatherData)
    const { name } = weatherData;
    let { temp, feels_like } = weatherData.main;
    temp = (temp - 273).toFixed(2);
    feels_like = (feels_like - 273).toFixed(2);
    const { main } = weatherData.weather[0];

    const displayWeather = document.getElementById('displayWeather');
    displayWeather.textContent='';
    document.getElementById('spinner').classList.add('d-none');
    displayWeather.innerHTML = `
    <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="">
            <h1>${name}</h1>
            <h3><span>${temp}</span>&deg;C</h3>
            <h3>Feels like: <span>${feels_like}</span>&deg;C</h3>
            <h1 class="lead">${main}</h1>
    `
}
