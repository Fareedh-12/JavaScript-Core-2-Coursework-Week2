function listOfNames(arrayOfPeople) {
  arrayOfPeople.forEach(element => { 
      let content = document.querySelector("#content");
      let name = document.createElement("h1");
      content.appendChild(name);
      let job = document.createElement("h2");
      content.appendChild(job);
      job.innerText = element.job;
      name.innerText = element.name;
    
  });
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);

