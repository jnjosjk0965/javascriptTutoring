// event : 웹페이지에서 발생하는 모든 동작.
// event 종류
/* 
마우스 관련
click : 요소를 클릭했을때
mouseover : 마우스가 요소 위로 올라갔을때
mouseout : 마우스가 요소 밖으로 나갔을때
키보드 이벤트
keydown : 키보드 눌렀을때
keyup : 키보드를 눌렀다 땔때
폼 이벤트
submit
change
focus
blur
*/
// 이벤트 핸들러 등록 방법
// 이벤트 핸들러 : 어떤 특정한 이벤트 발생 실행 함수
// HTML에 직접 작성
// 장점 : 빠르고 간단하게 사용 단점 : 유지보수가 힘들고 이벤트당 핸들러 1개

// Element.onclick 처럼 속성(property)에 등록
// 장점 : Html 과 JavaScript 분리 가능, 코드 가독성 단점 : 하나의 이벤트 핸들러 1개
const button = document.getElementById("myButton");
button.onclick = function(){
    alert("hello");
}
button.onclick = null;
const hello = function() {
    console.log("hello");
}
// 주의
button.onclick = hello;

// addEventListener 메서드 사용
const input = document.getElementById("myInput");
input.addEventListener('keydown',(event)=>{
    console.log(event);
});

// 이벤트 객체 : 이벤트 핸들러가 호출될 때, 이벤트 관련 정보를 가진 객체
// 어떤 요소가 눌렸는가 어떤 이벤트가 발생했는지 등등 
/*
 target : 대상
 type : 이벤트 타입
 preventDefault() : 기본 동작을 막음
*/
const submit = document.getElementById("mySubmit");
submit.addEventListener("click",(event)=>{
    event.preventDefault();
    console.log(event)
});