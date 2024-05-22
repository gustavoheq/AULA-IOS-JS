let mariana = {
    marca: 'Apple',
    modelo: 'Iphone-11',
    ano: 2019,
}
console.log(mariana);

let moises = {
    marca: 'Motorola',
    modelo: 'MotoG42',
    ano: 2022,
}
console.log(moises);

let evellin = {
    marca: 'Apple',
    modelo: 'Iphone-11',
    ano: 2019,
}
console.log(evellin);
console.log(`--- --- ---`);

class Celular {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    desbloquearCelular() {
        return "Celular Desbloqueado"
    }
    efetuarLigacao() {
        return "Efetuando ligação"
    }
    desbloquearCelular2() {
        console.log("Celular Desbloqueado");
    }
}

class CelularGamer extends Celular {
    constructor(marca, modelo, ano, ram, cooler) {
        super(marca, modelo, ano);
        this.ram = ram;
        this.cooler = cooler;
    }
    ligarGameBooster(){
        console.log("Otimiza o jogo.");
    }
}

let celGamer1 = new CelularGamer('RedMagic', '9PRO', 2025, 32, false)

class CelularGamerPremium extends CelularGamer {
    constructor(){
        
    }
}

// let pedro = new Celular("Samsumg", "S21", 2023)
// console.log(pedro.desbloquearCelular());
// console.log(pedro.efetuarLigacao());
// console.log(`--- --- ---`);

// let Leonardo = new Celular("Xiaomi", "Poco M3", 2020)
// console.log(Leonardo);
// console.log(`--- --- ---`);

// let Kauanny = new Celular("Samsumg", "M62", 2021)
// console.log(Kauanny);
// console.log(`--- --- ---`);
