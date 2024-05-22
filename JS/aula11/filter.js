let idades = [10, 15, 18, 16, 22, 25]
//             0   1   2   3   4   5

let voto = idades.filter((idadeMaior)=> {
    return idadeMaior >= 16
})
console.log(voto);