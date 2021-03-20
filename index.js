
let botao1 = document.querySelector("#botao-clicar")
botao1.addEventListener("click", function(){
  
    event.preventDefault()

    let formulario = document.querySelector("#formulario-geral")
    

    let nome = formulario.nome.value;
    let email = formulario.email.value;


    let formTr = document.createElement("tr")


    let nomeTd = document.createElement("td")
    let emailTd = document.createElement("td")
    
    nomeTd.textContent = nome;
    emailTd.textContent = email;


    formTr.appendChild(nomeTd)
    formTr.appendChild(emailTd)

    formulario.appendChild(formTr)

    
    console.log(botao1)
})









// function botao(){
    //let valor1 = prompt("Este é um valor")
    //let valor2 = prompt ("Este é outro valor")

    //let convertValor1 = parseInt(valor1);
    //let convertValor2 = parseInt(valor2);

    //let soma = convertValor1 + convertValor2;

    //alert("Resultado:" + soma)

//}


