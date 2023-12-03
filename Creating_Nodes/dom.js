var itemList=document.querySelector('#items');
//parentNode
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor='#f4f4f4';
console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='#f4f4f4';
console.log(itemList.parentElement);

//childNodes
//console.log(itemList.childNodes);  //includes linebreaks and whitespaces
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='yellow';

console.log(itemList.firstChild);
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='Hello 1';

//lastChild
console.log(itemList.lastChild);
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='Hello 4';

//nextsibling
console.log(itemList.nextSibling);
//nextElementSibling
console.log(itemList.nextElementSibling);

//previousSibling
console.log(itemList.previousSibling);
//previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='green';

//createElement

//Create a div
var newDiv=document.createElement('div');
console.log(newDiv);

newDiv.className='hello';
console.log(newDiv);

//Add id
newDiv.id='hello1';

newDiv.setAttribute('title','Hello Div');

//Create a text node
var newDivText=document.createTextNode('Hello World');

//Add text to div
newDiv.appendChild(newDivText);

var container=document.querySelector('header .container');
console.log(container);
var container1=document.querySelector('ul');
var h1=document.querySelector('header h1');
console.log(h1);
var item1=document.querySelector('li');
console.log(item1);

console.log(newDiv);
newDiv.style.fontSize='30px';
container.insertBefore(newDiv,h1);

var newDiv1=document.createElement('div');
console.log(newDiv1);

newDiv1.className='hello';
console.log(newDiv1);

//Add id
newDiv1.id='hello1';

newDiv1.setAttribute('title','Hello Div');

//Create a text node
var newDivText1=document.createTextNode('Hello World');

//Add text to div
newDiv1.appendChild(newDivText1);
container1.insertBefore(newDiv1,item1);

