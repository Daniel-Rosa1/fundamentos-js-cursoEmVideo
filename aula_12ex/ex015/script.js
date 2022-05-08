function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let formulario_ano = document.getElementById('txtano')
    let res = document.querySelector('div#res')

    if(formulario_ano.value.length == 0 || Number(formulario_ano.value) > ano){
        window.alert('Verifique os dados e tente novamente')
    }else{
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(formulario_ano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        img.style='border-radius: 50%; height: 250px; width: 250px;text-align: center;'
        


        if(fsex[0].checked){
            genero = 'Homem'

            if(idade >=0 && idade <1){
                //beb
                img.setAttribute('src', 'bebe_menino.png')
            }else if(idade <10){
                //criança
                img.setAttribute('src', 'crianca_menino.png')
            } else if(idade <21){
                //jovem
                img.setAttribute('src', 'jovem_homem.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'homem_adulto.png')
            }else{
                //idoso
                img.setAttribute('src', 'senhor_homem.png')
            }

        }else if(fsex[1].checked){
            genero = 'Mulher'

            if(idade >=0 && idade <1){
                //beb
                img.setAttribute('src', 'bebe_menina.png')
            }else if(idade <10){
                //criança
                img.setAttribute('src', 'crianca_menina.png')
            } else if(idade <21){
                //jovem
                img.setAttribute('src', 'jovem_mulher.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'homem_mulher.png')
            }else{
                //idoso
                img.setAttribute('src', 'senhor_mulher.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade}`
        res.appendChild(img)
    }

}