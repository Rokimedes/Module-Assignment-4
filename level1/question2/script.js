//Body style
var body = document.querySelector("body");
body.style.fontFamily = "sans-serif";
body.style.backgroundColor = "lightgrey";

// Added H1 to document
var bodyH1 = document.createElement("h1");
bodyH1.textContent = "TODO Cards";
bodyH1.style.cssText =
  "text-align: center; font-size: 3em; font-family: sans-serif;";
body.appendChild(bodyH1);

var uList = document.createElement("ul"); //Create an UL to store the list elements

// Fetch the JSON data from the API
var requestURL = "https://jsonplaceholder.typicode.com/todos";
var request = new XMLHttpRequest();

request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = function() {
  var todo = request.response;
  todoCard(todo);
};

function todoCard(todo) {
  for (var i = 0; i < todo.length; i++) {
    var myList = document.createElement("li");
    myList.style.cssText =
      "background-color: #fff; list-style: none; display: block; float: left; height: 200px; width: 15%; padding: 50px; margin: 20px; border-top: solid 10px; border-radius: 10px;";

    var userID = document.createElement("p");
    userID.style.cssText = "display: block;";

    var ID = document.createElement("p");
    userID.style.cssText = "display: block;";

    var title = document.createElement("p");
    title.style.cssText =
      "text-align: center; font-size: 1.2em; font-weight: bold; border-bottom: 2px solid black; padding-bottom: 10px;";

    var completed = document.createElement("p");
    completed.style.cssText = "font-weight: bold; text-align: center;";

    title.textContent = todo[i].title;
    userID.textContent = "UserID: " + todo[i].userId;
    ID.textContent = "ID: " + todo[i].id;
    completed.textContent = "Completed?: " + todo[i].completed;

    // If statement to show if "completed" is false or true
    if (todo[i].completed === true) {
      myList.style.borderColor = "green";
    } else if (todo[i].completed === false) {
      myList.style.borderColor = "red";
    } else {
      myList.style.borderColor = "black";
    }

    myList.appendChild(title);
    myList.appendChild(userID);
    myList.appendChild(ID);
    myList.appendChild(completed);

    uList.appendChild(myList);
    body.appendChild(uList);
  }
}

// I had a real struggle with this one, and ended up with styling in the for loop. Im thinking that maybe using styles in a css file would be easier.
// I think i need a runthrough on how i can do this easier, and maybe an explanation on what to do.
// I heard something about using Promise method, but I havent been able to wrap my head around this and how to make that easy for me to understand. 
// Hopefully the Course Assignment i'll do better and can be ready for this problem. 
