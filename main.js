"use strict"
//"use strict" serve para corrigir os erros básicos


const botaoTrocarCor = document.getElementById('trocar-cor')

function trocarCor () {

    const cor = document.getElementById('cor').value
    
    document.documentElement.style.setProperty('--cor-fundo', cor)
}
botaoTrocarCor.addEventListener('click', trocarCor)