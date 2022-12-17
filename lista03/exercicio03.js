function quadDiferenca() {

    let a = parseInt(prompt("Informe o valor de A: "));
    let b = parseInt(prompt("Informe o valor de B: "));

    let diferenca = a-b
    let quadradoDif = Math.pow(diferenca, 2)
    
    alert("O quadrado da diferença do primeiro valor para o segundo é igual a: " + quadradoDif);
}