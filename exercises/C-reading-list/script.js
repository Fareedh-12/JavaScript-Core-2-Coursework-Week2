function readingList(books) {
  // Write your code here...
  let content = document.querySelector("#content");
  let ul = document.createElement("ul");
  books.forEach(element => {
    content.appendChild(ul)
    let li = document.createElement("li");
    ul.appendChild(li);
    let paragraph = document.createElement("p");
    li.appendChild(paragraph);
    let image = new Image(225, 225);
    li.appendChild(image);
    paragraph.innerText = element.title;
    image.src = element.link;
    if(element.alreadyRead){
      li.style.backgroundColor= "green";
    }else{
      li.style.backgroundColor = "red";
    }
    li.style.width = 350;
    li.style.padding = 10;
    li.style.height = 350;
    li.style.listStyle = "none";
    ul.style.display = "flex";
    ul.style.justifyContent = "space-around";
    



  });
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    link: "https://images-na.ssl-images-amazon.com/images/I/81zpLhP1gWL.jpg",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    link: "https://images-na.ssl-images-amazon.com/images/I/71HMyqG6MRL.jpg",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    link: "https://images-na.ssl-images-amazon.com/images/I/41as+WafrFL.jpg",
    alreadyRead: true
  }
];


readingList(books);