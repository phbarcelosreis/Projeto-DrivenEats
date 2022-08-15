let caixapedidos
let caixapedidos1
let caixapedidos2
let textof


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
}

function final(num){
    const cordif = document.querySelector('texto-final')
    const cor = document.querySelector('pedido-concluido')
    const aplicar = document.querySelector(num)

    cordif.classList.add(aplicar)
}


