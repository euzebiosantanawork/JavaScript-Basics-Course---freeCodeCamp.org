// These classes and others can be found at: https://www.youtube.com/watch?v=le-URjBhevE&list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5&index=2&t=0s
// JS Nuggests : Data Types
// There are 7 data types:
// Booleaon

var data = true ;

if ( data ) {

    console . log ( " Booleans rule! " ) ;
    
} else {

    console . log ( " Booleans are lmae. " ) ;

}

var data = false;

if ( data ) {

    console . log ( " Booleans rule! " ) ;
    
} else {

    console . log ( " Booleans are lmae. " ) ;

}

// null

var n = null ;
console . log ( n * 32 ) ;

// undefined

var a ;

console . log ( a + 2 ) ;

// Number 

var num = 3.6 ;
var ber = 6.4 ;
console . log ( num + ber );

// String "howdy"

var name = " Beau " ;
console . log ( " hi My name is  " + name ) ;

//Sybol

var sym1 = Symbol ( " foo " ) ;
var sym2 = Symbol ( " foo " ) ;

console . log ( sym1 === sym2 ) ;
console . log ( String ( sym1 ) === String( sym2 ) ) ;

//Object

var myCar = newObject() ;
myCar . make = " Ford " ;
myCar . model = " Mustang " ;

console . log ( myCar . make ) ;