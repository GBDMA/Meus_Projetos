// Selecionando todos os elementos

/*
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
*/


function relogio() {

const relogio = document.querySelector('.relogio');
let segundos = 0;
let timer;
//Criando o Tempo
function criaHoraDosSegundos (segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
};

//Iniciando o Tempo
function iniciaRelogio() {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
}

document.addEventListener('click', function(e) {
    const elemento = e.target;

    if(elemento.classList.contains('iniciar')) {
          relogio.classList.remove('pausado');
          clearInterval(timer)
          iniciaRelogio()
    }

    if(elemento.classList.contains('pausar')) {
          relogio.classList.add('pausado');
          clearInterval(timer)
    }

    if(elemento.classList.contains('zerar')) {
        relogio.classList.remove('pausado')
          clearInterval(timer);
          relogio.innerHTML = '00:00:00';
          segundos = 0;
    }
});

};

relogio();


/*
// Evento do Botão Inicar
iniciar.addEventListener('click', function(event) {
    relogio.classList.remove('pausado');
    clearInterval(timer)
    iniciaRelogio()
});

// Evento do Botão Pausar
pausar.addEventListener('click', function(event) {
    relogio.classList.add('pausado');
   clearInterval(timer)
});

// Evento do Botão Zerar
zerar.addEventListener('click', function(event) {
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
});
*/