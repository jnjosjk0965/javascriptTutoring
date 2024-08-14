/* 
1. 요소들을 선택
함수
2. 버튼이 클릭되었을때 input의 값을 가져옴
3. 내용을 가지고 새로운 li를 작성
4. 해당 li ul 밑에 추가
5. input을 초기화
*/

// 요소를 선택
const todoInput = document.getElementById('todoInput');
const createTodoButton = document.getElementById('createTodoButton');
const todoList = document.getElementById('todoList');

const createTodo = function(){
    // input 값을 가져옴
    const task = todoInput.value.trim();
    // String.trim() : 앞,뒤 공백을 제거

    if(task !== ""){
        //내용을 가지고 새로운 li를 작성
        const li = document.createElement('li'); //<li></li>
        li.innerText = task;
        li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        
        // 삭제 버튼을 만듦
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "X";
        deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
        deleteButton.addEventListener('click', function(){
            li.remove();
        });

        // li에 버튼을 달아줌
        li.append(deleteButton);
        
        // 해당 li ul 밑에 추가
        todoList.append(li);

        // input 초기화
        todoInput.value = "";
    }
}

createTodoButton.addEventListener('click', createTodo);

todoInput.addEventListener('keypress',function(event){
    if(event.key === "Enter"){
        createTodo();
    }
});