function gerar() {
    var num = window.document.getElementById('txtn1').focus()
    var tab = window.document.getElementById('txtsel')
    if (num.value.length == 0) { // se o valor da caixa for em branco 
        alert('[ERRO] campo vazio')
    } else {
        var n = Number(num.value) // converteu para numero
        
        tab.innerHTML = '' // limpou a tabuada

        var c = 1 // enquanto c for menor ou = a 10, c vai receber c + 1
        while (c <= 10) {
            var item = document.createElement('option') // criou elemento option pra colocar dentro do select
            item.text = `${n} x ${c} = ${n*c}` 
            tab.appendChild(item) // mostrou o item(text) dentro da tabuada 
            c++ 
        } 
        /* for (let c = 1; c <= 10 ; c++) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)  } */
    } 
     
    
}