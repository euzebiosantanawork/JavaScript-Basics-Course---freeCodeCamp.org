// These classes and others can be found at: https://www.youtube.com/watch?v=le-URjBhevE&list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5&index=2&t=0s
// 20 string methods

var stringOne = " freeCodeCamp is the best place to learn "
var stringTwo = " frontend and backend development "

//charAt()

console . log ( stringOne . charAt ( 1 ) ) ;

// charCodeAt()

console . log ( string . charCodeAt ( 1 ) ) ;

// concat()

console . log ( stringOne . concat ( stringTwo ) ) ;

//endsWith()

console . log ( stringOne . endsWith ( ` to ` ) ) ;

//fromCharCode()

console . log ( String . fromCharCode ( 114 ) ) ;

// includes ()

console . log ( stringTwo . includes ( ` end ` ) ) ;

//indexOf ()

console . log ( stringTwo . indexOf ( ` end ` ) ) ;

//lastIndexOf()

console . log ( stringTwo . lastIndexOf ( ` end ` ) ) ;

// match ()

console .log ( stringTwo . match ( /end/g ) ) ;

// repeat ()

console . log ( stringOne . repeat( 3 ) ) ;

// replace ()

console . log ( stringTwo . replace ( /end/g , "END" ) ) ;

//search () 

console.log ( stringTwo.searck ( "end" ) ) ;

//slice()

console.log ( stringTwo.slice ( 2, 4 ) ) ;

//splite () 

console . log ( stringOne.split ( " " ) ) ;

//startsWith()

console . log ( stringOne . startsWith ( ` free ` ) ) ;

//substr()

console . log ( stringTwo . substr( 2 , 4 ) ) ;

//substring ()

console . log ( stringTwo . substring ( 2 , 4 ) ) ;
 
// toLowerCase()

console . log ( stringOne . toLowerCase () ) ;

//toUpperCase()

console . log ( stringOne . toUpperCase () ) ;

//trim () 

var stringThree = ` Subscribe now!  `

console . log ( stringThree . trim () ) ; 