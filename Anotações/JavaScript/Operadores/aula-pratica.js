function comparador(num1, num2) {
    var comparação = `Os numeros ${num1} e ${num2} `;
    const igualdade = num1 === num2;
    const soma = num1 + num2;
    var maior10;
    var maior20;
    igualdade ? comparação += "são iguais." : comparação += "não são iguais. ";
    comparação += `Sua soma é igual a ${soma}. `
    if (soma > 10) {
        maior10 = ""
        soma > 20 ? maior20 = "" : maior20 = " não";
    }
    else {
        maior10 = " não";
        maior20 = " não";
    }
    comparação += `${soma}${maior10} é maior que 10, e${maior20} é maior que 20.`;
    return comparação;
}

console.log(comparador(10, 3));