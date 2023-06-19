const API_KEY = "fd11f0eabd176c375407415df8e25abc";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=kr&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:nth-child(1)");
        const temp = document.querySelector("#weather span:nth-child(2)")
        const city = document.querySelector("#weather span:last-child");
        const name = data.name;
        weather.innerText = `${data.weather[0].main}`;
        temp.innerText = `${data.main.temp} ºC`;
        city.innerText = `${name}`;
    })
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);