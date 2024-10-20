function nivelDoHeroi(){
  const nomeDoHeroi = prompt('Dígite o nome do Herói');
  let quantidadeDeXp = prompt(parseInt('Digite a quantidade de xp do herói'));
  if( quantidadeDeXp < 1000){
    console.log(`O Herói de nome ${nomeDoHeroi} está no nível de Ferro`)
  }else if(quantidadeDeXp < 2000){
    console.log(`O Herói de nome ${nomeDoHeroi} está no nível de Bronze`)
  }else if( quantidadeDeXp < 5000){
    console.log(`O Herói de nome ${nomeDoHeroi} está no nível de Prata`)
  }else if( quantidadeDeXp < 7000){
    console.log(`O Herói de nome ${nomeDoHeroi} está no nível de Ouro`)
  }else if( quantidadeDeXp < 8000){
    console.log(`O Herói de nome ${nomeDoHeroi} está no nível de Platina`)
  }else if( quantidadeDeXp < 9000){
    console.log(`O Herói de nome ${nomeDoHeroi} está no nível de Ascendente`)
  }else if( quantidadeDeXp < 10000){
    console.log(`O Herói de nome ${nomeDoHeroi} está no nível de Imortal`)
  }else if( quantidadeDeXp > 10000){
    console.log(`O Herói de nome ${nomeDoHeroi} está no nível de Radiante`)
  }
}

nivelDoHeroi()







  /*Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante*/