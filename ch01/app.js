let str = "";
str = prompt("이름을 입력하세요");
const increase = "increase";
const decrease = "decrease";

const $counter = document.getElementById("counter");
const $increase = document.getElementById(increase);
const $decrease = document.getElementById(decrease);

let num = 0;
const render = function () { $counter.innerHTML = num; };

$increase.addEventListener('click', ()=> {
    num++;
    console.log("increase 버튼 클릭", num);
    render();
});

$decrease.addEventListener('click', ()=> {
    num--;
    console.log("decrease 버튼 클릭", num);
    render();
});

// 이름을 입력을 받아서 화면이나 console에 출력할 수 있도록 해주세요.