let saldo = victoryBalance(100, 5)
let nivel = verifyRanked()

console.log(`O Herói tem o saldo de **${saldo}** vitórias e está no nível **${nivel}**`)

function victoryBalance(victory = 0, defeat = 0){

    let balance = victory - defeat

    return balance
}

function verifyRanked(){
    let nivelHeroi

    if (saldo < 10){
        nivelHeroi = "Ferro"
    } else if (saldo > 10 & saldo <= 20){
        nivelHeroi = "Bronze"
    } else if (saldo > 20 & saldo <= 50){
        nivelHeroi = "Prata"
    } else if (saldo > 50 & saldo <= 80){
        nivelHeroi = "Ouro"
    } else if (saldo > 80 & saldo <= 90){
        nivelHeroi = "Diamante"
    } else if (saldo > 90 & saldo <= 100){
        nivelHeroi = "Lendário"
    } else{
        nivelHeroi = "Imortal"
    }

    return nivelHeroi
}