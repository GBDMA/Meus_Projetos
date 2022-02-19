
// Fazendo o calcuco diario
function caldiario(){
    let valor  = document.getElementById("valor-gasto")
    let com = document.getElementById("gasto-diario")
    let selec = document.getElementById("gastos-tabela")
    if(com.value.length == 0){
        window.alert('coloque com oque foi gasto')
    } else if(valor.value.length == 0){
        window.alert('coloque o valor da compra')
    }else{
        selec.innerHTML = ''
    }
}
//abrindo a pagina do gasto diario
function gastosim(){
  var site = window.open('gasto-diario.html', '_self')
}
//quando nn foi feito nenhum gasto 
function naogasto(){
  window.alert('PARABÉNS!!! continue assim.')
}

//saldo diario
function saldo(){
    var saldo = 10;
    var totalsaldo ='R$ ' + saldo
    
    document.getElementById('saldo-disponivel').innerHTML=totalsaldo
}
//data do site
function data(){
    var data = new Date()
    var dia = data.getDate()
    var mess = data.getMonth()
    var mes = mess + 1
    var ano = data.getFullYear()

    if(dia < 10) dia = "0" + dia;
    if(mes < 10) mes = "0" + mes;

    var fullyear = dia+'/'+mes+'/'+ano;
    
    

    document.getElementById('data-site').innerHTML=fullyear;
}
//Horario do site
function showTime(){
    var time = new Date();
    var hora = time.getHours();
    var minutos = time.getMinutes();  
    var segundo = time.getSeconds();

    if (hora < 10) hora = "0" +hora;
    if (minutos < 10) minutos = "0" +minutos;
    if (segundo < 10) segundo = "0" +segundo;
    var tempo = hora +':' +minutos+':'+segundo;

    document.getElementById('timer').innerHTML=tempo;

}
function initTime(){
    setInterval (showTime, 1000);
}

//layout interativo
      /*function layout(){
          var time = new Date()
          var hora = time.getHours()

          if(hora < 12) {
              document.body.style.background = '#1b98e0'
          } else if (hora >=12 && hora<18){
              document.body.style.background = '#247ba0'
          }else {
              document.body.style.background = '#006494'
          }
      }*/