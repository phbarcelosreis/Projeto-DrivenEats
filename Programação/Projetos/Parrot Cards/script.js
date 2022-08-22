let cartas = 0;
let contador = 0;
const container = document.querySelector(".cartasJogo")
let primeiraCarta = '';
let segundaCarta = '';
let jogadas = 0;

const personagens = [
    'bobrossparrot',
    'bobrossparrot',
    'fiestaparrot',
    'fiestaparrot',
    'explodyparrot',
    'explodyparrot',
    'metalparrot',
    'metalparrot',
    'revertitparrot',
    'revertitparrot',
    'tripletsparrot',
    'tripletsparrot',
    'unicornparrot',
    'unicornparrot',
]

const personagensRandom = [

]

function numeroCartas(){
    cartas = Number(prompt("Quantas cartas você quer jogar? (Apenas números pares de 4 até 14)"));
    if(cartas < 4 | cartas > 14 | isNaN(cartas) | cartas%2 == 1){
        numeroCartas()}else{
            while(contador < cartas){
                personagensRandom.push(personagens[contador])
                contador++

            }
    }
}

function criarElemento(tag, nomeClasse){
    const elemento = document.createElement(tag);
    elemento.className = nomeClasse;
    return elemento;
}

function checar(){
    const primeiroPerso = primeiraCarta.getAttribute('data-personagem')
    const segundaPerso = segundaCarta.getAttribute('data-personagem')

    if(primeiroPerso === segundaPerso){
        primeiraCarta.firstChild.classList.add('revelar');

        contador1 ++

        segundaCarta.firstChild.classList.add('revelar');

        contador1 ++
        
        primeiraCarta = '';
        segundaCarta = '';

    } else{
        setTimeout(() => {
        primeiraCarta.classList.remove('revelar');
        segundaCarta.classList.remove('revelar');

        primeiraCarta = '';
        segundaCarta = '';
        }, 800);
    }
}

const revelar = ({ target }) => {
    if(target.parentNode.className.includes('revelar')){
        return;
    }
    if (primeiraCarta === ''){
        target.parentNode.classList.add('revelar');
        primeiraCarta = target.parentNode;


    } else if (segundaCarta === ''){
        target.parentNode.classList.add('revelar');
        segundaCarta = target.parentNode;
        jogadas++

        checar()
        terminarJogo()
    }
}

function terminarJogo(){
    if (cartas == contador1){
        alert(`Você ganhou em ${jogadas} jogadas!`)
    }
}


function criarCartas(personagensRandom){
    const carta = criarElemento('div', 'cartas');
    const frente = criarElemento('div', 'face front');
    const atras = criarElemento('div', 'face back');

    frente.style.backgroundImage = `url('./Imagens/${personagensRandom}.gif')`;

    carta.appendChild(frente);
    carta.appendChild(atras);

    carta.addEventListener('click', revelar);
    carta.setAttribute('data-personagem', personagensRandom);

    return carta;
}

function comparador(){
    return Math.random() - 0.5;
}

function jogo(){
    numeroCartas()
        const personagensjogo = [ ...personagensRandom ];

        const shuffleArray = personagensjogo.sort(() => Math.random() - 0.5);

        shuffleArray.forEach((personagensRandom) => {
            const carta = criarCartas(personagensRandom);
            container.appendChild(carta);
        })
}

let contador1 = 0;


jogo()




