function tabuada(){
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if(num.value.length == 0){
        alert('Erro')
    }else{
        let n = Number(num.value)
        tab.innerHTML = ''
        for(var i = 1; i <= 10 ; i++){
        let item = document.createElement('option')
        item.text = `${n} x ${i} = ${n*i}` 
        item.value = `tab${c}`
        tab.appendChild(item) 
    }
    }
}