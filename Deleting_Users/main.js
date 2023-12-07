/*console.log(document.cookie);
localStorage.setItem('name','Bob');
sessionStorage.setItem('name','Wayne');
document.cookie='name=Bob';
*/
var form=document.getElementById('my-form');
//console.log(form);
var list=document.getElementById('users');

form.addEventListener('submit',StoreIt);

function StoreIt(e){
  e.preventDefault();
  var name=document.getElementById('name').value;
  var email=document.getElementById('email').value;
  var phone=document.getElementById('phone').value;
  var li=document.createElement('li');
  var emailElem=document.createElement('p');
  emailElem.className='email';
  emailElem.appendChild(document.createTextNode(email));
  var deleteItem=document.createElement('input');
  deleteItem.className='btn';
  deleteItem.type='button';
  deleteItem.style.backgroundColor='coral';
  deleteItem.value='Delete';
  li.className='list-group-item';
  //li.appendChild(document.createTextNode(name+"-"+email+"-"+phone));
  
  li.appendChild(document.createTextNode(name));
  li.appendChild(emailElem);
  li.appendChild(document.createTextNode("-"));
  li.appendChild(document.createTextNode(phone));
  li.appendChild(deleteItem);
  list.appendChild(li);
  //console.log(list);
  let myObj={
    'name':name,
    'email':email,
    'phone':phone
  };
  localStorage.setItem(email,JSON.stringify(myObj));  
}
list.addEventListener('click',DeleteIt);

function DeleteIt(e){
  e.preventDefault();
  localStorage.removeItem(e.target.parentElement.getElementsByClassName('email')[0].innerText);
  e.target.parentElement.remove();
}