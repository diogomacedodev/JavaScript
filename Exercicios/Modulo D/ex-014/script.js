function carregar(){    
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if ( hora>=0&&hora < 12){
    //Bom Dia
    img.src="img/manha.jpg"
    console.log +='Bom Dia'
    document.body.style.background = '#BAFFED'

}else if (hora >= 12 && hora < 18){
    //Boa Tarde
    
    img.src="img/tarde.jpg"
    console.log +='Boa Tarde'
    document.body.style.backgroundColor = '#e4be82'

}else if (hora < 24) {
    //Boa Noite
    
    img.src="img/noite.jpg"
    console.log +='Boa Noite'
    document.body.style.backgroundColor = '#3029ad'
}
}