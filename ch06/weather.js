// 지금 현재 위치 알기
// 1. 브라우저로 부터 현재 위치 받기
// https://developer.mozilla.org/ko/docs/Web/API/Geolocation/getCurrentPosition

// 2. api 키 발급
// https://openweathermap.org/api
const API_KEY = "your api key is here!";

const $weather = document.getElementById("weather");
const $temp = document.getElementById("temp");
const $city = document.getElementById("city");

const loadGeoSuccess = function(position){
    console.log(position);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(`your position is ${lat}, ${lon}`);

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        $city.innerText = data.name;
        $temp.innerText = `${Math.round(data.main.temp)}°C`;

        let weatherImg = document.createElement("img");
        weatherImg.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        $weather.innerText = "";
        $weather.append(weatherImg);
    });
}
const loadGeoFailed = function(){
    console.log("현재 위치를 불러오는데 실패했습니다.");
}

navigator.geolocation.getCurrentPosition(loadGeoSuccess, loadGeoFailed);