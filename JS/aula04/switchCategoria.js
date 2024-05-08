let categoria = "e"

switch (categoria.toUpperCase()){
    case "A1":
        console.log("Vertebrados!");
        break;    
    case "A2":
        console.log("Invertebrados!");
        break;
    case "A3":
        console.log("Onívoros!");
        break;
    case "A4":
        console.log("Ovíparos!");
        break;
    case "A5":
        console.log("Herbívoros!");
        break;
        default: console.log("Não avaliado.");
        break;
    }