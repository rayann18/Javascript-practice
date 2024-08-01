// creating elements with create elements, creates a new <p> element and sets its text content
document = ''
const newP  = document.createElement('p');
newP.textContent = 'new paragraph'
console.log(newP); //<p>new paragraph </p>

////appending elements with append child
const parent = document.querySelector('div');
parent.appendChild(newP)
console.log(newP); //apends  newly created paragraph to existing parent element 
// initial, <div></div>
//result, <div> <p>new paragraph </p> </div>

// inserting elements with insert before and after, inserts a new tag element before or after existing element
const newH = document.createElement('h1');
parent.insertBefore(newH, newP)
console.log(newH)
//  <div> <h2></h2> <p>new paragraph </p> </div>

// clone elements with clone node
const clonedElement = newP.cloneNode(true);
parent.appendChild(clone)
console.log(clonedElement)