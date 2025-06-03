function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    
    
    if (hora >=0 && hora < 12 ){
        //bom dia
        img.src = 'manha.png'
        window.document.body.style.background = '#73C0F6'
    }
    else if(hora >= 12 && hora < 18){
        //boa tarde
        img.src = 'tarde.png'
        window.document.body.style.background = '#F2AA84'
    }
    else {
        img.src = 'noite.png'
        window.document.body.style.background = '#3C2F4B'
        
        
        // boa noite
    }
}