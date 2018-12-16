var body = document.querySelector('body')
var uList = document.createElement('ul'); //Create an UL to store the list elements

// Fetch the JSON data from the API
requestURL = "https://jsonplaceholder.typicode.com/todos";
request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
    var todo = request.response;
    todoCard(todo);
}

function todoCard(todo) {
    for (var i = 0; i < todo.length; i++) {
        var myList = document.createElement('li');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');

        myPara3.textContent = "Title: " + todo[i].title;
        myPara1.textContent = "UserID: " + todo[i].userId;
        myPara2.textContent = "ID: " + todo[i].id;
        myPara4.textContent = "Completed?: " + todo[i].completed;

        myList.appendChild(myPara3);
        myList.appendChild(myPara2);
        myList.appendChild(myPara1);
        myList.appendChild(myPara4);

        uList.appendChild(myList);
        body.appendChild(uList);
    }
}



// UserID
// ID
// title
// completed true/false

