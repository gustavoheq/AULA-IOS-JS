let jogos = ['Albion','The Duel', 'GrandChase', 'CS']

console.log(jogos[0]);
console.log(jogos[2]);
console.log("-------EXC 1-------");

const sucos = [
    ['Uva', 'Morango', 'Laranja'],   //0
    ["Limão", "Abacaxi", "Goiaba"],  //1
    [`Guaraná`, `Maça`, `Caju`]      //2
    //    0       1       2
]

let suco1, suco2

sucos[1][1] = 'Ketleen'
sucos[2][0] = 'Guilherme'


suco1 = sucos[1][1]
suco2 = sucos[2][0]
console.log(suco1);
console.log(suco2);
console.log(sucos);
console.log("------- -------");
console.log(sucos [0][0]);
console.log(sucos [1][1]);
console.log(sucos [2][2]);
console.log("-------EXC 2-------");

let n1 = 5  //10
let n2 = 10 //5

let troca
troca = n1

n1 = n2
n2 = troca

console.log(n1, n2);
console.log("-------EXC 3-------");
