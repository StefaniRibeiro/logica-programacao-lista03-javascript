function novosalario() {

    let salarioMensal = parseInt(prompt("Informe o valor do seu salário mensal: "));
    let Percreajuste = parseInt(prompt("Informe o valor do reajuste: "));
    let reajuste = (Percreajuste / 100)*salarioMensal
    let novoSalario = salarioMensal + reajuste


alert("O novo valor do seu salário é igual a: "+novoSalario);

}