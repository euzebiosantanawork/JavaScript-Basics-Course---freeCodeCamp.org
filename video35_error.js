// These classes and others can be found at: https://www.youtube.com/watch?v=le-URjBhevE&list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5&index=2&t=0s
// Try, catch, finally

try {

    console . log ( ` Start of try runs ` ) ;
    unicyle ;
    console . log  ( ` End of try runs -- never reached ` ) ;

} catch ( err ) {

    console . log ( ` Error has occured  ` + err.stack ) ;

} finally {

    console . log ( ` This is always run ` ) ;

}

console . log ( ` ...Then the execution continues ` ) ;

let json = `{ " age " : 30 }` ;

try {

    let user = JSON . parse ( json ) ;
    
        if ( ! user . name ) {

            throw new SyntaxError ( ` Incomplete data: no name ` ) 

        }

        console . log ( user . name ) ;

} catch ( e ) {

  console . log ( ` JSON Error:  ` + e ) ;

}

