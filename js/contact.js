const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const validation = document.getElementById("validation");
const error = document.getElementById("error");
const submit = document.getElementById("submit");

function formValidation(){
    if(!nameInput.value.trim() || !messageInput.value.trim()) {
        return false;
    }else if(!(/(\S+)(@)(\S+)([.])(\S+)/.test(emailInput.value))){
        return false;
    }
    return true;
}

function formSubmission(){
    error.innerText = '';
    validation.innerText = '';
    if(!formValidation()) {
        error.innerText = "Please fill all fields and make sure a valid email is entered";
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
        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = ""
    })
    .catch(err => {
        console.log(err)
        error.innerText = 'Network error, please retry.'
    })
    .finally(() => {
        submit.innerHTML = 'SEND <i class="fas fa-paper-plane"></i>';
        submit.disabled = false;
    })
}

submit.addEventListener('click', formSubmission);