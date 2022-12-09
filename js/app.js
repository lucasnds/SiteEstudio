const form = document.getElementById('form')
const nome = document.getElementById('name')
const email = document.getElementById('email')
const date = document.getElementById('date')
const password = document.getElementById('password')
const passwordConfirmation = document.getElementById('passwordConfirmation')

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
});


// função que verifica a validade dos dados
function checkInputs() {
    const nameValue = nome.value;
    const emailValue = email.value;
    const dateValue = date.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;
    const Numbers = Number;

    // verificação do input name
    if (nameValue === '') {
        setError(nome, "Nome é obrigatório");
    } else {
        setSuccess(nome);
    }

    //verificação do input email
    if (emailValue === '') {
        setError(email, "E-mail é obrigatório");
    } else if (!checkEmail(emailValue)) {
        setError(email, "Digite um e-mail válido");

    } else {
        setSuccess(email);
    }

    //verificação data
    if (dateValue === '') {
        setError(date, "Data de nascimento é obrigatório");
    } else {
        setSuccess(date);
    }

    //verificação do input senha*
    if (passwordValue === '') {
        setError(password, "Digite uma senha válida");
    } else if (passwordValue.length < 7) {
        setError(password, "A senha precisa ter no mínimo 7 caracteres");
    } else {
        setSuccess(password);
    }

    //verificação da confirmação da senha
    if (passwordConfirmationValue === '') {
        setError(passwordConfirmation, "Digite uma senha válida");
    } else if (passwordValue.length < 7) {
        setError(password, "A senha precisa ter no mínimo 7 caracteres");
    } else if (passwordConfirmationValue != passwordValue) {
        setError(passwordConfirmation, "As senhas não coincidem");

    } else {
        setSuccess(passwordConfirmation);
    }

    //verificação geral
    const formControl = form.querySelectorAll(".forms-control");
    const formInvalid = [...formControl].every((formControl) => {
        return formControl.className === "forms-control success";
    });
    if (formInvalid) {
        console.log("O formulário está 100% válido!");
    }
}
//funcao para erro
function setError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    //
    //
    small.innerText = message;
    formControl.className = "forms-control error";
}

//funcao para sucesso
function setSuccess(input) {
    const formControl = input.parentElement;
    //
    formControl.className = "forms-control success"
}

// funcao que retorna um email válido
function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}