let avaliacao = "e"
// A - ótimo
// B - bom
// C - regular
// D - ruim
// E - péssimo

switch (avaliacao.toUpperCase()){
    case "A":
        console.log("Avaliação Ótima!");
        break;    
    case "B":
        console.log("Avaliação Boa!");
        break;
    case "C":
        console.log("Avaliação Regular!");
        break;
    case "D":
        console.log("Avaliação Ruim!");
        break;
    case "E":
        console.log("Avaliação Péssima!");
        break;
        default: console.log("Não avaliado.");
        break;
    }