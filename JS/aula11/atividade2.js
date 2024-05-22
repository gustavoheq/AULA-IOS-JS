let number = [1, 2, 3, 4, 5]

let par = number.filter((number)=> {
    let par = number % 2 === 0
    return par
})

console.log(par);