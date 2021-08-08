function listOfColours(colours) {
  // Write your code here...
  let selectElement = document.createElement("select");
  
  let paragraph = document.createElement("p");
  let content = document.querySelector("#content");
  content.appendChild(selectElement);
  
  colours.forEach(element => {
    let optionElement = document.createElement("option");
    selectElement.appendChild(optionElement);
    optionElement.innerText = element;
    optionElement.value = element;
});
  selectElement.onchange = function() {
    paragraph.innerText = "You selected " + selectElement.value;
    paragraph.style.color = selectElement.value;
    content.appendChild(paragraph);
  };
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
