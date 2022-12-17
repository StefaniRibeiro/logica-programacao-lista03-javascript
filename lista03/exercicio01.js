function resultado() {

    var a = parseInt(prompt("Informe um valor: "));
    var b = parseInt(prompt("Informe um valor: "));
    var c = parseInt(prompt("Informe um valor: "));
    var d = parseInt(prompt("Informe um valor: "));

    var AeB = a + b
    var AeC = a + c
    var AeD = a + d
    var BeC = b + c
    var BeD = b + d
    var CeD = c + d

    var AvezesB = a * b
    var AvezesC = a * c
    var AvezesD = a * d
    var BvezesC = b * c
    var BvezesD = b * d
    var CvezesD = c * d

    alert("Os resultados são: ")
    alert(a + " +" + b + " é igual a: " + AeB);
    alert(a + " +" + c + " é igual a: " + AeC);
    alert(a + " +" + d + " é igual a: " + AeD);
    alert(b + " +" + c + " é igual a: " + BeC);
    alert(b + " +" + d + " é igual a: " + BeD);
    alert(c + " +" + d + " é igual a: " + CeD);

    alert(a + " x" + b + " é igual a: " + AvezesB);
    alert(a + " x" + c + " é igual a: " + AvezesC);
    alert(a + " x" + d + " é igual a: " + AvezesD);
    alert(b + " x" + c + " é igual a: " + BvezesC);
    alert(b + " x" + d + " é igual a: " + BvezesD);
    alert(c + " x" + d + " é igual a: " + CvezesD);


}