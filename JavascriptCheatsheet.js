// BASICS


// 1) Loging/print
console.log(a)
document.write(a)
alert('a')
confirm('really')
prompt('what is your age')

// 2) Data types
var age = 18;  // number
var name = 'ryan' // string
var name = {name: 'ryan', age: 22}
var truth = false  // boolean
var sheets = [ 'html', 'css', 'js']
var a = typeof a;// undefined
var a  = null // null

// 3) If -Else statement
if(age >= 14 && age <= 20){  // logical condition
  console.log('eligible')  // executed if condition is true 
} else{   // optional, executed if condition is false
  console.log('not eligible')
}

// 4)  Javascript Loops
 for(let i = 0; i< 100; i++ ){
  console.log(i + '<br /> ');
 };

 let i = 1;
 while (i> 1){
i*= 2
console.log(i++);
 };

 let x = 2;
 do{
  x *2;
  console.log(x++)
 } while(x < 50)
 

  // Javascript strings 

  var abc = 'qwertyuiop';
  var esc = 'i dont \n know' // \n new line
  var len  = abc.length; // string length
  abc.indexOf('lmno'); // finds substring
  abc.slice(3,6); // cuts out def
  abc.toUpperCase() // converts to uppercase
  abc.toLowerCase() // converts to lowercase
  abc.concat('' , str2) // abc + '' + str2


  //  Javascript Math 
  var pi = Math.PI; // 3.1415....
  Math.round(4.4) // 4.4 rounded to 4
  Math.pow(2, 8) // 2 to power of 8 is 256
  Math.abs(-5) // returns 5, positive value
  Math.ceil(4.5) // returns 5 , rounds up
  Math.floor(4.5)  // returns 4 , rounded down 
  Math.random() // returns random number between 0 and 1
  Math.floor(Math.random() * 5) + 1 // random integer from 1 to 5


  // Javascript numbers  
pi.toFixed(0) // returns 3
pi.toFixed(2) // returns 3.14
pi.valueOf() // returns number
Number(true); // converts to number
Number(new Date())  // number of milleseconds since 1970
parseInt('3 months')  // returns first number : 3
parseFloat('3.5 days')  //returns 3.5 , string to float
Number.MAX_VALUE // largest possible javascript number



//JAVASCRIPT TIPS

// Declaring variables 
// longhand
var y;
var z;
var a = 'b'
//shorthand
var y,z,a='b'

// ASSIGNMENT OPERATORS
// Longhand
x = x+y;
x = x-y
// shorthand
x+=y;
x-=y;

//Ternary operators
//longhand
var number;
if(c > 9){
  number = true;
} else{
  number = false;
}
// shorthand
var number = c > 9 ? true : false; // test with 5 and 10 

// Arrow functions
//longhand 
function sayHello(name){
  console.log('hello ' + name)
}
// shorthand
sayHello = () => console.log('hello ' + name)