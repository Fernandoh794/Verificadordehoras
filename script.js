
function carregar () {

    var msg = document.querySelector('#msg')
    var data = new Date()
    var hora = data.getHours()
    var bienviendo = document.querySelector('#bienviendo')
    var img = document.querySelector('img')
    
    
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 4 && hora <=12) {
        bienviendo.innerHTML = `Bom dia`
        img.src = './img/manha.png'
        document.body.style.background = '#F8975B'
    } else if (hora >= 12 && hora <= 18) {
        bienviendo.innerHTML = `Boa tarde`
        img.src = './img/tarde.png'
        document.body.style.background = '#FFAE50'
    }
    else  {
      bienviendo.innerHTML = `Boa noite`
      img.src = './img/noite.png'
      document.body.style.background = '#06355B'
    }
     
    
}







