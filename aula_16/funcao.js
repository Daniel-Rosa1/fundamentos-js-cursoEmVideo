function par_impar(numero){
    if(numero % 2 === 0){
        return "par"
    }else{
        return 'impar'
    }
}

let numero = par_impar(4)
console.log(numero)