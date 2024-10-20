let quantidadeDeVitoria = parseInt(prompt("Quantidade de Vitória"))
let quantidadeDeDerrota = parseInt(prompt("Quantidade de Derrota"))


function calcularRankeada(quantidadeDeVitoria,quantidadeDeDerrota){
  const resultadoDaPartida = quantidadeDeVitoria - quantidadeDeDerrota;

  if(resultadoDaPartida < 10 ){
    return console.log(`O Herói tem de saldo de ${resultadoDaPartida} de vitórias e está no nível de Ferro`)
  }else if(resultadoDaPartida < 20){
    return console.log(`O Herói tem de saldo de ${resultadoDaPartida} de vitórias e está no nível de Bronze`)
  }else if( resultadoDaPartida < 50){
    return console.log(`O Herói tem de saldo de ${resultadoDaPartida} de vitórias e está no nível de Prata`)
  }else if( resultadoDaPartida < 80){
    return console.log(`O Herói tem de saldo de ${resultadoDaPartida} de vitórias e está no nível de Ouro`)
  }else if( resultadoDaPartida < 90){
    return console.log(`O Herói tem de saldo de ${resultadoDaPartida} de vitórias e está no nível de Diamante`)
  }else if( resultadoDaPartida < 100){
    return console.log(`O Herói tem de saldo de ${resultadoDaPartida} de vitórias e está no nível de Lendário`)
  }else if( resultadoDaPartida >= 101){
    return console.log(`O Herói tem de saldo de ${resultadoDaPartida} de vitórias e está no nível de Imortal`)
  }
}
calcularRankeada(quantidadeDeVitoria,quantidadeDeDerrota)


/*
Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal*/