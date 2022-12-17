function conversaoDolar() {

    let cotacaoDolar = parseInt(prompt("Informe a cotação do dólar: "))
    let qtdReais = parseInt(prompt("Informe a quantidade de reais que você tem: "))
    let conversaoDolar = qtdReais / cotacaoDolar


    alert(qtdReais+ " reais convertidos em dólares é igual a: " + conversaoDolar +" dólares")
}