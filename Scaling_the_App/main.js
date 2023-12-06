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
  var phone=document.getElementById('phone').value;
  var li=document.createElement('li');
  li.className='list-group-item';
  li.appendChild(document.createTextNode(name+"-"+email+"-"+phone));
  form.appendChild(li);
  let myObj={
    'name':name,
    'email':email,
    'phone':phone
  };
  localStorage.setItem(email,JSON.stringify(myObj));  
}
