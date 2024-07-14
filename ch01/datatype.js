// 숫자 number
console.log(100);
console.log(3.14);

console.log(3+4);
console.log(5-2);
console.log(4*2);
console.log(10/2);
console.log(7%2);

//문자열 string
typeof "hello";
console.log("hello world");
console.log("그는 말했다. '안녕하세요'");
// 이스케이프 문자 \ 시작
console.log("그는 말했다. \"안녕하세요\"");
/*
    \n : 줄바꿈
    \t : 탭
    \\ : \
    \'
    \"
*/
// 문자열 + 
console.log("아버지가 " + "방에 " + "들어가십니다.");
// 템플릿 문자열
console.log(`529 + 1245 = ${529 + 1245}`);

// 불리언 (Boolean) true false
console.log(typeof true);
// 자료형을 맞추어 비교
console.log(5 == "5");
console.log(5 != "5");
// 그대로 비교
console.log(5 === "5");
console.log(5 !== "5");

// 숫자형 변환
console.log("52431")
console.log(Number("52431"));
console.log(Number(true));
console.log(Number(false));
console.log(Number("hello"));
// NaN : Not a Number
console.log(NaN == NaN);
console.log(isNaN(Number("hello")));

// 문자형 변환
console.log(String(321));
console.log(String(true));

// 불리언 변환
/*
false 로 변환되는 것들
- 0
- NaN
- "" (빈문자열)
- null
- undefined
*/
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));

//논리 연산자
//! Not , || or, && and
console.log(!true); // false
console.log(true || false); // true
console.log(true && false); // false
//단축 평가
false && console.log("true");

null, undefined
//undefined : 변수를 선언 값을 안넣어준 경우
let a;
console.log(a);
// null : 개발자가 의도적으로 변수가 비어 있다고 표현
let b = null;

//변수 선언
const c = 54;
console.log(c + 3);
console.log(c - 3);
console.log(c * 3);
console.log(c / 3);

// const -> 상수(constant)
const NUM = 100;

// let -> 변수 (variable)
let str;
str = "재석";
console.log(str);
