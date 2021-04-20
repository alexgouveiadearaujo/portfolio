const digitando = document.querySelector('[data-anime="dig"]');
typeWrite(digitando)

function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
    
        setTimeout(() => {
            elemento.innerHTML += letra;
        }, 125 * i);
        
    });
};





/*
split() - div o texto em diferentes partes dentro do Array
const textoArray = elemento.innerHTML.split(' '); = ["Olá,", "meu", "nome", "é", "Alex"] -> divide o texto original em cada parte q tem espaço

const textoArray = elemento.innerHTML.split(''); = ["O", "l", "á", ",", " ", "m", "e", "u", " ", "n", "o", "m", "e", " ", "é", " ", "A", "l", "e", "x"] -> agr conseguimso interagir c cada letra da frase

------

elemento.innerHTML = '' -> limpa o texto
--------

textoArray.forEach((letra, i))
i= onde está a letra no array, iniciando por 0
----

 textoArray.forEach((letra, i) => {
        console.log(letra);
    })
ou
 textoArray.forEach( function(letra, i) {
        console.log(letra);
    })
ASSIM CADA LETRA É SEPARADA
-------
setTimeout(() => {
            elemento.innerHTML += letra;
        }, 150 * i);
ou 
setTimeout(() => elemento.innerHTML += letra, 150 * i);
---
TEMPO DE CADA LETRA
150 * 0 -> mult por o tempo(150) * 0 = 0 , 150 * 1 = 150, 150 * 2 = 300 ... 


*/
