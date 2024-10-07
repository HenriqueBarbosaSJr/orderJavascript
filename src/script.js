/*

A lógica por trás da função de comparação (a, b) => a - b é simples:
Se o valor for negativo (quando a - b < 0), a é considerado menor que b e deve aparecer antes na lista.
Se o valor for zero (quando a - b === 0), a e b são iguais em termos de ordem.
Se o valor for positivo (quando a - b > 0), a é considerado maior que b e deve aparecer depois.

*/

//const vet = [ 4, 5, 3, 2 ,9 ,1];
//const vetPalavras = [ 'uva', 'banana', 'Laranja', 'morango']
//const vet = [ 4, 45, 37, 3, 2 ,9 ,1];

//console.log(vet);

//const vetOrder = vet.sort((a, b) => a - b);
//console.log(vetOrder);


//import { funcionarios } from "../databases/banco";

import { funcionarios } from  '../databases/banco.js'

console.log(funcionarios);

const ordenado = funcionarios.banco.sort((a,b)=>a.nome.localeCompare(b.nome));
console.log(ordenado);
