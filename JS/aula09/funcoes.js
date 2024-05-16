function calcularMedia (n1, n2, n3){
    let media 
    media = (n1 + n2 + n3) / 3
    return media
}
console.log(`A sua nota é: ${calcularMedia(3,7, 9).toFixed(1)}`);