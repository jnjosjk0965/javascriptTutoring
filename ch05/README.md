# 이벤트

이벤트란 웹페이지에서 발생하는 모든 동작을 의미함. 예를 들어 버튼 클릭, 키보드 입력, 마우스 이동 등 다양한 사용자 상호작용이 이벤트에 해당.

## 주요 이벤트 타입

마우스 이벤트

- click : 요소가 클릭될 때 발생
- mouseover : 마우스가 요소 위로 올라갈 때 발생
- mouseout : 마우스가 요소를 벗어날 때 발생

키보드 이벤트

- keydown : 키보드를 눌렀을 때 발생
- keyup : 키보드에서 손을 뗄 때 발생

폼 이벤트

- submit : 폼이 제출될 때 발생
- change : 폼 요소의 값(value)이 변경될 때 발생
- focus : 폼 요소가 포커스를 받을 때 발생
- blur : 폼 요소에서 포커스가 벗어날 때 발생

## 이벤트 핸들러 등록 방법

### HTML 속성에 직접 작성하기

```html
<button onclick="alert('hello')">Click</button>
```

- 장점 : 빠르고 간단하게 적용 가능
- 단점 : 유지보수가 어렵고, 여러 이벤트 핸들러 추가가 불가능.

### Element.onclick 속성(property) 사용하기

```html
<button id="myButton">Click</button>

<script>
	const button = document.getElementById("myButton");
	button.onclick = function() {
		alert('Hello!');
	};
</script>
```

- 장점 : HTML과 자바스크립트 분리, 코드 가독성 증가
- 단점 : 하나의 이벤트에 대해 여러 핸들러를 추가할 수 없음

추가로 핸들러를 하나 더 추가하면 기존의 핸들러는 덮어씌워짐

핸들러를 제거하고 싶다면 `Element.onclick = null` 과 같이 null 을 할당하면 된다.

<aside>
💡 이미 존재하는 함수를 핸들러에 할당하려면 ()을 제외한 함수의 이름만을 할당해야함.
button.onclick = sayHello; 와 같이

</aside>

### addEventListener 메서드 사용

```html
<button id="myButton">Click</button>

<script>
	const button = document.getElementById('myButton');
	button.addEventListener('click', function(){
		alert('Hello!');
	});
</script>
```

- 장점 : 동일한 이벤트에 여러 핸들러 등록 가능
- 단점 : 약간의 코드 복잡성 증가

핸들러를 제거하기 위해서는 removeEventListener 메소드를 사용하면 된다.

## 이벤트 객체(Event Object)

이벤트 핸들러가 호출될 때, 이벤트와 관련된 정보를 담고 있는 객체가 자동으로 전달된다. 이러한 객체를 **이벤트 객체**라고 함.

### 이벤트 객체의 주요 속성(property)

- target : 이벤트가 발생한 DOM 요소를 가리킴.
- type : 이벤트의 타입을 나타냄. ex) “click”, “keydown”
- preventDefault() : 기본 동작을 막음. ex) 폼 제출 막기

```html
<button id="myButton">Click</button>

<script>
	const button = document.getElementById('myButton');
	button.addEventListener('click', function(event) {
		console.log('Event type:', event.type);
		console.log('Event target:', event.target);
		event.preventDefault();
	});
</script>
```

# 실습

## TodoList

HTML 구조

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>To-Do List</title>
</head>
<body>
  <h1>To-Do List</h1>
  <input type="text" id="todoInput" placeholder="할 일을 추가해주세요">
  <button id="addTodoButton">입력</button>
  <ul id="todoList"></ul>
  <script src="todo.js"></script>
</body>
</html>
```

JavaScript

```jsx
// todo.js

// 요소를 선택
const todoInput = document.getElementById('todoInput');
const addTodoButton = document.getElementById('addTodoButton');
const todoList = document.getElementById('todoList');

// 버튼 클릭 시 실행되는 함수
function addTodo() {
    // 입력 필드의 값을 가져옴
    // String.trim() : 시작과 끝의 공백 제거
    const task = todoInput.value.trim();

    // 입력 필드가 비어 있지 않으면 새로운 항목을 추가
    if (task !== '') {
        // 새로운 li 요소를 생성
        const li = document.createElement('li');
        li.textContent = task;

        // 삭제 버튼을 생성
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.addEventListener('click', function() {
            li.remove();
        });

        // li 요소에 삭제 버튼을 추가
        li.appendChild(deleteButton); // appendChild() 는 구식 메서드로 알아만 두자

        // todoList에 li 요소를 추가
        todoList.append(li);

        // 입력 필드를 초기화
        todoInput.value = '';
    }
}

// 버튼에 클릭 이벤트 핸들러를 추가
addTodoButton.addEventListener('click', addTodo);

// 엔터 키로 할 일 추가하기
todoInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
});
```
