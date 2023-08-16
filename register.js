//doc html
let username = document.querySelector('#username')
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let registerbtn = document.querySelector('#mybtnreg')
let msg = document.querySelector('.msg')

//initialize
loadRegisterUser()
function loadRegisterUser(){

    registerbtn.addEventListener('click', registerUser)
}

function registerUser(e){
   
    let newusername = username.value
    let newpassword = password.value
    let newemail = email.value
    if (!newusername || !newpassword || !newemail){
        msg.innerHTML =" <p class='alert alert-danger'> fill all required field</p>"
    } else {
        localStorage.setItem('username' , newusername)
        localStorage.setItem('email' , newemail)
        localStorage.setItem('password' , newpassword)

        alert("registration successful now login")
        location.href = 'Login.html'
    }

   e.preventDefault()
}