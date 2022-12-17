function conversaoreal(){

    let cotacaoDolar = parseInt(prompt("Informe a cotação do dólar: "))
    let qtdDolar = parseInt(prompt("Informe a quantidade de dólares que você tem: "))
    let conversao = qtdDolar*cotacaoDolar
 
     alert(qtdDolar + " dólares convertidos em real é igual a: "+conversao+"reais");
 }