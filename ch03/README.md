# 객체(Object)

자바스크립트는 객체기반 프로그래밍 언어로 자바스크립트를 구성하는 대부분이 객체로 원시값인 number, string, boolean 등을 제외한 나머지는 모두 객체이다.

원시 타입은 하나의 값을 나타내지만 객체 타입은 다양한 타입의 값을 가지는 데이터 타입이다.

객체는 0개 이상의 프로퍼티로 구성되며 프로퍼티는 키(key)와 값(value)으로 구성됨

```jsx
const counter = {
		num : 0,
		// 또한 객체의 프로퍼티중 함수를 메서드(method)라고 한다.
		increase : function(){
				this.num++;
		}
};
```

프로퍼티의 키로는 문자열을 사용한다. 따라서 일반적인 문자열로 변환될 수 있는 경우 “”, ‘’를 생략 가능하다.

```jsx
const person = {
		"first-name": "재석"
}
const key = "age";
person.lastName = "주";
person[key] = 26;
console.log(person);
/*{
    "first-name": "재석",
    "lastName": "주",
    "age": 26
}*/
// 또한 프로퍼티 키를 중복되게 선언하면 기존 프로퍼티를 덮어 쓴다.
person.age = 20;
console.log(person.age); // 20
```

프로퍼티에 접근하기 위해선 .(마침표) 나 [](대괄호를 사용하면된다.

```jsx
console.log(person.age); // 20
console.log(person["first-name"]);
```

# 함수(Function)

프로그래밍에서의 함수도 수학에서의 함수와 같은 개념. 입력값을 받아(생략 가능) 처리(process)를 거쳐 출력값을 반환하는 것.

간단하게 x+y를 함수로 나타 내면 다음과 같다.

```jsx
// 함수 정의
function add(x, y) {
		return x + y;
}
// 함수 호출
add(4, 8); // 반환값 12
```

함수를 정의하는 방법은 4가지가 있다.

- 함수 선언문

함수 이름 생략 불가능

함수 이름은 함수 내부에서만 참조가능

```jsx
function add(x, y) {
		return x + y;
}
```

- 함수 표현식

```jsx
const add = function(x,y) {
		return x + y;
};
```

- Function 생성자 함수 : 일반적으로 사용하지 않고 비추천

```jsx
const add = new Function('x','y','return x + y');
```

- 화살표 함수(ES6) : ES6에서 도입되어 function 대신 ⇒를 사용해 더 간략하게 함수를 표현할 수 있다. 자세한 내용은 추후에

```jsx
const add = (x,y) => x+y;
```

## 각 방식의 차이점

### 호이스팅

**함수 선언문**으로 정의한 함수는 함수 선언문이 코드의 선두로 끌어 올려진 것처럼 동작한다. 이를 **함수 호이스팅**이라고한다. 하지만 **함수 표현식**과 **화살표 함수 방식**으로 함수를 정의하면 **변수 호이스팅**이 발생한다.

### this 바인딩

this 바인딩 때문에 화살표 함수가 만들어 졌다고 해도 과언이 아님. this란 보통 현재 스코프를 감싸고 있는 객체를 가르킨다.

함수 선언문과 함수 표현식은 호출 방식에 따라 `this` 가 동적으로 바인딩됨

화살표 함수는 `this` 가 정적으로 바인딩 됨. 자신을 포함하는 외부 스코프의 `this` 를 상속 받음

```jsx
const globalObject
```

## 함수의 표현식과 문장

함수 선언문은 문장(statement)

```jsx
function foo (num) {
		return num + 2;
} //
```

함수 표현식은 표현식(expression) 

ex) 익명 함수, 네임드 함수 표현식

```jsx
button.addEventListener("click", function(value){
		console.log(value);
}
console.log(function(){});
```

## 매개변수

함수 실행을 위해 필요한 값을 외부에서 함수 내부로 전달할 필요가 있는 경우. 매개변수(parameter)를 통해 인수(argument)를 전달.
매개변수는 함수를 정의할 때 사용되며, 함수 내부에서 변수와 동일하게 취급됨.

```jsx
function sub(x,y) {
	console.log(`${x} - ${y}`);
	return x-y;
}
// 외부에서 매개변수 참조 불가
console.log(x,y);
// 매개 변수 부족한 경우 undefined로 초기화. 초과되는 경우 무시
sub(2); // NaN
sub(10,5,2); // 5
```

### 매개변수 기본값 설정

```jsx
// 단축 평가
function multi(x,y) {
		x = x || 0;
		y = y || 0;
		return x * y;
}
// 기본값 설정
function div(x = 1,y = 1) {
		return x / y;
}
```

## 콜백 함수

다른 함수에 인수로 전달된 함수이다. 다음과 같이 사용해 볼 수 있다.

```jsx
// n 번 반복하는 함수가 있다고 했을때
function repeatAll(n) {
		for (let i = 0; i < n; i++) {
				console.log(i);
		}
}
// i가 홀수 일떄만 실행하는 함수
function repeat1(n) {
		for (let i = 0; i < n; i++) {
				if(i % 2) console.log(i);
		}
}
// 
```