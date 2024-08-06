//classical inheritance using es6
class Animal {
  constructor(name){
    this.name = name ;
  }
  speak(){
    console.log(`${this.name}, make a noise`)
  }
}

class Dog extends Animal {
  constructor(name,age){
    super(name);
    this.age = age;
  }
  speak(){
    console.log(`${this.name} barks`)
  }
}

const dog = new Dog('rex')
dog.speak()// rex barks


// prototypical inheritance
const parent = { greet() {
  console.log('hello parent')
}
}
const child = Object.create(parent)
child.greet() // hello parent


// this in regular and arrow functions
const obj = {
  name: 'john',
  regularfunction: function(){
    console.log(`${this.name}`) // john, refers to the object that called the function
  },
  
// this in arrow function
  arrowFunction: () => {
    console.log(`${this.name}`) // undefined
  }
}
obj.regularfunction()
obj.arrowFunction()

// es6 classes fifference from constructors

class person{
  constructor(name){
this.name = name;
  }
  greet(){
    console.log(`hello, my name is ${this.name}`)
  }
}
const  person1 = new person('Alice')
person1.greet() // hello, my name is alice

// constructor function
function Person(name){
 this.name = name;
 person.prototype.greet = function(){
  console.log(`hello, my name is ${this.name}`)
 }
}
const person2 = new person('Bob')
person2.greet() // hello, my name is bob

// async
async function fetchData(){
  let response = await
  fetch(URL)
  let data = await response.json;
  console.log(data);
}
fetchData()