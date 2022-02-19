//MODO ESCURO
const html = document.querySelector("html")
const checkbok = document.querySelector("input[name=tema]")


const getStyle = (elemento,estilo) => window
    .getComputedStyle(elemento)
    .getPropertyValue(estilo)


const coresiniciais = {
    bg: getStyle(html,"--bg"),
    bgPainel: getStyle(html,"--bg-painel"),
    corTitulo: getStyle(html,"--bg-titulos"),
    bgTexto: getStyle(html,"--bg-texto"),
}//pegar estilo do css
const modoescuro = {
    bg: "#333333",
    bgPainel: "#434343",
    corTitulo: "#ffffff",
    bgTexto: "#ffffff"
}
const transformKey = key =>
 "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

const changeColors = (cores) => {
    Object.keys(cores).map(key => html.style.setProperty(transformKey(key), cores[key]) )
}


checkbok.addEventListener("change", ({target}) => {
    target.checked ? changeColors(modoescuro) : changeColors(coresiniciais)
})

//MES CALENDARIO
    let mesBr = ['Janeiro', 'Fevereiro','Março','Abril','Maio','Junho','Julho',
    'Agosto','Setembro','Outubro','Novembro','Dezembro'];
        let Data = new Date();
        let Dia = Data.getDate();
        let Mes = Data.getMonth();
        let Ano = Data.getFullYear();

        let datas = document.getElementById('data');
        let mes = document.getElementById('diames');
        let ano = document.getElementById('ano'); 


    let mes_anterior = document.getElementById('mes_anterior');
    let proximo_mes = document.getElementById('proximo_mes'); 


    mes.textContent = mesBr [Mes];
    ano.textContent = Ano.toString();
    mes_anterior.addEventListener('click', ()=> mespassado())
    proximo_mes.addEventListener('click', ()=> proximomes())
    escrevaMes(Mes);
    
    

    function escrevaMes(mes) {

        for(let i = primeirodia(); i>0;i--){
            data.innerHTML += `<div class="data_calendario ant_dia ">
            ${totaldias(Mes-1)-(i-1)}
            </div>`;
        }

        for( let i=1; i<=totaldias(mes); i++){

            if(i === Dia){

            data.innerHTML += `<div class="data_calendario dia">${i}</div>`;    
            } else{
            data.innerHTML += `<div class="data_calendario">${i}</div>`;  
            }
           
        }


    }

    function totaldias(mes) {
        if(mes === -1) mes = 11

        if( mes == 0 || mes == 2 || mes == 4 || mes == 6 || mes == 7 || mes == 9 || mes == 11) {
            return 31;

        } else if (mes == 3 || mes == 5 || mes == 8 || mes == 10){
            return 30;

        } else {

            return anobissexto() ? 29:28;
        }

    }

    function anobissexto() {
        return((Ano % 100 !==0) && (Ano % 4 === 0) || (Ano % 400 === 0))


    }
    function primeirodia(){
        let começo = new Date(Ano, Mes, 1)
        return ((começo.getDay() -1) === -1) ? 6 : começo.getDay()-1;

    }

    function mespassado(){
        if(Mes !== 0){
            Mes --;
        } else{
            Mes = 11;
            Ano --;
        }
        novadata()

    }
    function proximomes(){
        if(Mes !== 11){
            Mes ++;
        } else{
            Mes = 0;
            Ano ++;
        }
        novadata()

    }
    function novadata(){
        Data.setFullYear(Ano, Mes, Dia);
        mes.textContent = mesBr [Mes]
        ano.textContent = Ano.toString()
        datas.textContent = '';
        escrevaMes(Mes);

    }

    //MENU DO CALENDARIO//

    