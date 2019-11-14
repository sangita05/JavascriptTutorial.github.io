var age = prompt("What is your age?");
if (age < 0){
	alert("error msg");
	console.log("error msg");
}else if (age == 21){
	alert("happy 21st birthday");
	console.log("happy 21st birthday");
}else if (age %2 !== 0) {
	alert("your age is odd");
}else if (age % Math.sqrt(age) === 0){
	alert("your age in perfect squer");
}