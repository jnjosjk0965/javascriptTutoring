# API 요청

이번 수업은 간단히 개념만 훑고 가겠습니다.

## API란?

API 는 Application Programming Interface 약자로 간단히 말하자면 프로그램 또는 데이터베이스 등이 서로 통신하여 데이터, 기능 등을 주고 받을 수 있는 일종의 규칙.

따라서 특정 API가 설정해 놓은 규칙대로 데이터 등을 요구한다면 API 서버에서 원하는 데이터를 전달해 주던가 요청을 처리해주는 방식.

### JSON

JSON이란 JavaScript Object Notation의 약자로 JavaScript 객체 문법으로 데이터를 나타내는 방법으로 인터넷 상에서 데이터를 주고 받을 때 사용.
```jsx
{
    "coord": {
        "lon": 126.7302,
        "lat": 37.7291
    },
    "weather": [
        {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 28.96,
        "feels_like": 35.51,
        "temp_min": 28.9,
        "temp_max": 28.99,
        "pressure": 1002,
        "humidity": 84,
        "sea_level": 1002,
        "grnd_level": 999
    },
    "visibility": 10000,
    "wind": {
        "speed": 7.72,
        "deg": 230
    },
    "clouds": {
        "all": 75
    },
    "dt": 1724315775,
    "sys": {
        "type": 1,
        "id": 8105,
        "country": "KR",
        "sunrise": 1724273686,
        "sunset": 1724321855
    },
    "timezone": 32400,
    "id": 1840898,
    "name": "Paju",
    "cod": 200
}
```
이러한 양식이 JSON만 있는것은 아니다. 이전부터 사용하던 XML 이나 최근 떠오르는 yaml 등이 있다.

## HTTP란?

HTTP란 HyperText Transfer Protocol 의 약자로 하이퍼텍스트를 전송하기 위한 규칙으로 우리가 잘하는 HTML은 이러한 하이퍼텍스트가 포함된 문서라 할 수 있다.

HTTP 요청은 다음과 같은 데이터를 포함한다.

- HTTP 버전 유형
- URL
- HTTP 메서드
- HTTP 헤더 : 추가 정보, 클라이언트에 관한 정보
- HTTP 본문 : 선택 사항인 본문

### HTTP 메서드

일단 현 시점에서는 크게 2가지

- GET 방식
    - 용도 : 주로 데이터 요청 및 조회
    - 데이터 전송 : URL의 쿼리 문자열에 포함됨 예를 들어 http://example.com/search?name=tom&page=2
    - 데이터가 URL에 노출되어 보안이 취약함
    - URL 길이에 제한이 있어 데이터 양이 제한적
- POST 방식
    - 용도 : 데이터 제출 및 업데이트
    - 데이터 전송 : HTTP 요청의 본문에 포함되어 전송
    - 보안이 GET 방식보단 좋음
    - 데이터 양의 제한이 없음

## JavaScript에서 API 요청하는 방법

```jsx
fetch('http://www.testUrl.com/daa')
.then(response => response.json) // 응답을 JSON 형식으로 변환
.then(data => console.log(data)) 
.catch(error => console.error('Error', error));
```

- fetch() : API에 요청을 보냄
- .then() : 요청이 성공하면 그 다음 할일을 정함
- .catch() : 에러가 발생하면 어떻게 처리할 지 지정

### 날씨 api 사용

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=`, initial-scale=1.0">
  <title>Document</title>
  <style>
    .container {
      display: flex;
      width: 150px;
      height: 60px;
      border: 1px solid #ccc;
      padding: 10px;
    }

    #weather {
      flex: 1;
      font-size: 20px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      border-right: 1px solid #ccc;
    }

    .weather-info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-left: 10px;
    }

    #temp {
      display: flex;
      font-size: 18px;
    }

    #city {
      display: flex;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div id="weather">날씨</div>
    <div class="weather-info">
      <div id="temp">온도</div>
      <div id="city">도시</div>
    </div>
  </div>
  <script src="weather.js"></script>
</body>
</html>
```

```jsx
// 날씨 API 사용해보기
// 1. 브라우저로부터 현재 위치 받아오기
// https://developer.mozilla.org/ko/docs/Web/API/Geolocation/getCurrentPosition

// 2. api 키 발급
// https://openweathermap.org/api

const API_KEY = "5c16ed7cb85f665840e872f63c828625";
const $city = document.getElementById("city");
const $temp = document.getElementById("temp");
const $weather = document.getElementById("weather");

const loadGeoSuccess = function(position) { // javascript에서 GeolocationPosition object를 매개변수로 줌
  console.log(position);
  const lat = position.coords.latitude; // 위도
  const lon = position.coords.longitude; // 경도
  console.log(`your position is ${lat}, ${lon}`);
  
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
  .then(response => response.json()).then(data => {
    console.log(data)
    $city.innerText = data.name;
    $temp.innerText = `${Math.round(data.main.temp)}°C`;
    
    let weatherImg = document.createElement("img");
    weatherImg.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    
    $weather.innerText = "";
    $weather.append(weatherImg);

  });
}
const loadGeoFailed = function() {
  alert("위치를 불러오는데에 실패했습니다.");
} 

navigator.geolocation.getCurrentPosition(loadGeoSuccess, loadGeoFailed);

```

해당 내용을 자세히 알고 싶다면 비동기, 프로미스에 대해 알아볼 것