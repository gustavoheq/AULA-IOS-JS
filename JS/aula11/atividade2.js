// Dado o array numbers = [1, 2, 3, 4, 5], utilize o método filter para criar
// um novo array contendo apenas os números pares.

let numbers = [1, 2, 3, 4, 5]

let pares = numbers.filter((numbers)=> {
    let pares = numbers % 2 === 0
    return pares
})

console.log(pares);