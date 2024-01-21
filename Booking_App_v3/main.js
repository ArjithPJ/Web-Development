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
const deletebtn=document.createElement('button');

function displayData(data) {
    const container = document.getElementById('container');
    //container.innerHTML = '';
    data.forEach(item => {
      var itemDiv = document.createElement('div');
      var deletebutton=document.createElement('button');
      deletebutton.innerText="Delete";
      itemDiv.innerHTML = `<p id='_id'>${item._id}</p>
                           <p id='name'>${item.name}</p>
                           <p id='email'>${item.email}</p>
                           <p id='phone'>${item.phone}</p>`;
      itemDiv.appendChild(deletebutton);
      deletebutton.addEventListener('click',DeleteItem);
      container.appendChild(itemDiv);
    });
  }
var form=document.getElementById('my-form');
console.log(form);

form.addEventListener('submit',StoreItCloud);

deletebtn.addEventListener('click', DeleteItem);



// function StoreIt(e){
//   e.preventDefault();
//   var name=document.getElementById('name').value;
//   var email=document.getElementById('email').value;
//   var phone=document.getElementById('phone').value;
  

//   var li=document.createElement('li');
//   li.className='list-group-item';
//   li.appendChild(document.createTextNode(name+"-"+email+"-"+phone));
//   form.appendChild(li);
//   let myObj={
//     'name':name,
//     'email':email,
//     'phone':phone
//   };
//   localStorage.setItem(email,JSON.stringify(myObj));  
// }

function StoreItCloud(e){
    e.preventDefault();
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var phone=document.getElementById('phone').value;
    document.getElementById('name').value='';
    document.getElementById('email').value='';
    document.getElementById('phone').value='';

    let myObj={ 
        'name':name,
        'email':email,
        'phone':phone
      };
      axios.post("https://crudcrud.com/api/0d226577a67448b6ae5002f3807e6684/appointmentData", myObj)
          .then((response)=>{
            const container = document.getElementById('container');
            //container.innerHTML = '';
            const itemDiv = document.createElement('div');
            deletebtn.innerText="Delete";
            itemDiv.innerHTML = `<p id='_id'>${response.data._id}</p>
                                <p id='name'>${name}</p>
                                <p id='email'>${email}</p>
                                <p id='phone'>${phone}</p>`;
            itemDiv.appendChild(deletebtn);
            container.appendChild(itemDiv);
            
          })
          .catch((err)=>{
              console.log(err)
          })
     
  }

  function DeleteItem(e){
    e.preventDefault();
    const id=e.target.parentElement.querySelector('#_id').innerText;
    axios.delete("https://crudcrud.com/api/0d226577a67448b6ae5002f3807e6684/appointmentData/"+id)
        .then(()=>{
            e.target.parentElement.remove();
        })
        .catch((err)=>{
            console.error(err);
        })
  }