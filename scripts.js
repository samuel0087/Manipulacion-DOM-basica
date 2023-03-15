const h1 = document.querySelector('h1');
const input = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const btn = document.querySelector('#btn');
const resultDiv = document.querySelector('#result');
const form = document.querySelector('#form');

form.addEventListener('submit', enviaFormulario);

function enviaFormulario(event){
    event.preventDefault();
    var num1 = parseInt(input1.value);
    var num2 = parseInt(input2.value);
    var suma = num1 + num2;

    if(suma >= 0 ){
        resultDiv.setAttribute('style','color:green');
    }
    else{
        resultDiv.setAttribute('style','color:red');
    }
    result.innerText = "Resultado del calculo" + suma;
}