var idade = 22
if (idade <16){
    console.log('nao pode votar, você é menor de idade')
}else if(idade < 18 || idade >65){
    console.log('voto opcional')
}else if(idade <70){
    console.log('voto obrigatório')
}