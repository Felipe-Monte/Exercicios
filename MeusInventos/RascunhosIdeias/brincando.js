function clicar() {   
 
 var num = document.getElementById('txtn1')
 var res = document.getElementById('res')

  if (num.value.length == 0){
    alert('[ERRO] campo em branco !')

  } else {
    var n = Number(num.value)
    var n1 = (6.38/100) * n + n
    var n2 = (4.36/100) * n + n
    var n3 = (5.04/100) * n + n
    var n4 = (5.71/100) * n + n
    var n5 = (6.39/100) * n + n
    var n6 = (7.07/100) * n + n
    var n7 = (7.98/100) * n + n
    var n8 = (8.68/100) * n + n
    var n9 = (9.38/100) * n + n
    var n10 = (10.08/100) * n + n
    var n11 = (10.77/100) * n + n
    var n12 = (11.47/100) * n + n

    res.style.background = 'white'
    res.innerHTML =`1x:<strong>${n1.toLocaleString('pt-BR', {style: 'currency' , currency: 'BRL'})}</strong><br>`
    res.innerHTML +=`2x:<strong>${n2.toLocaleString('pt-BR', {style: 'currency' , currency: 'BRL'})}</strong><br>`
    res.innerHTML +=`3x:<strong>${n3.toLocaleString('pt-BR', {style: 'currency' , currency: 'BRL'})}</strong><br>`
    res.innerHTML +=`4x:<strong>${n4.toLocaleString('pt-BR', {style: 'currency' , currency: 'BRL'})}</strong><br>`
    res.innerHTML +=`5x:<strong> ${n5.toLocaleString('pt-BR', {style: 'currency' , currency: 'BRL'})}</strong><br>`
    res.innerHTML +=`6x:<strong>${n6.toLocaleString('pt-BR', {style: 'currency' , currency: 'BRL'})}</strong><br>`
    res.innerHTML +=`7x:<strong>${n7.toLocaleString('pt-BR', {style: 'currency' , currency: 'BRL'})}</strong><br>`
    res.innerHTML +=`8x:<strong>${n8.toLocaleString('pt-BR', {style: 'currency' , currency: 'BRL'})}</strong><br>`
    res.innerHTML +=`9x:<strong>${n9.toLocaleString('pt-BR', {style: 'currency' , currency: 'BRL'})}</strong><br>`
    res.innerHTML +=`10x:<strong>${n10.toLocaleString('pt-BR', {style: 'currency' , currency: 'BRL'})}</strong><br>`
    res.innerHTML +=`11x:<strong>${n11.toLocaleString('pt-BR', {style: 'currency' , currency: 'BRL'})}</strong><br>`
    res.innerHTML +=`12x:<strong>${n12.toLocaleString('pt-BR', {style: 'currency' , currency: 'BRL'})}</strong><br>`
    res.innerHTML +=`<p>Valor das taxas em até 12x</p>`

  }
}

function novo() {
    var num = document.getElementById('txtn1')
    if (num.value.length == 0) {
      alert('[ERRO] campo em branco !')
      res.style.background = 'red'
      res.style.width = '200px'
      res.style.margin = 'auto'
    } else {
    res.innerHTML = ''
    var num = document.getElementById('txtn1').focus()
    var num = document.getElementById('txtn1').value = ''
    res.style.background = 'white'
    }

    res.innerHTML = '<p>Digite o valor !</p>'
   
}
    
    
