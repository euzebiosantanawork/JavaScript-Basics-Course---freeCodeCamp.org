// These classes and others can be found at: https://www.youtube.com/watch?v=le-URjBhevE&list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5&index=2&t=0s
// Copying Arrays

var original = [ true , true , undefined , false , null ] ;

//slice

var copy1 = original . slice ( 0 ) ;

// spread operator

var copy2 = [ ...original ] ;
console . log ( copy1 , copy2 ) ;

//DEEP copuing

var deepArray = [ [ " freeCodeCamp " ] ] ;
var shallowCopy = deepArray . slice ( 0 ) ;


shallowCopy [ 0 ] . push ( " is great " ) ;
console . log ( deepArray[ 0 ] , shallowCopy [ 0 ] ) ;

var deepCopy = JSON.parse ( JSON.stringify ( deepArray ) ) ;

deepCopy[ 0 ] . push ( " is great " ) ;
console . log ( deepArray[ 0 ] , deepCopy [ 0 ] ) ;