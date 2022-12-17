function eleicoes() {
    
    let votosValidosCandidatoA = parseInt(prompt("Informe a quantidade de votos do candidato A: "));
    let votosValidosCandidatoB = parseInt(prompt("Informe a quantidade de votos do candidato B: "));
    let votosValidosCandidatoC = parseInt(prompt("Informe a quantidade de votos do candidato C: "));

    let votosNulos = parseInt(prompt("Informe a quantidade de votos nulos: "));

    let votosBrancos = parseInt(prompt("Informe a quantidade de votos brancos: "));

    let totalEleitores = votosValidosCandidatoA + votosValidosCandidatoB + votosValidosCandidatoC + votosNulos + votosBrancos;

    let percValidos = ((votosValidosCandidatoA + votosValidosCandidatoB + votosValidosCandidatoC) / totalEleitores) * 100
    let percValidosA = (votosValidosCandidatoA / totalEleitores) * 100
    let percValidosB = (votosValidosCandidatoB / totalEleitores) * 100
    let percValidosC = (votosValidosCandidatoC / totalEleitores) * 100
    let percNulos = (votosNulos / totalEleitores) * 100
    let percBrancos = (votosBrancos / totalEleitores) * 100

    alert("O número total de eleitores é igual a: " + totalEleitores)
    alert("O percentual de votos válidos em relação à quantidade total de eleitores é igual a: " + percValidos.toFixed(2) + "%")
    alert("O percentual de votos válidos do candidato A em relação à quantidade total de eleitores é igual a: " + percValidosA.toFixed(2) + "%")
    alert("O percentual de votos válidos do candidato B em relação à quantidade total de eleitores é igual a: " + percValidosB.toFixed(2) + "%")
    alert("O percentual de votos válidos do candidato C em relação à quantidade total de eleitores é igual a: " + percValidosC.toFixed(2) + "%")
    alert("O percentual de votos nulos em relação à quantidade total de eleitores é igual a: " + percNulos.toFixed(2) + "%")
    alert("O percentual de votos brancos em relação à quantidade total de eleitores é igual a: " + percBrancos.toFixed(2) + "%")
}