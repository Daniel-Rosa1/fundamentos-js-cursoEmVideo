function tabuada(){
    let num = window.document.getElementById("txtn")
    let tab = window.document.getElementById('seltab')

    if(num.value.length == 0){// sempre verificar se existe um valor atribuido dentro da variavel 
        window.alert('Por favor, digite um número!')
    }else{
        let numero = Number(num.value)
        tab.innerHTML = ''// para limpar o select antes de exibir novo resultado
        for (let index = 0; index <= 10; index++) {
            let item = document.createElement('option')// criar elemento HTML
            item.text = `${numero} X ${index} = ${numero*index}`
            item.value= `tab${index}`// criar um value para php
            tab.appendChild(item)// adicionar este elemento{filho} em tab com appendChild()
        }
    }    
}
