// Selecionar input-tarefa
// Selecionar button btn-tarefa
// Selecionar ul tarefas
// Crair Evento de click, porem pode utiliza Form HTML
// Criar um Li



/* Selecioando Tarefas */
const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');


/* Cria Elemento li; */
function criaLi () {
    const li = document.createElement('li');
    return li;
};


/* Tarefa para adicionar textos ao HTML; */
function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
};

/* Salvar Tarefas em um banco de Dados do Navegador.
Converter um Array para String com JSON. */
function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefas of liTarefas) {
        let tarefaTexto = tarefas.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);

};


/* Criando Botão Apagar */
function criaBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar esta Tarefa');
    li.appendChild(botaoApagar);
};



/* Evento de Click no Botão; */
btnTarefa.addEventListener('click', function(){
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});


/* Evento de receber a tecla Enter; */
inputTarefa.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});


/* Evento para apagar texto do HTML */
document.addEventListener('click', function(e) {
    const el = e.target;

    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }
});


/* Evento para Limpar input */
function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
};


/* Le as Tarefas e Jogar de volta ao HTML */

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse('tarefas');

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
};


