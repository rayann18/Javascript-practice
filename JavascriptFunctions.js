// named function
function myFunction(){  // myfunction is the functions name
  console.log('alpha ranks')
}
myFunction(); // alpha rank

//named function with arguments
function myFunction(parameter1){
console.log(parameter1)
}
myFunction(10); // 10 is the argument passed to the parameter value

// anonymous function
const myFunction = function(){
  console.log('alpha ranks')
}
myFunction() // alpha ranks

//anonymous function with arguments
const myFunction = function(parameter1){
console.log('alpha ranks')
}
myFunction(10); //10

//arrow functions with no arguments
const myFunction  = () => {
  console.log('alpha ranks')
}
myFunction(); // alpha ranks

// arrow functions with a single argument
const myFunction = (parameter1) => {
  console.log(parameter1)
}
myFunction(10); // 10

// arrow functions with two arguments
const mySum = (param1, param2) => {
  console.log(param1 + param2)
}
mySum(10, 20); // 30

//consise arrow functions with arguments
const mySum1  = (a,b) => a+b ;
console.log(mySum1(2,10)); // outputs 12

