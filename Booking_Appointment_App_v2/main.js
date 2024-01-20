/*console.log(document.cookie);
localStorage.setItem('name','Bob');
sessionStorage.setItem('name','Wayne');
document.cookie='name=Bob';
*/

axios.get("https://crudcrud.com/api/0d226577a67448b6ae5002f3807e6684/appointmentData")
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err);
    })
var form=document.getElementById('my-form');
console.log(form);

form.addEventListener('submit',StoreItCloud);

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

function StoreItCloud(e){
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
    axios.post("https://crudcrud.com/api/0d226577a67448b6ae5002f3807e6684/appointmentData", myObj)
        .then((response)=>{
            console.log(response)
        })
        .catch((err)=>{
            console.log(err)
        })
    //localStorage.setItem(email,JSON.stringify(myObj));  
  }