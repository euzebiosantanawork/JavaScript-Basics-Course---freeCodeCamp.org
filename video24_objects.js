// These classes and others can be found at: https://www.youtube.com/watch?v=le-URjBhevE&list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5&index=2&t=0s
// Objects: Part 2 

//Using Objets for Lookups

var alpha = {

    1 : " Z " ;
    2 : " Y " ;
    3 : " X " ;
    4 : " W " ;
//....

} ;

console . log ( aplha [ 2 ] ) ;

// Remove Object Properties

let dishes = {

    plates : 8,
    cups : 10 ,
    forks : 28 ,
    bowls : 13 ,

}

delete dishes . cups ;
console . log ( dishes ) ;

// Testing Objects for Prperties

console . log ( dishes . hasOwnProperty ( ` plates ` ) ) ;
console . log ( dishes . hasOwnProperty ( ` cups ` ) ) ;

// Accessing and Modifying Nested Objects


var outStorage = {

    ` desk ` : {

        ` drawer ` : " stapler " ;

    } ,

    ` cabinet ` : {

        ' tap drawer ' : {

            ' folder1 ' : ` a file `,
            ` folder2 ` : ` secrets ` ,

        } ,
        
        ` bottom drawer `: ` soda `

    }

} ;

console . log ( ourStorage . cabinet [ ` top drawer ` ] . folder2 ) ;
console . log ( ourSotrage . desk . drawer ) ;
ourStage . cabinet [ ` top drawer ` ] . folder2 = " cake recipe " ;
console . log ( ourSotorage . cabinet [ ` top drawer ` ] . folder2 ) ;

// Generate an Array of al Object Keys

console . log ( Object . keys ( ourStorage ) ) ;





