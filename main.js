//console.log(window);

//console.log(document.getElementById('my-form'));
//console.log(document.querySelector('my-form'));

//console.log(document.querySelectorAll('.item'));
//console.log(document.getElementsByClassName('item'));
//console.log(document.getElementsByTagName('li'));

const ul=document.querySelector('.items');

//items.forEach((item)=>console.log(item));
//ul.firstElementChild.textContent='Hello';
//ul.children[1].innerText='Brad';
//ul.lastElementChild.innerHTML='<h1>Hello</h1>';
//ul.firstElementChild.style.color='green';
//ul.children[1].style.color='yellow';



//const btn=document.querySelector('.btn');
//btn.style.background='red';

const btn=document.querySelector('.btn');

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    document.querySelector('#my-form').getElementsByClassName.background='#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML='<h1>Hello</h1>';

});
btn.addEventListener('mouseout',(e)=>{
    e.preventDefault();
    document.querySelector('#my-form').getElementsByClassName.background='#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML='<h1>Hello</h1>';

});
btn.addEventListener('mouseover',(e)=>{
    e.preventDefault();
    document.querySelector('#my-form').getElementsByClassName.background='#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML='<h1>Hello</h1>';

});
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(document.querySelector('my-form'));

});

