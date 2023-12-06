/*console.log(document.cookie);
localStorage.setItem('name','Bob');
sessionStorage.setItem('name','Wayne');
document.cookie='name=Bob';
*/


var form=document.getElementById('my-form');
console.log(form);

form.addEventListener('submit',StoreIt);

function StoreIt(e){
  e.preventDefault();
  var name=document.getElementById('name').value;
  var email=document.getElementById('email').value;
  localStorage.setItem(name,email);  
}