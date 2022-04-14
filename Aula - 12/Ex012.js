var agora = new Date()
var hora = agora.getHours()

console.log(`Sao exatamente ${hora} horas.`)
if(hora < 12){
    console.log('Bom Dia')
}else if(hora <= 18){
    console.log('Boa Tarde')
}else if (hora < 24 ) {
    console.log('Boa noite')
}