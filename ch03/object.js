// var , let, const

//1. 스코프  var : 함수 스코프 let : 블록 스코프
//2. 호이스팅 -> 끌어올리는 것
console.log(a); // undefined -> 초기화가 되지 않았을 때 let a -> console.log(a)
var a = 10;
console.log(a); // 10

// console.log(b); // Error 
let b = 10;
console.log(b);

// 3. 중복선언
var a = 12; // 변수 선언 (없던걸 만든거)
console.log(a);
//let b = 12; // 불가

// 객체 (Object)
/* 
자바스크립트 데이터 형
- number 숫자
- string 문자열
- boolean true false
- undefined 초기화되지않았다.
- null 명시적으로 비어있다.
- object
*/
// object : 여러 타입의 데이터를 묶어서 저장 (보따리)
const counter = {
    "num" : 0, // num : key, 0 : value
    increase : function(){ // 객체 안에 함수를 메소드(method)
        this.num++; // this 란 객체 자신을 가르킴
    }
};
console.log(counter);

const person = {
    "first-name": "재석" // 프로퍼티
}
// 프로퍼티 생성
const key = "lastName";
person.age = 26;
person[key] = "주";
// 프로퍼티 접근 
// . 사용
console.log(person.age);
console.log(person.lastName);
// [] 사용
console.log(person['first-name'])
person.age = 20;
console.log(person.age);