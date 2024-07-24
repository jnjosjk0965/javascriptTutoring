
const result1 = document.getElementById("result1"); // 양수 음수
const result2 = document.getElementById("result2"); // 홀수 짝수

const button = document.getElementById("button");

const numbercheck = function (){
    const number = document.getElementById("number").value;

    if(isNaN(Number(number))) {
        result1.innerText = "숫자를 입력해 주세요!";
        return;
    }

    if(number > 0) result1.innerText = "양수입니다.";
    else if(number < 0) result1.innerText = "음수입니다.";
    else result1.innerText = "0 입니다.";

    if(number % 2) result2.innerText = "홀수입니다.";
    else result2.innerText = "짝수입니다.";
}
button.addEventListener("click",numbercheck);