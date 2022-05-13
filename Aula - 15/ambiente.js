let num = [6,3,5,2,9]
num.sort()
num.push(1)
console.log(num)
console.log(`O vetor tem ${num.length} Posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(6)
if(pos == -1){
    console.log(`O valor não foi encontrado`)
}else{
    console.log(`O valor 6 esta na posição ${pos}`)
}
