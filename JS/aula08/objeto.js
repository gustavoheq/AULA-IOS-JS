//RA, Nome, Idade, Grade:Tecnologia, Administração, Comunicação
let aluno1 = {
    RA: 20240101,
    Nome: 'Ketleen',
    Idade: 18,
    Grade: {
        Curso: 'Comunicação',
        CH: 200,
        Matriculado: true
    }
}

let {RA, Nome, Idade} = aluno1

console.log(aluno1);
console.log(aluno1.Nome);
console.log(aluno1.Nome.toUpperCase());


console.log('---- ---- ----');
console.log('---- ---- ----');


let animal1 = {
    Nome: 'Yasu',
    Raça: 'Felino',
    Idade: 1,
    Pet: {
        Vacinado: true,
        Castrado: true
    }
}

console.log(animal1);
console.log(animal1.Nome);

let animal2 = {
    Nome: 'Yusu',
    Raça: 'Poodle',
    Idade: 7,
    Pet: {
        Vacinado: true,
        Castrado: true
    }
}

console.log(animal2);
console.log(animal2.Nome);

let animal3 = {
    Nome: 'Yosu',
    Raça: 'Chihuahua',
    Idade: 1,
    Pet: {
        Vacinado: false,
        Castrado: false
    }
}

console.log(animal3);
console.log(animal3.Nome);