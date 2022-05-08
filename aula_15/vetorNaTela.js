let vetor = [8, 1, 7, 4, 2, 9]

/*for(let pos =0; pos < vetor.length; pos++) {
    console.log(`A posição ${pos} tem valor ${vetor[pos]}`)
}*/

for (let pos in vetor) {
    console.log(`A posição ${pos} tem valor ${vetor[pos]}`)
}