// 연산자
// 산술연산자
// 이항연산자 + - * / % 항 2개 
2 + 3 
4 * 7
// + : 항 중에 문자열이 포함이되면 나머지 항들을 문자열 변환
console.log(2024 + "0718");
// - * / %
console.log(2024 - "0718");
// 변수에 값을 할당 -> 보통 우선순위가 낮은편
// 단항연산자 ++ --

let a = 3, result0;
/*
    전위 증감연산자 : 증감을 먼저하고 그다음 다른 연산을
    후위 증감연산자 : 다른연산을 마친뒤 증감을 반영
*/
result0 = a++;
console.log(`result0 = ${result0}, a = ${a}`); // result0 = 3, a = 4
// a = 4
result0 = ++a;
console.log(`result0 = ${result0}, a = ${a}`); // result0 = 5, a = 5
// a = 5
result0 = a--;
console.log(`result0 = ${result0}, a = ${a}`); // result0 = 5, a = 4
// a = 4
result0 = --a;
console.log(`result0 = ${result0}, a = ${a}`); // result0 = 3, a = 3

// 할당 연산자 =  진행 방향 <-
let b = c = d = 12; // b = 12, c = 12, d = 12

// 삼항 연산자 
// 조건식 ? 조건식 true 일 때의 값 : 조건식이 false일 때의 값
// 시험 60점 이상 합격 미만 불합격
const score = 40;
let isPassed = score >= 60 ? "합격" : "불합격"; // true -> "합격" "불합격"
console.log(isPassed);

// 제어문
// 블록 {} 명령문 -> 할당문, 선언문, 함수호출 0개 이상 묶은
// 변수 유효범위 var -> 함수를 기준으로 변수 유효 범위를 정했는데
// C, C++, Java -> 블록을 기준으로 변수 유효 범위를 정함 {} block scope
let f = 100;
{
    let f = 200;
    console.log(f);
}
console.log(f);

// 조건문
// if else 문
const num = 33;
let result;
// 홀수 짝수
if( num % 2 ) result = "홀수";// 참인경우 num % 2 -> 1 -> true
else result = "짝수";
// 삼항 연산자로 
result = num % 2 ? "홀수": "짝수";
console.log(result);

const n = -10;
let kind;
if ( n > 0 ) kind = "양수";
else if( n < 0) kind = "음수";
else kind = "0";
console.log(`n은 ${kind}입니다.`);
// 삼항연산자
kind = (n > 0) ? "양수" : (n < 0) ? "음수" : "0";
console.log(`n은 ${kind}입니다.`);

kind = n ? (n > 0 ? "양수": "음수") : "0";
console.log(`n은 ${kind}입니다.`);

// switch 문
const day = new Date().getDay(); // 요일받아옴 0 : 일요일 -> 6 : 토요일 지금 목요일 : 4
console.log(day)
let dayName;
switch (day){
    case 0 : dayName = "일요일";
        break;
    case 1 : dayName = "월요일";
        break;
    case 2 : dayName = "화요일";
        break;
    case 3 : dayName = "수요일";
        break;
    case 4 : dayName = "목요일";
        break;
    case 5 : dayName = "금요일";
        break;
    case 6 : dayName = "토요일";
        break;
    default: dayName = "잘못된 값입니다."
}
console.log(dayName);
// 월에따라 계절을 나눠봄
const month = new Date().getMonth(); // 6
let season;

switch(month){
    case 11: case 0: case 1:
        season = "winter";
        break;
    case 2: case 3: case 4:
        season = "spring";
        break;
    case 5: case 6: case 7:
        season = "summer";
        break;
    case 8: case 9: case 10:
        season = "fall";
        break; 
}
console.log(season);

// 반복문
// for문
// n 번 반복한다했을때 -> 반복횟수 명확할때
let star = ""; // undefined + "*" = undefined*
for (let i = 0; i < 5; i++) {
    for(let s = 0; s <= i; s++){
        star += "*";
    }
    star += "\n";
}
console.log(star);

// 무한루프
//for(;;){...}

// while 문
// 반복횟수가 부정확할 때
let dan = 2
while(dan <= 9){
    let number = 1;
    while (number <=9){
        console.log(`${dan} * ${number} = ${dan * number}`);
        number++;
    }
    dan++;
}

// break 문 제일 가까운 반복문을 나옴, switch문을 나옴
// 특정 문자의 첫번째 위치 찾고 몇번째인지 출력
const problem = "I love javascript";
const target = "j";
let index;

for(index = 0; index < problem.length; index++){
		if(problem[index] === target) break; // 3번째라면 2
}
console.log(`${target}은 ${index + 1}번째에 있습니다.`);

// continue 문
// 코드블록 실행을 종료하고 반복문의 증감식이나 조건식으로 돌아감
let string = "hello world"; // string.length = 11
const search = "l";
let count = 0;

for(let i = 0; i < string.length; i++){
    if(string[i] !== search ) continue;
    count++;
}
console.log(`${string}에는 ${search}이 ${count}개 있습니다.`);

// 과제 : html에서 숫자를 입력받고 이게 음수인 양수인지 0인지 console 말고 화면에 표시하기