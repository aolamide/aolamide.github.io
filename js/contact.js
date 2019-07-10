const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const validation = document.getElementById("validation");
const submit = document.getElementById("submit");

function formValidation(){
    if(!nameInput.value || !messageInput.value) {
        return false;
    }else if(!(/(\S+)(@)(\S+)([.])(\S+)/.test(emailInput.value))){
        return false;
    }
    return true;
}

function formSubmission(){
    if(!formValidation()) {
        validation.innerText = "Please fill all fields and make sure a correct email is entered";
        return;
    }
    submit.innerHTML = "<div class='loader'></div>";
    submit.disabled = true;
    fetch("https://site-server.herokuapp.com/send", {
        method: 'post',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({
            name : nameInput.value,
            email : emailInput.value,
            message: messageInput.value
        })
    })
    .then(res => res.json())
    .then(result => {
        validation.innerText = result;
    })
    .then(() => {
        submit.innerHTML = 'SEND <i class="fas fa-paper-plane"></i>';
        submit.disabled = false;
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "" 
    })
    
}

submit.addEventListener('click', formSubmission);