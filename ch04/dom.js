// DOM (Document Object Model)

// 요소 취득
// id를 통해 요소 취득
const apple = "apple";
const $apple = document.getElementById(apple); // 인수로 전달한 id가 일치하는 요소가 여러 개일 때 첫번째 요소만 가져옴
//$apple.style.color = "red";
console.log($apple);

// class를 통해 요소 취득
const fruit = "fruit";
const $fruits = document.getElementsByClassName(fruit); // HTMLCollection
console.log($fruits);
for(let i = 0; i < $fruits.length; i++){
    $fruits[i].style.color = "red";
}
const $banana = document.getElementsByClassName("fruit banana");
$banana[0].style.color = "yellow";

const $things = document.getElementById("things");
const $orange = $things.getElementsByClassName("orange");
console.log($orange);

// CSS 선택자
/*
전체 선택자 : *
태그 선택자 : div, body, p
id 선택자 : #foo, #apple
class 선택자 : .foo, .fruit
속성(attribute) 선택자 : input[type = text] -> input 요소 중 type 속성이 text인 요소
자손 선택자 : div p -> div 밑에 있는 모든 p 
자식 선택자 : div > p  -> div 바로 밑에있는 p
*/
const $newbanana = document.querySelector("ul>li.banana");
console.log($newbanana);
const $list = document.querySelectorAll("ul>li"); // NodeList
console.log($list);

// HTMLCollection vs NodeList
// HTMLCollection : 동적 -> 바뀌는게 바로 반영
// querySelectorAll 생성된 NodeList : 정적 -> 바뀌는게 반영 x
// element.childNodes -> NodeList : 동적

/*
간단한 사이트를 제작
미리 디자인하고 만들고 싶은 기능을 조금 생각
2가지정도는 이거는 꼭 넣어봐라 자작으로 간단한거 2개
주제, 디자인도 간단하게
*/