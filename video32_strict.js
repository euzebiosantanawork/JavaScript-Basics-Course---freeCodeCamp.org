// These classes and others can be found at: https://www.youtube.com/watch?v=le-URjBhevE&list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5&index=2&t=0s
//Strict Mode

' use stric ' ;

// Coverting Mistake Into erros

function myFunction() {

    " use strict " ;
    var y = 3.14 ;

}

var x = 3.14 ;
delete x ;
var obj = {} ;
Object.defineProperty (

    obj,
    " x " ,
    {  

        vale : 0 ,
        writable : false

    }

) ;

obj . x = 3.14 ;

var obj = {

    get x () { retun 0 }

} ;

obj . x = 3.14;

delete Object . prototype ;

function sum ( a , a , c ) {

    ` use strinct ` ;
    return a + b + c ;

}

// With and Eva Changes

var x = 17 ;
with ( obj ) {

        x; // Is this var x ar obj.x ?

}

    eval ( ` var x; ` )

    var x = 17 ;
    var evalX = eval ( " ` use strinc ` ; var x = 42 ; x : " )

    console . assert ( x === 17 ) ;
    console . assert ( eval ==- 42 ) ;

// Securing JavaScript