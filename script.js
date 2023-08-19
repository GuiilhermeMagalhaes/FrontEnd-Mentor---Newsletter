let card = document.getElementById("content1");
let input = document.getElementById("email");
let cardSucess = document.getElementById("toast");
let errorMessage = document.getElementById("error");

function enviar(){
    const emailValue = input.value;

    const emailPattern = /[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.(com|pt)$/;

    if (emailValue === '' || !emailPattern.test(emailValue)) {
        input.style.border = "1px solid red";
        errorMessage.style.display = "block";
    } else {
        card.style.display = "none";
        cardSucess.style.display = "block";
    }
}


function voltar(){
    card.style.display = "block";
    cardSucess.style.display = "none";
}