let num = [5,8,2,9,3]
num.push(4)
console.log(`O vetor ${num} tem ${num.length} elementos`)
console.log(`O vetor ${num} em ordem crescente é ${num.sort()}`)

let pos = num.indexOf(8)
if (pos == -1 ){
    console.log('O valor não foi encontrado! ')
}else{
    console.log(`O valor esta na posição ${pos} `)
}