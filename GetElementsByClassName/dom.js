var headerTitle=document.getElementById('header-title');
var header=document.getElementById('main-header');
console.log(headerTitle);
header.style.borderBottom='solid 3px #000';
//headerTitle.textContent='Hello';
//headerTitle.innerText='World';
console.log(headerTitle.innerText);
var item=document.getElementsByClassName('list-group-item');
item[2].style.backgroundColor='green';
console.log(item);
for(let i=0;i<item.length;i++){
    item[i].style.fontWeight='bold';
}