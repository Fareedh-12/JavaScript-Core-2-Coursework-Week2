function shoppingList(arrayOfPeople) {
  // Write your code here...
  let ul = document.createElement("ul");
  let content = document.querySelector("#content");
  arrayOfPeople.forEach(element => {
    content.appendChild(ul);
    let li = document.createElement("li");
    ul.appendChild(li);
    li.innerText = element;
  });
 


}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
