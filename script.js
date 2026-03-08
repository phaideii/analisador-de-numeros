let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

const analisar = document.querySelector('#finalizar')
const adicionar = document.querySelector('#adicionar')
adicionar.addEventListener('click', addnum)
analisar.addEventListener('click', numAnalise)

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    } else{
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function addnum(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        //alert('tudo ok')
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML=''
    }else {
        alert('adicione um valor válido ou que não esteja na lista.')
    }
    num.value=''
    num.focus()
}

function numAnalise(){
    //alert('alo')
    if(valores.length==0){
        alert('adicione valores antes.')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma+=valores[pos]
            if(valores[pos] > maior)
                maior=valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML=''
        res.innerHTML += `<p>ao todo, temos ${tot} números.</p>`
        res.innerHTML += `<p>o maior valor informado é: ${maior}.</p>`
        res.innerHTML += `<p>o menor valor foi: ${menor}.</p>`
        res.innerHTML+= `<p>somando todos os valores...${soma}</p>`
        res.innerHTML += `<p>a média dos valores é...${media}</p>`
    }
}
