function todoList(todos) {
  // Write your code here...
  let ul = document.createElement("ul");
  let content = document.querySelector("#content");
  content.appendChild(ul);
  
  todos.forEach(element => {
    let li = document.createElement("li");
    ul.appendChild(li);
    li.innerText = element.todo;
    
    li.addEventListener("click", function () {
      if(li.style.textDecoration === "line-through"){
        li.style.textDecoration = "none";
      }else{
        li.style.textDecoration = "line-through";
      }
});

  });
  
}

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);