var headerTitle=document.getElementById('header-title');
var header=document.getElementById('main-header');
console.log(headerTitle);
header.style.borderBottom='solid 3px #000';
//headerTitle.textContent='Hello';
//headerTitle.innerText='World';
console.log(headerTitle.innerText);
/*var item=document.getElementsByClassName('list-group-item');
item[2].style.backgroundColor='green';
console.log(item);
for(let i=0;i<item.length;i++){
    item[i].style.fontWeight='bold';
}*/


//QUERYSELECTOR //
/*var header=document.querySelector('#main-header');
header.style.borderBottom='solid 4px #ccc';

var input=document.querySelector('input');
input.value='Hello World';

var submit=document.querySelector('input[type="submit"]');
submit.value="SEND";

var item=document.querySelector('.list-group-item');
item.style.color='red';

var lastItem=document.querySelector('.list-group-item:last-child');
lastItem.style.color='blue';

var secondItem=document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color='coral';

var titles=document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent='Hello';

var odd=document.querySelectorAll('li:nth-child(odd)');

for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='#f4f4f4';
}
var even=document.querySelectorAll('li:nth-child(even)');

for(var i=0;i<even.length;i++){
    even[i].style.backgroundColor='#ccc';
}*/

var secondItem=document.querySelector('li:nth-child(2)');
secondItem.style.backgroundColor='green';

var thirdItem=document.querySelector('li:nth-child(3)');
thirdItem.style.color='transparent';

var items=document.querySelectorAll('li');
items[1].style.color='green';

var odd=document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';
}

