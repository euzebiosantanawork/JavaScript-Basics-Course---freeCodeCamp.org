// These classes and others can be found at: https://www.youtube.com/watch?v=le-URjBhevE&list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5&index=2&t=0s
//JS Nuggets: check if a property is in an object

var myObject = {

    nome: ` JS Nuggets `

} ;

if ( myObject . name ) {

    console . log ( ` it is in! ` )

}

console . log ( myObject . hasOwnPorperty ( ` name ` ) ) ;
console . log ( ` name ` in myObject ) ;

console . log ( myObject . haOwnProperty ( ` valueOf ` ) ) ;
console . log ( ` valueOf ` in MyObject ) ;