# 연산자

피연산자를 연산하여 새로운 값을 만듬.

## 산술 연산자

산술 연산자는 피연산자를 대상으로 계산을 수행해 숫자 값을 만들어낸다. 

산술 연산이 불가능할 경우 NaN을 반환

### 이항 산술 연산자

일반적으로 알고 있는 +, -, *, /, % 는 피연산자(항)가 2개 필요한 이항 산술 연산자라고 한다.

### 단항 산술 연산자

1개의 피연산자를 연산해 숫자 값을 만듬

| 연산자 | 설명 |
| --- | --- |
| ++ | x++과 같이 사용하면 x=x+1과 같은 효과. 위치에 따라 결과가 다름 |
| -- | x--와 같이 사용하면 x=x-1과 같은 효과. 위치에 따라 결과가 다름 |

```jsx
// 전위 증가/감소 연산자
let num = 3, result;
/*
	전위 : 우선 증감 연산을 진행 후 다른 연산 수행
	후위 : 다른 연산을 수행한 뒤에 증감 연산을 진행
*/

result = num++;
console.log(`num = ${num} result = ${result}`); // num = 4 result = 3

result = ++num;
console.log(`num = ${num} result = ${result}`); // num = 5 result = 5

result = num--;
console.log(`num = ${num} result = ${result}`); // num = 4 result = 5

result = --num;
console.log(`num = ${num} result = ${result}`); // num = 3 result = 3
```

### 문자열 연결 연산자

+ 연산자는 피연산자 중 하나 이상이 문자열인 경우 문자열 연결 연산자로 사용된다.

```jsx
// 피연산자에 문자열 포함시 나머지를 문자열로 변환
console.log(2024 + "0718"); // "20240718"
console.log("It's " + true); // "It's true"
// 기본적으로 산술 연산은 다른 자료형을 숫자로 변환
// + 연산자와 문자열 피연산자가 함께 사용되는 경우 제외
console.log(2024 -"0718"); // 1306
console.log(12 + true); // 13
```

## 할당 연산자

우항의 피연산자의 평가 결과를 좌항에 변수에 할당

| 연산자 | 설명 |
| --- | --- |
| = | 우항의 결과를 좌항의 변수에 할당 |
| += | 우항의 값을 좌항에 더한 값을 재할당 |
| -= | 우항의 값을 좌항에 뺀 값을 재할당 |
| *= | 우항의 값을 좌항에 곱한 값을 재할당 |
| /= | 우항의 값을 좌항에 나눈 값을 재할당 |
| %= | 좌항의 값을 우항으로 나눈 나머지 값을 할당 |

```jsx
// 연쇄 할당도 가능 
let a = b = c = 12; // a = 12, b = 12, c = 12
```

## 비교 연산자

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

## 삼항 조건 연산자

조건식의 결과에 따라 반환할 값을 결정

`조건식 ? 조건식이 true 일 때 반환할 값 : 조건식이 false 일 때 반환할 값`

```jsx
const score = 78;
let isPassed = score > 60 ? "합격" : "불합격";
// 만약 조건식의 결과가 Boolean타입이 아니라면 자동으로 변환
const number = 53
let result = number % 2 ? "홀수" : "짝수";
```

## 논리 연산자

불리언 끼리 비교

| 연산자 | 설명 |
| --- | --- |
| ! | 논리 부정 연산자(NOT) |
| || | 논리합 연산자(OR) |
| && | 논리곱 연산자(AND) |

```jsx
!true
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

# 제어문(Control Statement)

## 블록문

블록문은 0개 이상의 명령문을 {}로 묶은 것으로 코드 블록, 또는 블록이라 부른다.

우리가 알고있는 일반적인 프로그래밍 언어(C, JAVA 등)는 블록을 함수의 유효 범위로 지정한다.

이러한 유효범위를 스코프(scope)라고 한다.

```jsx
{
		const foo = 10;
}
console.log(foo); // Reference Error
```

## 조건문

조건식의 결과에따라 코드블록을 실행한다. 

### if else 문

조건식의 결과가 true일 경우 if 다음에 오는 코드 블록을 실행

false인 경우 else 다음에 오는 코드 블록 실행

조건을 추가하고 싶은 경우 else if 문을 사용

```jsx
if ( 조건식 ) {
		// 조건식이 참인경우 실행
} else {
		// 조건식이 거짓인 경우 실행
}

