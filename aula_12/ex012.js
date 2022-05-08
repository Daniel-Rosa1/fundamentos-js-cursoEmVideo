const agora = new Date()

saldar()

function hora(){
    const hora = agora.getHours()
    const minuto = agora.getMinutes()
    return(`agora são ${hora}:${minuto}`)
}    


function saldacao(){
    const hora = agora.getHours()
    let resultado = undefined
    if (hora <12 && hora >6){
        resultado = ('Bom dia')
    }else if(hora < 18){
        resultado = ('Boa tarde')
    }else{
        resultado = ('Boa noite')
    }
    return resultado 
}


function diaSemana(){
    let diaSem = agora.getDay()
    let resultado_dia = undefined
    switch (diaSem){
        
        case 0:
            resultado_dia = ('hoje é Segunda')
            break
        
        case 1:
            resultado_dia = ('hoje é Terça')
            break

        case 2:
            resultado_dia = ('hoje é Terça')
            break
        
        case 3:
            resultado_dia = ('hoje é Quarta')
            break
        
        case 4:
            resultado_dia = ('hoje é Quinta')
            break

        case 5:
            resultado_dia = ('hoje é Sexta')
            break

        case 6:
            resultado_dia = ('hoje é Sabado')
            break

        case 7:
            resultado_dia = ('hoje é Domingo')
            break

        default:
            resultado_dia = ('deu errado')
            break
        
            
    }
    return resultado_dia
}


function saldar(){
    console.log(saldacao())
    console.log(diaSemana())
    console.log(hora())
}