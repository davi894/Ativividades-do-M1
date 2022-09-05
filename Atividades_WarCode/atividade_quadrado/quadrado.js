function  isSquare(n){
  
    let rotorno = ""
   
   if(Math.sqrt(n) === Math.sqrt(n)){
    rotorno+= `${n} is a square number`
   }else if(-n ){
       rotorno+= `${n} is not a square number`
   }else if(Math.sqrt(n) == 0 ){
       rotorno+= `${n} is a square number`
   }else if(n<0){
       rotorno+= `${n} Negative numbers cannot be square numbers`
   }
   return rotorno; // fix me
 }
 console.log( isSquare())
 