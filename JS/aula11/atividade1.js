// Dado o array numbers = [1, 2, 3, 4, 5], utilize o método map para criar
// um novo array contendo o dobro de cada elemento.

let number = [1, 2, 3, 4, 5]

let dobro = number.map((number)=>{
    let dobro = number * 2
    return dobro
})

console.log(dobro);