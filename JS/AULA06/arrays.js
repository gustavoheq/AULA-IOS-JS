// let aluno = 'Guilherme'
// console.log(aluno);
// aluno = 'Davi'
// console.log(aluno);

// Arrays são usados para armazenar múltiplos valores em uma única variável.
let grupo1 = ['Lucas', 'Otávio', 'Kimberly', 'Nathan', 'Victor']

const grupo2 = new Array ('Mariana', 'Ana', 'Fabiano', 'Guilherme', 'Davi', 'João')

console.log(grupo1);
console.log(grupo1[3]);
console.log(grupo1.length);

console.log(grupo2);
console.log(grupo2[2]);

let numeros = [1, 2, 3, 4, 5]
console.log(numeros.length);

let fruta1 = 'Uva' // Mexerica
let fruta2 = 'Morango'
let fruta3 = 'Abacate'
let fruta4 = 'Abacaxi'

fruta1 = 'Mexerica'

console.log(fruta1);

let frutas = ['Uva', 'Morango', 'Abacate', 'Abacaxi', 'Mexerica']
console.log(frutas.length)
console.log(frutas[4]);

const frutas2 = [
    ['Uva', 'Morango', 'Abacate'],  //0 2
    [1, 2, 3],                      //1 1
    ['Lucas', 'Otávio', 'Kimberly'] //2 1
]

console.log(frutas2[1][1]);
console.log(frutas2[0][2]);
console.log(frutas2[2][1]);