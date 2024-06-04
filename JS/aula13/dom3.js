//getElementById - elemento por ID
let valor1 = document.getElementById('elemento1');
valor1.style.color = 'red'

//getElementsByClassName - elemento pelo nome de classe [0]
let valor2 = document.getElementsByClassName('elemento2')[0];
valor2.style.color = 'green'

//getElementsByTagName - elemento por nome da tag <li>
let valor3 = document.getElementsByTagName('li')[1]
valor3.innerText = 'Troquei o valor'

let valor4 = window.document.querySelector('#p1')
valor4.innerHTML = 'Aula de Dom3'

let valor5 = window.document.querySelectorAll('.p2')[0]
valor5.style.color = 'red'