function verificar(){
    const res= document.querySelector("div#res")
    res.innerHTML = `${criarContador()}`
}

function criarContador(){
    let t_index = document.getElementById("txtindex")
    let index = Number(t_index.value)
    let t_fim = document.getElementById("txtfim")
    let fim = Number(t_fim.value)
    let t_passo = document.getElementById('txtpasso')
    let passo = Number(t_passo.value)
    
    resultado = ordenar(index,fim,passo)
    return resultado
}


function ordenar(index,fim,passo){
    let  resultado =''

    if( index< fim){
        resultado =  indexMaior(index,fim,passo)
    }else if(index > fim){
        resultado =  indexMENOR(index,fim,passo)
    }    
    return resultado
}


function indexMENOR(index,fim,passo){
    let resultado = ''
    if(index <=0 || fim <=0){
        window.alert('Verifique os dados!')

    }else if(passo == 0 ){
        passo =1
        resultado = contarDecrescente(index,fim,passo)   
    }else{
        resultado = contarDecrescente(index,fim,passo)   
    }
    return resultado
}


function indexMaior(index,fim,passo){
        let resultado = ''
        if(index <=0 || fim <=0){
            window.alert('Verifique os dados!')

        }else if(passo == 0 ){
            passo =1
            resultado = contarcrescente(index,fim,passo)   
        }else{
            resultado = contarcrescente(index,fim,passo)   
        }
        return resultado
}


function contarcrescente(index,fim,passo){
    let variavelAuxiliar =''
    for (index ; index <= fim; index = index + passo){
        if(index <= fim){
            variavelAuxiliar += `${index}\u{1F449}`
        }
    }     
    variavelAuxiliar += `\u{1F937}`
    return variavelAuxiliar
}

function contarDecrescente(index,fim,passo){
    let variavelAuxiliar =''
    for (index ; index >= fim; index = index - passo){
        if(index >= fim){
            variavelAuxiliar += `${index} \u{1F449}`
        }
    }     
    variavelAuxiliar += `\u{1F937}`
    return variavelAuxiliar
}