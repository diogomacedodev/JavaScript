let valores=[8, 5, 9, 6, 1, 3, 7]
valores.sort()
/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
console.log(valores[6])
*/
//versao padrao/antiga
for(let pos=0; pos< valores.length; pos++)
    console.log(`A posiçao ${pos} tem o valor ${valores[pos]}`)

//versao simplificada/nova
console.log('Versao simplificada')
for(let pos in valores){
    console.log(`O indice ${pos} tem valor ${valores[pos]}!`)
}