if ( 조건식 1 ) {
		// 조건식 1이 참인 경우 실행
} else if ( 조건식 2 ) {
		// 조건식 1이 거짓이고 조건식 2가 참인 경우 실행
} else {
		// 조건식 1과 2 모두 거짓인 경우 실행
}
```

예시

```jsx
const n = -634

if( n > 0 ) {
		console.log('n은 양수 입니다.');
} else if( n < 0 ) {
		console.log('n은 음수 입니다.');
} else {
		console.log('n은 0 입니다.');
}
// 코드 블록 내부에 문이 하나라면 중괄호 생략 가능
let kind;
if( n > 0 ) kind = '양수';
else if( n < 0 ) kind = '음수';
else kind = 0;

console.log(kind);
```

삼항 연산자로 바꿀 수 있음

```jsx
const target = 65543;
let result;

if(target %2) result = '홀수';
else result = '짝수';
console.log(result);

// 변환
const target = 65543;
let result = target % 2 ? '홀수' : '짝수';
console.log(result);

// 위의 양수 음수 0의 경우도 삼항 연산자로 변환 해보자!
const n = -123
let kind = n ? ( n > 0 ? "양수" : "음수" ) : "0";
```

### switch 문

주어진 표현식을 평가해 그 값과 일치하는 표현식을 갖는 case 문으로 실행 흐름을 옮김.

일치하는 case가 없다면 default 문으로 이동. default문은 선택사항.

```jsx
switch (표현식) {
		case 표현식 1:
				표현식과 표현식 1이 일치하면 실행될 문;
				break;
		case 표현식 1:
				표현식과 표현식 1이 일치하면 실행될 문;
				break;
		default:
				표현식과 일치하는 case가 없을 때 실행될 문;
}
```

break 문의 필요성

```jsx
const day = new Date().getDay(); // 월과 요일은 0부터 시작 0 일요일
let dayName;

switch (day) {
		case 0 : dayName = "일요일";
		case 1 : dayName = "월요일";
		case 2 : dayName = "화요일";
		case 3 : dayName = "수요일";
		case 4 : dayName = "목요일";
		case 5 : dayName = "금요일";
		case 6 : dayName = "토요일";
		default: dayName = "잘못된 값";
}
console.log(dayName); // "잘못된 값"
// 따라서 각 case에 break문이 필요함
```

여러 case를 묶는 경우

```jsx
const month = new Date().getMonth(); // 0부터 시작
let season;

switch (month) {
		case 0: case 1: case 11: // 12,1,2월
			season = 'winter';
			break;
		case 2: case 3: case 4: // 3,4,5월
			season = 'spring';
			break;
		case 5: case 6: case 7: // 6,7,8월
			season = 'summer';
			break;
		case 8: case 9: case 11:
			season = 'autumn';
			break;
}
```

## 반복문

### for 문

조건식이 거짓으로 평가될 때까지 코드 블록을 반복 실행

```jsx
for (변수 선언문 또는 할당문; 조건식; 증감식) {
		조건식이 참인 경우 실행할 문장
}
기본적으로 n 번 실행할 떄 다음을 기본으로 생각하면 좋다.
for (let i = 0; i < n; i++){
		console.log(i);
}
// 무한 루프
for (;;){...}
```

별찍기

```jsx
let str = "";
for(let i = 0; i < 5; i++){
		for( let j = 0; j <= i; j++){
				str += "*";
		}
		str += "\n";
}
console.log(str);
```

### while 문

조건식의 평가가 참인 경우 계속 실행

for문은 주로 반복 횟수가 명확할 때 사용, while문은 반복 횟수가 불명확할 때 사용.

```jsx
let count = 0;

while( count < 4 ){
		console.log(count);
		count++;
}
// 무한 루프
while (true) {...{
```

## break 문

swtich문과 반복문을 탈출

```jsx
// 특정 문자의 첫번째 위치 찾고 몇번째인지 출력
const problem = "I love javascript";
const target = "j";
let index;

for(index = 0; index < problem.length; index++){
		if(problem[index] === target) break; // 3번째라면 2
}
console.log(`${target}은 ${index + 1}번째에 있습니다.`);
```

## continue 문

해당 지점에서 코드 블록 실행을 종료하고 반복문의 증감식과 조건식으로 이동