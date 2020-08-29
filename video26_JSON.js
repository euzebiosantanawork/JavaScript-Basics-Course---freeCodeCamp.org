// These classes and others can be found at: https://www.youtube.com/watch?v=le-URjBhevE&list=PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5&index=2&t=0s
//JS Nuggets: JSON

//example
var myJSON = {

    " name " : {

        " firs " : " Beau " ,
        " last " : " Carnes "

    } ,

    " age " : 33
    " skills " : [ " juggling " , " stillwalking " , " coding " ],
    " married " : true ,
    " superpoowers " : null

}

//stringify method

    var stringfied = JSON . stringify ( myJSON ) ;
    console . log ( stringifield ) ;

//parse method

var stringJSON = ` { " name " : "Beau" , " kids " : 2 , " state " : " Michigan " } ` ;
var myParse = JSON.parse ( stringJSON ) ;
console . log ( myParse ) ;