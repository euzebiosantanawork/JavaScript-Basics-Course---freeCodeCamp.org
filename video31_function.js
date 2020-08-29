// These classes and others can be found at: https://www.youtube.com/watch?v=le-URjBhevE&list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5&index=2&t=0s
// Immediately Invoked Function Expression ( IIFE )

(  

    function () {

        console . log ( " My favorie number is 3 " )

    }

) () ;

(

    favNumber - function ( num = 3 ) {

        console . log ( ` My favorite number is  ` + num ) ;

    }

) () ;

favNumber ( 5 ) ;

var a = 2 ;

(  

    function () {

        var a = 3 ;
        console. log ( a ) ;

    }

) () ;

console . log ( a ) ;

let b = 2 ;

{

    let b = 3 ;
    console . log ( b ) ;

}

console . log ( b ) ;