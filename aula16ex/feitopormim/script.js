let lista = []
function adicionar(){
    let num = document.getElementById('txtn')
    let n = Number(num.value)
    let sel = document.getElementById('selres')
    if(n < 1 || n > 100 ){
        alert('Numero invalido')
    }else{
        if(lista.includes(n)){
            alert(`O numero ${n} já esta na lista`)
        }else{
            lista.push(n)
            
            let item = document.createElement('option')
            item.text = `Valor ${n} adicionado` 
            item.value = `v${n}`
            sel.appendChild(item) 
        }
    }
}
function finalizar(){
    let qtdn = lista.length
    lista.sort()
    let maior = lista[qtdn-1]
    let menor = lista[0]
    let soma = 0
    for(let i = 0 ; i < qtdn; i++){
        soma += lista[i]
    }
    let media = soma/qtdn

    let res = document.querySelector('div#res')
    let p = document.createElement('p')
    p.innerHTML = `Ao todo temos ${qtdn} numeros cadastrados <br>
    O maior valor informado foi ${maior} <br>
    O menor valor informado foi ${menor} <br>
    Somando todos os valores, temos ${soma} <br>
    A media dos valores digitados é ${media}`
    res.appendChild(p)
}
    
    
