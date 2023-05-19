function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
if (fano.value.length == 0 || fano.value > ano) {
    window.alert('Erro! Verifique os dados inseridos.')}
else {
var fsex = document.getElementsByName('radsex')
var idade = ano - Number(fano.value)
var genero = ''
var img = document.createElement('img')
img.style.width = "250px"
img.style.height = "250px"
img.setAttribute('id', 'foto')

if (fsex[0].checked) {
    genero = 'um tricolor'
    if (idade >=0 && idade <= 6 ) {
img.setAttribute('src', 'diversas/bebem.png')
    } else if (idade > 6 && idade <=12) {
        img.setAttribute('src', 'diversas/garoto.png')
    } else if (idade > 12 && idade <= 22) {
img.setAttribute('src', 'diversas/jovemm.png')
    } else if (idade > 22 && idade <= 40) {
img.setAttribute('src', 'diversas/adulto.png')
    } else if (idade > 40 && idade < 60) {
        img.setAttribute('src', 'diversas/meiaidade.png')
      }  else {
img.setAttribute('src', 'diversas/idoso.png')
    }
} else if (fsex[1].checked) {
genero = 'uma tricolor'
if (idade >=0 && idade <= 5 ) {
    img.setAttribute('src', 'diversas/bebef.png')
        } else if (idade >=  5 && idade <=12) {
            img.setAttribute('src', 'diversas/garota.png')
        } else if (idade > 12 && idade <= 22) {
    img.setAttribute('src', 'diversas/jovemf.png')
        } else if (idade > 22 && idade <= 40) {
    img.setAttribute('src', 'diversas/adulta.png')
        } else if (idade > 40 && idade < 60) {
            img.setAttribute('src', 'diversas/meiaidadef.png')
          }  else {
    img.setAttribute('src', 'diversas/idosa.png')
        }
}
res.innerHTML = `Voce eh ${genero} de ${idade} anos.`
res.appendChild(img)
}

}
//TABULAION ABAIXO
function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
if(num.value.length == 0) {
    window.alert('Por favor, digite um numero.')
    
} else { 
    let n = Number(num.value)
 let c = 1
 tab.innerHTML = ""
 while(c <= 10) {
    let item = document.createElement('option')
    item.text = `${n} x ${c} = ${n*c}`
    item.value = `tab${c}`
    tab.appendChild(item)
    c++
 }
}
}