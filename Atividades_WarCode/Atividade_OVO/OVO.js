function cookingTime(eggs) {
    //TODO
   
   
    for (let i = 0; i < eggs; i++) {
        let panelaCapacidade = 8
        let tempoCozimentoOitoOvos = 5
        if (eggs > panelaCapacidade){
            return `Faltam ${tempoCozimentoOitoOvos+eggs.lenght+5} minutos para cozinhar os ovos `
        }else if(eggs == panelaCapacidade ){
            return `Faltam ${tempoCozimentoOitoOvos} minutos para cozinhar os ovos `
        }
}

console.log(cookingTime(32))


  /*   /*  
     let tempoCozimentoOitoOvos = 5*(ovosMenosPanela-panelaCapacidade)
     let ovosMenosPanela = Math.abs(panelaCapacidade - eggs) 
     if ( ovosMenosPanela > 0 ) {
        return `Faltam ${tempoCozimentoOitoOvos} minutos para cozinhar os ovos `
     } else if ( eggs == panelaCapacidade ){
        return `faltam 5 minutos`
     }
          */
    }
//console.log(cookingTime(32))

  // 8 ovos são cozindos a cada cinco minutos, se eu tenho 16 ovos saõ necessarios 10 minutos
  // 8=>5
  //16=>10
  //24=>15
  //32=>20


