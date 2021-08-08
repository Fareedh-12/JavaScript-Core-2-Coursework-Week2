function populateTodoList(todos) {
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  let ul = document.querySelector("#todo-list");
  ul.textContent = '';
   
  todos.forEach(element => {
    let li = document.createElement("li");
    ul.appendChild(li);
    li.innerText = element.task;
    let spanElement = document.createElement("span");
    li.appendChild(spanElement);
    let iElementDone = document.createElement("i");
    let iElementDelete = document.createElement("i");

    spanElement.appendChild(iElementDone);
    spanElement.appendChild(iElementDelete);
    iElementDone.className = "fa fa-check";
    iElementDelete.className = "fa fa-trash";
    li.className= "list-group-item d-flex justify-content-between align-items-center";
    spanElement.className = "badge bg-primary rounded-pill";
    iElementDone.addEventListener("click", function(){
      
      if(li.style.textDecoration === "line-through"){
        li.style.textDecoration = "none";
        element.completed = false;
      }else{
        li.style.textDecoration = "line-through";
        element.completed = true;
      }
    })
    iElementDelete.addEventListener("click", function(){
      li.remove();
    })
    
  });
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);


// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  event.preventDefault();
  let todoInput = document.querySelector("#todoInput");
  let todoValue = todoInput.value;
  let newItem = {task: todoValue, completed: false};
  todos.push(newItem);
  populateTodoList(todos);
}

// Advanced challenge: Write a function that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
let myButton = document.createElement("button");
let myForm = document.forms[0];
myForm.appendChild(myButton);
myButton.className = "btn btn-primary mb-3";
myButton.innerText = "Delete All Completed";
myButton.addEventListener("click", deleteAllCompletedTodos);
function deleteAllCompletedTodos(event) {
  // Write your code here...
  event.preventDefault();
  console.log("Button clicked");
  let li = Array.from(document.querySelectorAll("li"));
  li.forEach(element => {
    if(element.style.textDecoration === "line-through"){
        element.remove();
  }
  })
}
