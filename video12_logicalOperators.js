// These classes and others can be found at: https://www.youtube.com/watch?v=le-URjBhevE&list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5&index=2&t=0s
// Logical Operators && Short Circuit Evaluation
// And && OR: ||

if ( num > 5 ) {

    if ( num  < 10 )  {

        console . log ( " Unicycle! " ) ;

    } ;

} ;

if ( num > 5 && num < 10 ) {

console.log ( " Unicycle! " ) ;

} ;

if ( num > 5 || num < 10 ) {

    console . log ( ` Unicycle! ` ) ;

}

if ( 4 > 5 && 5 > 6 ) {

    console . log ( ` Hi ` ) ;

} else {

    console . log ( ` no ` ) ;

}

var test = true ;
var isTrue = function () {

    console . log ( `Test is true. ` ) ;

} ;

var isFlase = function () {

    console . log ( ` Test is false ` ) ;

} ;

if ( test ) {

    //isTrue () ;

}

( test && isTrue () ) ;

( test || isFlase() ) ;

function theSameOldFoo( name ){

    name = name || ` Bar ` ;
    console . log ( ` My best frind is name is  ` +  name ) ;

}

theSameOldFoo() ;
theSameOldFoo( ` Beau ` ) ;