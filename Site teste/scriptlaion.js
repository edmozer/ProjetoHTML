function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora sao 🕑${hora} horas, hora de fazer o seu socio!`
    
    if (hora >= 0 && hora < 12) {
        img.src = 'manha2.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde2.png'
        dpcument.body.style.background = '#b9846f'
    } else {
        img.src = 'noite2.png'
        document.body.style.background = '#515154'
    }
    
    } 