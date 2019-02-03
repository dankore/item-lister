var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter')

// submit event
form.addEventListener('submit', addItem);
// delete event
itemList.addEventListener('click', removeItem)
// filter event
filter.addEventListener('keyup', filterItems);

// add item function. Everytime submit is clicked, every item in the function will be produced
function addItem(e) {
    e.preventDefault();

    // get input value
    var newItem = document.getElementById('item').value;

    // create new li element
    var li = document.createElement('li');
     // create css selector for li
     li.className = 'list-group-item';

     //add text node with input value
     li.appendChild(document.createTextNode(newItem));

     // create delete button element
     deleteBtn = document.createElement('button');

     // create class selectors for the button created above
    deleteBtn.className = '"btn btn-danger btn-sm float-right delete';
    // create 'X' text and add it inside the button
    deleteBtn.appendChild(document.createTextNode('X'));

    // now that button creation is complete, add it inside the li
    li.appendChild(deleteBtn);
     
    // add bran new li with its content inside the ul, at the end of it
     itemList.appendChild(li); 
     
     // select element and hide it
     var hideTitle = document.getElementById('first-title');
     hideTitle.style.display = 'none';

     // select element and display it
     document.getElementById('my-list').style.display = 'block';
}

// remove item function
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
       if (confirm('Are You Sure You Want to Delete This item')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
       }
    }
}

// filter function
function filterItems(e) {
    //convert input t lowercase
    var text = e.target.value.toLowerCase();
    // get lis within ul
    var items = itemList.getElementsByTagName('li');
    //conver lis to array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        // match search input to li text
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
}