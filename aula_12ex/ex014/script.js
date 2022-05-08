function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    
    msg.innerHTML = `Agora são: <strong>${hora}:${minuto}</strong> `
    if( hora >= 6 && hora < 12){
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#ca8625'
    }else if(hora >=12 && hora <18){
        img.src = 'fototarde.jpg'
        document.body.style.background = '#b4ada3'
    }else{
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#183a55'
    }


}