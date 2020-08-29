// Dates

var d1 = new Date ()
console . log ( d1 .toTimeString() ) ;

var d2 = new Date ( 2017 , 1 , 3 , 42 , 23 , 23 ) ;
console . log ( d2 . toString() ) ;

var d3 = new Date ( 929397621000 ) ;
console . log ( d3 . toDateString() ) ;

var d4 = new Date ( ` 2015-03 ` ) ;
console . log ( d4 . toString () ) ;

var d5 = new Date ( ` March 25 2017 ` ) ;
console.log ( d5 . toString()  ) ;

console . log ( d4 . getDate() ) ;
console . log ( d4 . getDay () ) ;
d4 . setYear ( 2020 ) ;
console . log ( d4 . toString() ) ;

var start = new Date () ;
doSomething () ;
var end = new Date () ;

var elapsed = end . getTime () - start . getTime () ;
console . log ( elapsed ) ;

function doSomething () {

    for ( var i = 0 ; i < 1000000000 ; i++ ) {



    }

}
