var num = document.getElementById('txtn')
var selectList = document.getElementById('sel')
var res = document.getElementById('res')

var vetor = []

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, v) {
    if (v.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function adicionar() {
    if (isNumber(num.value) && !inLista(num.value, vetor)) {
        vetor.push(Number(num.value))
        
        var item = document.createElement('option')
        item.text = `O valor ${num.value} foi adicionado`
        selectList.appendChild(item)

        num.focus()
        num.value = ''

    } else {
        alert('Error, numero invalido ou ja adicionado a lista')
    }
}

function finalizar() {
    if (vetor.length == 0) {
        alert('Lista vazia')
    } else {
        res.innerHTML = `<p>Total de itens é ${vetor.length}</p>`
    }
}