
let form = document.querySelector("form")
let todoInput = document.querySelector("#todoinput")
let todoList = document.querySelector(".list-group")
let searchTodo = document.querySelector("#searchtodo")
let clearBtn = document.querySelector("#clearbtn")
let welcome = document.querySelector("welcome")



let getUser = () => {
    let user = localStorage.getItem('username')

    // user ? null : location.href = 'login,.html'
if(!user){
     alert("login first ")
     location.href = 'login.html'
}
 }

document.addEventListener('DOMContentLoaded' , getUser)

 loadEventListener()

 


function loadEventListener(){
    form.addEventListener('submit' , addTodo)
      todoList.addEventListener('click' , removetodo)
      clearBtn.addEventListener('click' , cleartodo)
      searchTodo.addEventListener('keyup' , filterTodo)
}
function addTodo(e){
    
    if (todoInput.value === ''){
        alert('enter todo ')
    } else {
        let li = document.createElement('li')
        li.className = 'list-group-item'
        let liText = document.createTextNode(todoInput.value)

        li.appendChild(liText)
        todoList.appendChild(li)

        //create a link element and add properties
        let link = document.createElement('a')
        link.className = 'delete-item'
        link.style.cursor = 'pointer'

        link.style.marginLeft = '60%'

        link.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        li.appendChild(link)





    }

    todoInput.value =""
    

    e.preventDefault()
}

function removetodo(e){

    if (e.target.parentElement.classList.contains('delete-item')){


        if (confirm("are ypu sure you want to delete")) {

            e.target.parentElement.parentElement.remove()
        }
    }


    e.preventDefault()


}


function cleartodo(){

    // todoList.innerHTML = ''

    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild)
    }
    
}

function filterTodo(e) {
    let search = e.target.value.toLowerCase()
    let listTodos = document.querySelectorAll(".list-group-item")
    
    listTodos.forEach((todo) => {
        const todoContent = todo.firstChild.textContent
        if (todoContent.toLowerCase().indexOf(search) != -1) {
            todo.style.display = 'block'
        } else{
            todo.style.display = 'none'
        }
    })
    e.preventDefault()
} 
function logOut() {
    localStorage.removeItem('username')
    localStorage.removeItem('email')
    localStorage.removeItem('password')
    location.href = 'login.html'
}


