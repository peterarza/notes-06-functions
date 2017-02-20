/* A function is declared using the 'function' keyword followed by the function's name, then its parameter/arguments in round braces. And finally, in curly braces you write out the instructions or code that the function should perform. For example... */

function myFunction() {
	document.getElementById('function1').innerHTML ="I'm a functioning member of society";

}

// The function above will not run until it is called or invoked. Like below...
myFunction();

// Global scope variables using #scope1
var pants ="jeans"; // pants is a global variable
document.getElementById('scope1').innerHTML = pants;

var pants = "Cargo"; // this instance of pants has overritten the one above it
document.getElementById('scope1').innerHTML = pants;


// Local scope variables using #scope2
function myLocalShirts() {
  var shirts ="Blouse"; // declare a local variable
  document.getElementById('scope2').innerHTML = shirts;

}

myLocalShirts(); // call the myLocalShirts() function and run it

var shirts = "Sweater";
document.getElementById("scope2").innerHTML = shirts;
myLocalShirts();

// Create a function that will take in 2 arguments then return a value.
function addNumbers(a, b) {
	var sum = a+b;
	// send the value of sum from the above operation outside of the function using a return.

return sum;

}

document.getElementById('arguments').innerHTML = 'The sum of addNumbers is '
+ addNumbers(56, 4);

// Create a function that will take in 2 arguments that return the modulus of 2 numbers and displays the remainder inside of #modulus.

function showModulus(a, b) {
	var mod = a % b;
	return mod;

}
 document.getElementById('modulus').innerHTML = 'The modulus is ' + showModulus(14, 6);

 // Using conditionals in functions with #conditional 
 function applesOranges(myFruit) {
 	// local variable of fruits
 	var fruits;

 	if (myFruit == 'apples') {
 		var fruits = document.getElementById('conditional').innerHTML = 'Apples';
  	} else if {myFruit == 'oranges'} {
  		var fruits = document.getElementById('conditional').innerHTML = 'Oranges';
  	} else if {myFruit == 'potato'} {
  		var fruits = document.getElementById('conditional').innerHTML = 'That is not even a fruit';

 }else {
 	var fruits = document.getElementById('conditional').innerHTML = 'You don\'t have apples or oranges';

 }

 return fruits;

}

applesOranges('potato');

// Ask the user to enter how many loops you would like
var userLoops = prompt('How much do you want to loop?', 'enter a number');

function loopThis(howMany) {
	for (var i =0; i < howMany; i++) {
		document.write('I\'m looping!' + '<br>');
	}
} 

loopThis(userLoops);







