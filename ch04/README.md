# 배열(Array)

배열은 여러 개의 값을 순차적으로 나열한 자료구조로 다음과 같이 선언할 수 있다.

```jsx
const arr = ["사과", "배", "바나나"];
```

이러한 배열이 가지고 있는 값을 요소(element) 라고 부른다. 자바스크립트의 모든 값은 배열의 요소가 될 수 있다.

또한 배열의 요소는 자신의 위치를 나타내는 0 이상의 정수인 인덱스(index)를 갖는다. 각 요소에 접근할 때에는 0부터 시작하는 인덱스를 통해 접근한다.

```jsx
arr[0] // "사과"
arr[1] // "배"
arr[2] // "바나나"
arr[3] // undefined 존재하지 않는 요소
```

또한 배열은 요소의 개수를 나타내는 length 프로퍼티를 가짐

```jsx
arr.length // 3
```

배열은 객체 타입이다.

```jsx
typeof arr // object
```

다음과 같이 새로운 요소를 추가하거나 수정할 수 있다. 수정한 경우 length도 자동 갱신된다.

```jsx
arr[3] = "오렌지";
arr[2] = "수박";
console.log(arr); // ["사과", "배", "수박", "오렌지"]
console.log(arr.length); // 4
```

delete 연산자를 사용해 특정 요소 삭제 가능

```jsx
delete arr[1];
console.log(arr); // ["사과", , "수박", "오렌지"] arr[1] 은 undefined, length는 그대로 4
```

또한 빌트인 메서드를 통해 요소를 추가 삭제할 수 있다.

```jsx
const numbers = [1,2,3]
// 배열의 끝에 요소를 추가 원본 배열을 직접 변경
let result = arr.push(4,5); // 인수로 전달 받은 값을 배열의 끝에 추가하고 변경된 length반환
console.log(result); // 5
console.log(numbers); // [1,2,3,4,5]
// 배열의 끝에 요소를 제거하고 제거한 요소를 반환
result = numbers.pop();
console.log(result); // 5
console.log(numbers); // [1,2,3,4]
```

## 배열 생성

### 배열 리터럴

```jsx
const arr = [1,2,3];
```

### Array 생성자 함수

```jsx
const arr = new Array(10); // length 10 인 빈 배열 생성
new Array(); // [] 빈 배열 생성
new Array(1,2,3); // [1,2,3] 
new Array({}); // 하나인데 숫자가 아니면 해당 요소를 가지는 배열
// new 생략 가능
```

### Array.of

```jsx
Array.of(1); // [1]
Array.of(1,2,3); // [1,2,3]
Array.of("string"); // ['string']
```

### Array.from

유사 배열 객체 또는 이터러블 객체를 배열로 반환

유사 배열 객체는 배열처럼 인덱스를 통해 접근할 수 있고 `length` 속성이 있지만 배열은 아닌 객체

```jsx
Array.from({ length : 2, 0: 'a', 1: 'b'}); // ['a','b']
Array.from("hello"); // ['h','e','l','l','o']
```

# DOM

DOM 이란 Document Object Model의 약자로 HTML 문서의 모든 요소를 객체로 해 트리 자료구조로 나타낸 것이다.

다음과 같은 HTML문서가 있다고 가정하자. 이를 다음과 같은 DOM 트리로 나타낼 수 있다.

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="style.css">
  <title>Fruits</title>
</head>
<body>
  <ul>
    <li id="apple">Apple</li>
    <li id="banana">Banana</li>
    <li id="orange">Orange</li>
  </ul>
  <script src="app.js"></script>
</body>
</html>
```

![DOM.jpg](https://prod-files-secure.s3.us-west-2.amazonaws.com/67a8bc4e-62e6-4a86-ac2d-10bcd390848e/aece6f31-20ed-43da-8761-1822135d4933/DOM.jpg)

이를 브라우저에서 직접 확인하면 다음과 같다.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/67a8bc4e-62e6-4a86-ac2d-10bcd390848e/ba226d7a-d130-473f-a726-25fcfb496a9a/Untitled.png)

우리는 자바스크립트를 통해 해당 요소의 속성(attribute)에 접근하여 수정할 수 있다.

```jsx
document.body.style.background = "skyblue"; // 배경색을 바꾸거나
document.getElementById("apple").classList.add("nice"); // 특정 css 클래스를 추가하거나
```

## 요소 취득

DOM 트리의 각 요소를 조작하려면 먼저 요소를 취득해야한다. 그러기 위한 여러가지 방법 중 몇가지를 소개하겠다.

### id를 통해 요소 취득

`Document.getElementById()` 메서드는 인수로 전달한 id 속성 값을 갖는 하나의 요소를 탐색해 반환한다. id는 Document 내에서 유일한 값이어야 함. id 값을 갖는 요소가 여러 개 존재하는 경우 첫 번째 요소만 반환.

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="style.css">
  <title>Fruits</title>
</head>
<body>
  <ul>
    <li id="apple">Apple</li>
    <li id="apple">Banana</li>
    <li id="apple">Orange</li>
  </ul>
  <script>
	  const $apple = document.getElementById("apple");
	  $apple.style.color = "red";
  </script>
</body>
</html>
```

만약 인수로 전달된 id 값을 갖는 요소가 존재하지 않는 경우 null 반환

### class를 통해 요소 취득

