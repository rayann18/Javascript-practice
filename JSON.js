// used widely for transmitting data between servers and web apps
// supports strings, bools, numbers, arrays, objects and null

// javascript object to JSON
const person = {
  name: 'hamza',
  age: 20,
  isDeveloper: true,
  domain:'backend, blockchain'
};
// convert javascript object to json string
const jsonString = JSON.stringify(person)
console.log(jsonString); // output {"name":"hamza","age":20,"isDeveloper":true,"domain":"backend, blockchain"}

//JSON TO JAVASCRIPT OBJECT
console.log(JSON.parse(jsonString)); // output  is javascript object


console.log(Date.now(30000))



// spread operator
// array spread
const arr1 = [1,2,3]
const arr2 = [4,5,6]
const mergedArr = [...arr1,...arr2]
console.log(mergedArr)

// object spread
const obj1 = {a:1, b:2}
const obj2 = {c:3, d:4}
const mergedObj = {...obj1, ...obj2}
console.log(mergedObj)

// copying arrays
const array1 = [1,2,3]
const copied = [...array1]
console.log(copied)

//concatenating arrays
const a1 = [7,8,9]
const a2 = [9,8,7]
const a1a2 = [...a1, 6, ...a2]
console.log(a1a2) //  [   7, 8, 9, 6,  9, 8, 7]




// function arguments
//spread operator can be used to passs array of values as individual arguments to a function
const args = [1,2,3]
function exampleFunction(arg1,arg2,arg3){
console.log(arg1,arg2,arg3)
}

exampleFunction(...args) // [ 1, 2, 3 ]

// rest parameter
function exampleFunction(...args){
  console.log(args)
}
exampleFunction(1,2,3) //[ 1, 2, 3 ]

// merging arrays and objects
const obje = {a:1, b:2}
const arr = [9,8,7]
const joined = {...obje, ...arr}
console.log(joined) //  { '0': 9, '1': 8, '2': 7, a: 1, b: 2 }

// map and set
//creating a map with key-value
const numberMap = new Map().set('one', 1)
console.log(Map())