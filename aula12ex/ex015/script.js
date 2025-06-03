function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('Erro! Verifique os dados novamente!')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada : ${idade}`
        var genero = ''
        if (fsex[0].checked){
            genero = 'Masculino'
            
            if(idade >=0 && idade <= 4){
                //bebe
                img.setAttribute('src', 'bebe-m.png')
            }
            else if(idade < 12){
                // crianca
                img.setAttribute('src', 'crianca-m.png')
            }
            else if (idade < 21){
                //joven
                img.setAttribute('src', 'joven-m.png')
            }
            else if (idade < 60){
                //adulto
                img.setAttribute('src', 'adulto-m.png')
            }
            else{
                //idoso
                img.setAttribute('src', 'idoso-m.png')
            }


        }else if(fsex[1].checked){
            genero = 'Feminino'
            if(idade >=0 && idade <=4){
                //bebe
                img.setAttribute('src', 'bebe-f.png')
            }
            else if(idade < 12){
                // crianca
                img.setAttribute('src', 'crianca-f.png')
            }
            else if (idade < 21){
                //joven
                img.setAttribute('src', 'joven-f.png')
            }
            else if (idade < 60){
                //adulto
                img.setAttribute('src', 'adulto-f.png')
            }
            else{
                //idoso
                img.setAttribute('src', 'idoso-f.png')
            }
           
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        img.style.marginTop = '20px'
    }


}