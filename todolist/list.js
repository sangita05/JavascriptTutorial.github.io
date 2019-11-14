var todo = ["buy a car"];
var inputs = prompt("what whould you like to do?");
while(inputs !== "quit"){
if(inputs === 'list')
{
	console.log(todo);
}
else if(inputs === 'new'){
 var newtodo = prompt("enter new todo");
todo.push(newtodo);

}
inputs = prompt("what whould you like to do");

}
console.log("we quite");