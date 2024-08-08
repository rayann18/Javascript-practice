//functional programming
const add  = (a,b) => a+b;
const double = x => x*2
const compose = (f,g) => x => f(g(x))
const addAndDouble= compose(double, add)
console.log(addAndDouble(2,33))


// Closures
function outerFunction(outerVariable){
  return function innerFunction(innerVariable){
    console.log('outer variable' + outerVariable)
    console.log('inner variable' + innerVariable)
  }
}
const newFunction = outerFunction('outside') //outer variableoutside
newFunction('inside') // inner variableinside


//private variables in javascript
class Person{
  #privateName

  constructor(name){
    this.#privateName = name;
  }
  getName(){
    return this.#privateName
  }
}
const person =new Person ('John')
console.log(person.getName) // john
//console.log(person.#privateName) // syntax error


// currying concept in js
// without currying
function greet(greeting, name){
return greeting + "" + name;
}
console.log(greet('hello',' alice'))

// with currying
function greet(greeting){
  return function(name){
    return greeting + " " + name
  }
}
const sayHello = greet('hello')
console.log(sayHello('alice'))


// debounce function
window.addEventListener('resize', debounce( () => {
  console.log('resized')
}, 500))

// throttle
window.addEventListener('scroll', throttle( () => {
  console.log('scroll event')
}, 1000))














//closures