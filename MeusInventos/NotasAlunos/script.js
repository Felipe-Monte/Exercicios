
let nota1 = document.getElementById('nota1')
let nota2 = document.getElementById('nota2')
let res = document.getElementById('res')

function verificar() {
    let n1 = Number(nota1.value)
    let n2 = Number(nota2.value)
    let media = (n1 + n2) / 2

    if (nota1.value == 0 || nota2.value == 0) {
        alert('[ERRO] em branco')

    } else if (media >= 7) {
        res.innerHTML = `<p>Sua media foi ${media}</p>`
        res.innerHTML += `voce passou`
        
    } else {
       res.innerHTML = `<p>Media ${media} Infelizmente</p>`
       res.innerHTML += 'reprovado'
    } 
    
    
    
}