function verificar() {
    var data = new Date
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            document.body.style.backgroundColor = 'rgb(141, 141, 248)'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 20) {
                // Jovem 
                img.setAttribute('src', 'foto-jovem-m.jpg')
            } else if (idade < 50){
                // Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                // Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            document.body.style.backgroundColor = 'pink'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 20) {
                // Jovem 
                img.setAttribute('src', 'foto-jovem-f.jpg')
            } else if (idade < 50){
                // Adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                // Idoso
                img.setAttribute('src', 'foto-idoso-f.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = (`Detectamos ${genero} como ${idade} anos`)
        res.appendChild(img)
    }

}