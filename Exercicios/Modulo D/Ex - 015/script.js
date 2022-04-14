function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById ('txtano')
    var res = document.querySelector ('div#res')
    if( fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'imgs')
        if(fsex [0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <10){
                img.setAttribute('src','menino.jpg')
                 //criança
            }else if(idade < 21){
                img.setAttribute('src','mjovem.jpg')
                //jovem
            }else if(idade < 55){
                img.setAttribute('src','homem.jpg')
                //adulto
            }else{
                img.setAttribute('src','idoso.jpg')
                //idoso
            }

        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <10){
                img.setAttribute('src','menina.jpg')
                //criança
            }else if(idade < 21){
                img.setAttribute('src','fjovem.jpg')
                //jovem
            }else if(idade < 55){
                img.setAttribute('src','mulher.jpg')
                //adulto
            }else{
                img.setAttribute('src','idosa.jpg')
                //idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}