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

//day to

class TypeWriter {
    constructor(txtElement, words, waitTime = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;  //index of the word
        this.wait = parseInt(waitTime, 10);
        this.isDeleting = false;

    }
    type(){
        //get current index of the word
        const currentWord = this.words[this.wordIndex] ;
        
        //check if deleting
        if(this.isDeleting){
            //Remove character
            this.txt = currentWord.substring(0,this.txt.length - 1);

        }else { 
            //Add character
            this.txt = currentWord.substring(0,this.txt.length + 1);

        }
        //insert into the txt 
        this.txtElement.innerHTML = `<span class='txt'>${this.txt}<span/>`
        
        //type speed
        let typeSpeed = 300;
        if(this.isDeleting){typeSpeed /= 2;}
        

        //ifword is complete
        if(!this.isDeleting && this.txt === currentWord){
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if(this.isDeleting && this.txt ===''){
            this.isDeleting = false;
            //move to next work
            this.wordIndex ++;
            //pause before typing
            typeSpeed = 500;

        }

        console.log(this.txt)
        //console.log(currentWord)
        setTimeout(()=>this.type(), 500);
    };
}

//init the typeWriter when the dom loads
document.addEventListener('DOMContentLoaded', Init);

function Init(e){
    const txtElement = document.querySelector('#header-title');
    const words = JSON.parse(txtElement.lastChild.getAttribute("data-words"));
    const wait  = txtElement.lastChild.getAttribute('data-wait');

    //console.log(wait);
    //init the typewriter
    new TypeWriter(txtElement, words, wait).type();
}