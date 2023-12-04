var form=document.getElementById('addForm');
var itemList=document.getElementById('items');


//Form submmit event
form.addEventListener('submit',addItem);

//Delete event
itemList.addEventListener('click',removeItem);
//Add item
function addItem(e){
    e.preventDefault();

    //Get input value
    var newItem=document.getElementById('item').value;

    //Create new lo element
    var li=document.createElement('li');
    //Add class
    li.className='list-group-item';
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    console.log(li);


    //Create a del button element
    var deleteBtn=document.createElement('button');

    //Add classes to delete button
    deleteBtn.className='btn btn-danger btn-sm float-right delete';

    //Append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    
    li.appendChild(deleteBtn);

    //itemList.appendChild(li);

    var editBtn=document.createElement('button');
    editBtn.className='btn btn-danger btn-sm float-right edit';
    editBtn.appendChild(document.createTextNode('X'));
    li.appendChild(editBtn);
    itemList.appendChild(li);
}

//Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}