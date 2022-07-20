function gerar() {
    let texto1 = document.getElementById('txtn1')
    let tab = document.getElementById('tab')
    

    if (texto1.value.length == 0) {
        alert('[ERRO] Campo em branco !')
    } else {
            let n = Number(texto1.value)
            let c = 1

            tab.innerHTML = ''
            
          while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }

    }

}