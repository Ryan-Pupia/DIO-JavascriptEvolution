function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: "João",
    idade: 14
}
const pessoa2 = {
    nome: "José",
    idade: 9
}
const pessoa3 = {
    nome: "Michael",
    idade: 3
}
const pessoa4 = {
    nome: "Maria",
    idade: 42
}

console.log(calculaIdade.call(pessoa3, 5));

console.log(calculaIdade.apply(pessoa2, [6]));

const maria = calculaIdade.bind(pessoa4, 7);
console.log(maria());