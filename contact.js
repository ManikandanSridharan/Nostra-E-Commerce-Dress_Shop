// sidebar 
var toggle = document.querySelector(".toggle")
var sidebar = document.querySelector(".sidebar")
var sideclose = document.querySelector(".sideclose")
toggle.addEventListener("click", function () {
    sidebar.style.marginLeft = "0px"
})
sideclose.addEventListener("click", function () {
    sidebar.style.marginLeft = "-100%"
})
//contact form
var namee = document.getElementById("namee")
var email = document.getElementById("email")
var message = document.getElementById("message")
var nameerror = document.getElementById("nameerror")
var emailerror = document.getElementById("emailerror")
var messageerror = document.getElementById("messageerror")
var btn = document.getElementById("btn")
var contactpopup = document.querySelector(".contact__popup")

btn.addEventListener("click", function () {
    console.log(namee.value)
    console.log(email.value)
    console.log(message.value)
    var validate = true
    var nameregex = /^[a-zA-z]+$/
    var emailregex = /^[a-zA-z]+[a-zA-z0-9]+@gmail\.com$/
    if (nameregex.test(namee.value) == false) {
        nameerror.textContent = "*Name must contain only letter"
        nameerror.style.color = "red"
        validate = false
    }
    else {
        nameerror.textContent = ""
        validate = true
    }
    if (emailregex.test(email.value) == false) {
        emailerror.textContent = "*Please Provide Valid Email"
        emailerror.style.color = "red"
        validate = false
    }
    else {
        emailerror.textContent = ""
        validate = true
    }

    if (validate) {
        contactpopup.style.display = "block"
        namee.value = ""
        email.value = ""
        message.value = ""
        nameerror.textContent = ""
        emailerror.textContent = ""
        setTimeout(() => {
            contactpopup.style.display = "none"
        }, 2000);
    }
    else {
        contactpopup.style.display = "none"
    }
})