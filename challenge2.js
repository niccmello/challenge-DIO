// ranked match calculator
let result = calcular (100, 30)
let nível = 0

console.log("Quantidade de vitórias = " + result)

function calcular(vitórias, derrotas){
    let add = vitórias - derrotas
    return add
}

if(result < 10){
    nível = "Ferro"
    console.log("Seu ranking atual é Ferro")
} else if (result >= 11 && result <= 20){
    nível = "Bronze"
    console.log("Seu ranking atual é Bronze")
}else if (result >= 21 && result <= 50){
    nível = "Prata"
    console.log("Seu ranking atual é Prata")
}else if (result >= 51 && result <= 80){
    nível = "Ouro"
    console.log("Seu ranking atual é Ouro")
}else if (result >= 81 && result <= 90){
    nível = "Diamante"
    console.log("Seu ranking atual é Diamante")
}else if (result >= 91 && result <= 100){
    nível = "Lendário"
    console.log("Seu ranking atual é Lendário")
}else if (result >= 101){
    nível = "Imortal"
    console.log("Seu ranking atual é Imortal")
}

console.log(" ")
console.log("O herói tem saldo de " + result + " vitórias e está no nível de " + nível)