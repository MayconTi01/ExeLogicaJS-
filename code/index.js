console.log( "Lista de 100 exercicios de logica com JS")

// ====== EXERCICIO 8 ===============

//8. Média de três notas — Domínio: operadores + condição

let nota1 =  9
let nota2 = 9
let nota3 =  9

const calculoDaMedia = (nota1 + nota2 + nota3)/3 
const notaFinal = Math.round(calculoDaMedia) 
//console.log( notaFinal)

switch(true){ 
    case (notaFinal <6) : 
        console.log(`vc tirou :${notaFinal} pontos, esta abaixo da media`)
    break
    case (notaFinal === 6) : 
        console.log(`vc tirou :${notaFinal} pontos, esta na media`)
    break 
    case (notaFinal > 6 && notaFinal<=9 )  : 
        console.log(`vc tirou :${notaFinal} pontos, esta acima da media`)
    break 
    case (notaFinal === 10) : 
        console.log(`vc tirou :${notaFinal} pontos, sua nota e maxima, Parabens !`)
}