`Document.getElementsByClassName() / Element.getElementsByClassName()` 메서드는 인수로 전달한 class 속성 값을 갖는 모든 요소 노드를 반환한다. 인수로 전달할 class 값을 공백으로 구분해 여러 class를 지정할 수 있다. getElementsByClassName 메서드는 이름 대로 여러 개의 요소 객체를 갖는 DOM 컬렉션 객체인 **HTMLCollection** 객체를 반환한다.

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="style.css">
  <title>Fruits</title>
</head>
<body>
  <ul>
    <li class="fruit apple">Apple</li>
    <li class="fruit banana">Banana</li>
    <li class="fruit orange">Orange</li>
  </ul>
  <script>
	  const $fruits = document.getElementsByClassName("fruit");
	  for(let i = 0; i < $fruits.length; i++){
			$fruits[i].style.color = "red";
		}
		const $apple = document.getElementsByClassName("fruit apple");
    for(let i = 0; i < $apple.length; i++){
      $apple[i].style.color = "red";
    }
  </script>
</body>
</html>
```

### CSS 선택자를 통해 요소 취득

`Document/Element.querySelector()` 메서드는 인수로 전달한 CSS 선택자를 만족하는 하나의 노드를 반환.

- 인수로 전달한 css 선택자를 만족하는 요소가 여러 개인 경우 첫 번째 요소 반환
- 인수로 전달된 css 선택자를 만족하는 요소가 없는 경우 null
- 인수로 전달한 css 선택자가 문법에 맞지 않는 경우 DOMException 에러

<aside>
💡 CSS 선택자
전체 선택자 : *
태그 선택자 : p
id 선택자 : #foo
class 선택자 : .boo
속성(attribute) 선택자 : input[type=text] → input 요소 중 type 속성이 text인 요소
자손 선택자 : div p → div 요소의 아래에 있는 모든 p 요소
자식 선택자 : div > p → div 요소의 자식 요소 중 모든 p 요소
등등

</aside>

`Document/Element.querySelectorAll()` 메서드는 인수로 전달한 CSS 선택자를 만족하는 모든 요소를 **NodeList** 객체로 반환

### HTMLCollection vs NodeList

- HTMLCollection : 동적으로 요소를 반영함

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>Fruits</title>
  <style>
    .red { color : red;}
    .blue { color : blue;}
  </style>
</head>
<body>
  <ul id="fruits">
    <li class="red">Apple</li>
    <li class="red">Banana</li>
    <li class="red">Orange</li>
  </ul>
  <script>
	  const $fruits = document.getElementsByClassName("red");
    for(let i = 0; i < $fruits.length; i++){
      $fruits[i].className = "blue";
    }
  </script>
</body>
</html>
```
적용해보면 HTMLCollection이 동적으로 작동해 예상한 결과와 다르다.

- NodeList : querySelectorAll() 메서드가 반환 하는 객체는 정적이다. 하지만 요소의 프로퍼티인 childNodes 의 NodeList는 동적이다.

## DOM 수정하기

### 요소 생성하기

- document.createElement(tag) : 태그 이름을 사용해 새로운 요소 노드를 만듦
- document.createTextNode(text) : 주어진 텍스트를 사용해 새로운 텍스트 노드를 만듦

```html
<style>
.alert {
	padding: 15px;
	border: 1px solid #d6e9c6;
	border-radius: 4px;
	color: #3c76cd;
	background-color: #dff0d8;
}
</style>
<script>
	// 메시지 생성
	let div = document.createElement('div');
	div.className = "alert";
	div.innerHTML = "<strong>[중요]</strong> 공지사항이 있습니다.";
	// 
</script>
```

### 삽입 메서드

생성한 `div` 가 화면에 나타나게 하려면 document 어딘가에 `div` 를 삽입해야한다.

이를 위해선 node.append()를 사용해 추가해 줄 수 있다.

```html
<script>
	// 메시지 생성
	let div = document.createElement('div');
	div.className = "alert";
	div.innerHTML = "<strong>[중요]</strong> 공지사항이 있습니다.";
	// 메시지 삽입
	document.body.append(div);
</script>
```

**노드 삽입 메서드**

- node.append(노드 또는 문자열) : 노드 또는 문자열을 node 끝에 삽입합.
- node.prepend(노드 또는 문자열) : 노드 또는 문자열을 node 맨 앞에 삽입합.
- node.before(노드 또는 문자열) : 노드 또는 문자열을 node 이전에 삽입합.
- node.after(노드 또는 문자열) : 노드 또는 문자열을 node 다음에 삽입합.
- node.replaceWith(노드 또는 문자열) : node를 새로운 노드나 문자열로 대체함.

```html
<body>
	<!--before-->
	<div id="base">
		<!--append-->
		<p>첫번째 문장</p>
		<!--prepend-->
	</div>
	<!--after-->
</body>
```

**노드 삭제**

node.remove() : 노드를 삭제합니다.

**노드 복제**

element.cloneNode(boolean) : element를 복제합니다.

- true : 자식 요소도 복사 (깊은 복사)
- false : 자식 요소 복사 없이 element만 복사 (얕은 복사)

```html
<script>
	// 메시지 생성
	let div = document.createElement('div');
	div.className = "alert";
	div.innerHTML = "<strong>[인사]</strong> 어서오세요!";
	// 메시지 삽입
	document.body.append(div);
	// 메시지 복제
	let div2 = div.cloneNode(true); // 메시지 창 복제
	div2.innerHTML = "<strong>[중요]</strong> 공지사항이 있습니다.";
	div.after(div2);
</script>
```