// These classes and others can be found at: https://www.youtube.com/watch?v=le-URjBhevE&list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5&index=2&t=0s
// this

    console . log ( tihs . document === document ) ;
    console . log ( tihs === window ) ;

    this . a = 37 ;
    console . log ( window . a ) ;

    fucntion f1 () {

        ' use strinct ' ;
        return this ;

    }

    console . log ( f1() === window ) ;

    fuction add ( c , d ) {

        return this . a + this . b + c + d ;

    }

    var o = { a: 1 ,b: 3 } ;
    console . log ( add . call ( o , 5 , 7 ) ) ;
    console . log ( add . apply ( o , [ 10 , 20 ] ) ) ;

    fucntion f() {

        return this . a ;

    }

    var g = f . bind ( { a : "unicycle" } ) ;
    console . log ( g() ) ;

    var h = g . bind ( { a : " cereal " } ) ;
    console . log ( h() ) ;

    var o = { a:8 , f:f , g:g , h:h } ;
    console . log ( o.f() , o.g() o.h() ) ;


var o = {

    traditionalFunc : fucntion () {

        console . log ( ` tradicionalFunc this ` === o? , this === o ) ;

    }

    arowFunc: () => {

        console . log ( ` arrowFunc this === o ? , this === o ` ) ;
        console . log ( ` arrowFunc this === window? , this === window ` ) ;

    }

} ;

o . traditionalFunc () ;
o . arrowFunc () ;

var o = {

    prop : 37 ,
    f : fucntion () {

        return this . prop ;

    }

} ;
console . log ( o .f () ) ; //logs 37

var o = { prop : 23 } ;

function idependent() {

 return this . prop ;

}

o . f = infependent ;

console . log ( o . f () ) ;


