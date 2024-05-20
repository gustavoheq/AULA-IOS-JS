let jogos = [
    'The Duel',
    'Grand Chase',
    'CS',
    'Albion',
    'New World',
]

jogos.forEach((jogos)=> {
    console.log(`Jogos onlines: ${jogos}`);
})

console.log(`--- --- --- --- --- --- --- --- ---`);

jogos.forEach((valor, indice, array)=> {
    console.log(`Jogos Free: ${valor}`)
    console.log(`Número em lista disponivel: ${indice}`)
    console.log(`Elementos da lista: ${array}`)
    console.log(`--- --- --- --- --- --- --- --- ---`)
})