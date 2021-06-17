const headerTitle = document.querySelector("#header-title");
const form = document.querySelector("#addForm");
const itemList = document.querySelector("#items");
const itemDelete = document.querySelector("#delete");
const filter = document.querySelector("#filter");

form.addEventListener("submit", addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);

function addItem(e){
    e.preventDefault();
    
    const newItem = document.querySelector("#inputItem").value;

    //create new li element
    const newLi = document.createElement("li");

    //add class
    newLi.className="list-group-item";

    //add text node with input value
    newLi.appendChild(document.createTextNode(newItem))

    //create the delete val element
    const deleteButton = document.createElement("button");

    //add classes to delete button
    deleteButton.className = 'btn btn-danger btn-sm float-end delete'

    //append text node
    deleteButton.appendChild(document.createTextNode('X'));

    //append delete button to li
    newLi.appendChild(deleteButton);

    //append li to list
    itemList.appendChild(newLi);
}



//now removing list
function removeItem(e) {
    if(e.target.classList.contains('delete')){
        if (confirm('Are you sure?')){
            const li = e.target.parentElement;
            itemList.removeChild(li);
        }

    }
}


//now lets filter
function filterItems(e) {
    const filterText = e.target.value.toLowerCase();
    const allItems = itemList.getElementsByTagName('li');

    Array.from(allItems).forEach(function(item){
        const itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(filterText) != -1 ){
            item.style.display = 'block';
        }else{
            item.style.display = "none";
        }
    })
}
