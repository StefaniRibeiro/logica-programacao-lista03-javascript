function resultado() {

    let a = parseInt(prompt("Informe o valor de A : "));
    let b = parseInt(prompt("Informe o valor de B: "));
    let c = parseInt(prompt("Informe o valor de C: "));

    let quadA = Math.pow(a,2);
    let quadB = Math.pow(b,2);
    let quadC = Math.pow(c,2);
    let soma = quadA + quadB + quadC
    alert("O resultado da soma dos quadrados dos três valores é igual a: " + soma);
}