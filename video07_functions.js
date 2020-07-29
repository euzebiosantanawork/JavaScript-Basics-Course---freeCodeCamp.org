// These classes and others can be found at: https://www.youtube.com/watch?v=le-URjBhevE&list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5&index=2&t=0s
//functions

function square ( number ) {

    return number * number ;

} 

console . log ( square ( 4 ) ) ;

var sameVar = " Hat " ;
function myFun () {
    
    var sameVar = " Shoes " ;
    console . log ( sameVar ) ;

}

myFun() ;

console . log ( sameVar ) ;

function addSquares ( a , b ) {

    function square ( x ) {

        return x * x ;

    }

    return square ( a ) + square ( b ) ;

}

a = addSquares ( 2 , 3 ) ; // return 13
b = addSquares ( 3 , 4 ) ; // return 25
c = addSuqares ( 4 , 5 ) ; // return 41
