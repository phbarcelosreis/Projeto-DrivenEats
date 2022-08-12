
function selecionar(num) {
    const pintar = document.querySelector(".selecionado");
    const caixapedidos = document.querySelector(num);
    
    if(pintar){
        pintar.classList.remove('selecionado')
    }
    if(pintar === caixapedidos){
        pintar.classList.toggle('selecionado')
    }
    caixapedidos.classList.toggle("selecionado");
}

function selecionar1(num) {
    const pintar1 = document.querySelector(".selecionado1");
    const caixapedidos = document.querySelector(num);
    
    if(pintar1){
        pintar1.classList.remove('selecionado1')
    }
    if(pintar1 === caixapedidos){
        pintar1.classList.toggle('selecionado1')
    }
    caixapedidos.classList.toggle("selecionado1");
}

function selecionar2(num) {
    const pintar2 = document.querySelector(".selecionado2");
    const caixapedidos = document.querySelector(num);
    
    if(pintar2){
        pintar2.classList.remove('selecionado2')
    }
    if(pintar2 === caixapedidos){
        pintar2.classList.toggle('selecionado2')
    }
    caixapedidos.classList.toggle("selecionado2");
}