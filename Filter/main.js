var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter=document.getElementById('filter');
var input=document.getElementsByClassName('btn btn-dark');
console.log(input);
//Form submmit event
form.addEventListener('submit',addItem);

//Delete event
itemList.addEventListener('click',removeItem);

//Filter event
filter.addEventListener('keyup',filterItems);

var desc=document.createElement('input');
desc.className="form-control mr-2";
desc.id="description";
//form.appendChild(desc);
form.insertBefore(desc,input[0]);
//Add item
function addItem(e){
    e.preventDefault();

    //Get input value
    var newItem=document.getElementById('item').value;
    var newItem1=document.getElementById('description').value;

    //Create new lo element
    var li=document.createElement('li');
    //Add class
    li.className='list-group-item';
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem+" "+newItem1));
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
    editBtn.appendChild(document.createTextNode('EDIT'));
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

//Filter Items
function filterItems(e){
    //convert text to lowercase
    var text=e.target.value.toLowerCase();
    console.log(text);
    var items=itemList.getElementsByTagName('li');
    console.log(items);
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        console.log(itemName);
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }
    });
}