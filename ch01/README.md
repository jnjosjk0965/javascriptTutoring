# 시작하기 전에

## 실습 환경 구축

- vscode 설치
    - korean
    - live server
- node.js 설치
    - node.js란? javascript의 또다른 실행 환경
    - LTS란?  Long Term Support 의 약자로 장기 지원되는 버전
    - 설치 확인 터미널에 `node -v` 입력

# 자바 스크립트 소개

## 웹문서의 기본 구조

HTML : 웹 사이트의 뼈대, 내용

CSS : 웹 사이트의 디자인, 배치

JavaScript : 프로토타입기반 스크립트 언어로 웹 사이트의 동작을 구현할 수 있다.

<aside>
💡 스크립트 언어란?
다른 응용 프로그램에 삽입(기생)되어 동작하는 프로그래밍 언어로
javaScript는 html 문서에 삽입되어 웹브라우저에서 실행되는 스크립트 언어입니다.
하지만 최근에 node.js와 같은 프레임워크를 사용하면 서버 측 프로그래밍도 가능

</aside>

## javaScript를 사용하면 가능한 일

- 웹 클라이언트 애플리케이션 개발 : 흔히 말하는 프론트엔드
- 웹 서버 개발 : 흔히 말하는 백엔드 node.js를 통해 개발 가능
- 모바일 애플리케이션 개발 : React Native 라는 프레임워크를 사용해 개발가능
- 데스크톱 애플리케이션 개발 : Electron 모듈을 통해 개발 가능

# 표현식과 문장

## 표현식(expression)

하나의 값으로 평가될 수 있는 코드 조각

```jsx
273
20+24
"javaScript Programming"
```

## 문(Statement)

프로그램의 실행 흐름을 제어하거나 특정 작업을 수행하는 코드 조각

뒤에서 배울 if, while, for, switch 등이 여기에 해당

```jsx
if( num > 9 ) {
	console.log(num);
}
```

# 기본 자료형

자바스크립트의 6가지 (심볼까지 7가지 자료형)

- number
- string
- boolean
- function
- object
- undefined

## 숫자(Number)

```jsx
typeof(100); // 'number'
console.log(52);
console.log(3.14);
// 연산자
console.log(3 + 4); // 7
console.log(43 - 27); // 16
console.log(4 * 8); // 32
console.log(10 / 2); // 5
console.log(13 / 3); // 1
```

### Number()

숫자로 형변환

```jsx
	Number('52'); // 52
	Number(true); // 1
	// NaN : Not a Number
	Number("hello"); // NaN
	// NaN은 무조건 다름
	console.log(NaN == NaN); // false
	// 비교시 isNaN() 함수를 사용
	console.log(isNaN(Number("hello")));
```

## 문자열(String)

문자(character)의 집합

생성시 “”(큰따옴표) 나 ‘’ (작은 따옴표) 사용 → 반드시 한 쌍으로 사용

```jsx
typeof("hello world!");
console.log("안녕하세요");
console.lgo('그는 말했다. "반갑습니댜"');
```

### 이스케이프 문자

\ (백슬레쉬)를 사용해 특수한 문자를 포함하거나 기능을하는 문자

| \n | 줄 바꿈 (Newline) |
| --- | --- |
| \t | 탭 (Tab) |
| \\ | 백슬래시 자체 (\) |
| \' | 작은 따옴표 (Single quote) |
| \" | 큰 따옴표 (Double quote) |

### 문자열 더하기

```jsx
console.log("아버지가" + "방에" + "들어가신다.");
```

### 템플릿 문자열

```jsx
// `(백틱)으로 시작
`528 + 729 = ${528 + 729}`

`올해는 ${new Date().getFullYear()}년 입니다.`
```

### String()

문자열로 형변환

## 불리언(Boolean)

true or false 로 구성 (소문자로 시작 → 파이썬과 혼동 x)

```jsx
typeof(true);
```

### 비교 연산자

| 연산자 | 설명 |
| --- | --- |
| == | 자료형을 일치 시켜 값이 일치하는지 비교 |
| === | 자료형과 값이 동시에 일치하는지 비교 |
| != | 자료형을 일치 시켜 값이 다른지 비교 |
| !== | 자료형이나 값 다른지 비교 |
| > | 왼쪽 피연산자가 큰지 |
| < | 오른쪽 피연산자가 큰지 |
| >= | 왼쪽 피연산자가 크거나 같은지 |
| <= | 오른쪽 피연산자가 크거나 같은지 |

```jsx
// ==
console.log(5 == "5"); // true
// ===
console.log(5 === "5"); //false
```

### 논리 연산자

불리언 끼리 비교

| 연산자 | 설명 |
| --- | --- |
| ! | 논리 부정 연산자(NOT) |
| || | 논리합 연산자(OR) |
| && | 논리곱 연산자(AND) |

```jsx
!true //false
true || false // true
true && false // false
```

<aside>
💡 단축 평가
논리 연산에서 왼쪽항으로 이미 결과가 나온다면 오른쪽항은 실행되지 않음

</aside>

**예시**

```jsx
false && alert("true");
```

### Boolean()

불리언으로 형변환

다음의 요소는 false로 변환

- 0
- NaN
- “” (빈 문자열)
- null
- undefined

## undefined

변수를 선언했으나 초기화 하지 않은 자료형

```jsx
let a
typeof a // undefined
```

## null

변수가 비어있음을 명시적으로 표현. 

# 변수와 상수 (Variables & Constant)

다음과 같은 코드가 있다고 하자

```jsx
console.log(6 + 3);
console.log(6 - 3);
console.log(6 * 3);
console.log(6 / 3);
```

위와 같은 코드에서 6를 모두 15로 바꾸고 싶은 경우 우리는 이것을 일일이 하기 귀찮다

따라서 다음과 같이 바꿀 수 있다.

```jsx
const a = 6;
const b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
```

여기서 const는 상수를 선언할 때 사용한다. 상수란 변하지않는 값을 저장할 때 사용. 

또한 선언시에 초기화해주어야함

```jsx
// 따라서 변경하려하면 오류가 뜸
a = 8;
```

계속 변화하는 값을 저장하고 싶다면 let을 사용

```jsx
let name = prompt("이름을 입력하세요");
console.log("안녕하세요 " + name + "님"); 
```

## var과 let, const 차이

1. 스코프

var은 함수 스코프, let과 const는 블록 스코프

2. 호이스팅

var, let, const 모두 선언은 호이스팅(끌어올림)하지만 var은 undefined로 초기화하여 선언 후 참조 가능

```jsx
console.log(a); // undefined
var a = 10;
```

let과 const는 선언된 위치에서 초기화를 진행하여 초기화 이전에는 참조할 수 없다.

```jsx
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;
```

3. 중복 선언

var은 동일한 이름으로 변수 선언 가능 

let과 const는 불가능