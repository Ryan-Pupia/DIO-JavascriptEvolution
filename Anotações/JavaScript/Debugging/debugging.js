function sizeCheck(arr, size) {
    try {
        if (!arr && !size)
            throw new ReferenceError("Paramêtros não enviados");
        
        if (typeof arr !== "object") 
            throw new TypeError("Tipo de array não é um objeto");
        
        if (typeof size !== "number") 
            throw new TypeError("Tipo de tamanho não é um numero");
        
        if (arr.length !== size)
            throw new RangeError("Tamanho de array inválido");
        
        return arr;
    }
    catch(e) {
        if (e instanceof ReferenceError) {
            console.log("Reference error encontrado");
            console.log(e.message);
        }

        else if (e instanceof TypeError) {
            console.log("Type error encontrado");
            console.log(e.message);
        }

        else if (e instanceof RangeError) {
            console.log("Range error encontrado");
            console.log(e.message);
        }

        else {
            console.log("Erro inesperado encontrado: " + e);
        }
    }
}

console.log(sizeCheck());