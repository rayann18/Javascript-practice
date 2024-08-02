// var
var x= 1;
if(true){
  var x = 2;
  console.log(x) //2 , var x has been redeclared
} 
console.log(x) //output is 2 


// let 
let y =1;
if(true){
  let y = 2;
  console.log(y) //2, y=2 is block scoped, works only inside {}
}
console.log(y) // 1

// const
const z = 3;
if(true){
  const z = 4;// different variable
  console.log(z)
}
console.log(z)


// Data types
let num = 42;
let str = 'hello';
let bool = true ;
let undefined = ''
let nul = null;
let sym = Symbol('symbol');
let bigInt = 9999999999999999999;
let obj = {name: 'john'}


// Typeof operator
console.log(typeof 42);
console.log(typeof 'hello');
console.log(typeof true);
console.log(typeof undefined); // undefined
console.log(typeof null) // object
console.log(typeof Symbol('symbol'))
console.log(typeof 99999939499449499494893938939n) // big int
console.log(typeof {})
console.log(typeof [])
console.log(typeof  function() {})


// == && ===
console.log(1=='1')// true, converts to matching types before comparison
console.log(1==='2') // false, forces comparison of values and types

// functions
// function declaration
function greet(){
  console.log('hello')
}
greet() // hello

// function expression
const greet2 = function(){
  console.log('hi')
}
greet2() // hi

//arrow function
const greet3 = () => {
  console.log('hey')
}
greet3()

// Hoisting
console.log(w) // undefined, var is hoisted
var w= 5;

/*
console.log(t); //reffernce error, let is not hoisted
let t  = 6 ;
 
*/ 

greet4(); // function declarations are hoisted
function greet4(){
console.log('hello')
}

/*
greet5(); // type error, greet is not a function since  function expressions are not hoisted
var greet5 = function (){
console.log('hi')
}
*/

// Closures
function makeCounter(){
  let count = 0;
  return function(){
    count++;
    console.log(count)
  }
}
const counter = makeCounter();
 // counter() // 1
// counter() // 2

//IIFE
( function() {
  console.log('IIFE executed')
})()

/*
( () => {
  console.log('IIFE executed with arrow function')
}) ()
*/

// null and undefined difference
let a;
console.log(a) // undefined

let b = null
console.log(b);


// Template literals
let name = 'john'
let greeting = `hello + ${name} ` // string
console.log(greeting)

let multiLine = `This is a 
multiline string`
console.log(multiLine);

console.log([1,2,3].map(x => x*2))
let arr = [2,3,4].forEach( x => console.log(x*2))

// arrow functions
const add = (a,b) => a+b
console.log(add(2,3)) // 5

const greet6= name => `hello, ${name }!`
console.log(greet6('ryan'))

//call, bind and apply
function greet(greeting1, punctuation){
  console.log(greeting1 + ',' + this.name1 + punctuation)
}
const person = {name1: 'giggs'};
greet.call(person, 'hello', '!');
greet.apply(person, ['hi', ' !']);
const greetPerson = greet.bind(person)
greetPerson('Hey', ' !')
greet.bind(person, 'Hey', '!'); 

/*
// event delegation
<ul id = "myList">
<li>1</li>
<li>2</li>
<li>3</li>
</ul>

<script>
document.getElemenById('myList').addEventListener('click', (event) => {
if(event.target.tagName === 'LI'){
  console.log('CLICKED ON' + event.target.textContent)
}
})
</script>
*/

//promises
let promise = new Promise((resolve, reject) => {
setTimeout(() => {
  console.log('PROMISE RESOLVED')
}, 1000);
}).then(
  result => console.log(result),// resolved
 // error = console.log(error)
).catch(
  result => console.log(error)
)

//async await
async function fetchData() {
try{
  let response = await
  fetch(url);
  let data = await response.json();
  console.log(data);
} catch(error){
  console.log('error', error)
}
}
fetchData