// Radom Numbers & parseInt

console . log ( Math . random () ) ;
console . log ( Math . random () * 20 ) ;
console . log ( Math . floor ( Math . random () * 20 ) ) ;

function randomRange ( min , max ) {

     return Math . floor ( Math . random () * ( max - min + 1 ) ) + min ;

} ;

console . log ( randomRange ( 1 , 9 ) ) ;

console . log ( parseInt ( ` 007 ` ) ) ;

console . log ( parseInt ( ` t007 ` ) ) ;

console . log ( parseInt ( ` 11 ` , 2 ) ) ;