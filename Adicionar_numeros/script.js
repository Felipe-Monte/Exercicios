let txt1 = document.getElementById('txtn')
let select = document.getElementById('sel')
let res = document.getElementById('res')

function adicionar() {
    let n = Number(txt1.value)

    if (txt1.value.length == 0 || txt1.value > 100) {
        alert('[ERRO] em branco ou maior que 100')
    } else {        
        let num = [n]
        num.push(n)
        let item = document.createElement('option')
        item.text = `valor ${n} adicionado`
        select.appendChild(item)

     }   
}
function finalizar() {
      
      res.innerHTML = `<p>O maior valor cadastrado foi:</p>`  
      res.innerHTML += `<p>O menor valor foi:</p>`
      res.innerHTML += `<p>Somando todos os valores temos:</p>`
      res.innerHTML += `<p>A média de valores digitado é:</p>`
      res.innerHTML += `${num}`
}