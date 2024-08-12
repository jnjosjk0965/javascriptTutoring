// 객체 함수
// 객체 생성
const person = {
    name: "재석",
    age: 25,
    hello: function(){
        console.log("안녕하세요 제 이름은 " + this.name + "입니다.");
    }
}
console.log(person.name);
console.log(person["age"]);
person.hello();

// 함수
// 함수 선언문
// 함수 호이스팅 : 함수 선언이 제일 위로
console.log(add(3,4));
function add(x, y){
    return x + y;
}
// 함수 표현식
// 변수 호이스팅 : 변수는 선언 초기화는 되지 않아서 
// this 바인딩 : 호출 방식에 따라 this 가 동적으로 바뀜
const abs = function (x, y) {
    return x - y;
}
console.log(abs(5,2));
// 화살표 함수
// 변수 호이스팅
// this 바인딩 : 함수 자신을 포함하는 외부 스코프의 this를 상속
const multi = (x, y) => x * y;
console.log(multi(3,4));

// 매개변수 초기값
const div = function (x, y) {
    x = x || 1;
    y = y || 1;
    return x / y;
}
console.log(div(4));

// 콜백함수
function repeatN(n, f) {
    for(let i = 0; i < n; i++){
        f();
    }
}
const hello = ()=> {
    console.log("안녕하세요!");
}
repeatN(3, hello);