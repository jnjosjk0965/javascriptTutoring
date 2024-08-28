// 배열(Array)
// 하나의 값을 저장
// 객체 여러개 값 저장
// 1,2,3 인덱스를 통해 값의 접근하는 객체
// 여러개 값을 순차적으로 나열한 자료구조 -> 자바스크립트에서 배열은 다른 언어랑 살짝 다르다

const arr = ["사과", "배", "바나나"]; // 0,1,2
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]); // undefined

console.log(arr.length);
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
console.log(typeof arr)

// 요소 추가 및 수정
arr[3] = "오렌지";
arr[2] = "수박";
console.log(arr.length);
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
// 특정 요소 삭제
delete arr[1];
console.log(arr.length);
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
console.log(arr);

const numbers = [1,2,3];
let result = numbers.push(12, 45); // length 값을 반환
console.log(numbers);
console.log(result);

result = numbers.pop(); // 배열의 마지막 요소를 삭제 제거한 요소를 반환
console.log(numbers);
console.log(result);
console.log(numbers.length);

// 배열 생성
// 배열 리터럴
// 리터럴 : 데이터 그자체
// 숫자 리터럴 : 1 5, 3.14
// 문자 리터럴 : 'a' , "hello"
const arr1 = ["red", "blue", "green"];

// Array 생성자
// 생성자 : 객체를 생성하는 특별한 메서드
let arr2 = new Array(10); // length 10인 빈 배열
arr2 = new Array();
arr2 = new Array(1,2,3);
arr2 = Array("hello"); // new 생략 가능
console.log(arr2);

// Array.of
let arr3 = Array.of(1,2,3); // [1,2,3]
arr3 = Array.of(5);
console.log(arr3);

// Array.from
// 유사 배열, 이터러블을 배열로 바꿔줌
// 유사 배열 : 객체인데 length 프로퍼티가 있고 각 요소를 0,1,2 인덱스로 접근하는객체
let arr4 = Array.from({length : 2, 0: 'a', 1: 'b'});
console.log(arr4); 
// 이터러블 : 간단하게 설명 반복이 되는 친구들 ex String
arr4 = Array.from("hello");
console.log(arr4);