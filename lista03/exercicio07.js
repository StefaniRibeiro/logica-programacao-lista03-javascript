function resultado(){

    let a = parseInt(prompt("Informe o valor de A: "))
    let b = parseInt(prompt("Informe o valor de B: "))
    let c = parseInt(prompt("Informe o valor de C: "))    
    
    let soma = a+b+c
    
    let quadSoma = Math.pow(soma, 2)
    
    prompt("O quadrado da soma dos três valores é igual a: "+quadSoma);
    }
    