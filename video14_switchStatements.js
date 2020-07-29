// These classes and others can be found at: https://www.youtube.com/watch?v=le-URjBhevE&list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5&index=2&t=0s
// JS Nuggets : Switch Statements

let day ;
switch ( new Date().getDay() ){

    case 0 :
         day = ` Sunday ` ;
        break ;
    case 1 :
        day = ` Monday ` ;
        break ;
    case 2 :
        day = ` Tuesday ` ;
        break ;
    case 3 :
        day = ` Wednesday ` ;
        break ;
    case 4 :
        day = ` Thursday ` ;
        break ;
    case 5 :
        day = ` Friday ` ;
        break ;
    case 6:
        day = ` Saturday `;

}

console . log ( day ) ;

var Animal = ` Giraffe ` ;
switch ( Animal ) {

    case ` Cow `:
    case ` Giraffe  ` :
    case ` Dog ` :
    case ` Pig ` :
    console.log ( ` This animal will go on Noah\`s Ark. ` ) ;
    Break ;
    case ' Spoon ' :
    console.log ( ` A spoon is not an animal!  ` ) ;
    break ;
    case ` Dinosaur ` :
    default:
        console . log ( ` This animall will not be on the Ark ` ) ;

}