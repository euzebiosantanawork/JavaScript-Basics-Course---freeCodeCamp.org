// These classes and others can be found at: https://www.youtube.com/watch?v=le-URjBhevE&list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5&index=2&t=0s
// JS Nuggets :  Ternary Operator
// condition ? expr1: expr2

var age = 19 ;

if ( age >= 18 ) {

    console . log ( " You are an adult " ) ;

} else {

    console . log ( " You are a kid " ) ;

} ; 

console . log ( ( age >= 18 ) ? " You are an adult! " : " You are a kid " ) ;

var stop ;

age > 18 ? (

    console . log ( ` Ok , you can go ` ) ;
    stop = false

) : (

    console . log ( ` Sorry, you are much too young! ` ) ;
    stop = true 

) ;

var firsCheck = false ,
    secondCheck = false ,
    acess = firsCheck? " Acess denied " : secondCheck ? " Acess denied " : " Acess granted " ;

    console . log ( acess ) ;