let num1 = document.getElementById('numero1')
let num2 = document.getElementById('numero2')
let res = document.getElementById('res')

function verificar() {
    let n1 = Number(num1.value)
    let n2 = Number(num2.value)

    res.innerHTML = ''
    
    if (n1 < n2) {
        for (let c = n1; c <= n2; c++) {
            res.innerHTML += `<p>valor ${c}</p>`
        }
    } else {
        for (let c = n1; c >= n2; c--) {
            res.innerHTML += `<p>valor ${c}</p>`
        }
    }
    
}