let mariana = {
    marca: 'Apple',
    modelo: 'Iphone-11',
    ano: 2019,
}
console.log(mariana);

let moises = {
    marca: 'Motorola',
    modelo: 'Motog42',
    ano: 2022,
}
console.log(moises);

let evellin = {
    marca: 'Apple',
    modelo: 'Iphone-11',
    ano: 2019,
}
console.log(evellin);

class Celular {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
}


let kimberlly = new Celular("Samsumg", "A32", 2022)
console.log(typeof kimberlly);
console.log(kimberlly.modelo);
