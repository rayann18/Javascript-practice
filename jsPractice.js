// event loop in js
console.log('start')
setTimeout( () => {
  console.log('timer')
}, 5000)
console.log('end');

// set timeout
setTimeout( () =>{
  console.log('this runs after 1 second')
}, 1000);

//set interval
const intervalId = setInterval( () =>{
  console.log('this runs very 2 seconds')
}, 2000)
clearInterval(intervalId);

/*
// hof
function pizzaavailabe(){
  if('pizza' === true){
    return 'okay'
  } else {
    return 'not available'
  }
}
function billIspaid(){
if('billIspaid' === true){
  return 'order will be on the way'
} else {
  return 'pay first'
}
}
function sendVerification(pizzaavailabe, billIspaid){  //hof
  if(pizzaavailabe()){
   if( billIspaid()) {
      console.log('order is on the way')
    }

  } 
  
}
sendVerification()
*/

function highOrderfunction(fn){
  return function() {
    return fn ();
  }
}
const sayHello = highOrderfunction ( () => {
  console.log('this is a high order function')
})
sayHello();

//this keyword
const obj = {
  value:41,
  getValue: function (){
    return this.value
  }
}
console.log(obj.getValue()) // 41

function globalContext(){
  return this;
}
console.log(globalContext())// [object window]

/*
// modules.js
export const value =42;
export function sayHello(){
  console.log('hello')
}
// 
import { value, sayHello } from "./module.js";
console.log(value)
sayHello()
*/

// prototypical inheritance
const parent = {
  greet() {
console.log('hello from parent');
  }
}
const child = Object.create(parent);
child.greet()// hello from parent

// call back
 function fetchData(callback){
setTimeout(() => {
callback('data recieved')
}, 1000);
 }
 fetchData((data) =>{
  console.log(data) // data received
 }) 

 // promises
 const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
  },1000);
 }) .then( (value) =>{
  console.log(value)
 }).catch((error) =>{
console.log(error)
 })

 // map and filter
console.log([1,2,3,4].map(x => x*2 )) // [2,4,6,8]
console.log([1,2,3,4].filter(x => x%2 === 0)) // [2,4]

//destructuring
const [a,b] = [1,2]
console.log(a,b); // 1,2

const{name,age} = {name:'john', age: 30}
console.log(name,age) // john, 30

// rest parameter
function sum(...numbers){
  return numbers.reduce( (total,sum) => total + sum, 0)
}
console.log(sum(1,2,3,4)) // 10 


// spread operator
const arr = [1,2,3]
const arr2= [...arr,4,5]
console.log(arr2) //[1,2,3,4,5]

const obj1 = {a:1, b:2}
const obj2 = {...obj1, c:3}
console.log(obj2) // { a: 1, b: 2, c: 3 }

// for of
const object = {a:2, V:3,c:5}
for(let i in object){
  console.log(i, object[i]) //1 2 3  4 5 
  i++
}

//for in
const arrays = [1,2,3]
for(let i in arrays){
  console.log(i) // 1 2 3
  i++
}


// try catch
try{
  console.log('2' + 1)
  throw new Error('INVALID SYNTAX');
} catch (error){
  console.error(error.message) // something went wrong
} finally{
  console.log('this code runs irregaardless of the error')
}

// object.create
const person  = {
  greet(){
    console.log('hello frpm parent')
  }
}
const child1 = Object.create(parent)
child.greet() // hello from parent

