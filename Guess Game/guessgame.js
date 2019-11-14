// var secretNumber = 4;
// var guess = Number(prompt("what is the right number?"));
// if(guess === secretNumber){
// 	alert("right number");
// }else if(guess > secretNumber){
// 	alert("hogh number")
// }else
// alert("low number");

// function test(x,y){
// 	return y-x;
// }
// test(10,40);


// fuction isEven(num){
// 	return num % 2 === 0;
// }

// function isEven(num){
// 	return num % 2 === 0;
// }

// function factorial(num){
// 	var result = 1;
// 	for(var i=1; i<=num; i++){
// 		result = result * i;
// 	}
// 	return result;
// }

function kebabToSnake(str) {
    //replace all dashes with
    var myString = str.replace(/-/g, "_");
    //return str
    return myString;
    //try with: "this - is -a - ---test";
}
 