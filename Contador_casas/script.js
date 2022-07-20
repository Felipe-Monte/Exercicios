function contar() {
    var inicio = window.document.getElementById('txtn1')
    var fim = window.document.getElementById('txtn2')
    var passo = window.document.getElementById('txtn3')
    var res = window.document.getElementById('res')
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
     window.alert('[ERRO] campo em branco')  
    } else 
     if (i < f) {
        for (let c = i; c <= f; c += p) 
            res.innerHTML += `${c} `

        } else {
            for (let c = i; c >= f; c -= p) {
            res.innerHTML += `${c} `

        }

        
    }

}
