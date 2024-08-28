// DOM (Document Object Model)
// createElement
let div = document.createElement('div'); // <div></div>
div.className = "alert";
div.innerHTML = "<strong>[중요]</strong> 안내사항이 있습니다.";
// 생성한 요소를 DOM 트리 어딘가에 배치
document.body.append(div);
// 삽입 메서드
/* 
- node.append(node 또는 문자열) : 노드 또는 문자열 끝에
- node.prepend() : 노드 또는 문자열 맨 앞에
- node.before() : 노드 이전에
- node.after() : 노드 다음에
- node.replaceWith() : 노드를 대체
*/
const list = document.getElementById("list");
let append = document.createElement('li');
append.innerText = "append";
list.append(append);

let prepend = document.createElement('li');
prepend.innerText = "prepend";
list.prepend(prepend);

let before = document.createElement('li');
before.innerText = "before";
list.before(before);

let after = document.createElement('li');
after.innerText = "after";
list.after(after);

list.remove();

// element.cloneNode(boolean) : element 복제
// true : 자식요소까지 복사 false : 해당 요소만 복사

let div2 = div.cloneNode(false);
console.log(div2);
div2.innerHTML = "<i>[인사]</i> 안녕하세요";
div.after(div2);