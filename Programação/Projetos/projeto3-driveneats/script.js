let caixapedidos;
let caixapedidos1;
let caixapedidos2;
let textof;
let cordif;
let pratoselecionado;
let bebidaselecionada;
let sobremesaselecionada;
let preçoprato = 0;
let preçobebida = 0;
let preçosobremesa = 0;
let soma = 0;


function selecionar(num) {
    const pintar = document.querySelector(".selecionado");
    const caixapedidos = document.querySelector(num);
    const findbutton = document.querySelector(".botao"+num);
    const buttonon = document.querySelector(".mostrar");
    
    
    if(pintar !== null){
        pintar.classList.remove('selecionado');
    }
    if(buttonon !== null){
        buttonon.classList.remove('mostrar');
    }
    

    caixapedidos.classList.add("selecionado");
    findbutton.classList.add("mostrar");
    pratoselecionado = caixapedidos.getElementsByClassName('título-comida')[0].innerHTML;
    preçoprato = caixapedidos.getElementsByClassName('preço-comida')[0].innerHTML;
    preçoprato = preçoprato.replace("R$ ","")
    preçoprato = preçoprato.replace(",", ".")
    final();
}

function selecionar1(num) {
    const pintar1 = document.querySelector(".selecionado1");
    const caixapedidos1 = document.querySelector(num);
    const findbutton = document.querySelector(".button"+num);
    const buttonon = document.querySelector(".mostrar1");
    
    if(pintar1 !== null){
        pintar1.classList.remove('selecionado1');
    }
    if(buttonon !== null){
        buttonon.classList.remove('mostrar1');
    }
    

    caixapedidos1.classList.add("selecionado1");
    findbutton.classList.add("mostrar1");
    bebidaselecionada = caixapedidos1.getElementsByClassName('título-comida')[0].innerHTML;
    preçobebida = caixapedidos1.getElementsByClassName('preço-comida')[0].innerHTML;
    preçobebida = preçobebida.replace("R$ ","")
    preçobebida = preçobebida.replace(",", ".")
    final();
}

function selecionar2(num) {
    const pintar2 = document.querySelector(".selecionado2");
    const caixapedidos2 = document.querySelector(num);
    const findbutton = document.querySelector(".button2"+num);
    const buttonon = document.querySelector(".mostrar2");

    if(pintar2 !== null){
        pintar2.classList.remove('selecionado2');
    }
    if(buttonon !== null){
        buttonon.classList.remove('mostrar2');
    }
    
    caixapedidos2.classList.add("selecionado2");
    findbutton.classList.add("mostrar2");
    sobremesaselecionada = caixapedidos2.getElementsByClassName('título-comida')[0].innerHTML;
    preçosobremesa = caixapedidos2.getElementsByClassName('preço-comida')[0].innerHTML;
    preçosobremesa = preçosobremesa.replace("R$ ","")
    preçosobremesa = preçosobremesa.replace(",", ".")
    final();
}

function final(){
    const pintar = document.querySelector(".selecionado");
    const pintar1 = document.querySelector(".selecionado1");
    const pintar2 = document.querySelector(".selecionado2");
    cordif = document.querySelector('.texto-final');
    textof = document.querySelector('.texto');

    if(pintar !== null && pintar1 !== null && pintar2 !== null){
        cordif.classList.add('pedido-concluido');
        textof.innerHTML = 'Fechar pedido';
        soma = (Number(preçobebida) + Number(preçoprato) + Number(preçosobremesa)).toFixed(2)
    }
}

function finalpedido(){
    
        let text;

            text =
                "Olá, gostaria de fazer o pedido: " +
                " - Prato: " + pratoselecionado +
                " - Bebida: " + bebidaselecionada +
                " - Sobremesa: " + sobremesaselecionada +
                " Total: R$" + soma;

    window.open("https://wa.me/5522981429161?text=" + text);
}






