function comparador(num1, num2) {
    if (!num1 || !num2) return "Defina dois números"
    else if (typeof(num1) != "number" || typeof(num2) != "number") return "Os parametros devem ser números"
    else {
        var comparação = `Os numeros ${num1} e ${num2} `;
        const igualdade = num1 === num2;
        const soma = num1 + num2;
        var maior10;
        var maior20;
        igualdade ? comparação += "são iguais." : comparação += "não são iguais. ";
        comparação += `Sua soma é igual a ${soma}. `
        if (soma > 10) {
            maior10 = "maior"
            soma > 20 ? maior20 = "maior" : maior20 = "menor";
        }
        else {
            maior10 = "menor";
            maior20 = "menor";
        }
        comparação += `${soma} é ${maior10} que 10, e ${maior20} que 20.`;
        return comparação;
    }
}

console.log(comparador(3, 3));