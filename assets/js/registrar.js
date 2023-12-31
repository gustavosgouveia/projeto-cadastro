let email = document.querySelector("#email")
let labelEmail = document.querySelector("#labelEmail")
let validEmail = false

let usuario = document.querySelector("#usuario")
let labelUsuario = document.querySelector("#labelUsuario")
let validUsuario = false

let senha = document.querySelector("#senha")
let labelSenha = document.querySelector("#labelSenha")
let validSenha = false

let confirmSenha = document.querySelector("#confirmSenha")
let labelConfirmSenha = document.querySelector("#labelConfirmSenha")
let validConfirmSenha = false

let msgError = document.querySelector("#msgError")
let msgSuccess = document.querySelector("#msgSuccess")

let btn = document.querySelector("#verSenha")
let btnConfirm = document.querySelector("#verConfirmSenha")

email.addEventListener("keyup", () => {
  const emailValue = email.value.trim(); 
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!regex.test(emailValue)) {
    labelEmail.style.color = "red";
    labelEmail.innerHTML = "Email *Insira um email válido";
    email.style.borderColor = "red";
    validEmail = false;
  } else {
    labelEmail.style.color = "green";
    labelEmail.innerHTML = "Email";
    email.style.borderColor = "green";
    validEmail = true;
  }
});
usuario.addEventListener("keyup", ()=>{
  if(usuario.value.length <= 4) {
    labelUsuario.setAttribute("style", "color: red")
    labelUsuario.innerHTML = "Usuário *Insira no minimo 5 caracteres"
    usuario.setAttribute("style", "border-color : red")
    validUsuario = false
  }else {
    labelUsuario.setAttribute("style", "color: green")
    labelUsuario.innerHTML = "Usuário"
    usuario.setAttribute("style", "border-color : green")
    validUsuario = true
  }
})

senha.addEventListener("keyup", ()=>{
  if(senha.value.length <= 5) {
    labelSenha.setAttribute("style", "color: red")
    labelSenha.innerHTML = "Senha *Insira no minimo 6 caracteres"
    senha.setAttribute("style", "border-color : red")
    validSenha = false
  }else {
    labelSenha.setAttribute("style", "color: green")
    labelSenha.innerHTML = "Senha"
    senha.setAttribute("style", "border-color : green")
    validSenha = true
  }
})

confirmSenha.addEventListener("keyup", ()=>{
  if(senha.value != confirmSenha.value) {
    labelConfirmSenha.setAttribute("style", "color: red")
    labelConfirmSenha.innerHTML = "Confirmar Senha *Senhas diferentes"
    confirmSenha.setAttribute("style", "border-color : red")
    validConfirmSenha = false
  }else {
    labelConfirmSenha.setAttribute("style", "color: green")
    labelConfirmSenha.innerHTML = "Confirmar Senha"
    confirmSenha.setAttribute("style", "border-color : green")
    validConfirmSenha = true
  }
})

function cadastrar(){
  if (validEmail && validUsuario && validSenha && validConfirmSenha){
    let listaUser = JSON.parse(localStorage.getItem("listaUser") || "[]")

    listaUser.push(
      {
        emailCad: email.value,
        userCad: usuario.value,
        senhaCad: senha.value
      }
    )

    localStorage.setItem("listaUser", JSON.stringify(listaUser))

    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = '<strong>Cadastrado com Sucesso!</strong>'
    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = ''

    setTimeout(()=>{
      window.location.href = "/projeto-cadastro/assets/html/index.html"
    }, 1000)
   
  } else {
    msgError.setAttribute("style", "display: block")
    msgError.innerHTML = "Preencha todos os campos corretamente."
    msgSuccess.setAttribute("style", "display: none")
    msgSuccess.innerHTML = ""
  }
}


btn.addEventListener("click", ()=>{
  let inputSenha = document.querySelector("#senha")
  
  if(inputSenha.getAttribute("type") == "password"){
    inputSenha.setAttribute("type", "text")
  } else {
    inputSenha.setAttribute("type", "password")
  }
})

btnConfirm.addEventListener("click", ()=>{
  let inputConfirmSenha = document.querySelector("#confirmSenha")
  
  if(inputConfirmSenha.getAttribute("type") == "password"){
    inputConfirmSenha.setAttribute("type", "text")
  } else {
    inputConfirmSenha.setAttribute("type", "password")
  }
})


