// 함수 : 입력을 받아서 처리를 한 뒤에 값을 출력
// x + y
// x, y 매개변수(parameter)
// 3, 9 인수 (argument)
console.log(add(1,3));
function add(x, y){
    return x + y; // return을 만나면 함수가 끝남.
}
console.log(`x + y = ${add(3, 9)}`);

// 함수 선언 방식
// 1. 함수 선언문 : 함수 호이스팅
// 위에 방식
// 2. 함수 표현식 : 변수 호이스팅
// console.log(add1(1,3));
const add1 = function(x, y) {
    return x + y;
};
console.log(add1(4, 8)); // 12
// 3. Function 생성자 함수 -> 잘 안씀
const add2 = new Function('x','y','return x + y');
console.log(add2(5,9));
// 4. ES6 화살표 함수 function을 사용x 간결 함수 표현
const add3 = (x, y)=> {return x+y};
console.log(add3(8,7));

// 매개변수
function sub(x, y){
    return x - y;
}
// console.log(x,y);
// 매개변수 갯수 선언과 다르게 넣어도 오류x
console.log(sub(2)); // y = undefined -> 2 - undefined = 2 - NaN = NaN
console.log(sub(10,4,8)); // 

// 매개변수 기본값 설정
// 단축평가
function multi(x, y){
    x = x || 0;
    y = y || 0;
    return x * y;
}
console.log(multi());
// 기본값 설정
function div(x = 1, y = 1){
    return x / y;
}
console.log(div(5));

// 콜백 함수
// 함수 2개
const show = function(){
    console.log("hello world");
}
const showNumber = function(num){
    console.log(num * num);
}
// n번 반복
function repeatAll(n, f){
    for(let i = 0; i < n; i++){
        f(i);
    }
}
repeatAll(4, show);
repeatAll(5, showNumber);

// 함수내에서 break 대신 return 사용한 예시
const showDay = function(){
    const day = new Date().getDay(); // 요일받아옴 0 : 일요일 -> 6 : 토요일 지금 목요일 : 4
    switch (day){
        case 0 : return "일요일";
        case 1 : return "월요일";
        case 2 : return "화요일";
        case 3 : return "수요일";
        case 4 : return "목요일";
        case 5 : return "금요일";
        case 6 : return "토요일";
        default: return "잘못된 값입니다.";
    }
}
const dayName = showDay();
console.log(dayName);

// 간단하게 콜백함수 써서 기능한 1~2개 만들어서 오기 그리고 간단한 설명