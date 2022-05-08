function fatorial(n){// função recursiva é quando a função chama ela mesma 
    if( n ==1){
        return 1
    }else{
        return n * fatorial(n-1)
    }
}
    console.log(fatorial(5))