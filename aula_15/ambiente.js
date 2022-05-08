let num = [5, 8, 2, 9, 3]
// variavel.push() adiciona um elemento na ultima posição do array
// variavel.length retorna o tamanho do vetor
//variavel.sort() vai devolver o array ordenado
console.log(num)
num. push(1)
num.sort()
console.log(num)
console.log(`O vetor étem ${num.length} posições`)
console.log(`o primeiro elemento do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if( pos == -1){
    console.log(' o valor nnao foi encontrado')
}else{
    console.log(`o valor 8 está na posição ${pos}`)
}