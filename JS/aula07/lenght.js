// let nome = "Gustavo"

// console.log(nome);
// console.log(nome.length);
// console.log(typeof nome);

let nomes = ['Leonardo', 'Vitoria', 'Luiz', 'Pedro', 'Matheus', 'Evellin']
//                0          1         2       3         4          5
console.log(nomes.length);
console.log("------- -------");
console.log(`Olá, ${nomes[5]}! Você foi cadastrado na plataforma.`);
console.log("------- -------");

for (let i= 0; i < nomes.length; i++) {
console.log(`Olá, ${nomes[i]}! Você foi cadastrado na plataforma.`);   
}