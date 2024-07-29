// First class
// create first class and add constructor method that will enable creation of instances of objects based on our class

class Animal  {
constructor(name, age){
this.name = name;
this.age = age;
}
getInfo(){  // method
return (`The name of the animal is ${this.name} and the age is ${this.age}`)
}
};

// first instances 
// to create a new object from this constructor, we use the new keyword and pass in the given name and age of the animal we are creating
// we also add the get info method to return the information about the object

const firstAnimal = new Animal ('rex', 21);
console.log(firstAnimal);
console.log(firstAnimal.getInfo());

const secondAnimal = new Animal ('mutina bosco', 8);
console.log(secondAnimal);
console.log(secondAnimal.getInfo());

// INHERITANCE
// Class inheritance is a feature that enables certain classes to take all the methods and properties of parent class and make it possible to extend parent class by adding more
/*
class Dog extends Animal {
  constructor(name, age, breed){
super(name, age)
    this.breed = breed;
  }
  bark(){        // bark method
  return 'woof'  
  }
}
class Cat extends Animal{
  constructor(name,age,weight){
super(name,age)
this.weight = weight;
  }
  
}

const myDog  = new Dog ('REX', 21, 'german shepherd');
console.log(myDog.getInfo());
console.log(myDog.breed)
console.log(myDog.bark());

const myCat = new Cat('KITTEN', 3, '3000grams');
console.log(myCat.getInfo);
console.log(myCat.weight);

*/

// ENCAPSULATION
//Restriction mechanism making accessing the data impossible without using special methods dedicated for this. in this example, we mark weight as private property, in order to get and a set value , we need to use the getter and setter method.

class Cat1 extends Animal{
  #weight ; // mark as private
  constructor(name,age,weight){
    super(name,age);
    this.#weight= weight
  }
  getWeight(){   // getter method
return this.#weight
  }
  setWeight(weight){   // setter method
    return this.#weight = weight
  }
}
const myCat1 = new Cat1 ('whiskers', 5, '5kg');
console.log(myCat1.getWeight());
myCat1.setWeight('6kg');
console.log(myCat1.setWeight('6kg'));


//POLYMORPHISM
// UTILISES CLASS INheritance for reusing mautiple methods multiple times with a different behaviour depending on class types
// to understand this, lets remove the bark method in dog class and add make sound mehtod to animal class which will be overidden by cat and dog classes

class Animal1 {
  constructor(name, age){
    this.name = name;
    this.age = age;

  }
  makeSound(){
    return (`some nice sound`)
  }
}
class Dog1 extends Animal1 {
  constructor(name,age,breed){
    super(name,age);
    this.breed = breed
  }
  makeSound(){
    return 'woof'
  }
}

class Cat2 extends Animal{
  constructor(name,age,weight){
    super(name,age)
    this.weight = weight
  }

  makeSound(){
    return 'meoww'
  }
}
const myDog1 = new Dog1 ('popi',6, 'german shepherd')
const myCat2  = new Cat2 ('whiskers', 5, '5kg')
console.log(myCat2)
console.log(myDog1)

console.log(myDog1.makeSound()); // woof
console.log(myCat2.makeSound()); // meoww

// ABSTRACTION
// A class which cant be instantiated and requires subclasses which inherit from a particular abstract class to provide implementations. we will make the animal class to abstract class 

class Animal3 {
  constructor(name, age){
    this.name = name;
    this.age= age;
    if(this.constructor == Animal3){
      throw new Error('Cant create an instance of abstract class')
    }
  }
  makeSound(){
    throw new Error('abstract method doesnt have an implementation')
  }
}

class Dog extends Animal3{
  constructor(name,age,breed){
    super(name,age);
    this.breed = breed
  }
  makeSound(){
    return'woof'
  }
}

class Cat extends Animal3 {
  constructor(name,age,weight){
    super(name,age);
    this.weight = weight
  }
  makeSound(){
    return 'meoww'
  }
}
const myAnimal = new Animal3('simba', 4)  // cant instantiate anymore , Error: Cant create an instance of abstract class
const myDog = new Dog('rex', 3, 'german shepherd')
const myCat = new Cat('whiskers', 5, '5kgs')

console.log(myCat.makeSound()) // error since make sound isnt availabel