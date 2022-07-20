
    var nota = document.getElementById('txtn1')
    var res = document.getElementById('res')

function calcular() {  

    var n1 = Number(nota.value) 
    var n2 = (35/100) * n1 + n1
    res.innerHTML = `Valor: ${n2.toLocaleString('pt-BR', {style: 'currency' , currency: 'BRL'})}<br>`
    res.innerHTML += '\u{1F60E}<br>'
    if (n1 > 100) {
        res.innerHTML += 'maior que 100'
    } else {
        res.innerHTML += 'menor que 100'
    }
}