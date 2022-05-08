let vetorEntrada =[]
let num = document.getElementById('txtNumero')
let apresentar = document.getElementById('selectArray')
let res = document.querySelector('div#res')

function validadeEntradaDados(){
    if(isNumber(num.value) && !esta_no_array(num.value, vetorEntrada)){
        vetorEntrada.push(Number(num.value)) 
        

       
        let item = document.createElement('option')
        item.text = `Número ${num.value} adicionado`
        //item.value = `apresentar${pos}`
        apresentar.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert(`Valor invalido ou já consta na lista`)
    }
    num.value =''
    num.focus()
}


function isNumber(numero){
    if (Number(numero) >=1 && Number(numero) <= 100){
        return true
    }else{
        return false
    }
}


function esta_no_array(numero, lista){
    if (lista.indexOf(Number(numero)) != -1){
        return true
    }else{
        return false
    }
}



function finalizar(){
    if(vetorEntrada.length == 0){
        window.alert('Adicione valodres anters de finalizar!')
    }else{
        let total = vetorEntrada.length
        let maior = vetorEntrada[0]
        let menor = vetorEntrada[0]
        let soma = 0
        let media = 0
        for(let pos in vetorEntrada){
            soma += vetorEntrada[pos]
            if( vetorEntrada[pos] > maior){
                maior = vetorEntrada[pos]
            }
            if( vetorEntrada[pos] < menor){
                menor = vetorEntrada[pos]
            }
        }

        media = soma / total

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} números cadastrado </p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p>a media dos valores digitados é ${media}</p>`
    }
}   