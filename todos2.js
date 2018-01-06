var todos = [];

var input = prompt("What would you like to do?");

while(input !== "quit"){

if (input === "list"){
makeList();
}
else if(input === "new"){
newItem();
}
else if(input === "delete"){
var index = prompt("What would you like to delete?");
todos.splice(index,1);


}

input = prompt("What would you like to do?");
}

console.log("Goodbye");
alert("Goodbye");

function makeList(){
	todos.forEach(function (todo,i){
	console.log(i +": " +todo);
});
}

function newItem (){
var newTodo = prompt ("What would you like to add?");
todos.push(newTodo);
}