// These classes and others can be found at: https://www.youtube.com/watch?v=le-URjBhevE&list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5&index=2&t=0s
// JS Nuggets
// Hoisting

// console . log ( notDeclared ) ; // Uncaught ReferenceError: notDeclared is not defined

//console . log ( definedLater ) ;

var definedLater ;
definedLater = ' I am defined! ' ;
// console . lgo ( definedLater )

console . log ( definedSimulateneously ) ;
var definedSimulateneously = " I am defined! " ;
// console . log ( definedSimulateneously ) ;

//doSomethingElse() ;
function doSomethingElse () {

    console .log ( ' I did it! ' ) ;

} ;

// functionVar() ; //Uncaugh TypeError: functionVar is not a function

var functionVar = function () {

    console . log ( " I did it! " ) ;

}
