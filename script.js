
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvxwyzABCDEFGHIJKLMNOPQRSTUVXWYZ0123456789!@?";
let novasenha = "";

sizePassword.innerHTML = sliderElement.value; /* função para ver a quantidade de caracteres que temos*/

slider.oninput = function(){  /*Aqui fazemos a function para verificar cada valor dentro dos caracteres*/
    sizePassword.innerHTML = this.value; /* aqui passamos para o sizepassword o valor que tem atualmente*/
}

function generatePassword(){

    let pass = "";

    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novasenha = pass;

}

function copiarsenha(){
    alert("Sua senha foi copiada com sucesso !")
    navigator.clipboard.writeText(novasenha);
}


