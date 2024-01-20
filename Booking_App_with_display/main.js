/*console.log(document.cookie);
localStorage.setItem('name','Bob');
sessionStorage.setItem('name','Wayne');
document.cookie='name=Bob';
*/

// window.addEventListener("DOMContentLoaded", () => {
//     const localStorageObj =localStorage;
//     const localstoragekeys=Object.keys(localStorageObj)

//     for(var i=0; i<localstoragekeys.length; i++){
//         const key=localstoragekeys[i]
//         const userDetailsString=localStorageObj[key];
//         const userDetailObj=JSON.parse(userDetailsString);
//         showNewUserOnScreen(userDetailsObj);
//     }
// })

window.addEventListener("DOMContentLoaded", ()=>{
    axios.get('https://crudcrud.com/api/0d226577a67448b6ae5002f3807e6684/appointmentData')
        .then((response)=>{
            console.log(response);
            displayData(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
})

function displayData(data) {
    const container = document.getElementById('container');
    //container.innerHTML = '';
    data.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.innerHTML = `<p>Name: ${item.name}</p>
                           <p>Email: ${item.email}</p>
                           <p>Phone Number: ${item.phone}</p>`;
      container.appendChild(itemDiv);
    });
  }
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
    document.getElementById('name').value='';
    document.getElementById('email').value='';
    document.getElementById('phone').value='';
    // var li=document.createElement('li');
    // li.className='list-group-item';
    // li.appendChild(document.createTextNode(name+"-"+email+"-"+phone));
    // form.appendChild(li);
    const container = document.getElementById('container');
    //container.innerHTML = '';
    const itemDiv = document.createElement('div');
    itemDiv.innerHTML = `<p>Name: ${name}</p>
                        <p>Email: ${email}</p>
                        <p>Phone Number: ${phone}</p>`;
    container.appendChild(itemDiv);
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