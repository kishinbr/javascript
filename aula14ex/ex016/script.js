function contar() {
    var ini = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpas')
    var res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert("Erro! Faltam dados")   
    }else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
        alert("Passo inválido! Considerando PASSO 1")
        p = 1
        }
        if(i < f){
            for(var c = i ; c <= f ; c+=p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }else{
            for(var c = i ; c >= f ; c-=p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += ` \u{1F3C1} `
    }

}
