//select the element using queryselector and store in a variable;


var addBooks = document.querySelector(".add-book");
var searchBooks = document.querySelector(".search-books");
var checkBox = document.querySelector("#hide");
var btn = document.querySelector("button");
var ul = document.querySelector("ul");
var arr = JSON.parse(localStorage.getItem("book"));




function addBook(event){
event.preventDefault();
if(addBooks.value === ""){
    alert("please enter a book");
}
var todo = {
    bookName : addBooks.value,
    id : Date.now()
};

arr.push(todo);
localStorage.setItem("book",JSON.stringify(arr));
viewCall(arr);
}

function viewCall(arr){
    ul.innerHTML = "";
    arr.forEach(todo => {
        var li = document.createElement("li");
        var p = document.createElement("p");
        var div = document.createElement("div");
        var deletebtn = document.createElement("button");
        deletebtn.classList.add("delete");
        p.innerHTML = todo.bookName;
        deletebtn.innerHTML = "delete";
        deletebtn.addEventListener("click" , deleteBook);
        li.setAttribute("data-id",todo.id);
        deletebtn.setAttribute("data-id",todo.id);
        div.append(deletebtn);
        li.append(p,div);
        ul.append(li);
    });
    addBooks.value = "";
}

//delete book manupulation
function deleteBook(event){
    console.log(event.target.dataset.id);
    arr = arr.filter(todo => !(event.target.dataset.id == todo.id));
    console.log(arr);

    localStorage.setItem("book" , JSON.stringify(arr));
    viewCall(arr);
}


//hide books manupulation 

function hideBooks(event){
    console.log(event.target.checked);
    if(event.target.checked){
        ul.style.display = "none";

    }else{
        ul.style.display = "block"


    }
    localStorage.setItem("book",JSON.stringify(arr))
    viewCall(arr);
}

function searchBook(event){
    event.preventDefault();
    let searchArr = arr.filter(todo => 
        todo.bookName.toLowerCase().includes(event.target.value)
        );

viewCall(searchArr);
localStorage.setItem("book" , JSON.stringify(arr))
    }

// addBooks.addEventListener("keyup" , addBook);
checkBox.addEventListener("click" , hideBooks);
btn.addEventListener("click",addBook);
searchBooks.addEventListener("keyup",searchBook);
