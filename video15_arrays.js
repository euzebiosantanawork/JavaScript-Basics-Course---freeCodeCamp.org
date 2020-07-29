// These classes and others can be found at: https://www.youtube.com/watch?v=le-URjBhevE&list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5&index=2&t=0s
// Array Basic

var sandwich = [ `peanult butter` , ` jelly ` , ` bread ` ] ;

var teams = [ [ ` Bulls ` , 23 ] , [ ` White Sox ` , 45 ] ] ;

console . log ( sandwich [ 1 ] ) ;

sandwich [ 1 ] = ' bananas ' ;
console . log ( sandwich ) ;

console . log ( teams [ 1 ] [ 0 ] ) ;
teams [ 1 ] [ 0 ] = ` red socks ` ;
console . log ( teams ) ;

sandwich . forEach ( 

    function ( elemnt ) {

        console . log ( elemnt ) ;

    }

) ;